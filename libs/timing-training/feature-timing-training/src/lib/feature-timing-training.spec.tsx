import { render } from '@testing-library/react';

import FeatureTimingTraining from './feature-timing-training';

describe('FeatureTimingTraining', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeatureTimingTraining />);
    expect(baseElement).toBeTruthy();
  });
});
