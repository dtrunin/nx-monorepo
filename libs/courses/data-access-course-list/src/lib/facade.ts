import { Author, Course } from './facade.model';
import { mockedAuthorsList, mockedCoursesList } from './store.data';
import { isEmpty, isNil } from 'lodash-es';
import { useState } from 'react';

const allCourses: Course[] = mockedCoursesList.map((c) => ({
  ...c,
  authors: c.authors
    .map((id) => mockedAuthorsList.find((a) => a.id === id))
    .filter((a): a is Author => !isNil(a)),
}));

export interface CoursesFacade {
  courses: Course[];
  isCoursesEmpty: boolean;
  setFilter: (value: string) => void;
}

export function useCourses(): CoursesFacade {
  const [filter, setFilter] = useState('');
  const isCoursesEmpty = !isEmpty(allCourses);

  let courses: Course[];
  if (filter === '') {
    courses = allCourses;
  } else {
    const filterRegExp = new RegExp(filter, 'i');
    courses = allCourses.filter((c) =>
      [c.id, c.title].some((v) => v.search(filterRegExp) >= 0)
    );
  }

  const facadeSetFilter: CoursesFacade['setFilter'] = (value) =>
    setFilter(value.trim());

  return { courses, isCoursesEmpty, setFilter: facadeSetFilter };
}
