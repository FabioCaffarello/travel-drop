"use client";

import { authClient } from '@travel-drop/utils-client';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

export function useSignout() {
  const router = useRouter();
  const handleSignout = async function signOut() {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push('/'); // redirect to home page
          toast.success('Logged out successfully');
        },
        onError: () => {
          toast.error('Failed to sign out. Please try again.');
        },
      },
    });
  };

  return handleSignout;
}
