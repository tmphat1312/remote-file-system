"use client"

import { useState } from "react"
import { FileList } from "../components/FileList"
import { UploadButton } from "../components/UploadButton"
import { Breadcrumb } from "../components/Breadcrumb"
import { mockFiles, getBreadcrumbs } from "../lib/mockData"

export default function Home() {
  const [currentFolder, setCurrentFolder] = useState<string | null>(null)

  const handleFolderClick = (folderId: string | null) => {
    setCurrentFolder(folderId)
  }

  const breadcrumbs = getBreadcrumbs(currentFolder)

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">Google Drive Clone</h1>
          <UploadButton />
        </div>
        <Breadcrumb items={breadcrumbs} onFolderClick={handleFolderClick} />
        <FileList files={mockFiles} currentFolder={currentFolder} onFolderClick={handleFolderClick} />
      </div>
    </div>
  )
}

