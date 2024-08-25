import './Header_banner.css'
import header_banner_img from './img/Banner 01.png'
import header_banner_img2 from './img/banner 02.jpg'
import { useState } from 'react'

function Header_banner() {
    const bannerImgs = [header_banner_img, header_banner_img2,];
    const [bannerImg, setBannerImg] = useState(0);

    function leftCklick() {
        for (const key in bannerImgs) {
            if (key == bannerImg && bannerImg != 0) {
                setBannerImg(bannerImg - 1);
            }
            else {
                setBannerImg(bannerImgs.length - 1);
            }
        }
    }
    function rightCklick() {
        for (const key in bannerImgs) {
            if (bannerImg != bannerImgs.length - 1) {
                console.log(bannerImg);
                setBannerImg(bannerImg + 1);
            }
            else {
                setBannerImg(0)
            }
        }
    }
    return (
        <div className='header_banner'>
            <div className='arrow-left' onClick={leftCklick} />
            <img className='banner' src={bannerImgs[bannerImg]} />
            <div className='arrow-right' onClick={rightCklick} />
        </div>
    )
}

export default Header_banner;