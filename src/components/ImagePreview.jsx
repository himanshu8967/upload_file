// ImagePreview.jsx
function ImagePreview({ fileURL, fileName }) {
    return (
      <div className="text-center mt-4">
        <img src={fileURL} alt={fileName} className="w-full h-auto rounded-lg shadow" />
        <p className="mt-2 text-sm text-gray-500">{fileName}</p>
      </div>
    );
  }
  
  export default ImagePreview;
  