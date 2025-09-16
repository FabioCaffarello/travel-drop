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
  { name: 'Roadmap', href: '/roadmap' },
  { name: 'Dashboard', href: '/dashboard' },
];

export function Navbar() {
  const { data: session, isPending } = authClient.useSession();

  return (
    <header
      className="sticky top-0 z-50 w-full border-b bg-background/95 
    backdrop-blur-[backdrop-filter]:bg-background/60"
    >
      <div className="container flex min-h-16 items-center mx-auto px-4 md:px-6 lg:px-8">
        <Link href="/" className="flex items-center space-x-2 mr-4">
          LOGO
          <span className="font-bold">TravelDrop</span>
        </Link>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:flex-1 md:items-center md:justify-between">
          <div className="flex items-center space-x-2">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium transition-colors hover:text-primary"
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
                  })}
                >
                  Login
                </Link>
                <Link href="/login" className={buttonVariants()}>
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
