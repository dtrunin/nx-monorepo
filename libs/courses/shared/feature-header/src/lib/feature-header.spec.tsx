import { render } from '@testing-library/react';

import FeatureHeader from './feature-header';

describe('CoursesSharedFeatureHeader', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeatureHeader />);
    expect(baseElement).toBeTruthy();
  });
});
