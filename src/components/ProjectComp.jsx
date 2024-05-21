import {} from 'react'
import { Link } from 'react-router-dom';

function ProjectComp() {

    return (
        <div className="section-portfolio" id='Portfolio'>
        <div className="project-content">
          <div className="title">
            <p className='dis'>- PORTFOLIO </p>
            <h1>All Creative Works, Selected Project.</h1>
            <p>Yet, to chase dreams, we must embrace challenges and the required journey.</p>
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
            Understanding project requirements and gathering essential information for a successful outcome.
            </p>
          </div>
          <div className="prcss-box">
          <h1>02./STRATEGY</h1>
            <p>
            Developing a clear plan and strategy to ensure all objectives are met efficiently and effectively.
            </p>
          </div>
          <div className="prcss-box">
          <h1>03./DESIGN</h1>
            <p>
            Creating visually appealing and user-friendly designs that enhance user experience and engagement.
            </p>
          </div>
          <div className="prcss-box">
          <h1>04./DEBUG</h1>
            <p>
            Identifying and fixing issues in the code to ensure the application runs smoothly and without errors.
            </p>
          </div>
          <div className="prcss-box">
          <h1>05./TESTER</h1>
            <p>
            Thoroughly testing the application to guarantee functionality and performance before deployment.
            </p>
          </div>
        </div>
      </div>

    );
}
export default ProjectComp