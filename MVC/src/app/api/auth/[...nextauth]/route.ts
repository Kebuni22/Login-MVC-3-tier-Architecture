import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import { authOptions } from "@/app/lib/authOptions";

const handler = NextAuth(authOptions)
export {handler as GET , handler as POST}