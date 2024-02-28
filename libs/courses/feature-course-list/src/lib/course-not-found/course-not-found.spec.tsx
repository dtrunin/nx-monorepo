import { render } from '@testing-library/react';

import CourseNotFound from './course-not-found';

describe('CourseNotFound', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CourseNotFound />);
    expect(baseElement).toBeTruthy();
  });
});
