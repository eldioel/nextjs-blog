import Layout from '../../components/layout';
import Image from 'next/image';
import Head from 'next/head';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';

export default function birthday2022() {
  const title = "Birthday Dinner by Bunda"
  const date = "2022-12-20"

  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{title}🤤</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={date} />
        </div>
        <div style={{ position: 'relative', height: '400px' }}>
          <Image
            alt="Eldikun and Violaw"
            src="/images/2022_4.jpg"
            fill
            sizes="(min-width: 808px) 50vw, 100vw"
            style={{
              objectFit: 'cover', // cover, contain, none😆

            }}
          />
        </div>
        <p>
          She's turning 23 already!! 🕧She really is my time machine
        </p>
        <p>
          --placeholder--
        </p>

        <p>
          --placeholder--
        </p>

        <p>
        --placeholder--
        </p>

        <p>
        --placeholder--
        </p>

        <p><b>
          Anyway, I believe its a success for the first celebration as a boyfriend, right?</b>🥺
        </p>

      </article>
    </Layout>

  );
}