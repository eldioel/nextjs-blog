import Layout from '../../components/layout';
import Image from 'next/image';
import Head from 'next/head';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';

export default function birthday2021() {
  const title = "Classic Midnight Surpriseeeeee Viola be like:"
  const date = "2021-12-20"

  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{title}😪</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={date} />
        </div>
        <div style={{ position: 'relative', height: '400px' }}>
          <Image
            alt="Eldikun and Violaw"
            src="/images/2021_4.jpg"
            fill
            sizes="(min-width: 808px) 50vw, 100vw"
            style={{
              objectFit: 'cover', // cover, contain, none😆

            }}
          />
        </div>
        <p>
          Ulang Tahun ke-22 Viola adalah yang pertama🥇 setelah menjadi pacarnya eldikunnn!!
        </p>

        <p>
          20 Desember 2021 tuh hari senin beb, bayangkan tpe sayang pa ngana we. Pagi-pagi musti kantor mar tetap tidak pantang menyerah dan tidak akan menyerah❤️‍🔥.
          Dengan prinsip "nd perlu yang mahal2💸 yg penting dpe effort banya", eldikun pun menjalankan rencananya huahuahua.
        </p>

        <p>
          Hadiah dompet kuning dari wallts wallet (supaya couple👩‍❤️‍👨) pun telah disediakan. Namun tentu saja itu bukanlah yang utama.
          Surprise tengah malam bersama teman👫 dan saudara👭 adalah yang utama.
        </p>

        <p>
          Putri, Gianna, Megumi, Elia, Papay, Elia, menjadi komplotan utama untuk surprise tengah malam itu.🪖
          Dan tidak sampai disitu, ternyata ada bala bantuan✊ yang tentu saja (tidak) direncanakan bernama ka kiel dan pacarnya pun datang meramaikan acara kami.
        </p>

        <p>
          Kejutan malam itu tidak berlanjut sampai pagi karena pasukan juga ternyatta punya banyak kerjaan😆.
          Namun untunya bagi eldio, pohon natal🎄 dan viola dengan dress👗 biru-nya masih tetap mau menyambut eldio untuk perayaan lanjutan pada sore harinya
        </p>
        <div style={{ position: 'relative', height: '400px' }}>
          <Image
            alt="Eldikun and Violaw"
            src="/images/2021_1.jpg"
            fill
            sizes="(min-width: 808px) 50vw, 100vw"
            style={{
              objectFit: 'cover', 
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