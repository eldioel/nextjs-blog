import Layout from '../../components/layout';
import Image from 'next/image';
import Head from 'next/head';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';

export default function birthday2022() {
  const title = "Birthday Dinner by ejcooks"
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
            We kinda agree we have moved past midnight surprises😛. But I'm stuck with work all day😫.
            Fortunately, we still have an intimate dinner🍽️ in viola's house, viola looking as stunning as ever🦋, complimented with that gorgeous green-dress, blessed by the best cuisine in town by Bunda🥰
        </p>
        <p>
          I remember that viola is kinda upset because of me turning up late⏰ and got worked up with work so that I'm kinda detached from her birthday.
          But rest asured, because of my cunning charm dan lovely words😎 I was able to melt viola's icy heart🧊 huahuahua.
        </p>
        <p>
          After a bit of seducing👄 and a huge bite of food, I gifted viola with a Parker Pen🖊️ which she also said that she inteded to gift me that pen too.
          I also remember viola claimed🤓 that the color is purple, which is clearly not the case,🔍 it is definately silver babeee.
        </p>

        <p>
          "May that fancy pen serve the masters degree student to sign many documents"📑 we agreed, and then proceed to sign on my hand👏 as an ownership proof.
          Well, congratulations🎊 I'm officially and documentally yours, dear Viola💛
        </p>

        <p>
          And then the party was obviously interupted by a journalist and a doctor😮‍💨
        </p>

        <p><b>
            The intimate birthday dinner was really nice, hopefully the next will in our own home🏡 hehehe
            </b>  
        </p>

      </article>
    </Layout>

  );
}