import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ProfileHeader from './ProfileHeader';
import { DataContext } from './ProfileHeader';

// Proper mock implementation
jest.mock('./Profile', () => ({
  __esModule: true,
  default: () => <div data-testid="profile-content" />
}));

describe('ProfileHeader Navigation', () => {
  test('renders all navigation tabs correctly', () => {
    render(<ProfileHeader />);
    
    // Desktop navigation
    expect(screen.getByRole('button', { name: 'Introduction' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Skills' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Experience' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Education' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Contact' })).toBeInTheDocument();
  });

  test('desktop navigation updates active tab', async () => {
    const user = userEvent.setup();
    render(<ProfileHeader />);
    
    const introductionTab = screen.getByRole('button', { name: 'Introduction' });
    const skillsTab = screen.getByRole('button', { name: 'Skills' });
    
    // Initial state
    expect(introductionTab).toHaveClass('border-orange-500');
    expect(skillsTab).toHaveClass('border-transparent');
    
    // Click skills tab
    await user.click(skillsTab);
    
    // Verify UI update
    expect(introductionTab).toHaveClass('border-transparent');
    expect(skillsTab).toHaveClass('border-orange-500');
  });

  test('context updates when changing tabs', async () => {
    const user = userEvent.setup();
    let contextValue;
    
    function TestComponent() {
      contextValue = React.useContext(DataContext);
      return null;
    }

    render(
      <ProfileHeader>
        <TestComponent />
      </ProfileHeader>
    );

    // Initial context value
    expect(contextValue).toBe('introduction');
    
    // Click skills tab
    await user.click(screen.getByRole('button', { name: 'Skills' }));
    expect(contextValue).toBe('skills');
  });
});