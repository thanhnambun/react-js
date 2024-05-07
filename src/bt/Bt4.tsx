import React, { useState } from 'react';

export default function Bt4() {
  const [selectedProvince, setSelectedProvince] = useState('');

  const handleProvinceChange = (event:React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    setSelectedProvince(selectedValue);
  };

  return (
    <div>
      <select
        value={selectedProvince}
        onChange={handleProvinceChange}
      >
        <option value="">Chọn tỉnh/thành phố</option>
        <option value="Hanoi">Hà Nội</option>
        <option value="HCMC">TP. Hồ Chí Minh</option>
      </select>
      <p>Selected province: {selectedProvince}</p>
    </div>
  );
}
