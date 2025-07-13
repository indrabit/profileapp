import React from 'react';
import { render, screen, within, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ProfileHeader, { DataContext } from './components/Profile/ProfileHeader';

// Mock the Profile component
jest.mock('./components/Profile/Profile', () => ({
  __esModule: true,
  default: () => <div data-testid="profile-content" />
}));

describe('ProfileHeader Navigation', () => {
  const mockMenus = [
    { name: "introduction", value: 'Introduction' },
    { name: "skills", value: 'Skills' },
    { name: "career", value: 'Experience' },
    { name: "education", value: 'Education' },
    { name: "contact", value: 'Contact' },
  ];

  it('renders all navigation items correctly', () => {
    render(<ProfileHeader />);
    
    // Check desktop navigation
    const desktopNav = screen.getByTestId('desktop-nav');
    mockMenus.forEach(menu => {
      expect(within(desktopNav).getByText(menu.value)).toBeInTheDocument();
    });
    
    // Check mobile navigation icons
    const mobileNav = screen.getByTestId('mobile-nav');
    expect(within(mobileNav).getByText('👋')).toBeInTheDocument();
    expect(within(mobileNav).getByText('💻')).toBeInTheDocument();
    expect(within(mobileNav).getByText('💼')).toBeInTheDocument();
    expect(within(mobileNav).getByText('🎓')).toBeInTheDocument();
    expect(within(mobileNav).getByText('📞')).toBeInTheDocument();
  });

  it('sets the active tab correctly when clicked (desktop)', () => {
    render(<ProfileHeader />);
    
    const desktopNav = screen.getByTestId('desktop-nav');
    const introductionTab = within(desktopNav).getByText('Introduction');
    const skillsTab = within(desktopNav).getByText('Skills');
    
    // Initial active tab should be Introduction
    expect(introductionTab).toHaveClass('border-orange-500');
    expect(skillsTab).toHaveClass('border-transparent');
    
    // Click on Skills tab
    fireEvent.click(skillsTab);
    
    // Skills tab should now be active
    expect(skillsTab).toHaveClass('border-orange-500');
    expect(introductionTab).toHaveClass('border-transparent');
  });

  it('sets the active tab correctly when clicked (mobile)', () => {
    render(<ProfileHeader />);
    
    const mobileNav = screen.getByTestId('mobile-nav');
    const introductionIcon = within(mobileNav).getByText('👋').closest('button');
    const experienceIcon = within(mobileNav).getByText('💼').closest('button');
    
    // Initial active tab should be Introduction (👋)
    expect(introductionIcon).toHaveClass('text-orange-600');
    expect(experienceIcon).toHaveClass('text-gray-600');
    
    // Click on Experience tab (💼)
    fireEvent.click(experienceIcon);
    
    // Experience tab should now be active
    expect(experienceIcon).toHaveClass('text-orange-600');
    expect(introductionIcon).toHaveClass('text-gray-600');
  });

  it('updates the DataContext value when a tab is clicked', () => {
    let contextValue = '';
    
    const ContextSpy = () => {
      contextValue = React.useContext(DataContext);
      return null;
    };

    render(
      <ProfileHeader>
        <ContextSpy />
      </ProfileHeader>
    );

    // Initial context value should be 'introduction'
    expect(contextValue).toBe('introduction');
    
    // Click on Education tab
    const desktopNav = screen.getByTestId('desktop-nav');
    const educationTab = within(desktopNav).getByText('Education');
    fireEvent.click(educationTab);
    
    // Context value should now be 'education'
    expect(contextValue).toBe('education');
  });
});