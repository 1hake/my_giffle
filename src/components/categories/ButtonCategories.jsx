import React, { useState } from 'react';
import Categories from './Categories';

const ButtonCategories = () => {
    const [state, setState] = useState({
        isOpen: false
    });

    const handleOpen = () => {
        setState({
            ...state,
            isOpen: !state.isOpen
        });
    };

    return (
        <div style={{
            position: 'absolute',
            top: 0,
            height: '100vh',
            width: '100vw',
            left: 0
        }}>
            <button style={{
                zIndex: state.isOpen ? 2 : 1,
                bottom: 0,
                position: "absolute",
                textAlign: "center"
            }} onClick={handleOpen}>
                OPEN CATEGORIES
        </button>
            <Categories isOpen={state.isOpen} />
        </div>
    );
};

export default ButtonCategories;