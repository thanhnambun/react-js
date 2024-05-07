import React, { useState } from 'react';

export default function Bt6() {
    const [isVisible, setIsVisible] = useState(true);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div>
            <button onClick={toggleVisibility}>
                {isVisible ? 'Hiển' : 'Ẩn'}
            </button>
        </div>
    );
}
