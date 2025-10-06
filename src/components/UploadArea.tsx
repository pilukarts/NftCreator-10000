import React, { useRef } from "react";

type UploadAreaProps = {
  label: string;
  onFilesSelected: (files: FileList) => void;
  accept?: string;
};

export const UploadArea: React.FC<UploadAreaProps> = ({ label, onFilesSelected, accept }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      onFilesSelected(e.target.files);
    }
  };

  return (
    <div style={{ margin: "1rem 0" }}>
      <button type="button" onClick={handleClick}>
        {label}
      </button>
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        multiple
        style={{ display: "none" }}
        onChange={handleChange}
      />
    </div>
  );
};
