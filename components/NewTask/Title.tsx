const Title: React.FC = () => {
  return <input value={title} className={styles.inputTitle} onChange={handleTitleChange} type='text' placeholder='Title' />;
};

export default Title;
