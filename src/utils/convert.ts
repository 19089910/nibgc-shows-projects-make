// util/compressAndAddWatermark.ts
export async function processImageWithWatermark(originalFile: File, watermark1Url: string, watermark2Url: string): Promise<Blob> {
  const imageBitmap = await createImageBitmap(originalFile);
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  canvas.width = 1920;
  canvas.height = 1080;

  // Redimensiona imagem original
  ctx.drawImage(imageBitmap, 0, 0, canvas.width, canvas.height);

  // Carrega as marcas d'água
  const [wm1, wm2] = await Promise.all([
    loadImage(watermark1Url),
    loadImage(watermark2Url),
  ]);

  // Marca 1 – canto inferior esquerdo
  ctx.drawImage(wm1, 50, canvas.height - wm1.height - 10);

  // Marca 2 – canto inferior direito
  ctx.drawImage(wm2, canvas.width - wm2.width - 50, canvas.height - wm2.height - 10);

  // Exporta como JPEG
  return await new Promise((resolve) => {
    canvas.toBlob(blob => {
      if (blob) resolve(blob);
    }, 'image/jpeg', 0.7);
  });
}

function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}
  