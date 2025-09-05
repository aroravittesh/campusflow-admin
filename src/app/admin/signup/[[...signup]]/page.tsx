import { SignUp } from "@clerk/nextjs";


export default function AdminSignup() {
  return (
    <div className="flex h-screen">
      <div className="w-1/2 hidden md:block">
        <img
          src="/image4.jpg" 
          alt="Campus"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Right side - Welcome text + form */}

      <div className="flex w-full lg:w-1/2 items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100 relative">
  {/* Optional background illustration */}
  <div className="absolute inset-0 bg-[url('/abstract-shape.svg')] bg-no-repeat bg-center opacity-5"></div>

  <div className="w-full max-w-md p-8 relative z-10">
    
    {/* Heading */}
    <h2 className="text-3xl font-semibold text-red-500 mb-2 text-center">
      Create Admin Account
    </h2>
    <div ></div>
    
    {/* Subtitle */}
    <p className="text-gray-500 text-center mb-6">
      Manage your ERP securely and efficiently
    </p>

    {/* Clerk Signup */}
    <SignUp
      appearance={{
        elements: {
          card: "shadow-xl rounded-2xl w-full",
          headerSubtitle: "hidden",
          footer: { display: 'none' },
        },
      }}
    />
  </div>
</div>

    </div>
  );
}
