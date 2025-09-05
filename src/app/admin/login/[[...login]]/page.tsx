// import { SignIn } from "@clerk/nextjs";

// export default function AdminLogin() {
//   return (
//     <div className="flex h-screen items-center justify-center">
//       <SignIn />
//     </div>
//   );
// }

import { SignIn } from "@clerk/nextjs";

export default function AdminLogin() {
  return (
    <div className="flex h-screen">
      {/* Left Half - Image */}
      <div className="w-1/2 hidden md:block">
        <img
          src="/image4.jpg" // replace with your actual image path
          alt="Campus"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Right Half - Login */}
      <div className="flex w-full lg:w-1/2 items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100 relative">
  {/* Optional background illustration */}
  <div className="absolute inset-0 bg-[url('/abstract-shape.svg')] bg-no-repeat bg-center opacity-5"></div>

  <div className="w-full max-w-md p-8 relative z-10">
    
    {/* Heading */}
    <h2 className="text-3xl font-semibold text-red-500 mb-2 text-center">
      Welcome Back!
    </h2>

    {/* Subtitle */}
    <p className="text-gray-500 text-center mb-6">
      Access your ERP account securely
    </p>

    {/* Clerk SignIn */}
    <SignIn
      appearance={{
        elements: {
          card: "shadow-xl rounded-2xl w-full",
          headerSubtitle: "hidden",
          footer: { display: "none" }, // hides Clerk footer branding, keeps remember + forgot password
        },
      }}
    />
  </div>
</div>

      {/* <div className="w-full md:w-1/2 flex flex-col items-center justify-center bg-white px-6">
        <h1 className="text-4xl font-bold text-red-600 mb-6">Welcome Back!</h1>
        <div className="w-full max-w-sm">
          <SignIn
            appearance={{
              elements: {
                formButtonPrimary:
                  "bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg",
                card: "shadow-lg rounded-2xl border border-gray-200 p-4",
                headerSubtitle: "hidden", // hide Clerk default subtitle
              },
            }}
          />
           
        </div>
      </div> */}
    </div>
  );
}


