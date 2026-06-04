import React, { useState, useCallback, useRef } from 'react';
// Import the custom hook (adjust the path to match your project structure)
import { useUpload } from './service/useUpload'; 

// --- Types ---
interface FileWithPreview extends File {
  preview: string;
}

interface Section {
  id: string;
  name: string;
}

// Pre-defined sections for your website
const WEBSITE_SECTIONS: Section[] = [
  { id: 'hero_banner', name: 'Hero Banner' },
  { id: 'project_gallery', name: 'Project Gallery' },
  { id: 'about_us', name: 'About Us' },
  { id: 'testimonials', name: 'Testimonials' },
];

export default function AdminImageUploader() {
  const [activeSection, setActiveSection] = useState<string>(WEBSITE_SECTIONS[0].id);
  const [stagedFiles, setStagedFiles] = useState<FileWithPreview[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [uploadedIndex, setUploadedIndex] = useState(0); // Tracks batch progress
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  // Initialize our unified storage hook
  const { upload, isUploading, progress, error } = useUpload();

  // --- Handlers ---
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      processFiles(Array.from(e.target.files));
    }
  };

  const processFiles = (files: File[]) => {
    const newFiles = files.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
      })
    );
    setStagedFiles((prev) => [...prev, ...newFiles]);
  };

  const removeFile = (nameToRemove: string) => {
    setStagedFiles((prev) => prev.filter((file) => file.name !== nameToRemove));
  };

  const handleUploadSubmit = async () => {
    if (stagedFiles.length === 0) return;

    setUploadedIndex(0);

    // Upload sequentially to utilize the hook's progress tracking accurately
    for (let i = 0; i < stagedFiles.length; i++) {
      setUploadedIndex(i);
      const file = stagedFiles[i];
      
      // Pass activeSection as the folder name parameter to Cloudinary
      const result = await upload(file, `ngo/${activeSection}`);
      
      if (!result) {
        // Stop the batch if a critical error occurs, or change to `continue` to skip
        alert(`Upload interrupted on file: ${file.name}`);
        return; 
      }
    }

    // Cleanup previews to avoid memory leaks
    stagedFiles.forEach((file) => URL.revokeObjectURL(file.preview));
    setStagedFiles([]);
    setUploadedIndex(0);
    alert(`Successfully uploaded ${stagedFiles.length} files to the ${activeSection} section.`);
  };

  // --- Drag & Drop ---
  const onDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    if (!isUploading) setIsDragging(true);
  }, [isUploading]);

  const onDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const onDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (!isUploading && e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      processFiles(Array.from(e.dataTransfer.files));
    }
  }, [isUploading]);

  return (
    <div className="min-h-screen bg-gray-50 p-8 flex justify-center items-start font-sans">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        
        {/* Header */}
        <div className="border-b border-gray-200 bg-gray-50 px-6 py-5">
          <h2 className="text-xl font-semibold text-gray-800">Website Image Manager</h2>
          <p className="text-sm text-gray-500 mt-1">Upload and organize images by target section.</p>
        </div>

        <div className="flex flex-col md:flex-row h-full">
          {/* Sidebar: Section Selection */}
          <div className="w-full md:w-64 bg-gray-50/50 border-r border-gray-200 p-6 flex-shrink-0">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Target Section</h3>
            <div className="space-y-2">
              {WEBSITE_SECTIONS.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  disabled={isUploading}
                  className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
                    activeSection === section.id
                      ? 'bg-blue-50 text-blue-700 border border-blue-200'
                      : 'text-gray-600 hover:bg-gray-100 border border-transparent'
                  }`}
                >
                  {section.name}
                </button>
              ))}
            </div>
          </div>

          {/* Main Content: Uploader */}
          <div className="flex-1 p-6 lg:p-8">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-medium text-gray-800">
                Uploading to:{' '}
                <span className="text-blue-600 font-semibold">
                  {WEBSITE_SECTIONS.find((s) => s.id === activeSection)?.name}
                </span>
              </h3>
            </div>

            {/* Dropzone */}
            <div
              onDragOver={onDragOver}
              onDragLeave={onDragLeave}
              onDrop={onDrop}
              onClick={() => !isUploading && fileInputRef.current?.click()}
              className={`border-2 border-dashed rounded-xl p-10 flex flex-col items-center justify-center transition-all ${
                isUploading ? 'opacity-50 cursor-not-allowed border-gray-300 bg-gray-50' : 'cursor-pointer'
              } ${
                isDragging
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-300 bg-gray-50 hover:bg-gray-100'
              }`}
            >
              <input
                type="file"
                multiple
                accept="image/*"
                className="hidden"
                ref={fileInputRef}
                onChange={handleFileChange}
                disabled={isUploading}
              />
              <svg className="w-10 h-10 text-gray-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
              <p className="text-sm font-medium text-gray-700">Click to upload or drag and drop</p>
              <p className="text-xs text-gray-500 mt-1">SVG, PNG, JPG or WEBP</p>
            </div>

            {/* Previews */}
            {stagedFiles.length > 0 && (
              <div className="mt-8">
                <h4 className="text-sm font-medium text-gray-700 mb-4 flex items-center justify-between">
                  Staged Files ({stagedFiles.length})
                  {!isUploading && (
                    <button 
                      onClick={() => setStagedFiles([])}
                      className="text-xs text-red-500 hover:text-red-700 font-medium transition-colors"
                    >
                      Clear All
                    </button>
                  )}
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {stagedFiles.map((file, index) => {
                    const isCurrentlyUploading = isUploading && index === uploadedIndex;
                    const isPending = isUploading && index > uploadedIndex;
                    const isComplete = isUploading && index < uploadedIndex;

                    return (
                      <div key={file.name} className={`relative group rounded-lg overflow-hidden border border-gray-200 bg-white aspect-square transition-opacity ${isPending ? 'opacity-50' : ''}`}>
                        <img
                          src={file.preview}
                          alt={file.name}
                          className={`w-full h-full object-cover ${isComplete ? 'grayscale' : ''}`}
                          onLoad={() => { URL.revokeObjectURL(file.preview) }}
                        />
                        
                        {/* Status Overlay during upload */}
                        {isCurrentlyUploading && (
                          <div className="absolute inset-0 bg-white/60 flex items-center justify-center">
                            <svg className="animate-spin h-6 w-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                          </div>
                        )}

                        {/* Hover Actions (Disabled during upload) */}
                        {!isUploading && (
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                removeFile(file.name);
                              }}
                              className="bg-red-500 text-white p-1.5 rounded-full hover:bg-red-600"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            </button>
                          </div>
                        )}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2 text-xs text-white truncate">
                          {file.name}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Submit Action & Progress UI */}
                <div className="mt-8 flex flex-col items-end gap-3">
                  {error && <p className="text-sm text-red-500 font-medium">{error}</p>}
                  
                  {isUploading && progress && (
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <span className="font-medium">File {uploadedIndex + 1} of {stagedFiles.length}</span>
                      <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-blue-600 transition-all duration-300 ease-out"
                          style={{ width: `${progress.percentage}%` }}
                        />
                      </div>
                      <span className="w-8 text-right font-medium">{progress.percentage}%</span>
                    </div>
                  )}

                  <button
                    onClick={handleUploadSubmit}
                    disabled={isUploading}
                    className="bg-blue-600 text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isUploading 
                      ? 'Uploading Batch...' 
                      : `Upload to ${WEBSITE_SECTIONS.find((s) => s.id === activeSection)?.name}`
                    }
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}