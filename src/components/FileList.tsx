import type { File } from "../lib/mockData";
import { FileItem } from "./FileItem";

interface FileListProps {
  files: File[];
  currentFolder: string | null;
  onFolderClick: (folderId: string) => void;
}

export function FileList({
  files,
  currentFolder,
  onFolderClick,
}: FileListProps) {
  const currentFiles = files.filter((file) => file.parent === currentFolder);

  return (
    <div className="space-y-1">
      {currentFiles.map((file) => (
        <FileItem key={file.id} file={file} onFolderClick={onFolderClick} />
      ))}
    </div>
  );
}
