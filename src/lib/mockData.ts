export interface File {
  id: string;
  name: string;
  type: "file" | "folder";
  url?: string;
  parent: string | null;
  size?: string;
  modifiedDate?: string;
}

export const mockFiles: File[] = [
  { id: "1", name: "Documents", type: "folder", parent: null },
  { id: "2", name: "Images", type: "folder", parent: null },
  { id: "3", name: "Work", type: "folder", parent: null },
  {
    id: "4",
    name: "resume.pdf",
    type: "file",
    url: "/files/resume.pdf",
    parent: "1",
    size: "2.1 MB",
    modifiedDate: "2023-05-15",
  },
  {
    id: "5",
    name: "profile.jpg",
    type: "file",
    url: "/files/profile.jpg",
    parent: "2",
    size: "3.4 MB",
    modifiedDate: "2023-05-10",
  },
  {
    id: "6",
    name: "project_plan.docx",
    type: "file",
    url: "/files/project_plan.docx",
    parent: "3",
    size: "1.8 MB",
    modifiedDate: "2023-05-20",
  },
  { id: "7", name: "Personal", type: "folder", parent: "1" },
  {
    id: "8",
    name: "notes.txt",
    type: "file",
    url: "/files/notes.txt",
    parent: "7",
    size: "0.1 MB",
    modifiedDate: "2023-05-18",
  },
  { id: "9", name: "Vacation", type: "folder", parent: "2" },
  {
    id: "10",
    name: "beach.jpg",
    type: "file",
    url: "/files/beach.jpg",
    parent: "9",
    size: "5.2 MB",
    modifiedDate: "2023-05-22",
  },
];

export function getFileById(id: string): File | undefined {
  return mockFiles.find((file) => file.id === id);
}

export function getBreadcrumbs(fileId: string | null): File[] {
  const breadcrumbs: File[] = [];
  let currentFile = getFileById(fileId ?? "");

  while (currentFile) {
    breadcrumbs.unshift(currentFile);
    currentFile = getFileById(currentFile.parent ?? "");
  }

  return breadcrumbs;
}
