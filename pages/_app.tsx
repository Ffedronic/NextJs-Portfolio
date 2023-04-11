import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js" />
      <Script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js" />
      <Script src="/lib/typed/typed.min.js" />
      <Script src="/lib/easing/easing.min.js" />
      <Script src="/lib/waypoints/waypoints.min.js"></Script>
      <Script src="/lib/owlcarousel/owl.carousel.min.js"></Script>
      <Script src="/lib/isotope/isotope.pkgd.min.js"></Script>
      <Script src="/lib/lightbox/js/lightbox.min.js"></Script>
      <Script src="/js/main.js"></Script>
      <Component {...pageProps} />
    </>
  );
}
