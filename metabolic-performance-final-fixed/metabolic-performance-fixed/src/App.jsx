
import React from "react";

export default function App() {
  return (
    <div className="max-w-xl mx-auto p-6 text-gray-900 font-sans">
      <h1 className="text-4xl font-bold mb-4">Entrena con cabeza, no con modas</h1>
      <p className="mb-4">Aquí tienes el formulario para recibir el glosario del Workshop Metabolic Performance Systems:</p>
      <div dangerouslySetInnerHTML={{
        __html: '<getresponse-form form-id="b8970eed-7a93-4907-b53e-1acbe3de4f9c" e="0"></getresponse-form>'
      }} />
    </div>
  );
}
