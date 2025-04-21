export async function processImageWithWatermark(originalFile: File, watermark1Url: string, watermark2Url: string): Promise<Blob> {
  const imageBitmap = await createImageBitmap(originalFile);
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error("Não foi possível obter o contexto do canvas.");

  canvas.width = 1620;
  canvas.height = 1080;

  const watermarkWidth = 405;
  const watermarkHeight = 252;

  // Redimensiona imagem original
  ctx.drawImage(imageBitmap, 0, 0, canvas.width, canvas.height);

  // Carrega e redimensiona marcas d'água
  const [wm1, wm2] = await Promise.all([
    loadImage(watermark1Url),
    loadImage(watermark2Url),
  ]);

  const wm1Final = (wm1.width !== watermarkWidth || wm1.height !== watermarkHeight)
    ? resizeWatermark(wm1, watermarkWidth, watermarkHeight)
    : wm1;

  const wm2Final = (wm2.width !== watermarkWidth || wm2.height !== watermarkHeight)
    ? resizeWatermark(wm2, watermarkWidth, watermarkHeight)
    : wm2;

  // Marca 1 – canto inferior esquerdo
  ctx.drawImage(wm1Final, 50, canvas.height - watermarkHeight - 10);

  // Marca 2 – canto inferior direito
  ctx.drawImage(wm2Final, canvas.width - watermarkWidth - 50, canvas.height - watermarkHeight - 10);

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

function resizeWatermark(img: HTMLImageElement, maxWidth: number, maxHeight: number): HTMLCanvasElement {
  const canvas = document.createElement('canvas');
  canvas.width = maxWidth;
  canvas.height = maxHeight;

  const ctx = canvas.getContext('2d')!;
  ctx.drawImage(img, 0, 0, maxWidth, maxHeight);

  return canvas;
}
