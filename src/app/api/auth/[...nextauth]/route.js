import NextAuth from 'next-auth';
import AppleProvider from 'next-auth/providers/apple';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import { usersData } from '@/data/usersData';

const handler = NextAuth({
  providers: [
    AppleProvider({
      clientId: process.env.APPLE_ID,
      clientSecret: process.env.APPLE_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          return null;
        }

        // Find user in db
        const user = (email) => {
          return usersData.find((user) => user.email === email);
        };

        // Password Validate
        const validatePassword = async (user, inputPassword) => {
          return bcrypt.compare(inputPassword, user.password);
        };

        if (user && (await validatePassword(user, credentials.password))) {
          return { id: user.id, name: user.name, email: user.email };
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: '/signin',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id;
      }
      return session;
    },
  },
});

export { handler as GET, handler as POST };
