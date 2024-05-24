import LoginWithGoogle from "@/components/loginbuttons/LoginWithGoogle";
import LoginWithGithub from "@/components/loginbuttons/LoginWithGithub";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route"
export default async function  Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="p-4 max-w-xs m-auto">
        <h1 className="text-4xl font-bold text-center mb-2">Sign In</h1>
        <p className="text-center text-gray-500 mb-6">
          Sign In to your account using one of the options given below
        </p>
        <LoginWithGoogle />
        <LoginWithGithub/>
      </div>
    </main>
  );
}
