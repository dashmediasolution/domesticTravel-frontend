 import cloudinary from "./cloudinary";

interface UploadImageOptions {
    file: File;
    folder: string;
    publicId?: string;
}

interface UploadBufferOptions {
    buffer: Buffer;
    folder: string;
    publicId?: string;
}

export async function uploadImageToCloudinary({
    file,
    folder,
    publicId,
}: UploadImageOptions) {
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    return uploadBufferToCloudinary({
        buffer,
        folder,
        publicId,
    });
}

export async function uploadBufferToCloudinary({
    buffer,
    folder,
    publicId,
}: UploadBufferOptions) {
    const result = await new Promise<any>(
        (resolve, reject) => {
            const uploadStream =
                cloudinary.uploader.upload_stream(
                    {
                        folder,
                        public_id: publicId,
                        resource_type: "image",
                        overwrite: false,
                        unique_filename: true,
                        use_filename: false,
                    },
                    (error, result) => {
                        if (error) {
                            reject(error);
                            return;
                        }

                        if (!result) {
                            reject(
                                new Error(
                                    "Cloudinary upload failed"
                                )
                            );
                            return;
                        }

                        resolve(result);
                    }
                );

            uploadStream.end(buffer);
        }
    );

    return {
        url: result.secure_url,
        publicId: result.public_id,
        width: result.width,
        height: result.height,
        format: result.format,
        bytes: result.bytes,
    };
}

export async function deleteFromCloudinary(
    publicId: string
) {
    if (!publicId) {
        return;
    }

    const result =
        await cloudinary.uploader.destroy(
            publicId,
            {
                resource_type: "image",
                invalidate: true,
            }
        );

    return result;
}
 