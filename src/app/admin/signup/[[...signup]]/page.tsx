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
      
// <div className="hidden lg:flex w-1/2 overflow-hidden">
//   <img 
//     src="/image4.jpg" 
//     alt="Left panel" 
//     className="object-cover w-full h-full scale-110"
//   />
  
// </div>

//       {/* Right side - Welcome text + form */}
//       <div className="flex w-full lg:w-1/2 items-center justify-center bg-white">
//         <div className="w-full max-w-md p-8">
//           <h1 className="text-4xl font-bold text-red-500 mb-6 text-center">
//             Welcome Back!
//           </h1>
//           <SignUp
//             appearance={{
//               elements: {
//                 card: "shadow-none border-none w-full", // make Clerk form clean
//               },
//             }}
//           />
//         </div>

//   {/* White overlay to cover "Secured by Clerk Development mode" */}
//   <div className="absolute bottom-0 w-full h-14 bg-white"></div>
//       </div>
//     </div>
//   );
// }
import { SignUp } from "@clerk/nextjs";

export default function AdminSignup() {
  return (
    <div className="flex h-screen">
      <div className="w-1/2 hidden md:block">
        <img
          src="/image4.jpg" // replace with your actual image path
          alt="Campus"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Right side - Welcome text + form */}
      <div className="flex w-full lg:w-1/2 items-center justify-center bg-white relative">
        <div className="w-full max-w-md p-8">
          <h1 className="text-4xl font-bold text-red-500 mb-6 text-center">
            Welcome Admin!
          </h1>
          <SignUp
            appearance={{
              elements: {
                card: "shadow-none border-none w-full", 
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}
