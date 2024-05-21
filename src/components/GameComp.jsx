import Suit from '../assets/img/game/suit.png'
import NavbarComp from './NavbarComp'
import FooterComp from './FooterComp'

function GameComp (){
    return(
        <>
        <NavbarComp />

        <div className="main-text">
            <h2>
                <span>Mini</span> Game
            </h2>
        </div>

        <div className="portfolio-content">
            <div className="pjk">
                <div className="row">
                <img src={Suit} alt="game Image" className='game1' />
                    <div className="layer">
                        <a href="https://permainansuit.netlify.app/" target='blank'><i className="fa-solid fa-up-right-from-square"></i></a>
                    </div>
                </div>
            </div>
        </div>

        <FooterComp />
        </>
    )
}
export default GameComp
