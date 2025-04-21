import React, { useState, ChangeEvent } from 'react';
import { processImageWithWatermark }  from '@/utils/convert';

const watermark1 = 'https://res.cloudinary.com/dms5ua8nm/image/upload/v123/Marca_VP_2025_3D_1_ktk22v.png';
const watermark2 = 'https://res.cloudinary.com/dms5ua8nm/image/upload/v123/NIB_Grande_Circular_1_rotkd8.png';

const uploadUrl = 'https://api.cloudinary.com/v1_1/dms5ua8nm/image/upload/';
const userUpload = 'ml_default';
const folder = 'Gallerydownload/16'

interface UploadedFile {
  name: string;
  url?: string;
  status: 'pending' | 'comprimindo' | "add marca-d'agua" | 'uploading' | 'uploaded' | 'error';
}

const UploadedFotos: React.FC = () => {
  const [files, setFiles] = useState<UploadedFile[]>([]);

  const handleUpload = async () => {
    const updatedFiles = [...files];

    for (const element of updatedFiles) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const fileItem = element as any;
      element.status = "add marca-d'agua";
      setFiles([...updatedFiles]);

      try {
        const processedBlob = await processImageWithWatermark(fileItem.file, watermark1, watermark2);
        const processedFile = new File([processedBlob], fileItem.name, { type: 'image/jpeg' });

        const formData = new FormData();
        formData.append('file', processedFile);
        formData.append('upload_preset', userUpload);
        formData.append('folder', folder);

        element.status = 'uploading';
        setFiles([...updatedFiles]);

        const res = await fetch(uploadUrl, {
          method: 'POST',
          body: formData,
        });

        const result = await res.json();
        console.log(result)


        if (res.ok) {
          const result = await res.json();
          element.status = 'uploaded';
          element.url = result.secure_url || '';
        } else {
          element.status = 'error';
        }
      } catch (error) {
        element.status = 'error';
      }

      setFiles([...updatedFiles]);
    }
  };


  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const selectedFiles = Array.from(e.target.files).map(file => ({
      name: file.name,
      file,
      status: 'pending' as const
    }));

    setFiles(selectedFiles);
  };

  return (
    <div className="max-w-md mx-auto p-6 shadow-lg rounded-xl border mt-10">
      <h2 className="text-xl font-bold mb-4 text-center">Upload de Imagens</h2>

      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleFileChange}
        className="mb-4 block w-full"
      />

      <button
        onClick={handleUpload}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition w-full"
      >
        Enviar todas
      </button>

      <ul className="mt-6 space-y-4">
        {files.map((file, index) => (
          <li key={index} className="flex items-center justify-between border p-2 rounded">
            <div>
              <p className="font-medium">{file.name}</p>
              <p className="text-sm text-gray-500">{file.status}</p>
            </div>
            {file.url && (
              <img
                src={file.url}
                alt={file.name}
                className="w-12 h-12 object-cover rounded"
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UploadedFotos;
