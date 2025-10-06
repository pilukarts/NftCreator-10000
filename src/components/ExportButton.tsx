import React from "react";

type ExportButtonProps = {
  getCanvas: () => HTMLCanvasElement | null;
  fileName?: string;
};

export const ExportButton: React.FC<ExportButtonProps> = ({ getCanvas, fileName = "nft.png" }) => {
  const downloadImage = () => {
    const canvas = getCanvas();
    if (canvas) {
      const link = document.createElement("a");
      link.download = fileName;
      link.href = canvas.toDataURL("image/png");
      link.click();
    }
  };

  return (
    <button type="button" onClick={downloadImage} style={{ marginTop: "1rem" }}>
      Download NFT Image
    </button>
  );
};
