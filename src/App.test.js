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

test('context updates when changing tabs', async () => {
    let contextValue = '';
    const setContextValue = (value) => { contextValue = value; };
    
    // Mock component to capture context value
    const ContextSpy = () => {
      const value = React.useContext(DataContext);
      React.useEffect(() => {
        setContextValue(value);
      }, [value]);
      return null;
    };

    render(
      <ProfileHeader>
        <ContextSpy />
      </ProfileHeader>
    );

    // Need to wait for initial context value to be set
    await screen.findByTestId('profile-content');
    
    // Initial context value
    expect(contextValue).toBe('introduction');
    
    // Click skills tab (using desktop navigation)
    const desktopNav = screen.getByTestId('desktop-nav');
    await userEvent.click(within(desktopNav).getByRole('button', { name: /Skills/i }));
    
    // Verify context update
    expect(contextValue).toBe('skills');
  }); 
});