import React, { useState } from 'react';

const BMICalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBMI] = useState(null);
  const [image, setImage] = useState('');

  const calculateBMI = () => {
    if (!weight || !height) return;
    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    setBMI(bmiValue);

    if (bmiValue < 18.5) {
      setImage('underweight.png'); // Replace with your underweight image path
    } else if (bmiValue > 30) {
      setImage('overweight.png'); // Replace with your overweight image path
    } else {
      setImage('normal.png'); // Replace with your normal weight image path
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>BMI Calculator</h1>
      <div>
        <input
          type="number"
          placeholder="Weight (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <input
          type="number"
          placeholder="Height (cm)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>
      <button onClick={calculateBMI} style={{ marginTop: '10px' }}>
        Calculate BMI
      </button>
      {bmi && (
        <div style={{ marginTop: '20px' }}>
          <h2>Your BMI: {bmi}</h2>
          {image && <img src={image} alt="BMI category" style={{ width: '200px' }} />}
        </div>
      )}
    </div>
  );
};

export default BMICalculator;
