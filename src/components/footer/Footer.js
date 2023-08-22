import './Footer.css'
import insta_logo from "./img/Insta.svg";
import mail_logo from "./img/Mail.svg"
import phone_logo from "./img/Phone.svg"
function Footer() {
    return (
        <div className='footer'>
            <div className='wrapper'>
                <div className='footer__wrapper'>
                    <div className='footer__items footer__insta'>
                        <img src={insta_logo} alt='insta' />
                        <div className='footer__insta-name'>frostauto</div>
                    </div>

                    <div className='footer__items footer__mail'>
                        <img src={mail_logo} alt='mail' />
                        <div className='footer__insta-name'>frostauto@gmail.com</div>
                    </div>
                    <div className='footer__phone'>
                        <img src={phone_logo} alt='mail' />
                        <div className='footer__phone-city'>
                            <div className='footer__phone-city_name'>г. Астана</div>
                            <div className='footer__phone-city_number'>8-777-777-77-77</div>
                        </div>
                    </div>
                    <div className='footer__phone'>
                        <img src={phone_logo} alt='mail' />
                        <div className='footer__phone-city'>
                            <div className='footer__phone-city_name'>г. Алматы</div>
                            <div className='footer__phone-city_number'>8-777-777-77-77</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;