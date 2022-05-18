import data from "../public/data.json";
import "../styles/globals.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { NextSeo } from "next-seo";
import { AppProps } from "next/app";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  if (typeof window === "object") {
    AOS.init();
  }

  return (
    <>
      {process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL &&
        process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID && (
          <Script
            src={process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL}
            data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
            strategy="lazyOnload"
          />
        )}

      <NextSeo
        title={data.name}
        titleTemplate={data.name}
        defaultTitle={data.name}
        description={data.about}
        canonical={data.website}
        openGraph={{
          url: data.website,
          title: data.name,
          description: data.about,
          images: [
            {
              url: `${data.website}/og-image.png`,
              width: 800,
              height: 420,
              alt: data.name,
            },
          ],
          profile: {
            firstName: "Igor",
            gender: "Male",
            lastName: "Vitalievich",
            username: "kivicom",
          },
        }}
        twitter={{
          handle: "",
          site: "",
          cardType: "summary_large_image",
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
