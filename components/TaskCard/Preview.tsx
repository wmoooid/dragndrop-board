import type { NextPage } from 'next';
import Image from 'next/image';
import styles from '../../styles/TaskCard.module.css';
import previewPic from '../../public/preview.jpg';

const Preview: NextPage = () => {
  return (
    <div className={styles.preview}>
      <Image src={previewPic} alt='Task picture' placeholder='blur' layout='fill' objectFit='cover' />
    </div>
  );
};

export default Preview;
