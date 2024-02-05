import {NextAuthOptions} from "next-auth";
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions : NextAuthOptions = {
    providers:[
        GoogleProvider({
            clientId : "853716189343-4fm4r8sbr1lkdck956ghon7810op4qmr.apps.googleusercontent.com",
            clientSecret : "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"
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
              username: { label: "Username", type: "text", placeholder: "jsmith" },
              password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
              const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }

              if (user) {
                return user
              } else {
                return null
              }
            }
          })
    ],
    pages:{
      signIn : "/login"
    }
}