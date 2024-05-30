import React, { useState } from 'react';

function AverageCalculator() {
  const [numbers, setNumbers] = useState('');
  const [average, setAverage] = useState(0);

  const handleChange = (e) => {
    setNumbers(e.target.value);
  }

  const calculateAverage = () => {
    const numberArray = numbers.split(',').map(Number);
    const sum = numberArray.reduce((acc, curr) => acc + curr, 0);
    const avg = sum / numberArray.length;
    setAverage(avg);
  }

  return (
    <div>
      <input type="text" value={numbers} onChange={handleChange} />
      <button onClick={calculateAverage}>Calculate Average</button>
      {average !== 0 && <p>Average: {average}</p>}
    </div>
  );
}

export default AverageCalculator;
