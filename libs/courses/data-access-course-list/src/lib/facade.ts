import { Author, Course } from './facade.model';
import { mockedAuthorsList, mockedCoursesList } from './store.data';
import { isNil } from 'lodash-es';

const courses: Course[] = mockedCoursesList.map((c) => ({
  ...c,
  authors: c.authors
    .map((id) => mockedAuthorsList.find((a) => a.id === id))
    .filter((a): a is Author => !isNil(a)),
}));

export function useCourses(): Course[] {
  return courses;
}
