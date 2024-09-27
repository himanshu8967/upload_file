import { useState } from "react";
import { FaFileUpload, FaTrashAlt } from "react-icons/fa";
import FilePreview from "./FilePreview";

function FileUpload() {
    const [file, setFile] = useState(null);
    const [fileType, setFileType] = useState("");

    const handleFileChange = (e) => {
        const uploadedFile = e.target.files[0];
        if (uploadedFile) {
            setFile(uploadedFile);
            setFileType(uploadedFile.type.split("/")[0]); // Detect file type (image, video, audio, application)
        }
    };

    const handleUpload = () => {
        if (file) {
            alert(`Uploading ${file.name}`);
            // Trigger actual upload logic (e.g., API call to upload the file)

            // Remove file preview after upload
            handleRemoveFile(); // Clear the file preview after the upload
        } else {
            alert("Please select a file to upload.");
        }
    };

    const handleRemoveFile = () => {
        setFile(null);
        setFileType("");
    };

    return (
        <div className="space-y-4  ">
            <div className="flex items-center justify-center w-full">
                <label
                    className="flex flex-col items-center justify-center w-full h-32 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300 cursor-pointer hover:bg-gray-100"
                    htmlFor="file-upload"
                >
                    <FaFileUpload className="text-4xl text-blue-500" />
                    <p className="mt-2 text-sm text-gray-500">Click to upload or drag and drop</p>
                    <input
                        id="file-upload"
                        type="file"
                        className="hidden"
                        accept="image/*,audio/*,video/*,application/pdf"
                        onChange={handleFileChange}
                    />
                </label>
            </div>

            {/* File Preview Section */}
            {file && (
                <div className="mt-4 space-y-4">
                    <div className="flex justify-between items-center">
                        <p className="text-lg font-semibold">
                            Preview: {file.name} ({fileType})
                        </p>
                        <button
                            onClick={handleRemoveFile}
                            className="text-red-500 hover:text-red-700"
                        >
                            <FaTrashAlt /> Remove
                        </button>
                    </div>

                    <FilePreview file={file} fileType={fileType} />
                </div>
            )}

            {/* Upload Button */}
            <button
                onClick={handleUpload}
                className={`w-full py-2 px-4  bg-blue-500 text-white rounded-lg hover:bg-blue-600 ${!file ? "opacity-50 cursor-not-allowed" : ""}`}
                disabled={!file}
            >
                Upload File
            </button>
        </div>
    );
}

export default FileUpload;
