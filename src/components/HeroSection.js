


//import { Button } from 'react-bootstrap/Button';
import hero from '../assets/images/hero-sec.png';
function HeroSection() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col col-lg-6 col-sm-12 p-4' >
        
            <h1 className='p-4'>Discover, collect,  and charity in extraordinary NFT marketplace</h1>
            <p className='p-4'>In aenean posuere lorem risus nec. Tempor tincidunt aenean purus purus vestibulum nibh mi venenatis</p>
            
            <div className='row'>
              <div className='col col-6 p-4'>
                <button className='bg-primary'>Explore</button>
              </div>
              <div className='col col-6 p-4'>
                <button>Create</button>
              </div>
              
            </div>
        </div>
        <div className='col col-lg-6 col-sm-12' >
        <img
          height={350}
          className="d-block w-100"
          src={hero}
          alt="hero"
        />
        </div>
      </div>

    </div>

  );
}

export default HeroSection;