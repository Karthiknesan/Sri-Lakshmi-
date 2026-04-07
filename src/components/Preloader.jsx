import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import './Preloader.css';

function Preloader() {
  const [isComplete, setIsComplete] = useState(false);
  const leftCurtainRef = useRef(null);
  const rightCurtainRef = useRef(null);
  const logoRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    // Prevent scrolling while preloader is active
    document.body.style.overflow = 'hidden';

    const tl = gsap.timeline({
      onComplete: () => {
        setIsComplete(true);
        document.body.style.overflow = 'auto';
      }
    });

    // 1. Logo glow/scale animation
    tl.fromTo(logoRef.current, 
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1, ease: 'power2.out' }
    )
    // 2. Logo gently fades out
    .to(logoRef.current, {
      scale: 1.1,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.inOut',
      delay: 0.5 // hold logo for a moment
    })
    // 3. Curtains Open
    .to([leftCurtainRef.current, rightCurtainRef.current], {
      xPercent: (index) => index === 0 ? -100 : 100,
      duration: 1.2,
      ease: 'power3.inOut'
    }, "-=0.3") // start slightly before logo fully disappears
    // 4. Hide overall container to stop blocking clicks
    .to(containerRef.current, {
      opacity: 0,
      duration: 0.1,
      display: 'none'
    });

    return () => {
      document.body.style.overflow = 'auto'; // cleanup
    };
  }, []);

  if (isComplete) return null;

  return (
    <div className="preloader-container" ref={containerRef}>
      <div className="curtain left-curtain" ref={leftCurtainRef}></div>
      <div className="curtain right-curtain" ref={rightCurtainRef}></div>
      
      <div className="preloader-logo-wrapper" ref={logoRef}>
        <h1 className="preloader-logo" style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.5rem, 5vw, 5rem)', fontWeight: 700, color: '#1B5E20', filter: 'drop-shadow(0 4px 10px rgba(0,0,0,0.1))', margin: 0 }}>
          Sri Lakshmi <span style={{color: '#F1C40F'}}>Traders</span>
        </h1>
        <div className="preloader-line"></div>
      </div>
    </div>
  );
}

export default Preloader;
