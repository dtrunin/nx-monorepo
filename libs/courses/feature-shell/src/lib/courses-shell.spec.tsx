import { render } from '@testing-library/react';

import CoursesFeatureShell from './courses-shell';

describe('CoursesFeatureShell', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CoursesFeatureShell />);
    expect(baseElement).toBeTruthy();
  });
});
