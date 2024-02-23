import * as storeModel from './store.model';

export type Author = storeModel.Author;

export type Course = Omit<storeModel.Course, 'authors'> & {
  authors: Author[];
};
