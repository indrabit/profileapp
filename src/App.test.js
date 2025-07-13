import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
test('naviation tabs work correctly',async () => {
  render(<App />);
  const introductionTab = screen.getByText(/Introduction/i);
  const skillsTab = screen.getByText(/Skills/i);
  const careerTab = screen.getByText(/Experience/i);
  const educationTab = screen.getByText(/Education/i);
  const contactTab = screen.getByText(/Contact/i);
  const profileName = screen.getByText(/Indra Shrestha/i);
  const jobTitle = screen.getByText(/Full Stack Developer/i);
  expect(introductionTab).toBeInTheDocument();
  expect(skillsTab).toBeInTheDocument();
  expect(careerTab).toBeInTheDocument();
  expect(educationTab).toBeInTheDocument();
  expect(contactTab).toBeInTheDocument();
  expect(profileName).toBeInTheDocument();
  expect(jobTitle).toBeInTheDocument(); 
  const user = userEvent.setup();
  await user.click(introductionTab);
  expect(screen.getByText(/Introduction/i)).toBeInTheDocument();
  await user.click(skillsTab);
  expect(screen.getByText(/Skills/i)).toBeInTheDocument();
  await user.click(careerTab);
  expect(screen.getByText(/Experience/i)).toBeInTheDocument();
  await user.click(educationTab);
  expect(screen.getByText(/Education/i)).toBeInTheDocument();
  await user.click(contactTab);
  expect(screen.getByText(/Contact/i)).toBeInTheDocument();
});

test('renders ProfileHeader component', () => {
  render(<App />);
  const profileHeader = screen.getByText(/Indra Shrestha/i);
  expect(profileHeader).toBeInTheDocument();
});
