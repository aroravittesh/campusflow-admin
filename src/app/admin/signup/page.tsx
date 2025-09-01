import { SignUp } from "@clerk/nextjs";

export default function AdminSignup() {
  return (
    <div className="flex h-screen items-center justify-center">
      <SignUp />
    </div>
  );
}
