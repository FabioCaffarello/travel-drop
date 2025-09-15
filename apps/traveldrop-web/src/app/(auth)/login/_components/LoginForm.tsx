'use client';

import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Input,
  Label,
} from '@travel-drop/ui';
import { authClient } from '@travel-drop/utils-client';
import { GithubIcon, Loader, Loader2, Send } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useTransition, useState } from 'react';
import { toast } from 'sonner';

export function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [isGithubPending, startGithubTransition] = useTransition();
  const [isEmailPending, startEmailTransition] = useTransition();

  async function signInWithGithub() {
    startGithubTransition(async () => {
      await authClient.signIn.social({
        provider: 'github',
        callbackURL: '/',
        fetchOptions: {
          onSuccess: () => {
            toast.success(
              'Sign in with Github, you will be redirected shortly...'
            );
            router.push(`/verify-request?email=${email}`);
          },
          onError: () => {
            toast.error('Sorry, something went wrong during sign in.');
          },
        },
      });
    });
  }

  function signInWithEmail() {
    startEmailTransition(async () => {
      await authClient.emailOtp.sendVerificationOtp({
        email: email,
        type: 'sign-in',
        fetchOptions: {
          onSuccess: () => {
            toast.success('Verification email sent, please check your inbox.');
            router.push(`/verify-request?email=${email}`);
          },
          onError: () => {
            toast.error('Sorry, something went wrong during sign in.');
          },
        },
      });
    });
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Welcome Back!</CardTitle>
        <CardDescription>
          Login with your Github or Email Account
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <Button
          disabled={isGithubPending}
          onClick={signInWithGithub}
          className="w-full"
          variant="outline"
        >
          {isGithubPending ? (
            <>
              <Loader className="size-4 animate-spin" />
              <span>Signing in...</span>
            </>
          ) : (
            <>
              {' '}
              <GithubIcon className="size-4" />
              Sign In with Github
            </>
          )}
        </Button>
        <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
          <span className="relative z-10 bg-card px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
        <div className="grid gap-3">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="you@example.com"
              required
            />
          </div>
          <Button
            onClick={signInWithEmail}
            disabled={isEmailPending}
            className="w-full"
          >
            {isEmailPending ? (
              <>
                <Loader2 className="size-4 animate-spin" />
                <span>Loading...</span>
              </>
            ) : (
              <>
                <Send className="size-4" />
                <span>Continue with Email</span>
              </>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
