"use client";

import { useRouter } from 'next/navigation';
import { ThemeToggle, Button } from '@travel-drop/ui';
import { authClient } from '@travel-drop/utils-client';
import { toast } from 'sonner';

export default function Home() {
  const router = useRouter();
  const { data: session } = authClient.useSession();

  async function signOut() {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/"); // redirect to home page
          toast.success("Logged out successfully");
        },
      },
    });
  }
  return (
    <div className="p-24">
      <h1>Welcome to TravelDrop!</h1>
      <ThemeToggle />
      {session ? (<div>
        <p>{session.user.name}</p>
        <Button onClick={signOut}>Logout</Button>
      </div>) : <Button>Login</Button>}
    </div>
  );
}
