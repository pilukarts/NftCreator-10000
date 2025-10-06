import React, { useState, useRef } from "react";
import { UploadArea } from "./components/UploadArea";
import { PreviewCanvas } from "./components/PreviewCanvas";
import { ExportButton } from "./components/ExportButton";

function readFiles(files: FileList): Promise<string[]> {
  const promises: Promise<string>[] = [];
  for (let i = 0; i < files.length; i++) {
    promises.push(
      new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = e => resolve(e.target?.result as string);
        reader.onerror = reject;
        reader.readAsDataURL(files[i]);
      })
    );
  }
  return Promise.all(promises);
}

const App: React.FC = () => {
  const [mainImages, setMainImages] = useState<string[]>([]);
  const [backgrounds, setBackgrounds] = useState<string[]>([]);
  const [selectedMain, setSelectedMain] = useState<string | undefined>();
  const [selectedBg, setSelectedBg] = useState<string | undefined>();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  return (
    <div style={{ maxWidth: 600, margin: "2rem auto", textAlign: "center" }}>
      <h1>NftCreator-10000</h1>
      <UploadArea
        label="Upload Main Designs"
        onFilesSelected={async files => {
          const imgs = await readFiles(files);
          setMainImages(imgs);
          setSelectedMain(imgs[0]);
        }}
        accept="image/png,image/jpeg"
      />
      {mainImages.length > 0 && (
        <div>
          <span>Main Designs: </span>
          {mainImages.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`main-${idx}`}
              onClick={() => setSelectedMain(img)}
              style={{
                width: 40,
                height: 40,
                margin: 4,
                border: selectedMain === img ? "2px solid blue" : "1px solid #888",
                cursor: "pointer",
              }}
            />
          ))}
        </div>
      )}

      <UploadArea
        label="Upload Backgrounds"
        onFilesSelected={async files => {
          const imgs = await readFiles(files);
          setBackgrounds(imgs);
          setSelectedBg(imgs[0]);
        }}
        accept="image/png,image/jpeg"
      />
      {backgrounds.length > 0 && (
        <div>
          <span>Backgrounds: </span>
          {backgrounds.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`bg-${idx}`}
              onClick={() => setSelectedBg(img)}
              style={{
                width: 40,
                height: 40,
                margin: 4,
                border: selectedBg === img ? "2px solid green" : "1px solid #888",
                cursor: "pointer",
              }}
            />
          ))}
        </div>
      )}

      <div style={{ marginTop: "2rem" }}>
        <PreviewCanvas
          mainImage={selectedMain}
          background={selectedBg}
          width={400}
          height={400}
        />
      </div>

      <ExportButton
        getCanvas={() => {
          // Find the PreviewCanvas instance and return its canvas ref
          return document.querySelector("canvas");
        }}
        fileName="nft.png"
      />
    </div>
  );
};

export default App;
