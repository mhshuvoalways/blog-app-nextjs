import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Head>
        <title>DaringPage</title>
        <meta
          name="description"
          content="Daring Page is my blog application with nextjs. It is totally SEO friendly. I just tried to clean and simple the UI so that user can use it easily."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:title" content="DaringPage" />
        <meta
          property="og:description"
          content="Daring Page is my blog application with nextjs. It is totally SEO friendly. I just tried to clean and simple the UI so that user can use it easily."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://daringpage.vercel.app" />
        <meta
          property="og:image"
          content="https://daringpage.vercel.app/daringpage.png"
        />
        <meta property="og:image:alt" content="DaringPage" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="DaringPage" />
        <meta
          name="twitter:description"
          content="Daring Page is my blog application with nextjs. It is totally SEO friendly. I just tried to clean and simple the UI so that user can use it easily."
        />
        <meta
          name="twitter:image"
          content="https://daringpage.vercel.app/daringpage.png"
        />
        <meta name="twitter:image:alt" content="DaringPage" />
      </Head>
      <div className={`bg-primary text-primary ${inter.className}`}>
        <Component {...pageProps} />
      </div>
    </SessionProvider>
  );
}
