import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="App flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Hospital</h1>
      <div className="flex flex-col space-y-4">
        <Link to="/Search">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            Consultar Historia Clínica
          </button>
        </Link>
        <Link to="/Register">
          <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
            Registrar Historia Clínica
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
