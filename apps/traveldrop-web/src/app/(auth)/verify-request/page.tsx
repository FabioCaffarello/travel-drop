'use client';

import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '@travel-drop/ui';
import { Loader2 } from 'lucide-react';
import { authClient } from '@travel-drop/utils-client';
import { useSearchParams, useRouter } from 'next/navigation';
import React, { useState, useTransition, Suspense } from 'react';
import { toast } from 'sonner';


function VerifyRequestContent() {
  const router = useRouter();
  const [otp, setOtp] = useState('');
  const [isPending, startTransition] = useTransition();
  const params = useSearchParams();
  const email = params.get('email') as string;
  const isOtpCompleted = otp.length === 6;

  function verifyOtp() {
    startTransition(async () => {
      await authClient.signIn.emailOtp({
        email: email,
        otp: otp,
        fetchOptions: {
          onSuccess: () => {
            toast.success('Email verified successfully!');
            router.push('/');
          },
          onError: () => {
            toast.error('Failed to verify email. Please try again.');
          },
        },
      });
    });
  }
  return (
    <Card className="w-full mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-xl">Please check your email</CardTitle>
        <CardDescription>
          We have sent a verification code to your email address. Please check
          your inbox and enter the code to verify your email.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex flex-col items-center space-y-2">
          <InputOTP
            value={otp}
            onChange={(value) => setOtp(value)}
            maxLength={6}
            className="gap-2"
          >
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPGroup>
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
          <p className="text-sm text-muted-foreground">
            Enter the 6-digit code sent to your email
          </p>
        </div>
        <Button
          onClick={verifyOtp}
          disabled={isPending || !isOtpCompleted}
          className="w-full"
        >
          {isPending ? (<><Loader2 className="size-4 animate-spin" /><span>Loading...</span></>) : ('Verify Account')}
        </Button>
      </CardContent>
    </Card>
  );
}

export default function VerifyRequestPage() {
  return (
    <Suspense fallback={<div>Loading verification page...</div>}>
      <VerifyRequestContent />
    </Suspense>
  );
}
