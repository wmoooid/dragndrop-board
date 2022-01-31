import React, { ChangeEvent, FormEvent } from 'react';
import { generateRandomString } from '../../utils/generateRandomIndex';
import { TaskContext } from '../TaskList/TaskList';
import Preview from '../TaskCard/Preview';
import styles from './NewTask.module.css';
import Breaker from '../../assets/Breaker';
import IconImageUpload from '../../assets/IconImageUpload';
import IconImageDelete from '../../assets/IconImageDelete';
import { supportedFileTypes } from '../../utils/supportedFileTypes';

const NewTask: React.FC = () => {
  const { addTask } = React.useContext(TaskContext);

  // Title
  const [title, setTitle] = React.useState<string>('');
  function handleTitleChange(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }

  // Text
  const [text, setText] = React.useState<string>('');
  function handleTextChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setText(event.target.value);
  }

  // Image
  const [image, setImage] = React.useState<string>('');
  const inputImageRef = React.useRef<HTMLInputElement>(null);
  function handleImageUpload(event: Event): void {
    let file = (event.target as HTMLInputElement).files![0];
    if (supportedFileTypes(file.type)) {
      let fileUrl = URL.createObjectURL(file);
      setImage(fileUrl);
    } else {
      alert('Unsupported filetype');
    }
  }

  React.useEffect(() => {
    if (inputImageRef.current) {
      inputImageRef.current.addEventListener('change', handleImageUpload);
    }
  });

  // Image dragndrop
  const [drag, setDrag] = React.useState<boolean>(false);

  function handleDragStart(event: React.DragEvent<HTMLLabelElement>) {
    event.preventDefault();
    setDrag(true);
  }

  function handleDragLeave(event: React.DragEvent<HTMLLabelElement>) {
    event.preventDefault();
    setDrag(false);
  }

  function handleDrop(event: React.DragEvent<HTMLLabelElement>) {
    event.preventDefault();
    let file = event.dataTransfer.files[0];
    if (supportedFileTypes(file.type)) {
      let fileUrl = URL.createObjectURL(file);
      setDrag(false);
      setImage(fileUrl);
    } else {
      alert('Unsupported filetype');
    }
  }

  function handleImageDelete() {
    setImage('');
  }

  // Submit
  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const currentDate = new Date();
    addTask({ id: generateRandomString(), title: title, text: text, image: image, date: currentDate });
    setTitle('');
    setText('');
  }

  function validateInput() {
    if (title.length < 1 && text.length < 1 && !image) {
      return false;
    } else {
      return true;
    }
  }

  const isInputEmpty = !validateInput();

  return (
    <form className='box' onSubmit={handleSubmit}>
      <Breaker />
      <textarea
        value={text}
        className={styles.inputText}
        onChange={handleTextChange}
        name='description'
        id='description'
        placeholder='Take a note...'></textarea>
      <Breaker />
      {drag ? (
        <>
          <label
            className={styles.dropArea}
            onDragStart={(event) => handleDragStart(event)}
            onDragLeave={(event) => handleDragLeave(event)}
            onDragOver={(event) => handleDragStart(event)}
            onDrop={(event) => handleDrop(event)}>
            <IconImageUpload />
            <span className={styles.dropAreaText}>Drop image here</span>
          </label>
          <Breaker />
        </>
      ) : (
        <>
          {!image && (
            <>
              <label
                htmlFor='image'
                className={styles.dragArea}
                onDragStart={(event) => handleDragStart(event)}
                onDragLeave={(event) => handleDragLeave(event)}
                onDragOver={(event) => handleDragStart(event)}>
                <IconImageUpload />
                <span className={styles.dragAreaText}>Drop image here or click to upload</span>
              </label>
              <input id='image' ref={inputImageRef} type='file' hidden />
              <Breaker />
            </>
          )}
        </>
      )}
      {image && (
        <>
          <Preview image={image}>
            <span onClick={handleImageDelete} className={styles.imageDelete}>
              <IconImageDelete />
            </span>
          </Preview>
          <Breaker />
        </>
      )}
      <div className={styles.propsBox}>
        <ul className='tagsBox'>
          <li className='tagsRed'>Design</li>
          <li className='tagsGreen'>Templates</li>
          <li className='tagsBlue'>Dashboard</li>
        </ul>
      </div>
      <Breaker />
      <input className={styles.buttonAdd} type='submit' value='Add new task' disabled={isInputEmpty} />
    </form>
  );
};

export default NewTask;
