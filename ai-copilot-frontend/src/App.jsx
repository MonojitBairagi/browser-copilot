import { useState } from "react";
import { getCurrentPage } from "./services/chromeApi";


function App() {
  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleGetPage = async () => {
    try {
      setLoading(true);

      const data = await getCurrentPage();

      console.log(data);

      setPageData(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-[420px] min-h-[550px] bg-slate-950 text-white p-4">
      {/* Header */}
      <div className="mb-5">
        <h1 className="text-2xl font-bold">AI Browser Copilot</h1>
        <p className="text-sm text-slate-400">
          Read and understand the current webpage
        </p>
      </div>

      {/* Button */}
      <button
        onClick={handleGetPage}
        disabled={loading}
        className="w-full rounded-lg bg-blue-600 px-4 py-3 font-medium transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {loading ? "Loading..." : "Get Current Page"}
      </button>

      {/* Result */}
      {pageData && (
        <div className="mt-5 space-y-4">
          {/* Title */}
          <div className="rounded-xl border border-slate-800 bg-slate-900 p-3">
            <h2 className="mb-1 text-xs uppercase text-slate-400">
              Page Title
            </h2>

            <p className="font-medium break-words">
              {pageData.title}
            </p>
          </div>

          {/* URL */}
          <div className="rounded-xl border border-slate-800 bg-slate-900 p-3">
            <h2 className="mb-1 text-xs uppercase text-slate-400">
              URL
            </h2>

            <p className="text-sm break-all text-blue-400">
              {pageData.url}
            </p>
          </div>

          {/* Content */}
          <div className="rounded-xl border border-slate-800 bg-slate-900 p-3">
            <h2 className="mb-2 text-xs uppercase text-slate-400">
              Extracted Content
            </h2>

            <div className="max-h-[250px] overflow-y-auto text-sm text-slate-300 whitespace-pre-wrap">
              {pageData.text}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;