import React from 'react';
import { render, screen, within, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ProfileHeader, { DataContext } from './components/Profile/ProfileHeader';
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
    mockMenus.forEach(menu => {
      expect(screen.getByText(menu.value)).toBeInTheDocument();
    });
    
    // Check mobile navigation icons
    expect(screen.getByText('👋')).toBeInTheDocument();
    expect(screen.getByText('💻')).toBeInTheDocument();
    expect(screen.getByText('💼')).toBeInTheDocument();
    expect(screen.getByText('🎓')).toBeInTheDocument();
    expect(screen.getByText('📞')).toBeInTheDocument();
  });

  it('sets the active tab correctly when clicked (desktop)', () => {
    render(<ProfileHeader />);
    
    // Initial active tab should be Introduction
    const introductionTab = screen.getByText('Introduction');
    expect(introductionTab).toHaveClass('border-orange-500');
    
    // Click on Skills tab
    const skillsTab = screen.getByText('Skills');
    fireEvent.click(skillsTab);
    
    // Skills tab should now be active
    expect(skillsTab).toHaveClass('border-orange-500');
    expect(introductionTab).not.toHaveClass('border-orange-500');
  });

  it('sets the active tab correctly when clicked (mobile)', () => {
    render(<ProfileHeader />);
    
    // Initial active tab should be Introduction (👋)
    const introductionIcon = screen.getByText('👋').closest('button');
    expect(introductionIcon).toHaveClass('text-orange-600');
    
    // Click on Experience tab (💼)
    const experienceIcon = screen.getByText('💼').closest('button');
    fireEvent.click(experienceIcon);
    
    // Experience tab should now be active
    expect(experienceIcon).toHaveClass('text-orange-600');
    expect(introductionIcon).not.toHaveClass('text-orange-600');
  });

  it('updates the DataContext value when a tab is clicked', () => {
    let contextValue;
    
    render(
      <DataContext.Consumer>
        {value => {
          contextValue = value;
          return <ProfileHeader />;
        }}
      </DataContext.Consumer>
    );
    
    // Initial context value should be 'introduction'
    expect(contextValue).toBe('introduction');
    
    // Click on Education tab
    const educationTab = screen.getByText('Education');
    fireEvent.click(educationTab);
    
    // Context value should now be 'education'
    expect(contextValue).toBe('education');
  });

  it('highlights only one tab at a time', () => {
    render(<ProfileHeader />);
    
    const tabs = mockMenus.map(menu => screen.getByText(menu.value));
    
    // Check that only the first tab is active initially
    expect(tabs[0]).toHaveClass('border-orange-500');
    tabs.slice(1).forEach(tab => {
      expect(tab).not.toHaveClass('border-orange-500');
    });
    
    // Click on the last tab
    fireEvent.click(tabs[tabs.length - 1]);
    
    // Now only the last tab should be active
    expect(tabs[tabs.length - 1]).toHaveClass('border-orange-500');
    tabs.slice(0, -1).forEach(tab => {
      expect(tab).not.toHaveClass('border-orange-500');
    });
  });
});