import React, { useState } from 'react';

export default function Bt5() {
    const [isVisible, setIsVisible] = useState<boolean>(true);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    }
    return (
        <div>
            {/* Button với nội dung được điều khiển bởi state */}
            <button onClick={toggleVisibility}>
                {isVisible ? 'Hiển' : 'Ẩn'}
            </button>
        </div>
    );
};
