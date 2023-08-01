import { describe, expect, it } from 'vitest';
import { Label } from './Label';
import { render, screen } from '@testing-library/react';

describe('Label', () => {
  it('Should contain label', () => {
    const label = 'Label';
    render(<Label text={label} />);
    expect(screen.getByText(label)).toBeDefined();
  });
});
