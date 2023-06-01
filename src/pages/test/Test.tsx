import React, { useState } from 'react';
import './stylesTest.css';

export default function Test({ prop }: { prop?: string }) {
  const [value, setValue] = useState('');
  const [value2, setValue2] = useState('');

  return (
    <div className="w-1/2 h-1/2 bg-red-100">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div className="containerize works">{value}</div>

      {[...Array(10)].map(() => {
        return <div>d</div>;
      })}
    </div>
  );
}
