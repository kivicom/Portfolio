import data from "../public/data.json";
import { Html, Main, NextScript, Head } from "next/document";

const Document = () => {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="RSS"
          href={`${data.website}/rss.xml`}
        />
        <meta property="og:image" content={`${data.website}/og-image.png`} />
        <meta
          name="keywords"
          content="Avneesh, Agarwal, Avneesh Agarwal, web dev, blogger, content creator"
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon.png"></link>
        <meta name="theme-color" content="#fff" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
