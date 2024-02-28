import { render } from '@testing-library/react';

import CourseInfo from './course-info';

describe('CourseInfo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CourseInfo />);
    expect(baseElement).toBeTruthy();
  });
});
