import { useState } from "react";
import clientIcon from "../public/clientsvg.svg";
import serverIcon from "../public/server.svg";

function App() {
  const [request, setRequest] = useState("");
  const [headers, setHeaders] = useState({ "Content-Type": "text/plain" });
  const [response, setResponse] = useState("");

  const handleSendRequest = () => {
    // Simulate a server response
    if (request) {
      setResponse({
        status: 200,
        headers: { "Server-Type": "Simulated-Server", ...headers },
        body: `You requested ${request}`,
      });
    } else {
      setResponse({
        status: 400,
        headers: { "Server-Type": "apne ghar ka hi server hai" },
        body: "Error: Invalid request.",
      });
    }
  };

  const handleHeaderChange = (key, value) => {


    setHeaders((prev) => ({
      ...prev,
      [key]: "bhai value toh de",
    }));
  

}

   

  return (
    <>
      <div className="min-h-screen w-full bg-gray-900 text-white">
        {/* Header Section */}
        <div className="flex flex-col justify-center items-center p-8 sm:p-[5rem] gap-10">
          <h1 className="text-4xl sm:text-6xl text-center">Computer Networking Simulator</h1>
          <p className="text-lg text-left sm:text-center text-stone-200 max-w-xl sm:max-w-2xl">
            This website demonstrates how computer networking works, with interactive components. 
            This project is made under Chai with Code's web dev cohort.
          </p>
        </div>

        {/* Network Simulation Section */}
        <div className="flex justify-around items-center">
          {/* Client Section */}
          <div className="flex flex-col items-center gap-4">
            <img src={clientIcon} className="w-[10rem] border p-4" alt="Client" />
            <input
              type="text"
              placeholder="Enter a request (e.g., google.com)"
              value={request}
              onChange={(e) => setRequest(e.target.value)}
              className="p-2 w-64 border rounded bg-gray-800 text-white"
            />

            {/* Headers Section */}
            <div className="p-4 w-64 border rounded bg-gray-800 text-white">
              <h3 className="text-lg mb-2">Request Headers</h3>
              {Object.keys(headers).map((key) => (
                <div key={key} className="flex justify-between mb-2">
                  <span>{key}</span>
                  <input
                    type="text"
                    value={headers[key]}
                    onChange={(e) => handleHeaderChange(key, e.target.value)}
                    className="ml-2 p-1 w-32 bg-gray-700 rounded text-white"
                  />
                </div>
              ))}
              <button
                onClick={() =>
                  handleHeaderChange(`Header-${Object.keys(headers).length + 1}`, "")
                }
                className="mt-2 px-2 py-1 bg-blue-500 rounded hover:bg-blue-600"
              >
                Add Header
              </button>
            </div>

            <button
              onClick={handleSendRequest}
              className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-600"
            >
              Send Request
            </button>
          </div>

          {/* Server Section */}
          <div className="flex flex-col items-center gap-4">
            <img src={serverIcon} className="w-[10rem] border p-4" alt="Server" />
            <div className="p-4 w-64 border rounded bg-gray-800 text-white">
              <h3 className="text-lg mb-2">Response</h3>
              {response ? (
                <div>
                  <p><strong>Status:</strong> {response.status}</p>
                  <h4 className="mt-2">Headers:</h4>
                  <ul className="list-disc ml-4">
                    {response.headers &&
                      Object.entries(response.headers).map(([key, value]) => (
                        <li key={key}>
                          {key}: {value}
                        </li>
                      ))}
                  </ul>
                  <p className="mt-2"><strong>Body:</strong> {response.body}</p>
                </div>
              ) : (
                "Waiting for a request..."
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
