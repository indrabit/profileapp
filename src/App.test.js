import React from 'react';
import { render, screen, within, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ProfileHeader, { DataContext } from './components/Profile/ProfileHeader';

// Mock the Profile component
jest.mock('./components/Profile/Profile', () => ({
  __esModule: true,
  default: () => <div data-testid="profile-content" />
}));

describe('ProfileHeader Navigation', () => {
  test('renders all navigation tabs correctly', () => {
    render(<ProfileHeader />);
    
    // Desktop navigation
    const desktopNav = screen.getByTestId('desktop-nav');
    const desktopButtons = within(desktopNav).getAllByRole('button');
    expect(desktopButtons).toHaveLength(5);
    expect(desktopButtons[0]).toHaveTextContent('Introduction');
    expect(desktopButtons[1]).toHaveTextContent('Skills');
    
    // Mobile navigation
    const mobileNav = screen.getByTestId('mobile-nav');
    expect(within(mobileNav).getByText('👋')).toBeInTheDocument();
    expect(within(mobileNav).getByText('💻')).toBeInTheDocument();
  });

  test('desktop navigation updates active tab', async () => {
    render(<ProfileHeader />);
    
    const desktopNav = screen.getByTestId('desktop-nav');
    const introductionTab = within(desktopNav).getByRole('button', { name: 'Introduction' });
    const skillsTab = within(desktopNav).getByRole('button', { name: 'Skills' });
    
    // Initial state
    expect(introductionTab).toHaveClass('border-orange-500');
    expect(skillsTab).toHaveClass('border-transparent');
    
    // Click skills tab
    await act(async () => {
      await userEvent.click(skillsTab);
    });
    
    // Verify UI update
    expect(introductionTab).toHaveClass('border-transparent');
    expect(skillsTab).toHaveClass('border-orange-500');
  });

  test('mobile navigation updates active tab', async () => {
    render(<ProfileHeader />);
    
    const mobileNav = screen.getByTestId('mobile-nav');
    const mobileIntroTab = within(mobileNav).getByText('👋').closest('button');
    const mobileSkillsTab = within(mobileNav).getByText('💻').closest('button');
    
    // Initial state
    expect(mobileIntroTab).toHaveClass('text-orange-600');
    expect(mobileSkillsTab).toHaveClass('text-gray-600');
    
    // Click skills tab
    await act(async () => {
      await userEvent.click(mobileSkillsTab);
    });
    
    // Verify UI update
    expect(mobileIntroTab).toHaveClass('text-gray-600');
    expect(mobileSkillsTab).toHaveClass('text-orange-600');
  });

  test('context updates when changing tabs', async () => {
    let receivedContextValue = '';
    
    const ContextSpy = () => {
      receivedContextValue = React.useContext(DataContext);
      return null;
    };

    render(
      <ProfileHeader>
        <ContextSpy />
      </ProfileHeader>
    );

    // Wait for initial render
    await act(async () => {
      await screen.findByTestId('profile-content');
    });

       // Get desktop navigation
    const desktopNav = screen.getByTestId('desktop-nav');
    const skillsButton = within(desktopNav).getByRole('button', { name: 'Skills' });
    
    // Click skills tab
    await act(async () => {
      await userEvent.click(skillsButton);
    });

    // Verify updated context value
    expect(receivedContextValue).toBe('skills');
  });
});