import Image from 'next/image';
import { ReactNode } from 'react';
import styles from './TaskCard.module.css';

interface IPreviewProps {
  image: string;
  children?: ReactNode;
}

const Preview: React.FC<IPreviewProps> = ({ image, children }) => {
  return (
    <div className={styles.preview}>
      <Image src={image} alt='Task picture' layout='fill' objectFit='cover' />
      {children}
    </div>
  );
};

export default Preview;
