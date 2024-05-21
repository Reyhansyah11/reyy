
import { Link } from 'react-router-dom';
import NavbarComp from './NavbarComp'
import FooterComp from './FooterComp'

function PortfolioComp (){
    return(
        <>
        <NavbarComp/>

        <section className="services" id="servis">

        <div className="services-content" data-aos="zoom-in-down" data-aos-delay="200">
            <Link to='../Pages/GamePage'>
                <div className="boxx">
                    <div className="s-icon">
                        <i className="fa-solid fa-gamepad"></i>
                    </div>
                    <h3>Mini Game</h3>
                </div>
            </Link>

            <Link to='../Pages/MprojectPage'>
            <div className="boxx">
                <div className="s-icon">
                    <i className="fa-regular fa-pen-to-square"></i>
                </div>
                <h3>Mini Project</h3>
            </div>
            </Link>

            <Link to='../Pages/ProjectPage'>
            <div className="boxx">
                <div className="s-icon">
                    <i className="fa-solid fa-code"></i>
                </div>
                <h3>Project</h3>
            </div>
            </Link>

        </div>
    </section>

    <FooterComp/>
        </>
    )
}
export default PortfolioComp