import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Breaker from '../../assets/Breaker';
import IconImageDelete from '../../assets/IconImageDelete';
import IconImageUpload from '../../assets/IconImageUpload';
import { TRootState, updateNewImage } from '../../pages/_app';
import { supportedFileTypes } from '../../utils/supportedFileTypes';
import Preview from '../TaskCard/Preview';
import styles from './NewTask.module.css';

const UploadImage: React.FC = () => {
  const dispatch = useDispatch();
  const image = useSelector<TRootState, string>((state) => state.newTaskImage);

  // Image click

  const inputImageRef = React.useRef<HTMLInputElement>(null);
  function handleImageUpload(event: Event): void {
    let file = (event.target as HTMLInputElement).files![0];
    if (supportedFileTypes(file.type)) {
      let fileUrl = URL.createObjectURL(file);
      dispatch(updateNewImage(fileUrl));
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
      dispatch(updateNewImage(fileUrl));
    } else {
      alert('Unsupported filetype');
    }
  }

  function handleImageDelete() {
    dispatch(updateNewImage(''));
  }

  return (
    <>
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
    </>
  );
};

export default UploadImage;
