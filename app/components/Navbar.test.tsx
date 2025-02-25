import { render, screen } from '@testing-library/react';
import { ClerkProvider } from '@clerk/nextjs';
import Navbar from './Navbar';
import { usePathname, useRouter } from 'next/navigation';

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
  useRouter: jest.fn(),
}));

test('affiche le nom du site', () => {
  (usePathname as jest.Mock).mockReturnValue('/');
  (useRouter as jest.Mock).mockReturnValue({ push: jest.fn(), replace: jest.fn() });

  render(
    <ClerkProvider>
      <Navbar />
    </ClerkProvider>
  );

  // Utilise une fonction pour matcher le texte fragmenté
  expect(
    screen.getByText((content, element) => {
      return element?.textContent === 'Nouveauté App';
    })
  ).toBeInTheDocument();
});
