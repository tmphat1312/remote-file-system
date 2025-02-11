import Link from "next/link"
import { Folder } from "lucide-react"
import type { File } from "../lib/mockData"

interface SidebarProps {
  files: File[]
}

export function Sidebar({ files }: SidebarProps) {
  const rootFolders = files.filter((file) => file.type === "folder" && file.parent === null)

  return (
    <div className="w-64 h-full bg-gray-100 p-4">
      <h2 className="text-lg font-semibold mb-4">My Drive</h2>
      <ul>
        {rootFolders.map((folder) => (
          <li key={folder.id} className="mb-2">
            <Link href={`/folder/${folder.id}`} className="flex items-center text-gray-700 hover:text-gray-900">
              <Folder className="mr-2" size={18} />
              {folder.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

