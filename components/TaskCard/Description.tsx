interface IDescriptionProps {
  text: string;
}

const Description: React.FC<IDescriptionProps> = ({ text }) => {
  return <p className='bodyText'> {text} </p>;
};

export default Description;
