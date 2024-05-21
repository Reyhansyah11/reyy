import {} from 'react'
import Grup1 from '../assets/img/me/Group 1.png'

function AboutComp() {
    return (
        <div className="about-section" id='About'>
          <div className="content-left">
            <div className="profile">
              <div className="photo">
                <img src={Grup1} alt="" className='photo-profile'/>
                <div className="info-content">
                  <h2>Muhamad Restu Reihansyah</h2>
                  <a href="" className='gmail'>mr.reihansyah@gmail.com</a>
                </div>
              </div>
                <button className='button btn-secondary'> Download CV <i className='bx bxs-download bx-tada' ></i> </button>
            </div>
          </div>
          <div className="content-right">
            <div className="about">
              <h1>About Me</h1>
              <p className='icon'> <i className='bx bx-badge-check bx-flashing' ></i> Open to Work</p>
              <div className="about-me-content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </p>
              </div>
            </div>
            <div className="roles">
              <h1>
                Lastest Roles.
              </h1>
              <div className="main-apps">
                <h3>Main Apps.</h3>
                <div className="AP">
                  <i className="icon-app">
                    <span className="iconify" data-icon="vscode-icons:file-type-vscode"></span>
                  </i>
                  <div className="app-info">
                    <h2>Coding</h2>
                    <p>Front End & Back End</p>
                  </div>
                </div>
                <div className="AP">
                  <i className="icon-app">
                    <span className="iconify" data-icon="logos:figma"></span>
                  </i>
                  <div className="app-info figma">
                    <h2>Design</h2>
                    <p>UI/UX Designer</p>
                  </div>
                </div>
              </div>
              <div className="skill">
                <h3>My Skills.</h3>
                <div className="main-skill">
                  <span className="iconify" data-icon="vscode-icons:file-type-html"></span>
                </div>
                <div className="main-skill">
                  <span className="iconify" data-icon="vscode-icons:file-type-css"></span>
                </div>
                <div className="main-skill">
                  <span className="iconify" data-icon="vscode-icons:file-type-js-official"></span>
                </div>
                <div className="main-skill">
                  <span className="iconify" data-icon="logos:react"></span>
                </div>
                <div className="main-skill">
                  <span className="iconify" data-icon="logos:bootstrap"></span>
                </div>
                <div className="main-skill">
                  <span className="iconify" data-icon="devicon:php"></span>
                </div>
                <div className="main-skill">
                  <span className="iconify" data-icon="logos:java"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
}
export default AboutComp