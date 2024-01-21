import css from './Footer.module.css'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";

export const Footer = () =>{
    return(
        <div className={css.footer}>
                <nav className={css.navContainer}>
                    <div className={css.navBox}>
                        <h3>Home</h3>
                        <ul>
                            <li><a href="google.com">Categories</a></li>
                            <li><a href="google.com">Devices</a></li>
                            <li><a href="google.com">Pricing</a></li>
                            <li><a href='google.com'>FAQ</a></li>
                        </ul>
                    </div>
                    <div className={css.navBox}>
                        <h3>Movies</h3>
                        <ul>
                            <li><a href="google.com">Genres</a></li>
                            <li><a href="google.com">Trending</a></li>
                            <li><a href="google.com">Top Rated</a></li>
                            <li><a href='google.com'>Popular</a></li>
                        </ul>
                    </div>
                    <div className={css.navBox}>
                        <h3>TV series</h3>
                        <ul>
                            <li><a href="google.com">Genres</a></li>
                            <li><a href="google.com">Trending</a></li>
                            <li><a href="google.com">Top Rated</a></li>
                            <li><a href='google.com'>Popular</a></li>
                        </ul>
                    </div>
                    <div className={css.navBox}>
                        <h3>Suppport</h3>
                        <ul>
                            <li><a href="google.com">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className={css.navBox}>
                        <h3>Community</h3>
                        <ul>
                            <li><a href="google.com">Join</a></li>
                            <li><a href="google.com">Forum</a></li>
                        </ul> 
                    </div> 
                    <div className={css.navBox}>
                        <h3>Connect with us</h3>
                        <ul className={css.socialsList}>
                            <li><a href="https://github.com/Cherniatynskyi"><FaGithub /></a></li>
                            <li><a href="https://www.linkedin.com/in/mark-cherniatynskyi/"><FaLinkedin /></a></li>
                            <li><a href="https://t.me/OceanCatl"><BsTelegram /></a></li>
                        </ul> 
                    </div>
                </nav>
            <div className={css.subFooter}>
                <p>@2024 Mark Cherniatynskyi, All Rights Reserved</p>
                <ul>
                    <li><a href="google.com">Termes of use</a></li>
                    <li><a href="google.com">Privacy Policy</a></li>
                    <li><a href="google.com">Cookie Policy</a></li>
                </ul>
            </div>
        </div>
    )
}