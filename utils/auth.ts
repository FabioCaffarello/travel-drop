import { betterAuth } from 'better-auth';
import { prismaAdapter } from 'better-auth/adapters/prisma';
import { emailOTP } from 'better-auth/plugins';
import { prisma } from '@travel-drop/utils-server';
import { resend } from '@travel-drop/utils-server';
import { env } from '@travel-drop/utils-server';

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: 'sqlite', // or "mysql", "postgresql", ...etc
  }),
  socialProviders: {
    github: {
      clientId: env.AUTH_GITHUB_CLIENT_ID,
      clientSecret: env.AUTH_GITHUB_CLIENT_SECRET,
    },
    // google: {
    // TODO: enable Google auth
    // https://www.better-auth.com/docs/authentication/google
    //   clientId: process.env.GOOGLE_CLIENT_ID as string,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    // },
  },

  plugins: [
    emailOTP({
      async sendVerificationOTP({ email, otp }) {
        // Send the OTP to the user's email

        await resend.emails.send({
          from: 'TravelDrop <onboarding@resend.dev>',
          to: [email],
          subject: 'TravelDrop - Verify your email',
          html: `<p>Your OTP is: <strong>${otp}</strong></p>`,
        });
      },
    }),
  ],
});
