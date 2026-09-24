import cloudinary from "./cloudinary";

interface UploadImageOptions {
    file: File;
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