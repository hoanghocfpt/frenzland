import Link from 'next/link';
import React from 'react';
import Popup from './popup/page';

const Header = () => {
    return (
        <header>
            <Popup></Popup>
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
                <div className="btn login" id="login">
                    <span>Login</span>
                </div>
                </div>
            </div>
            <nav className="main">
                <div className="close">
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
                <div className="navbar">
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
                    <Link href="/marketplace">Marketplace</Link>
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