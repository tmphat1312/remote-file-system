import { ChevronRight, Home } from "lucide-react";
import type { File } from "../lib/mockData";

type BreadcrumbProps = {
  items: File[];
  onFolderClick: (folderId: string | null) => void;
};

export function Breadcrumb({ items, onFolderClick }: BreadcrumbProps) {
  return (
    <nav className="mb-4 flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <button
            onClick={() => onFolderClick(null)}
            className="inline-flex items-center text-sm font-medium text-gray-400 hover:text-gray-200"
          >
            <Home className="mr-2 h-4 w-4" />
            My Drive
          </button>
        </li>
        {items.map((item) => (
          <li key={item.id}>
            <div className="flex items-center">
              <ChevronRight className="h-6 w-6 text-gray-400" />
              <button
                onClick={() => onFolderClick(item.id)}
                className="ml-1 text-sm font-medium text-gray-400 hover:text-gray-200 md:ml-2"
              >
                {item.name}
              </button>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
}
