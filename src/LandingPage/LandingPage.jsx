import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-container">
      {/* 1. Hero Section */}
      <section className="landing-hero">
        <h1 className="hero-title">Unlimited movies, TV shows, and more.</h1>
        <p className="hero-subtitle">Watch anywhere. Cancel anytime.</p>
        
        <div className="cta-container">
          <p>Ready to watch? Enter your email to create or restart your membership.</p>
          <div className="email-form" style={{marginTop: '20px', display: 'flex', gap: '5px', justifyContent: 'center'}}>
             <input 
               type="email" 
               placeholder="Email address" 
               style={{padding: '15px', width: '350px', fontSize: '1rem'}} 
             />
             <button style={{backgroundColor: '#e50914', color: 'white', border: 'none', padding: '0 30px', fontSize: '1.2rem', cursor: 'pointer'}}>
               Get Started {'>'}
             </button>
          </div>
        </div>
      </section>

      {/* 2. Story Row: TV Section */}
      <section className="story-row">
        <div className="story-text">
          <h1>Enjoy on your TV.</h1>
          <p>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
        </div>
        <div className="story-img-container">
          <img 
            className="story-img" 
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" 
            alt="TV" 
          />
        </div>
      </section>

      {/* 3. Story Row: Mobile (Reversed) */}
      <section className="story-row reverse">
        <div className="story-text">
          <h1>Download your shows to watch offline.</h1>
          <p>Save your favorites easily and always have something to watch.</p>
        </div>
        <div className="story-img-container">
          <img 
            className="story-img" 
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" 
            alt="Mobile" 
          />
        </div>
      </section>

      {/* 4. Story Row: Watch Everywhere */}
      <section className="story-row">
        <div className="story-text">
          <h1>Watch everywhere.</h1>
          <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
        </div>
        <div className="story-img-container">
          <img 
            className="story-img" 
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png" 
            alt="Devices" 
          />
        </div>
      </section>
    </div>
  );
};

export default LandingPage;