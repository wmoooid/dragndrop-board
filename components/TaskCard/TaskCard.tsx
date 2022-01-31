import Breaker from '../../assets/Breaker';
import { ITaskCardProps } from '../../types/ITaskCardProps';
import CreationDate from './CreationDate';
import Description from './Description';
import Heading from './Heading';
import MenuButton from './MenuButton';
import Preview from './Preview';
import Tags from './Tags';

const TaskCard: React.FC<ITaskCardProps> = ({ title, text, image, date }) => {
  return (
    <li className='box'>
      {title && (
        <>
          <Heading title={title} />
          <Breaker />
        </>
      )}
      <MenuButton />
      {image && (
        <>
          <Preview image={image} />
          <Breaker />
        </>
      )}
      <Tags />
      <Breaker />
      {text && (
        <>
          <Description text={text} />
          <Breaker />
        </>
      )}
      <CreationDate date={date} />
    </li>
  );
};

export default TaskCard;
