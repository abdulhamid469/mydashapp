import React from 'react';

function Dineer(props) {
    return (
        <div>
            <h1> Today I serving { props.dishName }   </h1>
            <h1> Today I serving sweet { props.sweetName } </h1>
        </div>
    )
}

export default Dineer;
