import React from 'react'
import { Route } from 'react-router-dom'
import { LandingPage } from '../pages/LandingPage'
export const PublicRoutes = () => {
  return (
    <>
      <Route path="/" element={<LandingPage />} />
    
    </>
  );
};

export default PublicRoutes;