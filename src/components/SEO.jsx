import { useEffect } from 'react';

const SEO = ({ title, description }) => {
  useEffect(() => {
    // 1. Manage Title
    if (title) {
      document.title = title;
    }

    // 2. Manage Description
    if (description) {
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.name = 'description';
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute('content', description);
    }

    // 3. Manage Favicon
    let linkIcon = document.querySelector('link[rel="icon"]');
    if (!linkIcon) {
      linkIcon = document.createElement('link');
      linkIcon.rel = 'icon';
      linkIcon.type = 'image/png';
      document.head.appendChild(linkIcon);
    }
    linkIcon.href = '/logo.png';

    // 4. Manage Fonts (Google Fonts)
    const fontId = 'google-fonts-siger';
    if (!document.getElementById(fontId)) {
      // Preconnect
      const preconnect1 = document.createElement('link');
      preconnect1.rel = 'preconnect';
      preconnect1.href = 'https://fonts.googleapis.com';
      document.head.appendChild(preconnect1);

      const preconnect2 = document.createElement('link');
      preconnect2.rel = 'preconnect';
      preconnect2.href = 'https://fonts.gstatic.com';
      preconnect2.crossOrigin = 'anonymous';
      document.head.appendChild(preconnect2);

      // Main Font Link
      const fontLink = document.createElement('link');
      fontLink.id = fontId;
      fontLink.rel = 'stylesheet';
      fontLink.href = 'https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&display=swap';
      document.head.appendChild(fontLink);
    }

  }, [title, description]);

  return null;
};

export default SEO;
