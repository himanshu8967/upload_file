// FilePreview.jsx
import ImagePreview from './ImagePreview';  // Import ImagePreview
import VideoPreview from './VideoPreview';  // Import VideoPreview
import AudioPreview from './AudioPreview';  // Import AudioPreview
import PDFPreview from './PDFPreview';      // Import PDFPreview

function FilePreview({ file, fileType }) {
    if (!file) {
        return <p className="text-center mt-4">No file selected.</p>;
    }

    const fileURL = URL.createObjectURL(file);

    switch (fileType) {
        case "image":
            return <ImagePreview fileURL={fileURL} fileName={file.name} />;
        case "video":
            return <VideoPreview fileURL={fileURL} fileName={file.name} />;
        case "audio":
            return <AudioPreview fileURL={fileURL} fileName={file.name} />;
        case "application":
            if (file.type === "application/pdf") {
                return <PDFPreview fileURL={fileURL} fileName={file.name} />;
            }
            break;
        default:
            return <p className="text-center mt-4">Unsupported file type.</p>;
    }
}

export default FilePreview;
