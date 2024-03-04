import React, { useEffect } from 'react';

function AdSenseScript() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4847965526054512";
    script.async = true;
    script.crossOrigin = "anonymous";
    document.body.appendChild(script);

        // Reklamı sayfaya eklemek için
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }, []);

    return (
        <div>
            <ins className="adsbygoogle"
                style={{display:'block'}}
                data-ad-client="ca-pub-4847965526054512"
                data-ad-slot="2762370418"
                data-ad-format="auto"
                data-full-width-responsive="true"></ins>
        </div>
    );
}

export default AdSenseScript;
