import React, { useEffect, useRef } from "react";

type PreviewCanvasProps = {
  mainImage: string | undefined;
  background: string | undefined;
  width?: number;
  height?: number;
};

export const PreviewCanvas: React.FC<PreviewCanvasProps> = ({
  mainImage,
  background,
  width = 400,
  height = 400,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, width, height);

    // Draw background first
    if (background) {
      const bgImg = new window.Image();
      bgImg.src = background;
      bgImg.onload = () => {
        ctx.drawImage(bgImg, 0, 0, width, height);

        // Draw mainImage on top
        if (mainImage) {
          const mainImg = new window.Image();
          mainImg.src = mainImage;
          mainImg.onload = () => {
            ctx.drawImage(mainImg, 0, 0, width, height);
          };
        }
      };
    } else if (mainImage) {
      const mainImg = new window.Image();
      mainImg.src = mainImage;
      mainImg.onload = () => {
        ctx.drawImage(mainImg, 0, 0, width, height);
      };
    }
  }, [mainImage, background, width, height]);

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      style={{ border: "1px solid #ccc", background: "#fff" }}
    />
  );
};
