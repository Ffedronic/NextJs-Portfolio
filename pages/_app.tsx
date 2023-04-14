import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script src="/lib/jquery/jquery.min.js" strategy="beforeInteractive"/>
      <Script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js" strategy="beforeInteractive" />
      <Script src="/lib/typed/typed.min.js" />
      <Script src="/lib/easing/easing.min.js" />
      <Script src="/lib/waypoints/waypoints.min.js" strategy="beforeInteractive"></Script>
      <Script src="/lib/owlcarousel/owl.carousel.min.js" strategy="beforeInteractive"></Script>
      <Script src="/lib/isotope/isotope.pkgd.min.js" strategy="beforeInteractive"></Script>
      <Script src="/lib/lightbox/js/lightbox.min.js"></Script>
      <Script src="/js/main.js"></Script>
      <Component {...pageProps} />
    </>
  );
}
