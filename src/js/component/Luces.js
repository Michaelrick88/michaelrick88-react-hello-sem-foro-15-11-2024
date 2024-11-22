import React from 'react';

const Luces = ({ color, isActive, onClick }) => {
    return (
        <button
            onClick={onClick}
            style={{
                backgroundColor: isActive ? color : 'gray',
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                margin: '10px',
            }}
        ></button>
    );
};

export default Luces;