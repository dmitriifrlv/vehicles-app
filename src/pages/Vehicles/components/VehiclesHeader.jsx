import React from 'react';
import { useNavigate } from 'react-router-dom';

function ShowVehicles() {
  const navigate = useNavigate();
  return (
    <div className="Vehicles__header">
      <button
        type="button"
        onClick={() => {
          navigate('/vehicles/create');
        }}
      >
        {' '}
        Create New
      </button>
    </div>
  );
}

export default ShowVehicles;
