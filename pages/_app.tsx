import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ActionCreator, AnyAction, createStore, Reducer } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

export type TRootState = {
  newTaskTitle: string;
  newTaskText: string;
  newTaskImage: string;
};

const initialState = {
  newTaskTitle: '',
  newTaskText: '',
  newTaskImage: '',
};

const UPDATE_NEW_TITLE = 'UPDATE_NEW_TITLE';
const UPDATE_NEW_TEXT = 'UPDATE_NEW_TEXT';
const UPDATE_NEW_IMAGE = 'UPDATE_NEW_IMAGE';

export const updateNewTitle: ActionCreator<AnyAction> = (text) => ({
  type: UPDATE_NEW_TITLE,
  text,
});

export const updateNewText: ActionCreator<AnyAction> = (text) => ({
  type: UPDATE_NEW_TEXT,
  text,
});

export const updateNewImage: ActionCreator<AnyAction> = (text) => ({
  type: UPDATE_NEW_IMAGE,
  text,
});

const rootReducer: Reducer<TRootState> = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_TITLE:
      return { ...state, newTaskTitle: action.text };
    case UPDATE_NEW_TEXT:
      return { ...state, newTaskText: action.text };
    case UPDATE_NEW_IMAGE:
      return { ...state, newTaskImage: action.text };
    default:
      return state;
  }
};

const store = createStore(rootReducer, composeWithDevTools());

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;
