import React, { useState } from 'react';

const LeaveRecommendationForm = ({ onAddRecommendation }) => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() === '') return;
    
    // Si escribieron un nombre, podemos opcionalmente agregarlo al mensaje para que se sepa quién lo dejó
    const finalMessage = name.trim() ? `${message} — ${name}` : message;

    // Llamamos a la función que viene del componente padre para actualizar las tarjetas
    onAddRecommendation(finalMessage);
    
    // Activamos la alerta de éxito y limpiamos los campos
    setSubmitted(true);
    setName('');
    setMessage('');
    
    // Ocultar mensaje de éxito después de 4 segundos
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="mt-5 mx-auto" style={{ maxWidth: '750px' }}>
      <h3 className="text-center fw-bold text-custom-purple mb-4">Leave a Recommendation</h3>
      
      {submitted && (
        <div className="alert alert-success text-center" role="alert">
          ¡Gracias! Tu recomendación ha sido agregada con éxito.
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input 
            type="text" 
            className="form-control" 
            placeholder="Name (Optional)" 
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <textarea 
            className="form-control" 
            rows="5" 
            placeholder="Message" 
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-outline-dark px-4 py-2 fw-semibold">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default LeaveRecommendationForm;