import { createStore } from 'redux';
import { CommentsReducer } from './CommentsReducer';

export const store = createStore(CommentsReducer);