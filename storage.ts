'use client';

import { ref, uploadBytesResumable, getDownloadURL, UploadTaskSnapshot, FirebaseStorage } from 'firebase/storage';

/**
 * Uploads a file to Firebase Storage and returns its public URL, with optional progress reporting.
 * @param storage The FirebaseStorage instance.
 * @param file The file to upload.
 * @param path The path in Firebase Storage where the file should be saved.
 * @param onProgress An optional callback function that receives the upload progress percentage.
 * @returns A promise that resolves with the public URL of the uploaded file.
 */
export function uploadFileAndGetURL(
  storage: FirebaseStorage,
  file: File,
  path: string,
  onProgress?: (progress: number) => void
): Promise<string> {
  return new Promise((resolve, reject) => {
    const storageRef = ref(storage, path);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      'state_changed',
      (snapshot: UploadTaskSnapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        if (onProgress) {
          onProgress(progress);
        }
      },
      (error) => {
        console.error("Upload failed:", error);
        reject(new Error('Could not upload file.'));
      },
      async () => {
        try {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          resolve(downloadURL);
        } catch (error) {
          reject(new Error('Could not get download URL.'));
        }
      }
    );
  });
}
