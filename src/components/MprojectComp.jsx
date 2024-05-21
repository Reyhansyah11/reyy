import Mp1 from '../assets/img/mini/Mp1.png'
import Mp2 from '../assets/img/mini/Mp2.png'
import NavbarComp from './NavbarComp'
import FooterComp from './FooterComp'

function MprojectComp (){
    return(
        <>
        <NavbarComp />

        <div className="main-text">
            <h2>
                <span>Mini</span> Project
            </h2>
        </div>

        <div className="portfolio-content">

            <div className="pjk">
                <div className="row">
                    <img src={Mp1} alt="game Image" className='Mp1' />
                    <div className="layer">
                        <a href="https://reyhansyah11.github.io/Bom/" target='blank'><i className="fa-solid fa-up-right-from-square"></i></a>
                    </div>
                </div>
            </div>

            <div className="pjk 1">
                <div className="row">
                    <img src={Mp2} alt="game Image" className='Mp2' />
                    <div className="layer">
                        <a href="https://reyhansyah11.github.io/musik/" target='blank'><i className="fa-solid fa-up-right-from-square"></i></a>
                    </div>
                </div>
            </div>

        </div>


        <FooterComp />

        </>
    )
}
export default MprojectComp
