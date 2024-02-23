import { Author, Course } from './facade.model';
import { mockedAuthorsList, mockedCoursesList } from './store.data';
import { isNil } from 'lodash-es';
import { useCallback, useMemo, useState } from 'react';

const allCourses: Course[] = mockedCoursesList.map((c) => ({
  ...c,
  authors: c.authors
    .map((id) => mockedAuthorsList.find((a) => a.id === id))
    .filter((a): a is Author => !isNil(a)),
}));

export interface CoursesFacade {
  courses: Course[];
  setFilter: (value: string) => void;
}

export function useCourses(): CoursesFacade {
  const [filter, setFilter] = useState('');

  const courses = useMemo(() => {
    if (filter === '') {
      return allCourses;
    }

    const filterRegExp = new RegExp(filter, 'i');

    return allCourses.filter((c) =>
      [c.id, c.title].some((v) => v.search(filterRegExp) >= 0)
    );
  }, [filter]);

  const facadeSetFilter = useCallback<CoursesFacade['setFilter']>(
    (value) => setFilter(value.trim()),
    []
  );

  return { courses, setFilter: facadeSetFilter };
}
