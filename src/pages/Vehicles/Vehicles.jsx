import React from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { FETCH_VEHICLES } from '../../api/Vehicles';
import Header from '../../components/Header/Header';
import './Vehicles.scss';

function Vehicles() {
  const location = useLocation();
  const navigate = useNavigate();
  const { data, loading, refetch } = useQuery(FETCH_VEHICLES);

  const getHeader = () => {
    let header = '';
    if (location.pathname.includes('create')) {
      header = (
        <h2 className="heading_styles">
          <i className="far fa-arrow-left" onClick={() => navigate('/vehicles')} />
          <span>Create Vehicle</span>
        </h2>
      );
    } else {
      header = (
        <h2 className="heading_styles">
          Vehicles
        </h2>
      );
    }
    return header;
  };

  return (
    <>
      <Header />
      <div className="Vehicles__container">
        <div className="card">
          <div className="card-header">
            {getHeader()}
          </div>
          <main className="Vehicles__main">
            <Outlet context={{ data, loading, refetch }} />
          </main>
        </div>
      </div>
    </>
  );
}

export default Vehicles;
