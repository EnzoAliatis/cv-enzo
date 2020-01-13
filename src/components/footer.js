import React from "react"
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa"
import { MdEmail } from "react-icons/md"


const Footer = () => {
  return (
    <footer className="footer myfooter">
      <div className="content has-text-centered">
        <h3 className="subtitle is-3" style={{ color: "#fff" }}>
          Contacts
        </h3>
        <div className="column is-three-quarters" style={{margin: 'auto'}}>
          <div className="columns is-centered">
            <div className="column has-text-centered is-content-centered">
              <FaGithub size={28} color='#fff'/> <span style={{marginLeft: 5, color:'#fff' }}>EnzoAliatis</span>
            </div>
            <div className="column has-text-centered is-content-centered">
              <FaTwitter size={28} color='#00acee'/> <span style={{marginLeft: 5, color:'#00acee'}}>@enzo23</span>
            </div>
            <div className="column has-text-centered is-content-centered">
              <FaLinkedin size={28} color='#0e76a8'/> <span style={{marginLeft: 5, color:'#0e76a8'}}>enzo-aliatis</span>
            </div>
            <div className="column has-text-centered is-content-centered">
              <MdEmail size={28} color='#fff' /> <span style={{marginLeft: 5, color:'#fff'}}>enzo.aliatis@gmail.com</span>
            </div>
          </div>
          <div className="column" style={{margin:'auto'}}>
            <h4 className='is-5 has-text-grey-dark'>© 2016-2020</h4>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
