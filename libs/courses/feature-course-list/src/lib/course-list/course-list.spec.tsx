import { render } from '@testing-library/react';

import CourseList from './course-list';

describe('FeatureCourseList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CourseList />);
    expect(baseElement).toBeTruthy();
  });
});
