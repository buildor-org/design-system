import { Button } from './Button';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

describe('Button', () => {
  it('Should have the label', () => {
    render(<Button variant="primary" />);
    expect(screen.getByText(/Button/i)).toBeDefined();
  });
});
