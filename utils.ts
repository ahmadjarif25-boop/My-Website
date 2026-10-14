import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function compressImage(file: File, options: { maxWidth: number; quality: number }): Promise<File> {
  return new Promise((resolve, reject) => {
    const img = document.createElement('img');
    const reader = new FileReader();

    reader.onload = (e) => {
      if (!e.target || typeof e.target.result !== 'string') {
        const error = new Error('FileReader failed to read the file.');
        console.error(error);
        return reject(error);
      }
      img.src = e.target.result;
    };
    reader.onerror = (errorEvent) => {
        console.error("FileReader error:", errorEvent);
        reject(new Error('Failed to read the file.'));
    };

    img.onload = () => {
      const canvas = document.createElement('canvas');
      let { width, height } = img;

      // Resize logic
      if (width > options.maxWidth) {
        height = (options.maxWidth / width) * height;
        width = options.maxWidth;
      }

      canvas.width = width;
      canvas.height = height;

      const ctx = canvas.getContext('2d');
      if (!ctx) {
        const error = new Error('Could not get canvas context. This may happen in a non-browser environment.');
        console.error(error);
        return reject(error);
      }
      ctx.drawImage(img, 0, 0, width, height);

      // Get the compressed file blob
      canvas.toBlob(
        (blob) => {
          if (!blob) {
            const error = new Error('Canvas toBlob operation failed. The browser might not support the image format.');
            console.error(error);
            return reject(error);
          }
          // Create a new File object from the blob
          const compressedFile = new File([blob], file.name, {
            type: file.type, // Use original file type
            lastModified: Date.now(),
          });
          resolve(compressedFile);
        },
        file.type,
        options.quality
      );
    };
    img.onerror = (errorEvent) => {
        console.error("Image loading error:", errorEvent);
        reject(new Error("The selected file could not be loaded as an image. It may be corrupt or in an unsupported format."));
    };

    reader.readAsDataURL(file);
  });
}
