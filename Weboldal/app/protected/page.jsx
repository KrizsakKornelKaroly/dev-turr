'use client'
import React from 'react';
import useProtectedRoute from '../hooks/useProtectedRoute';

function Page() {
  useProtectedRoute();

  return <h1>Email címed hítelsített</h1>;
}

export default Page;
