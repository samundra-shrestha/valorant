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
  const headingRef =useRef();
  useEffect(() => {
    const logo = largeLogoRef.current;
    const hero = heroImageRef.current;
    const bg = backgroundRef.current;
    const heading = headingRef.current;


    setTimeout(function () {
      logo.style.scale="1";
      hero.style.scale=".92";
      bg.style.setProperty("--bg-color", "var(--red)");
      heading.style.setProperty("--before-stroke-color", "var(--white)");
      heading.style.setProperty("--before-text-color", "var(--red)");
      heading.style.setProperty("--after-text-color", "var(--white)");
      heading.style.setProperty("--effect-opacity", "1");

      setTimeout(function(){
        heading.style.opacity = "0";
      })
    }, 500)
    console.log(logo, hero)
  })
  return (
    <>
      <Head>
        <title>Valorant</title>
        <meta name="description" content="Valorant is a free-to-play first-person tactical hero shooter developed and published by Riot Games, for Windows." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet"  href="https://fonts.cdnfonts.com/css/valorant" />
                
      </Head>
      <main ref={backgroundRef}>
        <div className="logo">
          <Image src={logo} alt='logo'/>
        </div>
        <h1 title="Valorant" ref={headingRef}>Valorant</h1>
        <div className="large__logo" ref={largeLogoRef}>
          <Image src={largeImage} alt='asd' />
        </div>
        <div className="hero__image " ref={heroImageRef}>
          <Image src={heroImage} alt='asd' />
        </div>
      </main>
    </>
  )
}
