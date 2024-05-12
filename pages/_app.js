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
      </Head>
      <div className={`bg-primary text-primary ${inter.className}`}>
        <Component {...pageProps} />
      </div>
    </SessionProvider>
  );
}
