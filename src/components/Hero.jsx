const HeroSection = () =>{
    return (
    <main className="hero container">
        <div className="hero-content">
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>Your feet deserve the best and where here to help with our
                shoes. Your feet deserve the best and where here to help you with out
                 shoes.
             </p>
             <div className="hero-btn">
                <button>Shop now</button>
                <button className="secondary-btn">Catergory</button>
             </div>
             <div className="shopping">
                <p>Also Available on</p>
             </div>

             <div className="brand-icons">
                <img src=".\images\amazon.png" alt="amazon.logo"  />
                
                <img src=".\images\amazon.png" alt="amazon.logo"  />
             </div>
        </div>
        <div className="hero-img">
            
        <img src=".\images\shoe_image.png" alt="shoe.logo"  />
        </div>
    </main>
    );
}

export default HeroSection;