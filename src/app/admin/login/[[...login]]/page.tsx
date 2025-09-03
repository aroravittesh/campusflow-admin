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
            <div className="w-full md:w-1/2 flex flex-col items-center justify-center bg-white px-6 relative">
        <h1 className="text-4xl font-bold text-red-600 mb-6">Welcome Back!</h1>
        <div className="w-full max-w-sm relative">
          <SignIn
            appearance={{
              elements: {
                formButtonPrimary:
                  "bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg",
                card: "shadow-lg rounded-2xl border border-gray-200 p-4",
                headerSubtitle: "hidden",
                footer: { display: "none" }, // 👈 inline CSS to hide footer
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


