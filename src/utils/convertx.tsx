import React, { useState, ChangeEvent } from 'react';

const UploadToCloudinary: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const uploadUrl = "https://upload-request.cloudinary.com/dms5ua8nm/5472c7eb3daaf8cc5390de0a0ab7cb1b";

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      alert('Selecione um arquivo primeiro!');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch(uploadUrl, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Upload feito com sucesso!', result);
        alert('Arquivo enviado com sucesso!');
      } else {
        const errorText = await response.text();
        console.error('Erro ao fazer upload:', errorText);
        alert('Erro ao enviar o arquivo.');
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
      alert('Erro inesperado.');
    }
  };

  return (
    <div className="p-4 border rounded-xl shadow-md w-fit mx-auto mt-8">
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="mb-4"
      />
      <button
        onClick={handleUpload}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Enviar para Cloudinary
      </button>
    </div>
  );
};

export default UploadToCloudinary;
