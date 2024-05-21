import {useState} from 'react'
import NavbarComp from './NavbarComp'
import FooterComp from './FooterComp'

function ContactComp (){
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Lakukan sesuatu dengan data formulir, seperti mengirim ke backend
        console.log(formData);
        // Atau reset formulir
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      };
    
    return(
        <>
        <NavbarComp/>

        <div className="container">

        <div className="head">
            <p>Get in Touch</p>
        </div>

            <div className="left">

                <div className="contact-items">
                    <div className="contact-item">
                        <a href="https://maps.app.goo.gl/YdsGWt1n6JFPZSK47" target="_blank">
                            <div className="icon-box a-con">
                                <i className="fas fa-map-marker-alt"></i>
                            </div>
                        </a>
                        <div>
                            <h3>Address</h3>
                            <p>
                                Mekarsari, Kec. Tambaksari, Kabupaten Ciamis, Jawa Barat
                                46388
                            </p>
                        </div>
                    </div>
                    <div className="contact-item">
                        <a href="https://wa.me/qr/RKTOFX5IYBC2G1" target="_blank">
                            <div className="icon-box a-con"><i className="fas fa-phone"></i></div>
                        </a>
                        <div>
                            <h3>Phone</h3>
                           <p>08 1386 **** 03</p>
                        </div>
                    </div>
                    <div className="contact-item">
                        <a href="mailto:mr.reihansyah@gmail.com" target="_blank">
                            <div className="icon-box a-con"><i className="fas fa-envelope"></i></div>
                        </a>
                        <div>
                            <h3>Email</h3>
                            <p>mr.reihansyah@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>


      <div className="right">
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="name"
            name="name"
            placeholder='Enter your name'
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            id="email"
            name="email"
            placeholder='Enter your email'
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            id="message"
            name="message"
            placeholder='Enter your message'
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" className='btn button-1'>Submit</button>
        </form>
      </div>
    </div>


<FooterComp/>
        </>
        

        
    )
}
export default ContactComp