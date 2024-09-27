// PDFPreview.jsx
function PDFPreview({ fileURL, fileName }) {
    return (
        <div className="text-center mt-4">
            <iframe src={fileURL} className="w-full h-auto" title={fileName} />
            <p className="mt-2 text-sm text-gray-500">{fileName}</p>
        </div>
    );
}

export default PDFPreview;
