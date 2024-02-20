import { render } from '@testing-library/react';

import FeatureCourseList from './feature-course-list';

describe('FeatureCourseList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeatureCourseList />);
    expect(baseElement).toBeTruthy();
  });
});
