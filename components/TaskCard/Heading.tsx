interface IHeadingProps {
  title: string;
}

const Heading: React.FC<IHeadingProps> = ({ title }) => {
  return <h2 className='h2'>{title}</h2>;
};

export default Heading;
