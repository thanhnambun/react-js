import React, { useState } from 'react';

export default function Bt3() {
  const [selectedDate, setSelectedDate] = useState('');

  const handleDateChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    const newDate = event.target.value;
    setSelectedDate(newDate);
  };

  return (
    <div>
      <input
        type="date"
        value={selectedDate}
        onChange={handleDateChange} 
      />
      <p>Selected date: {selectedDate}</p>
    </div>
  );
};
