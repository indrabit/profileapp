import React from 'react';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ProfileHeader from './components/Profile/ProfileHeader';

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

  test('renders all navigation tabs correctly', () => {
    render(<ProfileHeader />);
    
    // Desktop navigation
    const desktopNav = screen.getByTestId('desktop-nav');
    mockMenus.forEach(menu => {
      expect(within(desktopNav).getByText(menu.value)).toBeInTheDocument();
    });
    
    // Mobile navigation
    const mobileNav = screen.getByTestId('mobile-nav');
    expect(within(mobileNav).getByText('👋')).toBeInTheDocument();
    expect(within(mobileNav).getByText('💻')).toBeInTheDocument();
  });

  test('desktop navigation updates active tab', async () => {
    render(<ProfileHeader />);
    
    const desktopNav = screen.getByTestId('desktop-nav');
    const tabs = mockMenus.map(menu => 
      within(desktopNav).getByText(menu.value)
    );
    
    // Check that only the first tab is active initially
    expect(tabs[0]).toHaveClass('border-orange-500');
    tabs.slice(1).forEach(tab => {
      expect(tab).toHaveClass('border-transparent');
    });
    
    // Click the second tab
    await userEvent.click(tabs[1]);
    
    // Verify active state changed
    expect(tabs[0]).toHaveClass('border-transparent');
    expect(tabs[1]).toHaveClass('border-orange-500');
  });

  test('mobile navigation updates active tab', async () => {
    render(<ProfileHeader />);
    
    const mobileNav = screen.getByTestId('mobile-nav');
    const mobileTabs = mockMenus.map((menu, i) => {
      const icon = ['👋', '💻', '💼', '🎓', '📞'][i];
      return within(mobileNav).getByText(icon).closest('button');
    });
    
    // Initial active state
    expect(mobileTabs[0]).toHaveClass('text-orange-600');
    mobileTabs.slice(1).forEach(tab => {
      expect(tab).toHaveClass('text-gray-600');
    });
    
    // Click second tab
    await userEvent.click(mobileTabs[1]);
    
    // Verify active state changed
    expect(mobileTabs[0]).toHaveClass('text-gray-600');
    expect(mobileTabs[1]).toHaveClass('text-orange-600');
  });
});