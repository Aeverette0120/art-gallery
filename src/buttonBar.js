import React from 'react';

function ButtonBar() {
    return (
        <div>
            <button value={ -5 } onClick={PaymentResponse.handleIterate}> Way Back </button>
            <button value={ -1 } onClick={PaymentResponse.handleIterate}> Back </button>
            <button value={ 1 } onClick={PaymentResponse.handleIterate}> Next </button>
            <button value={ 5 } onClick={PaymentResponse.handleIterate}> Big Next</button>
        </div>
    )
}

export default ButtonBar