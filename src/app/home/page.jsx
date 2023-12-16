import React from 'react';
import './page.css';
import Link from 'next/link';
const HomePage = () => {
    return (
        <>
            <div className="home">
                <div className="home_container">
                <div className="header_home">
                    <h2>
                    <span className="label">Official home of</span>
                    <span className="heading">BOBBY</span>
                    </h2>
                    <p>
                    If you love Bobby or are just getting to know him, you’ve come to the
                    right place! This is where you can explore the wonderful world of the
                    blue creature and his skills. Bobby brand has a lot to offer you, from
                    Merchandise, Toys, Games, Contents to Digital Collectibles.
                    </p>
                    <a href="javascript:void(0)" className="btn_cta">
                    <span>
                        <span>Lock Your Land!</span>
                        <span>Dec 04, 2023</span>
                    </span>
                    <svg
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        mirror-in-rtl="true"
                        fill="#000000"
                    >
                        <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                        <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        />
                        <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path d="M10.25 22.987l7.99-9c.51-.57.76-1.28.76-1.99s-.25-1.42-.74-1.98c-.01 0-.01-.01-.01-.01l-.02-.02-7.98-8.98c-1.1-1.24-3.002-1.35-4.242-.25-1.24 1.1-1.35 3-.25 4.23l6.23 7.01-6.23 7.01c-1.1 1.24-.99 3.13.25 4.24 1.24 1.1 3.13.98 4.24-.26z" />{" "}
                        </g>
                    </svg>
                    </a>
                </div>
                <div className="img_home">
                    <img src="images/bobby3.png" alt="" />
                </div>
                </div>
            </div>
            <div className="minigame">
                <div className="box" />
                {/* <svg class="shape" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 676 100" fill="none">
                    <path d="M790 40.7817C790 14.9449 769.055 -6 743.218 -6L-109.913 -6C-133.879 -6 -153.95 12.1509 -156.352 35.9959C-159.589 68.1398 -129.978 93.7727 -98.6297 85.9625L51.1001 48.6581C65.3072 45.1184 80.1539 45.0208 94.4064 48.3731L301.424 97.0667C315.22 100.312 329.579 100.325 343.381 97.1071L551.62 48.5494C566.475 45.0855 581.958 45.3695 596.676 49.3758L730.931 85.921C760.686 94.0204 790 71.6189 790 40.7817Z" fill="#FF7A00"/>
                </svg> */}
                <div className="heading">
                <h3>Mini games</h3>
                </div>
                <div className="minigame_container">
                <a href="javascript:void(0)">
                    <div className="card">
                    <div className="img">
                        <img src="images/minigame2.jpg" alt="" />
                    </div>
                    <div className="text">
                        <div className="title">Bobby World Coming Soon</div>
                        <div className="des">Find Bobby in Fortnite - FFA</div>
                    </div>
                    </div>
                </a>
                <a href="javascript:void(0)">
                    <div className="card">
                    <div className="img">
                        <img src="images/minigame_comingsoon.png" alt="" />
                    </div>
                    <div className="text">
                        <div className="title">Comming Soon</div>
                        <div className="des">Something interesting is waiting for you</div>
                    </div>
                    </div>
                </a>
                <a href="javascript:void(0)">
                    <div className="card">
                    <div className="img">
                        <img src="images/minigame_comingsoon.png" alt="" />
                    </div>
                    <div className="text">
                        <div className="title">Comming Soon</div>
                        <div className="des">Something interesting is waiting for you</div>
                    </div>
                    </div>
                </a>
                {/* <a href="javascript:void(0)">moregame</a> */}
                </div>
                {/* VIDEO TRAILER */}
                <div className="trailer">
                <div className="trailer_container">
                    <div className="dot1 dot" />
                    <div className="dot2 dot" />
                    <div className="heading">
                    <h4>Frenzland</h4>
                    <p>
                        Frenzland invites brands to connect with users and establish their
                        identity in a fun and original way. Users can enjoy various
                        activities such as entertainment, shopping, and camp fire story
                        telling, while creating unforgettable experiences and developing
                        brand loyalty. Also can create your own world.{" "}
                    </p>
                    </div>
                    <div className="video">
                    <iframe
                        width={560}
                        height={315}
                        src="https://www.youtube.com/embed/S1IMUzyp6UE?si=g83aubaImya19jb0"
                        frameBorder={0}
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen=""
                    />
                    </div>
                </div>
                </div>
                {/* NEWS */}
                <div className="news">
                <div className="heading">
                    <h3>Bobby in the news</h3>
                </div>
                <div className="news_container">
                    <div className="card">
                    <div className="video">
                        <video src="./videos/news1.mp4" autoPlay loop muted playsInline />
                    </div>
                    <div className="content">
                        <span className="date">11.20.2023</span>
                        <div className="title_post">POP UP MINT!!</div>
                        {/* <a href="javascript:void(0)"><span>Read more <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" mirror-in-rtl="true" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10.25 22.987l7.99-9c.51-.57.76-1.28.76-1.99s-.25-1.42-.74-1.98c-.01 0-.01-.01-.01-.01l-.02-.02-7.98-8.98c-1.1-1.24-3.002-1.35-4.242-.25-1.24 1.1-1.35 3-.25 4.23l6.23 7.01-6.23 7.01c-1.1 1.24-.99 3.13.25 4.24 1.24 1.1 3.13.98 4.24-.26z"></path> </g></svg></span></a> */}
                    </div>
                    </div>
                    {/* <div className="card">
                    <div className="img">
                        <img
                        src="./images/news2.webp"
                        alt="500 Plots Of Land On December 04, 2023"
                        />
                    </div>
                    <div className="content">
                        <span className="date">11.20.2023</span>
                        <div className="title_post">
                        500 Plots Of Land On December 04, 2023
                        </div>
                        <a href="javascript:void(0)"><span>Read more <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" mirror-in-rtl="true" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10.25 22.987l7.99-9c.51-.57.76-1.28.76-1.99s-.25-1.42-.74-1.98c-.01 0-.01-.01-.01-.01l-.02-.02-7.98-8.98c-1.1-1.24-3.002-1.35-4.242-.25-1.24 1.1-1.35 3-.25 4.23l6.23 7.01-6.23 7.01c-1.1 1.24-.99 3.13.25 4.24 1.24 1.1 3.13.98 4.24-.26z"></path> </g></svg></span></a>
                    </div>
                    </div> */}
                    <div className="card">
                    <div className="img">
                        <img src="./images/news3.webp" alt="Bobby Coming to Vietnam" />
                    </div>
                    <div className="content">
                        <span className="date">11.20.2023</span>
                        <div className="title_post">Bobby Coming to Vietnam !!</div>
                        {/* <a href="javascript:void(0)"><span>Read more <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" mirror-in-rtl="true" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10.25 22.987l7.99-9c.51-.57.76-1.28.76-1.99s-.25-1.42-.74-1.98c-.01 0-.01-.01-.01-.01l-.02-.02-7.98-8.98c-1.1-1.24-3.002-1.35-4.242-.25-1.24 1.1-1.35 3-.25 4.23l6.23 7.01-6.23 7.01c-1.1 1.24-.99 3.13.25 4.24 1.24 1.1 3.13.98 4.24-.26z"></path> </g></svg></span></a> */}
                    </div>
                    
                    </div>
                    <div className="card">
                    <div className="img">
                        <img src="./images/news4.webp" alt="The 000 Unique Bobby&apos;s" />
                    </div>
                    <div className="content">
                        <span className="date">11.20.2023</span>
                        <div className="title_post">The 10,000 Unique Bobby&apos;s</div>
                        {/* <a href="javascript:void(0)"><span>Read more <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" mirror-in-rtl="true" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10.25 22.987l7.99-9c.51-.57.76-1.28.76-1.99s-.25-1.42-.74-1.98c-.01 0-.01-.01-.01-.01l-.02-.02-7.98-8.98c-1.1-1.24-3.002-1.35-4.242-.25-1.24 1.1-1.35 3-.25 4.23l6.23 7.01-6.23 7.01c-1.1 1.24-.99 3.13.25 4.24 1.24 1.1 3.13.98 4.24-.26z"></path> </g></svg></span></a> */}
                    </div>
                    </div>
                    <div />
                    <div />
                    
                </div>
                <div className="btn_seemorenews">
                    <Link href="/news" className="btn_seemore">
                    <span>See more news</span>
                    <svg
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        mirror-in-rtl="true"
                        fill="#000000"
                    >
                        <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                        <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        />
                        <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path d="M10.25 22.987l7.99-9c.51-.57.76-1.28.76-1.99s-.25-1.42-.74-1.98c-.01 0-.01-.01-.01-.01l-.02-.02-7.98-8.98c-1.1-1.24-3.002-1.35-4.242-.25-1.24 1.1-1.35 3-.25 4.23l6.23 7.01-6.23 7.01c-1.1 1.24-.99 3.13.25 4.24 1.24 1.1 3.13.98 4.24-.26z" />{" "}
                        </g>
                    </svg>
                    </Link>
                </div>
                </div>
                <svg
                className="shape2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1548 284"
                fill="none"
                >
                <path
                    d="M1370.44 35.4483C1391.25 51.3857 1418.12 35.5572 1428.96 25.6507C1446.57 -5.17889 1514.99 -0.693909 1547 5.40231V283H1V205.926C28.8423 172.288 102.033 118.466 172.055 172.288C242.078 226.109 305.599 184.915 328.606 157.591C351.947 138.105 408.132 107.166 446.144 139.302C484.156 171.438 536.34 147.249 557.68 131.138C577.52 113.393 628.403 84.8933 673.217 112.849C718.032 140.805 752.91 119.272 764.747 105.011C785.087 82.912 837.471 48.3811 884.286 87.0488C931.101 125.717 975.815 97.0641 992.321 77.9044C1004.82 63.208 1038.34 39.8898 1072.35 64.1878C1106.36 88.4857 1140.54 69.9575 1153.37 57.6561C1168.71 41.7622 1208.19 16.8329 1243.4 44.2661C1278.61 71.6992 1307.42 51.9953 1317.43 38.7141C1326.43 30.9849 1349.64 19.511 1370.44 35.4483Z"
                    fill="#FF7A00"
                    stroke="#FF7A00"
                    strokeWidth={2}
                />
                </svg>
            </div>
            <div className="shopping">
                <div className="shopping_container">
                <div className="card">
                    <div className="img">
                    <img src="./images/playfrenzland.webp" alt="Play Frenzland" />
                    </div>
                    <div className="content">
                    {/* <div class="title">Play Frenzland</div> */}
                    <p className="des">Coming Soon</p>
                    <a href="javascript:void(0)" className="btn">
                        Play Frenzland
                    </a>
                    </div>
                </div>
                <div className="card">
                    <div className="img">
                    <img src="./images/characters.webp" alt="Meet the characters" />
                    </div>
                    <div className="content">
                    {/* <div class="title">Meet the characters</div> */}
                    <p className="des" />
                    <Link href="/characters" className="btn">
                        Meet the characters
                    </Link>
                    </div>
                </div>
                <div className="card">
                    <div className="img">
                    <img src="./images/buyland.webp" alt="Lock your land" />
                    </div>
                    <div className="content">
                    {/* <div class="title">Land</div> */}
                    <p className="des">December 04, 2023</p>
                    <a href="javascript:void(0)" className="btn">
                        Lock your land
                    </a>
                    </div>
                </div>
                <div className="card">
                    <div className="img">
                    <img src="./images/shopping.webp" alt="Start Shopping" />
                    </div>
                    <div className="content">
                    {/* <div class="title">Jupiter Mall</div> */}
                    <p className="des">Coming Soon</p>
                    <a href="javascript:void(0)" className="btn">
                        Start Shopping
                    </a>
                    </div>
                </div>
                </div>
            </div>
        </>

    );
};

export default HomePage;