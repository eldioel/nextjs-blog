import Layout from '../../components/layout';
import Image from 'next/image';
import Head from 'next/head';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';
import * as emoji from 'node-emoji'

export default function birthday2020() {
  const title = "A Friend's Message"
  const date = "2020-12-20"

  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{title}📧</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={date} />
        </div>
        <div>
          <p>
          habede yg ke-21 violaaaa~
          </p>

          <p>
          Gila sih so 21 hihhi so umur dewasa kmgg, nd sangka prtama kali bkdpa ng msh 14🤣🤣
          </p>

          <p>
          Duh mmg btul bnya sx hal yg berubah dari ng jelas berubah jdi org yg keren bgt! Mar ttp ta msh berasa ng tuh msh sama dgn yg pas da mintol qt jdi seksi prlengkapan cma krna qt dri eben🤣🤣
          </p>

          <p>
          Harapan”,, yg jelas smoga slalu sehat anda dan keluarga, jgn bnya bapontarr, smoga slalu dilindungi dari sgla pnyakit”, smoga makin cantik makin putihhhhh. Smoga dlm tugas sbgai ketua bem jadi lebih dewasa, ttau nd ena sx mar viola yg ttau itu slalu kasih yg trbaik, jgn lupa hak” pas menjabat tuh diambil😏 dg jgn lupa tmg no pfff, jgn ragu” lagi, msti jdi sma dg dalmi yg tenang dan tegas ambe keputusannn. Sudah peduli amat dg orang” ng nd prlu se senang smua orang well agak ssh sih mar setidaknya coba okey
          </p>

          <p>
          Oiya, agak sedih sih mmg tahun ini ya. Skli” ba sedih” jga ndpp sih mar jgn trlalu brkepanjangann hihi. 
          </p>

          <p><b>
          I wish you a hopeful birthdayy!🌻</b>
          </p>
        </div>
      </article>
    </Layout>

  );
}