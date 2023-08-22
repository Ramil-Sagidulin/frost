import './Header_banner.css'
import header_banner_img from './img/Banner 01.png'
function Header_banner(){
   return(
    <div className='header_banner'>
      <img src={header_banner_img} className='header_bottom__banner' alt='banner'/>
    </div>
   ) 
}
export default Header_banner;