import { File, Folder } from "lucide-react";
import type { File as FileType } from "../lib/mockData";

type FileItemProps = {
  file: FileType;
  onFolderClick: (folderId: string) => void;
};

export function FileItem({ file, onFolderClick }: FileItemProps) {
  const Icon = file.type === "folder" ? Folder : File;

  const handleClick = () => {
    if (file.type === "folder") {
      onFolderClick(file.id);
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`flex cursor-pointer items-center rounded p-2 hover:bg-gray-700 ${file.type === "folder" ? "text-blue-400" : "text-gray-300"}`}
    >
      <Icon className="mr-2" size={18} />
      <span className="grow">{file.name}</span>
      {file.type === "file" && (
        <>
          <span className="mr-4 text-sm text-gray-500">{file.size}</span>
          <span className="text-sm text-gray-500">{file.modifiedDate}</span>
        </>
      )}
    </div>
  );
}
