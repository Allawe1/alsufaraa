
import { Link } from 'react-router-dom'
import './Footer.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF ,faInstagram } from '@fortawesome/free-brands-svg-icons' 
library.add(faFacebookF , faInstagram); 
const Footer = () =>{
    
    return(
        <div className="footer-basic">
            <div className="social"><a rel="noreferrer" target="_blank" href="https://www.instagram.com/alsufaraabakery/"><FontAwesomeIcon icon={['fab', 'instagram']} /></a><a rel="noreferrer" target="_blank" href="https://www.facebook.com/alsufaraabakery"><FontAwesomeIcon icon={['fab', 'facebook-f']} /></a></div>
            <ul className="list-inline">
                <Link style={{marginRight : '30px'}} className="list-inline-item" to='/Product'>Product</Link>
                <Link style={{marginRight : '30px'}} className="list-inline-item" to='/gallery'>Gallery</Link>
                <Link style={{marginRight : '30px'}} className="list-inline-item" to='/contactUS'>Contact US</Link>
                <Link style={{marginRight : '30px'}} className="list-inline-item" to='/aboutUS'>About us</Link>
            </ul>
            <p className="copyright">Company Name © 2018</p>
        
    </div>
    )
}

export default Footer