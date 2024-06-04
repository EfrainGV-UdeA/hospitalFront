import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const GetPatientHistory = () => {
  const [cedula, setCedula] = useState("");
  const [history, setHistory] = useState(null);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setCedula(e.target.value);
  };

  const fetchHistory = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/patient-history/${cedula}`,
        {
          headers: {
            Accept: "app/historiaclinica.${cedula}.v1+json",
          },
        }
      );
      setHistory(response.data);
      setError(null);
    } catch (error) {
      setHistory(null);
      setError("No se pudo encontrar la historia clínica");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-lg mx-auto p-8 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Consultar Historia Clínica
        </h2>
        <input
          type="text"
          placeholder="Ingrese la cédula"
          value={cedula}
          onChange={handleInputChange}
          className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md"
        />
        <button
          onClick={fetchHistory}
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 mb-4"
        >
          Buscar
        </button>

        {history && (
          <div className="mt-4 p-4 bg-green-100 border border-green-400 rounded-md">
            <h3 className="text-green-700 font-bold mb-2">Historia Clínica</h3>
            <pre className="text-green-700">
              {JSON.stringify(history, null, 2)}
            </pre>
          </div>
        )}

        {error && <p className="mt-4 text-red-700">{error}</p>}

        <Link to="/">
          <button className="mt-4 w-full bg-gray-500 text-white py-2 rounded-md hover:bg-gray-600">
            Volver
          </button>
        </Link>
      </div>
    </div>
  );
};

export default GetPatientHistory;
