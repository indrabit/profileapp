import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ProfileHeader, { DataContext } from './ProfileHeader';

// Mock the Profile component since we're only testing navigation
jest.mock('./Profile', () => () => <div data-testid="profile-content" />);

describe('ProfileHeader Navigation', () => {
  test('renders all navigation tabs correctly', () => {
    render(<ProfileHeader />);
    
    // Desktop navigation
    expect(screen.getByRole('button', { name: 'Introduction' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Skills' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Experience' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Education' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Contact' })).toBeInTheDocument();
    
    // Mobile navigation
    expect(screen.getByText('👋')).toBeInTheDocument();
    expect(screen.getByText('💻')).toBeInTheDocument();
    expect(screen.getByText('💼')).toBeInTheDocument();
    expect(screen.getByText('🎓')).toBeInTheDocument();
    expect(screen.getByText('📞')).toBeInTheDocument();
  });

  test('desktop navigation updates active tab and context', async () => {
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
    
    // Verify context update
    expect(screen.getByTestId('profile-content')).toBeInTheDocument();
  });

  test('mobile navigation updates active tab and context', async () => {
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
    
    // Verify context update
    expect(screen.getByTestId('profile-content')).toBeInTheDocument();
  });

  test('context updates when changing tabs', async () => {
    const user = userEvent.setup();
    const TestComponent = () => {
      const contextValue = React.useContext(DataContext);
      return <div data-testid="context-value">{contextValue}</div>;
    };

    render(
      <ProfileHeader>
        <TestComponent />
      </ProfileHeader>
    );

    // Initial context value
    expect(screen.getByTestId('context-value')).toHaveTextContent('introduction');
    
    // Click skills tab
    await user.click(screen.getByRole('button', { name: 'Skills' }));
    expect(screen.getByTestId('context-value')).toHaveTextContent('skills');
    
    // Click contact tab
    await user.click(screen.getByText('📞').closest('button'));
    expect(screen.getByTestId('context-value')).toHaveTextContent('contact');
  });
});