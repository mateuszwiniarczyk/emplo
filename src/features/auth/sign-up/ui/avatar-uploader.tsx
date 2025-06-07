'use client';

import { useState } from 'react';

import UploadIcon from '~/upload.svg';

export const AvatarUploader = () => {
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };

  return (
    <div className="flex w-full items-center justify-center">
      <label
        htmlFor="avatar"
        className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600 dark:hover:bg-gray-800"
      >
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <UploadIcon className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400" />
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="font-semibold">Click to upload</span> or drag and
            drop
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            SVG, PNG, JPG
          </p>

          {fileName && (
            <p className="mt-4 text-sm font-medium text-gray-700 dark:text-gray-300">
              Selected file: <span className="italic">{fileName}</span>
            </p>
          )}
        </div>
        <input
          id="avatar"
          name="avatar"
          accept=".svg,.png,.jpg,.jpeg"
          type="file"
          className="hidden"
          onChange={handleFileChange}
        />
      </label>
    </div>
  );
};
