import React from 'react';
import quate from '../../../assets/icons/quote.svg';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import Review from './Review';



const TestiMonial = () => {

    const reviews = [
        {
            _id : 1,
            name : "Winson Herry",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, minima!",
            location : "Califonia",
            img : people1
        },
        {
            _id : 2,
            name : "Winson Herry",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, minima!",
            location : "Califonia",
            img : people2
        },
        {
            _id : 3,
            name : "Winson Herry",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, minima!",
            location : "Califonia",
            img : people3
        },
        
    ]

    return (
        <section className='my-14'>
            <div className='flex justify-between'>
                <div>
                    <h4 className="text-1xl font-bold text-primary mb-2">Testimonials</h4>
                    <h3 className='text-3xl'>What Our Patients Says</h3>
                </div>
                <div>
                    <img className='w-24 lg:w-48' src={quate} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5'>
                {
                    reviews.map(review => <Review
                    key={review._id}
                    review = {review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default TestiMonial;