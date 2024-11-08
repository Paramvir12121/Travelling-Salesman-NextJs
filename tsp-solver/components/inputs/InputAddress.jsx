// components/InputAddress.jsx
"use client";

import { useState } from 'react';

export default function InputAddress({ addLocation }) {
  const [address, setAddress] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!address.trim()) {
      setError('Please enter an address.');
      return;
    }

    try {
      const response = await fetch(`/api/geocode?address=${address}`);
      const data = await response.json();

      if (data.success) {
        addLocation(data.location);
        setAddress('');
        setError('');
      } else {
        setError('Address not found.');
      }
    } catch (err) {
      console.error(err);
      setError('An error occurred while fetching the location.');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Enter an address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        style={{ padding: '10px', width: '70%' }}
      />
      <button type="submit" style={{ padding: '10px', marginLeft: '10px' }}>
        Add Location
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
}
