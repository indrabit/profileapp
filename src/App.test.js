import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('Navigation Component', () => {
  beforeEach(() => {
    render(<App />);
  });

  test('renders all navigation tabs correctly', () => {
    expect(screen.getByRole('button', { name: /Introduction/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Skills/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Experience/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Education/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Contact/i })).toBeInTheDocument();
  });

  test('navigation tabs switch correctly', async () => {
    const user = userEvent.setup();
    const tabs = {
      introduction: screen.getByRole('button', { name: /Introduction/i }),
      skills: screen.getByRole('button', { name: /Skills/i }),
      career: screen.getByRole('button', { name: /Experience/i }),
      education: screen.getByRole('button', { name: /Education/i }),
      contact: screen.getByRole('button', { name: /Contact/i })
    };

    // Verify initial active tab (assuming Introduction is default)
    expect(tabs.introduction).toHaveClass('border-orange-500');
    
    // Test switching to each tab
    for (const [tabName, tabElement] of Object.entries(tabs)) {
      if (tabName !== 'introduction') {
        await user.click(tabElement);
        expect(tabElement).toHaveClass('border-orange-500');
        expect(tabs.introduction).not.toHaveClass('border-orange-500');
        
        // Reset to introduction for next test
        await user.click(tabs.introduction);
      }
    }
  });  
});