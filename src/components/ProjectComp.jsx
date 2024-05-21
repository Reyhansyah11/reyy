import {} from 'react'
import { Link } from 'react-router-dom';

function ProjectComp() {

    return (
        <div className="section-portfolio" id='Portfolio'>
        <div className="project-content">
          <div className="title">
            <p className='dis'>- PORTFOLIO </p>
            <h1>All Creative Works, Selected Project.</h1>
            <p>sed ut perspiciatis unde omnis iste natus error sit ptatem accusantium.</p>
          </div>

          <button className='explore'>
          <Link to="../Pages/PortfolioPage">EXPLORE NOW <i className="fa-solid fa-arrow-right"></i></Link>
          </button>

          <div className="project">
            <div className="right-column">
              <Link to='../Pages/ProjectPage'>
                <div className="box-content big-project">Project.</div>
              </Link>
              <div className="box-content comingsoon">COMING SOON.</div>
            </div>
            <Link to='../Pages/GamePage'>
              <div className="box-content mini-games">Mini Games.</div>
            </Link> 
          </div>
        </div>
        <div className="tittle-prc">
          <h1 className='in-p'>A Working Process</h1>
          <p>i am commited to helping you develop your projects from the discovery, strategy to the design process. suggestions and insight are welcome to improve our works.</p>
        </div>
        <div className="work-prcss">
          <div className="prcss-box">
            <h1>01./DISCOVERY</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
            </p>
          </div>
          <div className="prcss-box">
          <h1>02./STRATEGY</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
            </p>
          </div>
          <div className="prcss-box">
          <h1>03./DESIGN</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
            </p>
          </div>
          <div className="prcss-box">
          <h1>04./DEBUG</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.  Sed do eiusmod tempor incididunt ut labore.
            </p>
          </div>
          <div className="prcss-box">
          <h1>05./TESTER</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.  Sed do eiusmod tempor incididunt ut labore.
            </p>
          </div>
        </div>
      </div>

    );
}
export default ProjectComp