import React from 'react';

const InfoCard = ({img,bgClass,infoTitle}) => {
    return (
        <div className={`card lg:card-side shadow-xl ${bgClass} pl-3 text-white`}>
        <figure>
            <img className='w-15 pt-4' src={img}/>

            </figure>
            <div className="card-body">
            <h2 className="card-title text-2xl">{infoTitle}</h2>
            <p>Click the button to listen on Spotiwhy app.</p>
            <div className="card-actions justify-end">
            
            </div>
        </div>
        </div>
    );
};

export default InfoCard;