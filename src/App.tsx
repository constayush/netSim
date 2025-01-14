import { useState } from "react";
import clientIcon from "../public/clientsvg.svg";
import serverIcon from "../public/server.svg";
// import settingIcon from "../public/settingIcon.svg";
import { motion } from "framer-motion";
import BlogPara from "./blogPara";

function App() {
  const [request, setRequest] = useState("");
  const [headers, setHeaders] = useState({
    "Host": "/Server-ka-address",
    "Content-Type": "text/plain",
    "Accept-lang": "en-US",
    "User-Agent": " Mozilla/5.0 Windows",
  });
  const [response, setResponse]: any = useState("");
  const [showConfig, setShowConfig] = useState("flex");
  const [isRequestSent, setIsRequestSent] = useState(false);

if(true) {
  
}else{setShowConfig}

  const handleSendRequest = () => {
    // Simulate a server response
    if (request) {

      setIsRequestSent(true)


      setTimeout(() => {
        setIsRequestSent(false)

        setResponse({
          status: 200,
          headers: { "Server-Type": "apne ghar ka hi server hai", ...headers },
          body: `Data You requested ${request}`,
        });
      }, 2000);

    } else {

      setIsRequestSent(false)

      setResponse({
        status: 400,
        headers: { "Server-Type": "apne ghar ka hi server hai" },
        body: "Error: Invalid request.",
      });
    }
  };

  const handleHeaderChange = (key: string, value: string) => {

    setHeaders((prev) => ({
      ...prev,
      [key]: value,
    }));


  }

  const handleHeaderDelete = () => {

    setHeaders(() => ({
      "Host": "/Server-ka-address",
      "Content-Type": "text/plain",
      "Accept-lang": "en-US",
      "User-Agent": " Mozilla/5.0 Windows",
    }))

  };


  // const handleConfigClick = () => {

  //   if (showConfig === "hidden") setShowConfig("flex")
  //   else setShowConfig("hidden");

  // }



  return (
    <>
      <div className="min-h-screen w-full  text-white">


        {/* Header SEction */}
        <div className="heading flex flex-col justify-center items-center p-8 sm:p-[6rem] gap-4 sm:gap-10">
          <h1 className="text-4xl sm:text-6xl text-center">How http:) works?</h1>
          <p className="text-lg text-left sm:text-center text-stone-300 max-w-xl sm:max-w-2xl">
            Interactive simulator that demonstrates how clients and servers communicate over a network.
            This project is made under Chai with Code's web dev cohort.
          </p>
        </div>

        {/* fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff*/}

        <div className="animate-section  flex flex-col sm:flex-row justify-between sm:justify-around items-center my-2">
          {/* Client */}
          <motion.img
            src={clientIcon}
            className="w-[10rem] border p-4"
            alt="Client"
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          />

          {/* Animated Request */}
          {isRequestSent && (
            <motion.div
              className="bg-blue-500 absolute z-10 text-white px-4 py-2 rounded-full"
              initial={{ x: -80, opacity: 0 }}
              animate={{ x: 50, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Sending Request...
            </motion.div>
          )}

          {/* Server */}
          <motion.img
            src={serverIcon}
            className="w-[10rem] border p-4"
            alt="Server"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          />

          {/* Animated Response */}
          {response && (
            <motion.div
              className="bg-black border-dashed border absolute text-white px-4 py-2 rounded-full"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: -50, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              {response.body}
            </motion.div>
          )}
        </div>

        {/* fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff*/}


        <div className="w-full flex  justify-center items-center">
          <div className="max-w-6xl flex flex-col justify-center items-center ">

            <h1 className="text-4xl my-[4rem] w-full flex  justify-left items-center">Config your HTTP rquest</h1>

            <div className="msg-section w-full flex flex-col flex-wrap justify-center items-center gap-5 sm:gap-8 ">

              <div className={`req-input-main-line w-full flex flex-col justify-center items-center `}>

                <div className=" flex gap-2 sm:gap-4 ">

                  <select className="w-fit border rounded cursor-pointer grad text-white">
                    <option value="GET">GET</option>
                    <option disabled aria-disabled value="POST">POST</option>
                    <option disabled aria-disabled value="PUT">PUT</option>
                    <option disabled aria-disabled value="DELETE">DELETE</option>
                  </select>

                  <input
                    type="text"
                    placeholder="Enter a URI (e.g., /api/data)"
                    value={request}
                    onChange={(e) => setRequest(e.target.value)}
                    className="p-2 w-64 border rounded grad text-white"
                  />

                  <button
                    onClick={handleSendRequest}
                    className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-600"
                  >
                    Send Request
                  </button>
                </div>

              </div>

              {/* grid response request */}
              <div className={`request-response grid grid-cols-1 sm:grid-cols-2 gap-4`}>


                <div className={`req-headers ${showConfig}  flex-col p-4 w-full border  gap-2 rounded grad text-white`}>
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

                  <div className="flex gap-4">

                    <button
                      onClick={() =>
                        handleHeaderChange(`Header-${Object.keys(headers).length + 1}`)
                      }
                      className="mt-2 px-2 py-1 bg-blue-500 rounded hover:bg-blue-600"
                    >
                      Add Header
                    </button>
                    <button
                      onClick={handleHeaderDelete}

                      className="mt-2 px-2 py-1 bg-blue-500 rounded hover:bg-blue-600"
                    >
                      -
                    </button>
                  </div>

                </div>

                <div className="p-4 w-64 border rounded grad text-white">
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
        </div>

        <div className="blogSECtion my-[4rem]  w-full flex flex-col justify-center items-center ">

          <div className="max-w-[64rem] min-h-[20rem] text-left ">

            <BlogPara ques="What is http?" ans="HTTP (HyperText Transfer Protocol) is like the language your web browser and websites use to talk to each other." analogy="Imagine you’re in a library:

You (the browser) ask the librarian (the website server) for a book (a webpage).
You send a request: “Can I have the book on cats?” (HTTP request).
The librarian checks and gives you the book or says, “Sorry, it’s not here” (HTTP response)." con="It’s that simple! HTTP is just the system they use to understand each other and exchange information." />

            <BlogPara ques="What is http?" ans="HTTP (HyperText Transfer Protocol) is like the language your web browser and websites use to talk to each other." analogy="Imagine you’re in a library:

You (the browser) ask the librarian (the website server) for a book (a webpage).
You send a request: “Can I have the book on cats?” (HTTP request).
The librarian checks and gives you the book or says, “Sorry, it’s not here” (HTTP response)." con="It’s that simple! HTTP is just the system they use to understand each other and exchange information." />

            <BlogPara ques="What is http?" ans="HTTP (HyperText Transfer Protocol) is like the language your web browser and websites use to talk to each other." analogy="Imagine you’re in a library:

You (the browser) ask the librarian (the website server) for a book (a webpage).
You send a request: “Can I have the book on cats?” (HTTP request).
The librarian checks and gives you the book or says, “Sorry, it’s not here” (HTTP response)." con="It’s that simple! HTTP is just the system they use to understand each other and exchange information." />


            <BlogPara ques="What is http?" ans="HTTP (HyperText Transfer Protocol) is like the language your web browser and websites use to talk to each other." analogy="Imagine you’re in a library:

You (the browser) ask the librarian (the website server) for a book (a webpage).
You send a request: “Can I have the book on cats?” (HTTP request).
The librarian checks and gives you the book or says, “Sorry, it’s not here” (HTTP response)." con="It’s that simple! HTTP is just the system they use to understand each other and exchange information." />


            <BlogPara ques="What is http?" ans="HTTP (HyperText Transfer Protocol) is like the language your web browser and websites use to talk to each other." analogy="Imagine you’re in a library:

You (the browser) ask the librarian (the website server) for a book (a webpage).
You send a request: “Can I have the book on cats?” (HTTP request).
The librarian checks and gives you the book or says, “Sorry, it’s not here” (HTTP response)." con="It’s that simple! HTTP is just the system they use to understand each other and exchange information." />



          </div>


        </div>

      </div>
    </>
  );
}

export default App;
