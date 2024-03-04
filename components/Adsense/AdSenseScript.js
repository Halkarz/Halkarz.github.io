import React, { useEffect } from 'react';

function AdSenseScript() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4847965526054512";
    script.async = true;
    script.crossOrigin = "anonymous";
    document.body.appendChild(script);

    return () => {
      // Komponent kaldırıldığında script'i temizle
      document.body.removeChild(script);
    };
  }, []);

  return null; // Bu bileşen herhangi bir şey render etmemeli
}

export default AdSenseScript;
