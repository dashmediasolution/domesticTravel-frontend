const ALLOWED_IMAGE_TYPES = [
    "image/jpeg",
    "image/png",
    "image/webp",
];

const MAX_IMAGE_SIZE = 5 * 1024 * 1024;

export function validateImage(file: File) {
    if (!file || file.size === 0) {
        throw new Error("Image is required");
    }

    if (!ALLOWED_IMAGE_TYPES.includes(file.type)) {
        throw new Error(
            "Only JPG, PNG and WebP images are allowed"
        );
    }

    if (file.size > MAX_IMAGE_SIZE) {
        throw new Error(
            "Image must be less than 5MB"
        );
    }
}