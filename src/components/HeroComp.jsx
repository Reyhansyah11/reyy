import {useState, useEffect} from 'react'
import image1 from '../assets/img/hero/image1.png'
import image2 from '../assets/img/hero/image2.png'
import image3 from '../assets/img/hero/image3.png'
import { useNavigate } from "react-router-dom";

function HeroComp() {

    const navigate = useNavigate();

    const [titleIndex, setTitleIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(true);
    const titles = ["Web Development", "Fullstack Development"];
    const currentTitle = isTyping ? titles[titleIndex] : ""; // Default text after typing animation

    useEffect(() => {
        const interval = setInterval(() => {
        setIsTyping(false); // Stop typing animation
        setTimeout(() => {
          setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length); // Change titleIndex
          setIsTyping(true); // Start typing animation for the new title
        }, 200); // Delay before starting typing animation again
      }, 4000); // Interval for changing titles

    return () => clearInterval(interval);
}, []);


    return (
        <>  
            <div className="hero-section" id='Hero-Section'>
                <div className="hero-left">
                    <p className='dis'>- DISCOVER </p>
                    <h1> Welcome to My Portfolio Website </h1>
                    <p className='special'>Hi. im <span>Reyhan</span>, and im a  {isTyping ? <span className="typing-text">{currentTitle}</span> : null}</p>
                    <button onClick={() => navigate('../Pages/ContactPage')} className='btn btn-primary'>Contact Me</button>
                </div>
                <div className="hero-right">
                    <img src={image1} alt="Hero Image" className='heroimage1' />
                    <img src={image2} alt="Hero Image" className='heroimage2' />
                    <img src={image3} alt="Hero Image" className='heroimage3'/>
                </div>
            </div>
        </>
    );
}
export default HeroComp