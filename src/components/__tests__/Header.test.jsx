import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import Header from '../Header';

describe('Header component', () => {
  it('renders the GameZone logo', () => {
    render(<Header />);

    expect(screen.getByText('GameZone')).toBeInTheDocument();
  });

  it('renders the navigation links', () => {
    render(<Header />);

    expect(screen.getByText('Головна')).toBeInTheDocument();
    expect(screen.getByText('каталог')).toBeInTheDocument();
    expect(screen.getByText('Новинки')).toBeInTheDocument();
    expect(screen.getByText('Акції')).toBeInTheDocument();
  });
});
