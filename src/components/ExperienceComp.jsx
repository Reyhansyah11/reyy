import {} from 'react'

function ExperienceComp() {

    return (
        <div className='experience' id='Experience'>
        <div className='information'>
          <div className="opsi">
            <div className='logo'><i className="fa-solid fa-desktop"></i></div>
            <p>Web Design <span>5 Project</span></p>
          </div>
          <div className="opsi">
            <div className='logo'> <i className="fa-brands fa-figma"></i> </div>
            <p>UI/UX Design <span className='a'>1 Project</span></p>
          </div>
          <div className="opsi">
            <div className='logo'> <i className="fa-solid fa-code"></i> </div>
            <p>Web Dev <span className='b'>0</span> </p>
          </div>
        </div>

        <div className="help">
          <h1>What we do help ?</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae earum mollitia consectetur debitis ipsam laboriosam illo ducimus?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias sequi soluta reprehenderit?
          </p>
          <div className="box">
          <div className='complate'>
            <h2>5 +</h2>
            <p>Project Complate</p>
          </div>
          <div className='on-going'>
            <h2>2 +</h2>
            <p>On Going</p>
          </div>
          </div>
        </div>
      </div>
    );
}
export default ExperienceComp