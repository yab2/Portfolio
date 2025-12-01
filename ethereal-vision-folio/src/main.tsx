import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Safe Spline watermark removal - runs after React mounts
const removeSplineWatermark = () => {
  try {
    // Only target very specific, safe selectors
    const watermarkSelectors = [
      'a[href*="spline.design"]',
      '[data-spline-watermark]',
      '.spline__watermark',
      'div.spline-watermark'
    ];

    watermarkSelectors.forEach(selector => {
      try {
        document.querySelectorAll(selector).forEach(el => {
          el.style.display = 'none';
        });
      } catch (e) {
        // Silently ignore selector errors
      }
    });

    // Very conservative text-based targeting
    document.querySelectorAll('*').forEach(el => {
      try {
        const text = el.textContent?.trim() || '';
        if (text === 'Built with spline' ||
            text === 'built with spline' ||
            text === 'SPLINE') {
          // Additional safety check: only hide small fixed-position elements
          const style = window.getComputedStyle(el);
          if (style.position === 'fixed' &&
              parseInt(style.zIndex) > 1000) {
            el.style.display = 'none';
          }
        }
      } catch (e) {
        // Silently ignore element errors
      }
    });
  } catch (e) {
    // Silently ignore all errors to prevent breaking the app
  }
};

// Wait for DOM to be fully loaded, then run once
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', removeSplineWatermark);
} else {
  setTimeout(removeSplineWatermark, 1000);
}

createRoot(document.getElementById("root")!).render(<App />);
