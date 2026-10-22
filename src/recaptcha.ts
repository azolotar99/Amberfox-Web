interface GreCaptcha {
  ready: (callback: () => void) => void;
  execute: (siteKey: string, options: { action: string }) => Promise<string>;
}

declare global {
  interface Window {
    grecaptcha?: GreCaptcha;
  }
}

let scriptLoad: Promise<GreCaptcha> | undefined;

/** Loads Google's reCAPTCHA v3 script once; it scores visitors in the background. */
export const loadRecaptcha = (siteKey: string) =>
  (scriptLoad ??= new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js?render=${encodeURIComponent(siteKey)}`;
    script.async = true;
    script.onload = () => window.grecaptcha!.ready(() => resolve(window.grecaptcha!));
    script.onerror = () => {
      scriptLoad = undefined;
      reject(new Error('reCAPTCHA failed to load'));
    };
    document.head.appendChild(script);
  }));

/** Fetches a fresh token for one submission; tokens expire after two minutes. */
export const recaptchaToken = async (siteKey: string, action: string) =>
  (await loadRecaptcha(siteKey)).execute(siteKey, { action });
