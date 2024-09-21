import React, { useState } from 'react';

import birthdayGif from '../assets/birtdayGif.gif';
import s1 from '../assets/s1.jpg';
import s2 from '../assets/1.jpg';
import s3 from '../assets/2.jpg';
import s4 from '../assets/3.jpg';
import s5 from '../assets/4.jpg';
import s6 from '../assets/5.jpg';
import s7 from '../assets/6.jpg';
// import s8 from '../assets/7.jpg';
// import s9 from '../assets/s1.jpg';
// import s10 from '../assets/s1.jpg';

const Photos = () => {
    const [photoArr, setPhotoArr] = useState([
        {
            photo: s1,
            heading: 'Happy Birthday!',
            text: 'You are the reason I smile every day, may your day be filled with love and laughter!',
            pickupLine: 'Are you a candle? Because you light up my life!'
        },
        {
            photo: s2,
            heading: 'Wishing You the Best!',
            text: 'May your day be as amazing as you are and your year even better!',
            pickupLine: 'Are you cake? Because you’re sweet as frosting!'
        },
        {
            photo: s3,
            heading: 'A Day to Celebrate!',
            text: 'Here’s to the most amazing person I know. You deserve all the happiness in the world!',
            pickupLine: 'Are you a birthday gift? Because I’ve been waiting for you all year!'
        },
        {
            photo: s4,
            heading: 'Birthday Fun!',
            text: 'Let’s make this day unforgettable. Party hard and stay fabulous!',
            pickupLine: 'Are you a birthday balloon? Because you lift my spirits!'
        },
        {
            photo: s5,
            heading: 'Cheers to You!',
            text: 'Wishing you a year of health, wealth, and lots of fun memories!',
            pickupLine: 'Are you a birthday wish? Because you’re all I’ve been asking for!'
        },
        {
            photo: s6,
            heading: 'It’s Your Day!',
            text: 'Take a deep breath, make a wish, and enjoy the magic of your special day.',
            pickupLine: 'Are you a piñata? Because you’re the life of the party!'
        },
        {
            photo: s1,
            heading: 'Another Year Older!',
            text: 'You’re not just getting older, you’re getting better. Here’s to another great year!',
            pickupLine: 'Is your name Birthday? Because I can’t wait to celebrate you!'
        },
        {
            photo: s1,
            heading: 'Party Time!',
            text: 'Let’s light the candles and celebrate the amazing person you are!',
            pickupLine: 'Are you a birthday party? Because my heart is ready to celebrate!'
        },
        {
            photo: s1,
            heading: 'Wishing You Joy!',
            text: 'May all your dreams come true, and may you be surrounded by those you love!',
            pickupLine: 'Are you the birthday star? Because you’re shining brighter than anyone else!'
        },
    ]);

    return (
        <>
            <section className="section bg-light py-5 text-center">
  <div className="pagetitle">
    <img
      src={birthdayGif}
      alt="Birthday GIF"
      className="img-fluid mb-3"
      style={{ maxWidth: '100%', height: 'auto' }}
    />
    <h1 className="display-4 text-primary">Happy Birthday, Srishti!</h1>
    <p className="lead text-muted">Wishing you a day filled with love, laughter, and joy!</p>
  </div>

  <div className="row mt-4 mx-3">
    {photoArr.map((item, index) => (
      <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={index}>
        <div className="card shadow-sm h-100">
          <div className="row g-0">
            <div className="col-12">
              <img
                src={item.photo}
                className="img-fluid rounded"
                alt="Birthday"
                style={{  height: '100%', width: '100%' }}
              />
            </div>
            <div className="">
              <div className="card-body d-flex flex-column justify-content-center h-100">
                <h5 className="card-title text-primary">{item.heading}</h5>
                <p className="card-text">{item.text}</p>
                <p className="card-text">
                  <strong className="text-warning">Pickup Line:</strong> {item.pickupLine}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
  <div className="mt-3">
    @<a href="https://charming-sunshine-ea4ab2.netlify.app/" target="_blank" rel="noopener noreferrer">About Us</a>
  </div>
</section>

        </>
    );
};

export default Photos;
