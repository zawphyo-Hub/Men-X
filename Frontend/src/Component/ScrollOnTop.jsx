import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    // Temporarily remove smooth scroll if it's applied
    const originalHtmlScroll = html.style.scrollBehavior;
    const originalBodyScroll = body.style.scrollBehavior;

    html.style.scrollBehavior = 'auto';
    body.style.scrollBehavior = 'auto';

    window.scrollTo(0, 0);

    // Restore original behavior after the scroll
    setTimeout(() => {
      html.style.scrollBehavior = originalHtmlScroll;
      body.style.scrollBehavior = originalBodyScroll;
    }, 0);
  }, [pathname]);

  return null;
}

export default ScrollToTop;
