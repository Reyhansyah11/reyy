import Bp1 from '../assets/img/Big/Bp1.png'
import NavbarComp from './NavbarComp'
import FooterComp from './FooterComp'

function BigComp (){
    return(
        <>
        <NavbarComp />

        <div className="main-text">
            <h2>
                Project
            </h2>
        </div>

        <div className="portfolio-content">
            <div className="pjk">
                <div className="row">
                <img src={Bp1} alt="game Image" className='Bp1' />
                    <div className="layer">
                        <a href="https://bimble-restu.netlify.app/" target='blank'><i className="fa-solid fa-up-right-from-square"></i></a>
                    </div>
                </div>
            </div>
        </div>

        <FooterComp />
        </>
    )
}
export default BigComp
