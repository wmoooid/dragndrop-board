import { ReactNode } from 'react';
import Breaker from '../Breaker';
import CreationDate from './CreationDate';
import Description from './Description';
import Heading from './Heading';
import MenuButton from './MenuButton';
import Preview from './Preview';
import Tags from './Tags';

export interface ITaskCardProps {
  id?: string;
  title: string;
  image?: string;
  tags?: any;
  text: string;
  date?: any;
}

const TaskCard: React.FC<ITaskCardProps> = ({ title, text, image }) => {
  return (
    <li className='box'>
      <Heading title={title} />
      <Breaker />
      <MenuButton />
      {image && (
        <>
          <Preview image={image} />
          <Breaker />
        </>
      )}
      <Tags />
      <Breaker />
      <Description text={text} />
      <Breaker />
      <CreationDate />
    </li>
  );
};

export default TaskCard;
