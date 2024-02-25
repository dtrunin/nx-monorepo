import { render } from '@testing-library/react';

import EmptyCourseList from './empty-course-list';

describe('EmptyCourseList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<EmptyCourseList />);
    expect(baseElement).toBeTruthy();
  });
});
