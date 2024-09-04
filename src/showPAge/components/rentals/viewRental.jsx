// import React from "react";

// const ViewRental = (props) => {
//   const { rentals } = props;
//   return (
//     <>
//       <div className="p-10">
//         <div className=" w-full lg:max-w-full lg:flex">
//           <div
//             className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
//             // style="background-image: url('/assets/testimonial2.png')"
//             title="Mountain"
//           ></div>
//           <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
//             <div className="mb-8">
//               <p className="text-sm text-gray-600 flex items-center">
//                 <svg
//                   className="fill-current text-gray-500 w-3 h-3 mr-2"
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 20 20"
//                 >
//                   <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
//                 </svg>
//                 Members only
//               </p>
//               <div className="text-gray-900 font-bold text-xl mb-2">
//                 Best Mountain Trails 2020
//               </div>
//               <p className="text-gray-700 text-base">
//                 Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//                 Voluptatibus quia, Nonea! Maiores et perferendis eaque,
//                 exercitationem praesentium nihil.
//               </p>
//             </div>
//             <div className="flex items-center">
//               <img
//                 className="w-10 h-10 rounded-full mr-4"
//                 src="../../../assets/adhil-mn-F_iQW__GFXc-unsplash.jpg"
//                 alt="HonBil"
//               />
//               <div className="text-sm">
//                 <p className="text-gray-900 leading-none">John Smith</p>
//                 <p className="text-gray-600">Aug 18</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ViewRental;

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

export default function ViewRental() {
  return (
    <Card className="w-96">
      <CardHeader color="blue" className="relative h-56">
        <img
          src="/img/blog.jpg"
          alt="img-blur-shadow"
          className="h-full w-full"
        />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h5" className="mb-2">
          Cozy 5 Stars Apartment
        </Typography>
        <Typography>
          The place is close to Barceloneta Beach and bus stop just 2 min by
          walk and near to "Naviglio" where you can enjoy the main night life in
          Barcelona.
        </Typography>
      </CardBody>
      <CardFooter divider className="flex items-center justify-between py-3">
        <Typography variant="small">$899/night</Typography>
        <Typography variant="small" color="gray" className="flex gap-1">
          <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
          Barcelona, Spain
        </Typography>
      </CardFooter>
    </Card>
  );
}
