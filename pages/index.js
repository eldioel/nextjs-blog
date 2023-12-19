import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  const response = await fetch(
    'https://pokeapi.co/api/v2/pokemon/pikachu');
  const data = await response.json();

  return {
    props: {
      allPostsData,
      allPokemons: data.abilities
    },
  };
}

export default function Home({ allPostsData, allPokemons }) {
  return (
    <Layout home>
      {/* Keep the existing code here */}

      {/* Add this <section> tag below the existing <section> tag */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Here we go</h2>
        <ul className={utilStyles.list}>
          {/* {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))} */}
          <li className={utilStyles.listItem}>
            <Link href={`/posts/birthday-2020`} className={utilStyles.linkBlog}>🎬2020's birthday where we still 🎎friends</Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={'2020-12-20'} />
            </small>
          </li>
          
          <li className={utilStyles.listItem}>
            <Link href={`/posts/birthday-2021`} className={utilStyles.linkBlog}>2021's midnight🌃 surprise with friends and family</Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={'2021-12-20'} />
            </small>
          </li>

          <li className={utilStyles.listItem}>
            <Link href={`/posts/birthday-2022`} className={utilStyles.linkBlog}>2022's viola's home🏠 birthday dinner🍴</Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={'2022-12-20'} />
            </small>
          </li>

          <li className={utilStyles.listItem}>
            <Link href={`/posts/birthday-2023`} className={utilStyles.linkBlog}>2023's first long distance✈️ birthday</Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={'2023-12-20'} />
            </small>
          </li>
        </ul>

      </section>

    </Layout>
  );
}

// export async function getStaticProps() {

//   
// }