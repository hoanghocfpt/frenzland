'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import SignUp from './popup/signUp';
import SignIn from './popup/signIn';

const Header = () => {
    const [navbarOpen, setNavbarOpen] = useState(false); // Mở rộng menu mobile
    const [isSignUp, setSignUp] = useState(false);
    const [isSignIn, setSignIn] = useState(false);

    const handleNavbarOpen = () => {
        setNavbarOpen(true);
    }
    const handleNavbarClose = () => {
        setNavbarOpen(false);
    }
    const handleLoginClick = () => {
        setSignIn(true); // Mở popup đăng nhập
    };

    const handleSignUpClick = () => {
        setSignUp(true); // Mở popup đăng ký
        setSignIn(false); // Đóng popup đăng nhập
    };

    const handleSignInClick = () => {
        setSignIn(true); // Mở popup đăng nhập
        setSignUp(false); // Đóng popup đăng ký
    };


    const handleCloseClick = () => {
        setSignIn(false); // Đóng popup đăng nhập
        setSignUp(false); // Đóng popup đăng ký
    };
    return (

            <header>
                <SignUp isActive={isSignUp} onSignInClick={handleSignInClick} onCloseClick={handleCloseClick} />
                <SignIn isActive={isSignIn} onSignUpClick={handleSignUpClick} onCloseClick={handleCloseClick} />
                <div className="nav_sub">
                    <div className="logo_text logo_frenzland">Frenzland</div>
                    <div className="noti">
                    <div className="text">
                        <span>
                        BOBBY, THE BLUE CREATURE, HAS 10,000 UNIQUE COLLECTIBLES COMING SOON!!
                        </span>
                        <img src="/images/bobbyface.png" width="30px" alt="" />
                        <span>
                        BOBBY, THE BLUE CREATURE, HAS 10,000 UNIQUE COLLECTIBLES COMING SOON!!
                        </span>
                        <img src="/images/bobbyface.png" width="30px" alt="" />
                        <span>
                        BOBBY, THE BLUE CREATURE, HAS 10,000 UNIQUE COLLECTIBLES COMING SOON!!
                        </span>
                        <img src="/images/bobbyface.png" width="30px" alt="" />
                        <span>
                        BOBBY, THE BLUE CREATURE, HAS 10,000 UNIQUE COLLECTIBLES COMING SOON!!
                        </span>
                        <img src="/images/bobbyface.png" width="30px" alt="" />
                        <span>
                        BOBBY, THE BLUE CREATURE, HAS 10,000 UNIQUE COLLECTIBLES COMING SOON!!
                        </span>
                        <img src="/images/bobbyface.png" width="30px" alt="" />
                        <span>
                        BOBBY, THE BLUE CREATURE, HAS 10,000 UNIQUE COLLECTIBLES COMING SOON!!
                        </span>
                    </div>
                    </div>
                    <div className="right">
                    {/* <div className='icon_reward'>
                        <a href='https://reward.frenzland.com/' target='_plank'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            >
                            <path
                                d="M8.33441 6.48167L16.3344 7.48489L20.8617 3.80643L16.1029 1.8L7.69132 2.00579L3.34406 4.3209L8.33441 6.48167Z"
                                fill="#7CFFF9"
                            />
                            <path
                                d="M8.33443 6.48166L6.328 12.0637L17.9036 12.4495L15.7685 6.48166H8.33443Z"
                                fill="#00A5EC"
                            />
                            <path
                                d="M15.7686 6.48166L20.8618 3.80642L24.0001 7.15047L17.6206 12.1408L15.7686 6.48166Z"
                                fill="#00DBFF"
                            />
                            <path
                                d="M3.34405 4.3209L0 8.25659L6.32797 12.0637L8.3344 6.48167L3.34405 4.3209Z"
                                fill="#00DCFF"
                            />
                            <path
                                d="M6.328 12.0637L12.373 22.4817L17.6206 12.1408L6.328 12.0637Z"
                                fill="#105BC4"
                            />
                            <path
                                d="M0 8.25659L12.373 22.4817L6.32797 12.0637L0 8.25659Z"
                                fill="#2181E5"
                            />
                            <path
                                d="M24.0001 7.15047L12.373 22.4817L17.6206 12.1408L24.0001 7.15047Z"
                                fill="#00AFFF"
                            />
                            <path
                                d="M3.34406 4.3209L20.8617 3.80643L16.1029 1.8L7.69132 2.00579L3.34406 4.3209Z"
                                fill="#B6FFF9"
                            />
                            <path
                                d="M6.328 12.0637C6.328 12.0637 6.7653 9.2598 8.33444 6.48166C7.94858 8.8225 6.328 12.0637 6.328 12.0637Z"
                                fill="#7CFFF9"
                            />
                            <path
                                d="M15.7685 6.48166C15.537 7.9479 17.3377 11.8321 17.6206 12.1408C17.5435 10.2116 15.7685 6.48166 15.7685 6.48166Z"
                                fill="#7CFFF9"
                            />
                        </svg>

                        </a>
                    </div> */}
                    <div className="btn login" onClick={handleLoginClick} id="login">
                        <span>Login</span>
                    </div>
                    </div>
                </div>
                <nav className={`main ${navbarOpen ? 'active' : ''}`}>
                    <div className="close" onClick={handleNavbarClose}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                    </div>
                    <div className="navbar" onClick={handleNavbarOpen}>
                    <svg
                        width={24}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
                        />
                    </svg>
                    </div>
                    <ul>
                    <li>
                        <Link href="/home">Home</Link>
                    </li>
                    <li>
                        <Link href="https://shop.frenzland.com/" target="_blank">Shop</Link>
                    </li>
                    <li>
                        <Link href="javascript:void(0)">Map</Link>
                    </li>
                    <li>
                        <Link href="/characters">Characters</Link>
                    </li>
                    <li>
                        <Link href="/news">News</Link>
                    </li>
                    <img src="/images/bobbyface.png" alt="" />
                    </ul>
                </nav>
            </header>

    );
};

export default Header;