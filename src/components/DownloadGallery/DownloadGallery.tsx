import { CloudinaryContext, Image } from 'cloudinary-react'
import React, { useState } from 'react'
import { galleryByDate } from '@/data/galleryByDate'

const Gallery = ({ selectedDate }) => {
  const [fullscreenImage, setFullscreenImage] = useState(null)

  // Se não houver imagens pra data, usa um fallback
  const images = galleryByDate[selectedDate] || []

  const handleFullscreen = (image) => {
    setFullscreenImage(image)
  }

  const handleDownload = (image) => {
    const url = `https://res.cloudinary.com/dms5ua8nm/image/upload/fl_attachment/${image}`
    const link = document.createElement('a')
    link.href = url
    link.setAttribute('download', image.split('/').pop()) // Garante o nome do arquivo
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <CloudinaryContext cloudName="dstywrq5n">
      <h3 className="text-lg font-bold mb-4 text-center">
        Fotos do dia: {selectedDate}
      </h3>
      {images.length === 0 ? (
        <p className="text-center text-gray-500">Nenhuma imagem disponível para esta data.</p>
      ) : (
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg shadow-md">
              <Image
                publicId={image}
                width="300"
                crop="scale"
                className="w-full h-auto object-cover transform hover:scale-110 transition duration-300 ease-in-out cursor-pointer"
                onClick={() => handleFullscreen(image)}
              />
              <button
                onClick={() => handleDownload(image)}
                className="absolute bottom-2 right-2 bg-red-600 text-yellow-300 p-1 rounded hover:bg-red-300 transition"
              >
                Download
              </button>
            </div>
          ))}
        </div>
      )}

      {fullscreenImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setFullscreenImage(null)}
        >
          <div className="relative">
            <Image
              publicId={fullscreenImage}
              className="max-w-full max-h-screen"
              crop="scale"
            />
            <button
              onClick={() => setFullscreenImage(null)}
              className="absolute top-2 right-2 bg-white text-black p-1 rounded"
            >
              X
            </button>
          </div>
        </div>
      )}
    </CloudinaryContext>
  )
}

export default Gallery
