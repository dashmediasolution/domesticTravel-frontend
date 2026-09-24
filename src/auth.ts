import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

import { prisma } from "@/lib/prisma";

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Admin Login",

            credentials: {
                email: {
                    label: "Email",
                    type: "email",
                },
                password: {
                    label: "Password",
                    type: "password",
                },
            },

            async authorize(credentials) {
                const email = credentials?.email
                    ?.trim()
                    .toLowerCase();

                const password = credentials?.password;

                if (!email || !password) {
                    return null;
                }

                const admin =
                    await prisma.adminUser.findUnique({
                        where: {
                            email,
                        },
                    });

                if (!admin || !admin.isActive) {
                    return null;
                }

                const isValid =
                    await bcrypt.compare(
                        password,
                        admin.passwordHash
                    );

                if (!isValid) {
                    return null;
                }

                return {
                    id: admin.id,
                    name: admin.name,
                    email: admin.email,
                };
            },
        }),
    ],

    session: {
        strategy: "jwt",
    },

    pages: {
        signIn: "/admin/login",
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
                session.user.id = token.id as string;
            }

            return session;
        },
    },

    secret: process.env.NEXTAUTH_SECRET,
};