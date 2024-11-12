// components/GoogleTranslate.tsx
import { useEffect } from 'react';

const GoogleTranslate = () => {
  useEffect(() => {
    // Set up Google Translate configuration
    window.gtranslateSettings = {
      default_language: "en",
      detect_browser_language: true,
      wrapper_selector: ".gtranslate_wrapper",
    };

    // Add the Google Translate script
    const script = document.createElement('script');
    script.src = "https://cdn.gtranslate.net/widgets/latest/float.js";
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Cleanup
    };
  }, []);

  return <div className="gtranslate_wrapper"></div>;
};

export default GoogleTranslate;