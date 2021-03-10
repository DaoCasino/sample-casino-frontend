import React, { useEffect } from 'react';

export function useFixWindowHeight(pathname) {
  useEffect(() => {
    function setCSSParams() {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    }

    setCSSParams();
    window.addEventListener('resize', setCSSParams);
    //window.addEventListener('orientationchange', setCSSParams);
    return () => {
      document.removeEventListener('resize', setCSSParams);
      // document.removeEventListener('orientationchange', setCSSParams);
    };
  }, [pathname]);
}
