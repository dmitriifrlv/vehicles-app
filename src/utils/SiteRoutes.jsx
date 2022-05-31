import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Vehicles from '../pages/Vehicles/Vehicles';
import DisplayVehicles from '../pages/Vehicles/components/DisplayVehicles';
import CreateVehicle from '../pages/Vehicles/components/CreateVehicles/CreateVehicle';


function SiteRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="vehicles" element={<Vehicles />}>
        <Route index element={<DisplayVehicles />} />
        <Route path="create" element={<CreateVehicle />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />

    </Routes>
  );
}

export default SiteRoutes;
