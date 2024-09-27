// AudioPreview.jsx
function AudioPreview({ fileURL, fileName }) {
    return (
        <div className="text-center mt-4">
            <audio controls src={fileURL} className="w-full h-auto">
                Your browser does not support the audio tag.
            </audio>
            <p className="mt-2 text-sm text-gray-500">{fileName}</p>
        </div>
    );
}

export default AudioPreview;
