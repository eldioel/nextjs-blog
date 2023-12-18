import Layout from '../../components/layout';
import Image from 'next/image';
import Head from 'next/head';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';

export default function birthday2022() {
  const title = "So Far yet so close celebration"
  const date = "2023-12-20"

  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{title}🌏</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={date} />
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
          maaf ya viola, qt trlalu bersemangat da ba coding pas tgl 18 mlm hehe
        </p>

        <p>
          terima kasih radha so bli akang hadiahnya. Ini jamku, mana punyamu? ayo couple-an.
          Segera kirim foto bgni spya tsmo upload dsni eheheh
        </p>

        <div style={{ position: 'relative', height: '400px' }}>
          <Image
            alt="Eldikun and Violaw"
            src="/images/2023_2.png"
            fill
            sizes="(min-width: 808px) 50vw, 100vw"
            style={{
              objectFit: 'cover', // cover, contain, none😆

            }}
          />
        </div>

        <p><b>
          Anyway, I believe its a success for the first celebration as a boyfriend, right?</b>🥺
        </p>

      </article>
    </Layout>

  );
}