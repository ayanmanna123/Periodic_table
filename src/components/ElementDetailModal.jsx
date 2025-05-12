import React from "react";

const ElementDetailModal = ({ element, onClose }) => {
  if (!element) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-xl">
        <h2 className="text-2xl font-bold mb-2">
          {element.name} ({element.symbol})
        </h2>
        {element.image?.url && (
          <img
            className="mb-1 w-full rounded"
            src={element.image.url}
            alt={element.name}
          />
        )}
        {element.bohr_model_3d && (
          <model-viewer
            src={element.bohr_model_3d}
            alt={`3D model of ${element.name}`}
            auto-rotate
            rotation-speed="5"
            camera-controls
            background-color="#fff"
            style={{ width: "100%", height: "300px", marginBottom: "1rem" }}
          ></model-viewer>
        )}
        <p>
          <strong>Appearance:</strong> {element.appearance}
        </p>
        <p>
          <strong>Atomic Number:</strong> {element.number}
        </p>
        <p>
          <strong>Atomic Mass:</strong> {element.atomic_mass}
        </p>
        <p>
          <strong>Boiling Point:</strong> {element.boil}
        </p>
        <p>
          <strong>Melting Point:</strong> {element.melt}
        </p>
        <p>
          <strong>Density:</strong> {element.density}
        </p>
        <p>
          <strong>Molar Heat:</strong> {element.molar_heat}
        </p>
        <p>
          <strong>Electron Configuration:</strong>{" "}
          {element.electron_configuration}
        </p>
        <p>
          <strong>Electron Affinity:</strong> {element.electron_affinity}
        </p>
        <p>
          <strong>Electronegativity (Pauling):</strong>{" "}
          {element.electronegativity_pauling}
        </p>
        <p>
          <strong>Ionization Energies:</strong>{" "}
          {element.ionization_energies?.join(", ")}
        </p>
        <p>
          <strong>Shells:</strong> {element.shells?.join(", ")}
        </p>
        <p>
          <strong>Phase:</strong> {element.phase}
        </p>
        <p>
          <strong>Block:</strong> {element.block}
        </p>
        <p>
          <strong>Category:</strong> {element.category}
        </p>
        <p>
          <strong>Discovered By:</strong> {element.discovered_by}
        </p>
        <p>
          <strong>Named By:</strong> {element.named_by}
        </p>
        <p>
          <strong>Wikipedia:</strong>{" "}
          <a
            className="text-blue-600 underline"
            href={element.source}
            target="_blank"
            rel="noreferrer"
          >
            Link
          </a>
        </p>
        <p>
          <strong>bohr_model_image:</strong>
          {element.image?.url && (
          <img
            className="fullsd"
            src={element.bohr_model_image}
            alt={element.name}
          />
        )}
        </p>
        <p className="mt-2 text-sm text-gray-700">{element.summary}</p>
        <button
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ElementDetailModal;
