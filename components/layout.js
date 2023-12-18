import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import * as emoji from 'node-emoji'
import Link from 'next/link';

const name = 'Happy Birthday Viola!!!';
export const siteTitle = 'Next.js Sample Website';

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/viola.png"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt=""
            />
            <h1 className={utilStyles.heading2Xl}>{name}🎉</h1>
            <p>
              Happy Birthday my dear Viola Dheena Pongajow!<br/>
            </p>
            <p>
              I 💚 You !
            </p>
            <p>
              First, I apologize🙏for this ultra-simple blog style website🚧 that I specifically build for your birthday🍥. 
              Full disclosure, I have thought about building you a website from a few months🌙 ago, imagining flashy animations 🎦, flowers 🌻, and confettis 🎊 as you open the page.
              But as i have realized🙀, I still practically zero knowledge about building beautiful website🥀
            </p>
            <p> 
              Rest asured, this web shall be a multi-year📅 series to celebrate your birthday, to serve as the storage of my wishes🕯️ and celebration for your birthday.
              Also I take the liberty to include your past birthday hopes🌟 and parties <b>for you, my dear</b>🤗💋
            </p>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/images/viola.png"
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt=""
              />
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}