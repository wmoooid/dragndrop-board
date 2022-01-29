import Image from 'next/image';
import styles from './TaskCard.module.css';

interface IPreviewProps {
  image: string;
}

const Preview: React.FC<IPreviewProps> = ({ image }) => {
  return (
    <div className={styles.preview}>
      <Image src={image} alt='Task picture' layout='fill' objectFit='cover' />
    </div>
  );
};

export default Preview;
