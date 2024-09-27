// VideoPreview.jsx
function VideoPreview({ fileURL, fileName }) {
    return (
      <div className="text-center mt-4">
        <video controls src={fileURL} className="w-full h-auto rounded-lg shadow">
          Your browser does not support the video tag.
        </video>
        <p className="mt-2 text-sm text-gray-500">{fileName}</p>
      </div>
    );
  }
  
  export default VideoPreview;
  