import { Upload } from "lucide-react";

export function UploadButton() {
  const handleUpload = () => {
    // Mock upload functionality
    alert("Upload functionality would be implemented here");
  };

  return (
    <button
      onClick={handleUpload}
      className="flex items-center rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
    >
      <Upload className="me-2" size={18} role="presentation" />
      Upload
    </button>
  );
}
