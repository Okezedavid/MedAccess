import React from 'react';
import { ClipLoader } from 'react-spinners';

const Spinner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <ClipLoader color="#0000ff" loading={true} size={150} />
    </div>
  );
};

export default Spinner;
