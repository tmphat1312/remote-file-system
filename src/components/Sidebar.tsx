import Link from "next/link";
import { Folder } from "lucide-react";
import type { File } from "../lib/mockData";

type SidebarProps = {
  files: File[];
};

export function Sidebar({ files }: SidebarProps) {
  const rootFolders = files.filter(
    (file) => file.type === "folder" && file.parent === null,
  );

  return (
    <div className="h-full w-64 bg-gray-100 p-4">
      <h2 className="mb-4 text-lg font-semibold">My Drive</h2>
      <ul>
        {rootFolders.map((folder) => (
          <li key={folder.id} className="mb-2">
            <Link
              href={`/folder/${folder.id}`}
              className="flex items-center text-gray-700 hover:text-gray-900"
            >
              <Folder className="me-2" size={18} role="presentation" />
              {folder.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
