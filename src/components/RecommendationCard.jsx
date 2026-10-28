import React from 'react';

const RecommendationCard = ({ text }) => {
  return (
    <div className="col-12 col-md-4 mb-4">
      <div className="card shadow-sm h-100 border-0 p-2">
        <div className="card-body d-flex align-items-center">
          <p className="card-text text-secondary fst-italic m-0">
            "{text}"
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecommendationCard;