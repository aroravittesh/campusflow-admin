// import { SignUp } from "@clerk/nextjs";

// export default function AdminSignup() {
//   return (
//     <div className="flex h-screen items-center justify-center">
//       <SignUp />
//     </div>
//   );
// }
// import { SignUp } from "@clerk/nextjs";

// export default function AdminSignup() {
//   return (
//     <div className="flex h-screen">
//       {/* Left side - Image background with Welcome Back */}
//       <div
//         className="hidden lg:flex w-1/2 bg-cover bg-center items-center justify-center"
//         style={{
//           backgroundImage:
//             "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1500&q=80')", // replace with your photo
//         }}
//       >
//         <div className="bg-black bg-opacity-50 p-10 rounded-xl text-center">
//           <h1 className="text-4xl font-bold text-red-500 mb-4">
//             Welcome Back!
//           </h1>
//           <p className="text-white text-lg">
//             Manage your platform with ease and security.  
//             Sign up to access the admin dashboard.
//           </p>
//         </div>
//       </div>

//       {/* Right side - Clerk signup */}
//       <div className="flex w-full lg:w-1/2 items-center justify-center bg-white">
//         <div className="p-6 rounded-2xl shadow-lg">
//           <SignUp
//             appearance={{
//               elements: {
//                 card: "shadow-none border-none", // cleaner Clerk box
//               },
//             }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

import { SignUp } from "@clerk/nextjs";

export default function AdminSignup() {
  return (
    <div className="flex h-screen">
      
<div className="hidden lg:flex w-1/2 overflow-hidden">
  <img 
    src="/image4.jpg" 
    alt="Left panel" 
    className="object-cover w-full h-full scale-110"
  />
  
</div>



      {/* Right side - Welcome text + form */}
      <div className="flex w-full lg:w-1/2 items-center justify-center bg-white">
        <div className="w-full max-w-md p-8">
          <h1 className="text-4xl font-bold text-red-500 mb-6 text-center">
            Welcome Back!
          </h1>
          <SignUp
            appearance={{
              elements: {
                card: "shadow-none border-none w-full", // make Clerk form clean
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}
