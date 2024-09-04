// import React from "react";
// import {
//   FaDribbbleSquare,
//   FaFacebookSquare,
//   FaGithubSquare,
//   FaInstagram,
//   FaTwitterSquare,
// } from "react-icons/fa";

// const Footer2 = () => {
//   return (
//     <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
//       <div>
//         <h1 className="w-full text-3xl font-bold text-[#00df9a]">HonBil.</h1>
//         <p className="py-4">
//           <b className="w-full text-l font-bold text-[#00df9a]">
//             Why?(our vision){" "}
//           </b>
//           <br />
//           To bring a hassle free renting experience for both renters and
//           renters.
//           <br />
//           <b className="w-full text-l font-bold text-[#00df9a]"> Values?</b>
//           <br /> Trust, creativity and continious innovation, integrity.
//         </p>
//         <div className="flex justify-between md:w-[75%] my-6">
//           <a href="https://www.facebook.com/profile.php?id=100089118376541">
//             <FaFacebookSquare size={30} />
//           </a>
//           <a href="https://instagram.com/honbil_rentals?igshid=MzNlNGNkZWQ4Mg==">
//             <FaInstagram size={30} />
//           </a>
//           <a href="https://twitter.com/HonBil?t=Stesc5atPXkRJBR_UURrTg&s=08">
//             <FaTwitterSquare size={30} />
//           </a>
//         </div>
//       </div>
//       <div className="lg:col-span-2 flex justify-between mt-6">
//         <div>
//           <h6 className="font-medium text-gray-400">Join us</h6>
//           <ul>
//             <a href="https://merchant.razorpay.com/policy/MVs11f1F4U5uLt/privacy">
//               <li className="py-2 text-sm">Policy</li>
//             </a>
//             <li className="py-2 text-sm">Terms</li>
//             <a href="https://merchant.razorpay.com/policy/MVs11f1F4U5uLt/shipping">
//               <li className="py-2 text-sm">Insights</li>
//             </a>
//           </ul>
//         </div>
//         <div>
//           <h6 className="font-medium text-gray-400">Suggestions</h6>
//           <ul>
//             <li className="py-2 text-sm">Guides</li>
//             <li className="py-2 text-sm">Contact</li>
//           </ul>
//         </div>
//         <div>
//           <h6 className="font-medium text-gray-400">Company</h6>
//           <ul>
//             <li className="py-2 text-sm">About</li>
//             <li className="py-2 text-sm">Contact</li>
//           </ul>
//         </div>
//         <div>
//           <h6 className="font-medium text-gray-400">Legal</h6>
//           <ul>
//             <a href="https://merchant.razorpay.com/policy/MVs11f1F4U5uLt/refund">
//               <li className="py-2 text-sm">Claim</li>
//             </a>
//             <li className="py-2 text-sm">Policy</li>
//             <a href="https://merchant.razorpay.com/policy/MVs11f1F4U5uLt/privacy">
//               <li className="py-2 text-sm">Terms</li>
//             </a>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer2;

//// new footer design

import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";

const Footer2 = () => {
  return (
    <div className="w-full bg-slate-900 py-16">
      <div className="max-w-[1240px] mx-auto flex flex-col px-4">
        <div className="sm:flex text-center justify-between items-center">
          <h1 class="text-3xl font-bold text-[#00df9a]">HonBil</h1>
          <div className="flex justify-between w-full sm:max-w-[280px] my-4">
            <FaFacebook className="icon" />
            <FaTwitter className="icon" />
            <FaYoutube className="icon" />
            <FaPinterest className="icon" />
            <FaInstagram className="icon" />
          </div>
        </div>
        <div className="flex justify-between">
          <ul className="lg:flex text-slate-300">
            <li>About</li>
            <li>Partnerships</li>
            <li>Careers</li>
            <li>Newsroom</li>
            <li>Advertising</li>
          </ul>
          <ul className="text-right lg:flex text-slate-300">
            <li>Home</li>
            <li>Destinations</li>
            <li>Travel</li>
            <li>View</li>
            <li>Book</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer2;
