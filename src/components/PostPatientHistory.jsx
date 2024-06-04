import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const PostPatientHistory = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    identificationNumber: "",
    registrationDate: "",
    doctorId: "",
    weight: "",
    height: "",
    arterialPressure: "",
    heartRate: "",
    medicalHistory: "",
    allergies: "",
    currentMedications: "",
    diagnosis: "",
    treatment: "",
    observations: "",
  });

  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const submitHistory = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8089/api/patient-history",
        formData,
        {
          headers: {
            Accept: "application/vnd.patient.v1+json",
          },
        }
      );
      setResponse(response.data);
      setError(null);
    } catch (error) {
      setResponse(null);
      setError("No se pudo registrar la historia clínica");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-8 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Registrar Historia Clínica
      </h2>
      <input
        type="text"
        name="firstName"
        placeholder="Ingrese el nombre del paciente"
        value={formData.firstName}
        onChange={handleInputChange}
        required
        className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md"
      />
      <input
        type="text"
        name="lastName"
        placeholder="Ingrese el apellido del paciente"
        value={formData.lastName}
        onChange={handleInputChange}
        required
        className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md"
      />
      <input
        type="text"
        name="identificationNumber"
        placeholder="Ingrese la cédula del paciente"
        value={formData.identificationNumber}
        onChange={handleInputChange}
        required
        className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md"
      />
      <input
        type="date"
        name="registrationDate"
        value={formData.registrationDate}
        onChange={handleInputChange}
        required
        className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md"
      />
      <input
        type="number"
        name="doctorId"
        placeholder="ID del doctor"
        value={formData.doctorId}
        onChange={handleInputChange}
        required
        className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md"
      />
      <input
        type="number"
        name="weight"
        placeholder="Peso (kg)"
        value={formData.weight}
        onChange={handleInputChange}
        required
        className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md"
      />
      <input
        type="number"
        name="height"
        placeholder="Altura (cm)"
        value={formData.height}
        onChange={handleInputChange}
        required
        className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md"
      />
      <input
        type="text"
        name="arterialPressure"
        placeholder="Presión arterial"
        value={formData.arterialPressure}
        onChange={handleInputChange}
        className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md"
      />
      <input
        type="number"
        name="heartRate"
        placeholder="Frecuencia Cardiaca"
        value={formData.heartRate}
        onChange={handleInputChange}
        className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md"
      />
      <textarea
        name="medicalHistory"
        placeholder="Historia Médica"
        value={formData.medicalHistory}
        onChange={handleInputChange}
        className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md"
      />
      <textarea
        name="allergies"
        placeholder="Alergias"
        value={formData.allergies}
        onChange={handleInputChange}
        className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md"
      />
      <textarea
        name="currentMedications"
        placeholder="Medicamentos actuales"
        value={formData.currentMedications}
        onChange={handleInputChange}
        className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md"
      />
      <textarea
        name="diagnosis"
        placeholder="Diagnóstico"
        value={formData.diagnosis}
        onChange={handleInputChange}
        className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md"
      />
      <textarea
        name="treatment"
        placeholder="Tratamiento"
        value={formData.treatment}
        onChange={handleInputChange}
        className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md"
      />
      <textarea
        name="observations"
        placeholder="Observaciones"
        value={formData.observations}
        onChange={handleInputChange}
        className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md"
      />
      <button
        onClick={submitHistory}
        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
      >
        Registrar
      </button>

      {response && (
        <div className="mt-4 p-4 bg-green-100 border border-green-400 rounded-md">
          <h3 className="text-green-700">Registro Exitoso</h3>
          <pre className="text-green-700">
            {JSON.stringify(response, null, 2)}
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
  );
};

export default PostPatientHistory;
