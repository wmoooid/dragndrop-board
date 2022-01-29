import Image from 'next/image';
import styles from './TaskCard.module.css';
import previewPic from '../../public/preview.jpg';

const Preview: React.FC = () => {
  return (
    <div className={styles.preview}>
      <Image src={previewPic} alt='Task picture' placeholder='blur' layout='fill' objectFit='cover' />
    </div>
  );
};

export default Preview;
