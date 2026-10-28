import React, { useState, useEffect } from 'react';
import RecommendationCard from './RecommendationCard';
import LeaveRecommendationForm from './LeaveRecommendationForm';

const RecommendationsSection = () => {
  // Inicializamos el estado cargando lo que haya en el localStorage, o usando las por defecto si está vacío
  const [recommendations, setRecommendations] = useState(() => {
    const savedRecs = localStorage.getItem('recommendations');
    if (savedRecs) {
      return JSON.parse(savedRecs);
    }
    return [
      "Jane is a very quick learner and quickly grasps key concepts of Web development. She got a great attitude & she is an excellent team player. She has a curious mind and asks the right question. She takes initiative within a team and has potentials to lead the team.",
      "Working with Jane has been an awesome experience. She is highly knowledgeable and always goes the extra step to make sure everything is right. For any future projects that need her expertise I would definitely want to work with her again.",
      "I had worked along with Jane during the initial phase of our venture which needed Web development. She is a committed resource who has in depth knowledge about the domain. She will be an asset for any organisation!"
    ];
  });

  // Cada vez que el arreglo 'recommendations' cambie, lo guardamos en el localStorage
  useEffect(() => {
    localStorage.setItem('recommendations', JSON.stringify(recommendations));
  }, [recommendations]);

  const handleAddRecommendation = (newText) => {
    setRecommendations([newText, ...recommendations]);
  };

  return (
    <section id="recommendations" className="container py-5">
      <h2 className="fw-bold text-custom-purple mb-4">Recommendations</h2>
      
      <div className="row">
        {recommendations.map((rec, index) => (
          <RecommendationCard key={index} text={rec} />
        ))}
      </div>

      <LeaveRecommendationForm onAddRecommendation={handleAddRecommendation} />
    </section>
  );
};

export default RecommendationsSection;