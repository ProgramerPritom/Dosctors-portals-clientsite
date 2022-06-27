import React from 'react';

const Review = ({review}) => {
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
        <div class="card-body">
            
            <p>{review.description}</p>
            <div class="flex items-center">
                <div class="avatar">
                <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                    <img src={review.img} />
                </div>
                </div>
                <div>
                    <p className="text-1xl">{review.name}</p>
                    <p><span>{review.location}</span></p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Review;