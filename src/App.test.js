import React from 'react';
import { render, screen, within } from '@testing-library/react'; // Added within import
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
    
    // Desktop navigation - use getAllByRole since there are multiple buttons
    const desktopButtons = screen.getAllByRole('button', { name: /Introduction|Skills|Experience|Education|Contact/i });
    expect(desktopButtons).toHaveLength(5);
    
    // Mobile navigation icons
    expect(screen.getByText('👋')).toBeInTheDocument();
    expect(screen.getByText('💻')).toBeInTheDocument();
    expect(screen.getByText('💼')).toBeInTheDocument();
    expect(screen.getByText('🎓')).toBeInTheDocument();
    expect(screen.getByText('📞')).toBeInTheDocument();
  });

  test('desktop navigation updates active tab', async () => {
    render(<ProfileHeader />);
    
    // Find desktop buttons specifically by their container
    const desktopNav = screen.getByTestId('desktop-nav');
    const introductionTab = within(desktopNav).getByRole('button', { name: /Introduction/i });
    const skillsTab = within(desktopNav).getByRole('button', { name: /Skills/i });
    
    // Initial state
    expect(introductionTab).toHaveClass('border-orange-500');
    expect(skillsTab).toHaveClass('border-transparent');
    
    // Click skills tab
    await userEvent.click(skillsTab);
    
    // Verify UI update
    expect(introductionTab).toHaveClass('border-transparent');
    expect(skillsTab).toHaveClass('border-orange-500');
  });

  test('mobile navigation updates active tab', async () => {
    render(<ProfileHeader />);
    
    // Find mobile buttons specifically by their container
    const mobileNav = screen.getByTestId('mobile-nav');
    const mobileIntroTab = within(mobileNav).getByText('👋').closest('button');
    const mobileSkillsTab = within(mobileNav).getByText('💻').closest('button');
    
    // Initial state
    expect(mobileIntroTab).toHaveClass('text-orange-600');
    expect(mobileSkillsTab).toHaveClass('text-gray-600');
    
    // Click skills tab
    await userEvent.click(mobileSkillsTab);
    
    // Verify UI update
    expect(mobileIntroTab).toHaveClass('text-gray-600');
    expect(mobileSkillsTab).toHaveClass('text-orange-600');
  });

  test('context updates when changing tabs', async () => {
    let contextValue;
    
    const TestComponent = () => {
      contextValue = React.useContext(DataContext);
      return null;
    };

    render(
      <ProfileHeader>
        <TestComponent />
      </ProfileHeader>
    );

    // Initial context value
    expect(contextValue).toBe('introduction');
    
    // Click skills tab (using desktop navigation)
    const desktopNav = screen.getByTestId('desktop-nav');
    await userEvent.click(within(desktopNav).getByRole('button', { name: /Skills/i }));
    expect(contextValue).toBe('skills');
  });
});