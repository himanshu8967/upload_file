import FileUpload from "../components/FileUpload";

function Home() {
  return (
    <div className="max-w-xl mx-auto mt-24 p-6 pt-20 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-extrabold text-center text-blue-600 mb-6">
        Upload Your File
      </h1>
      <p className="text-center text-gray-600 mb-4">
        Please select a file to upload. Supported formats: images, videos, audio, PDFs.
      </p>
      <FileUpload />
    </div>
  );
}

export default Home;
