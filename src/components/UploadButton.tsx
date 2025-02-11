import { Upload } from "lucide-react"

export function UploadButton() {
  const handleUpload = () => {
    // Mock upload functionality
    alert("Upload functionality would be implemented here")
  }

  return (
    <button
      onClick={handleUpload}
      className="flex items-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
    >
      <Upload className="mr-2" size={18} />
      Upload
    </button>
  )
}

