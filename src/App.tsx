import { useState } from "react";
import clientIcon from "../public/clientsvg.svg";
import serverIcon from "../public/server.svg";

function App() {
  const [request, setRequest] = useState("");
  const [response, setResponse] = useState("");

  const handleSendRequest = () => {

    if (request) {
      setResponse(`Response from server: You requested ${request}`);
    } else {
      setResponse("Error: Please enter a valid request.");
    }
  };

  return (
    <>
      <div className="min-h-screen w-full bg-gray-900 text-white">
       
        <div className="flex flex-col justify-center items-center p-8 sm:p-[5rem] gap-10">
          <h1 className="text-4xl sm:text-6xl text-center">Computer Networking Simulator</h1>
          <p className="text-lg text-left sm:text-center text-stone-200 max-w-xl sm:max-w-2xl">
            This website demonstrates how computer networking works, with interactive components. 
            This project is made under Chai with Code's web dev cohort.
          </p>
        </div>

        <div className="flex justify-around items-center">
          
          <div className="flex flex-col items-center gap-4">
            <img src={clientIcon} className="w-[10rem] border p-4" alt="Client" />
            <input
              type="text"
              placeholder="Enter a request (e.g., google.com)"
              value={request}
              onChange={(e) => setRequest(e.target.value)}
              className="p-2 w-64 border rounded bg-gray-800 text-white"
            />
            <button
              onClick={handleSendRequest}
              className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-600"
            >
              Send Request
            </button>
          </div>

         
          <div className="flex flex-col items-center gap-4">
            <img src={serverIcon} className="w-[10rem] border p-4" alt="Server" />
            <div className="p-4 w-64 border rounded bg-gray-800 text-white">
              {response || "Waiting for a request..."}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
