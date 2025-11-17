import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// JavaScript fallback: Remove Spline watermark elements
const removeSplineWatermark = () => {
  // Find elements containing "Built with spline" text
  document.querySelectorAll('*').forEach(el => {
    const text = el.textContent?.toLowerCase() || '';
    if (text.includes('built with spline') ||
        text.includes('spline.design') ||
        text.includes('spline watermark')) {
      el.style.display = 'none';
    }
  });

  // Target common Spline watermark patterns
  const watermarkSelectors = [
    'div[class*="spline"]',
    'div[class*="watermark"]',
    'a[href*="spline.design"]',
    '[data-spline-watermark]',
    '.spline__watermark',
    'div[style*="position: fixed"][style*="bottom"][style*="right"]'
  ];

  watermarkSelectors.forEach(selector => {
    document.querySelectorAll(selector).forEach(el => {
      // Check if it's likely a watermark (avoid hiding legitimate content)
      const style = window.getComputedStyle(el);
      const position = style.position;
      const bottom = style.bottom;
      const right = style.right;
      const zIndex = style.zIndex;

      if ((position === 'fixed' && bottom && right) ||
          (zIndex && parseInt(zIndex) > 1000)) {
        el.style.display = 'none';
      }
    });
  });
};

// Run immediately and periodically to catch dynamic watermarks
removeSplineWatermark();
setInterval(removeSplineWatermark, 1000);

// Also run when DOM changes
if (window.MutationObserver) {
  const observer = new MutationObserver(() => {
    setTimeout(removeSplineWatermark, 100);
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true
  });
}

createRoot(document.getElementById("root")!).render(<App />);
