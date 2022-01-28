import type { NextPage } from 'next';
import Head from 'next/head';
import SectionHeading from '../components/SectionHeading';
import TaskList from '../components/TaskList';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Task manager</title>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link href='https://fonts.googleapis.com/css2?family=Noto+Sans+Display:wght@300;400;500;600;700&display=swap' rel='stylesheet' />
      </Head>
      <main>
        <SectionHeading />
        <TaskList />
      </main>
    </div>
  );
};

export default Home;
