import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ProfileHeader, { DataContext } from './ProfileHeader';

// Proper mock implementation of Profile component
jest.mock('./Profile', () => {
  const MockProfile = () => <div data-testid="profile-content" />;
  MockProfile.displayName = 'MockProfile';
  return MockProfile;
});

describe('ProfileHeader Navigation', () => {
  test('renders all navigation tabs correctly', () => {
    render(<ProfileHeader />);
    
    // Desktop navigation
    expect(screen.getByRole('button', { name: /Introduction/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Skills/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Experience/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Education/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Contact/i })).toBeInTheDocument();
    
    // Mobile navigation icons
    expect(screen.getByText('👋')).toBeInTheDocument();
    expect(screen.getByText('💻')).toBeInTheDocument();
    expect(screen.getByText('💼')).toBeInTheDocument();
    expect(screen.getByText('🎓')).toBeInTheDocument();
    expect(screen.getByText('📞')).toBeInTheDocument();
  });

  test('desktop navigation updates active tab', async () => {
    const user = userEvent.setup();
    render(<ProfileHeader />);
    
    const introductionTab = screen.getByRole('button', { name: /Introduction/i });
    const skillsTab = screen.getByRole('button', { name: /Skills/i });
    
    // Initial state
    expect(introductionTab).toHaveClass('border-orange-500');
    expect(skillsTab).toHaveClass('border-transparent');
    
    // Click skills tab
    await user.click(skillsTab);
    
    // Verify UI update
    expect(introductionTab).toHaveClass('border-transparent');
    expect(skillsTab).toHaveClass('border-orange-500');
  });

  test('mobile navigation updates active tab', async () => {
    const user = userEvent.setup();
    render(<ProfileHeader />);
    
    const mobileIntroTab = screen.getByText('👋').closest('button');
    const mobileSkillsTab = screen.getByText('💻').closest('button');
    
    // Initial state
    expect(mobileIntroTab).toHaveClass('text-orange-600');
    expect(mobileSkillsTab).toHaveClass('text-gray-600');
    
    // Click skills tab
    await user.click(mobileSkillsTab);
    
    // Verify UI update
    expect(mobileIntroTab).toHaveClass('text-gray-600');
    expect(mobileSkillsTab).toHaveClass('text-orange-600');
  });

  test('context updates when changing tabs', async () => {
    const user = userEvent.setup();
    let receivedContextValue = '';
    
    const TestComponent = () => {
      receivedContextValue = React.useContext(DataContext);
      return null;
    };

    render(
      <ProfileHeader>
        <TestComponent />
      </ProfileHeader>
    );

    // Initial context value
    expect(receivedContextValue).toBe('introduction');
    
    // Click skills tab
    await user.click(screen.getByRole('button', { name: /Skills/i }));
    expect(receivedContextValue).toBe('skills');
    
    // Click contact tab
    await user.click(screen.getByText('📞').closest('button'));
    expect(receivedContextValue).toBe('contact');
  });
});