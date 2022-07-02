import React, { useState, CSSProperties  } from 'react';
import { PropagateLoader } from 'react-spinners';


const Loading = () => {
    const override = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
        // padding: '10px',
        marginTop : '230px'
      };
    
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#37e0e0");
    return (
        <div className='text-center'>
            <PropagateLoader color={color} loading={loading} cssOverride={override} size={20} />
        </div>
    );
};

export default Loading;