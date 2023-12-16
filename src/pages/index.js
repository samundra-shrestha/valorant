import Head from 'next/head'
import Image from 'next/image'
// import styles from '@components/styles/Home.module.scss'
import largeImage from '@images/large-logo.svg';
import heroImage from '@images/hero__image.png';
import logo from '@images/logo.svg';
import { useEffect, useRef } from 'react';


export default function Home() {
  const largeLogoRef = useRef();
  const heroImageRef = useRef();
  const backgroundRef = useRef();
  const headingRef = useRef();
  const nameOneRef = useRef();
  const nameTwoRef = useRef();
  useEffect(() => {
    const logo = largeLogoRef.current;
    const hero = heroImageRef.current;
    const bg = backgroundRef.current;
    const heading = headingRef.current;
    const nameOne = nameOneRef.current;
    const nameTwo = nameTwoRef.current;


    setTimeout(function () {
      logo.style.scale = "1";
      hero.style.scale = ".92";
      bg.style.setProperty("--bg-color", "var(--red)");
      heading.style.setProperty("--before-stroke-color", "var(--white)");
      heading.style.setProperty("--before-text-color", "var(--red)");
      heading.style.setProperty("--after-text-color", "var(--white)");
      heading.style.setProperty("--effect-opacity", "1");
      nameOne.style.setProperty("--name-color", "var(--white)")
      nameTwo.style.setProperty("--name-color", "var(--white)")
      nameOne.style.setProperty("--after-opacity", "1")
      nameTwo.style.setProperty("--after-opacity", "1")
      nameOne.style.scale="1";
      nameTwo.style.scale="1";

      setTimeout(function () {
        heading.style.opacity = "0";
      })
    }, 750)
    console.log(logo, hero)
  })
  return (
    <>
      <Head>
        <title>Valorant</title>
        <meta name="description" content="Valorant is a free-to-play first-person tactical hero shooter developed and published by Riot Games, for Windows." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.cdnfonts.com/css/valorant" />

        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Valorant " />
        <meta property="og:description"
          content="Valorant is a free-to-play first-person tactical hero shooter developed and published by Riot Games, for Windows." />
        <meta property="og:site_name" content="Valorant" />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:image:secure_url" content="/og-image.png" />
        <meta property="og:image:width" content="500" />
        <meta property="og:image:height" content="363" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:description"
          content="Valorant is a free-to-play first-person tactical hero shooter developed and published by Riot Games, for Windows." />
        <meta name="twitter:title" content="Valorant" />
        <meta name="twitter:image" content="/og-image.png" />

      </Head>
      <main ref={backgroundRef}>
        <div className="logo">
          <Image src={logo} alt='logo' />
        </div>
        <h1 title="Valorant" ref={headingRef}>Valorant</h1>
        <div className="large__logo" ref={largeLogoRef}>
          <Image src={largeImage} alt='asd' />
        </div>
        <div className="hero__image " ref={heroImageRef}>
          <Image src={heroImage} alt='asd' />
        </div>
        <div className="left__side name__box">
          <h2 title="PHOENIX" ref={nameOneRef}>
            PHOENIX
          </h2>
          <a href="#">
            <svg width="100%" height="100%" viewBox="0 0 41 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 12.5C24 19.1274 18.6274 24.5 12 24.5C5.37258 24.5 0 19.1274 0 12.5C0 5.87258 5.37258 0.5 12 0.5C18.6274 0.5 24 5.87258 24 12.5Z" fill="white" fill-opacity="0.2" />
              <path d="M18 12.5V14.5H41L34 6.5H32L37 12.5H18Z" fill="white" />
            </svg>
            Catch Phoenix</a>
        </div>
        <div className="right__side name__box">
          <h2 title="JETT" ref={nameTwoRef}>
            JETT
          </h2>
          <a href="#">
            <svg width="100%" height="100%" viewBox="0 0 41 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 12.5C24 19.1274 18.6274 24.5 12 24.5C5.37258 24.5 0 19.1274 0 12.5C0 5.87258 5.37258 0.5 12 0.5C18.6274 0.5 24 5.87258 24 12.5Z" fill="white" fill-opacity="0.2" />
              <path d="M18 12.5V14.5H41L34 6.5H32L37 12.5H18Z" fill="white" />
            </svg>
            Catch Jett</a>
        </div>
      </main>
    </>
  )
}
