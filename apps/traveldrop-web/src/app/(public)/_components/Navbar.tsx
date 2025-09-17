'use client';

import { buttonVariants, ThemeToggle } from '@travel-drop/ui';
import Link from 'next/link';
import { authClient } from '@travel-drop/utils-client';
import { UserDropdown } from './UserDropdown';

interface NavigationItemProps {
  name: string;
  href: string;
}

const navigationItems: NavigationItemProps[] = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Itinerary', href: '/itinerary' },
  { name: 'Dashboard', href: '/admin' },
];

export function Navbar() {
  const { data: session, isPending } = authClient.useSession();

  return (
    <header
      className="sticky top-0 z-50 w-full border-b bg-background/95 shadow-lg transition-shadow duration-300 backdrop-blur"
      aria-label="Main navigation"
    >
      <div className="container flex min-h-16 items-center mx-auto px-4 md:px-6 lg:px-8">
        <Link href="/" className="flex items-center space-x-3 mr-6 group" aria-label="TravelDrop Home">
          <span className="rounded-full bg-primary/10 p-2 text-primary text-lg font-bold group-hover:scale-105 transition-transform duration-200">TD</span>
          <span className="font-bold text-xl tracking-tight group-hover:text-primary transition-colors duration-200">TravelDrop</span>
        </Link>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:flex-1 md:items-center md:justify-between" aria-label="Primary">
          <div className="flex items-center space-x-4">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium px-3 py-2 rounded transition-colors hover:bg-primary/10 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary"
                aria-label={item.name}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            {isPending ? null : session ? (
              <UserDropdown
                email={session.user.email}
                name={session.user.name}
                image={session.user.image || ""}
              />
            ) : (
              <>
                <Link
                  href="/login"
                  className={buttonVariants({
                    variant: 'secondary',
                  }) + " animate-fadein"}
                  aria-label="Login"
                >
                  Login
                </Link>
                <Link href="/login" className={buttonVariants() + " animate-fadein"} aria-label="Get Started">
                  Get Started
                </Link>
              </>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
