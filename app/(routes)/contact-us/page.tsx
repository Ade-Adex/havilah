"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import ContactBg from "@/public/images/contact-bg.png";
import { usePathname } from "next/navigation";
import PagesHero from "@/app/components/PagesHero";
import Heading from "@/app/components/Heading";
import Line from "@/app/components/Line";
import { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";

// Dynamically import React-Leaflet components to disable SSR
const MapContainer = dynamic(() => import("react-leaflet").then((mod) => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import("react-leaflet").then((mod) => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import("react-leaflet").then((mod) => mod.Marker), { ssr: false });
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), { ssr: false });

const ContactUaPage = () => {
  const pathname = usePathname();
  const formattedPathname = pathname.replace("/", "");

  // Coordinates for the map location
  const position: LatLngExpression = [8.1339, 4.2432]; // Ogbomoso, Oyo State (example)

  // State to control rendering on the client
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensure the map renders only on the client
  }, []);

  return (
    <main className="">
      <PagesHero bgImage={ContactBg} pageTitle={formattedPathname} />
      <div className="font-robotoSlab text-[12px] md:text-[14px] font-[300] leading-[18.46px] tracking-[-5%] text-center mt-8 lg:mt-24 ">
        <h3 className="text-[14px] md:text-[16px] font-[600] md:leading-[21.1px] mb-3">VENUE INFO</h3>
        <span className="">Beside Adeyi Filling Station</span>
        <p>Orogun Area, Iresa Road</p>
        <p>Ogbomoso, Oyo State</p>
      </div>
      <div className="font-robotoSlab text-[12px] md:text-[14px] font-[300] leading-[18.46px] tracking-[-5%] text-center mt-6">
        <h3 className="text-[14px] md:text-[16px] font-[600] md:leading-[21.1px] mb-3 mt-8">CONTACT US</h3>
        <span>
          Telephone:{" "}
          <a href="tel:+2348033734820" className="hover:underline">
            +2348033734820
          </a>
        </span>
        <p>
          E-mail:{" "}
          <a href="mailto:hismercy03@gmail.com" className="hover:underline">
            hismercy03@gmail.com
          </a>
        </p>
      </div>

      <div className="mt-8 mb-4 lg:mt-24 lg:mb-12">
        <Heading text="Get in touch" text2="With Us" />
        <Line ClassName="justify-center" />
      </div>

      {/* Form Section */}
      <form
        action=""
        className="max-w-[600px] mx-auto space-y-6 mb-24 text-[12px] md:text-[14px] font-[400] md:leading-[24px] text-havilah-gray py-8 px-4 md:px-0"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="First Name"
            className="w-full border border-gray-300 p-3 focus:outline-none focus:ring-0 focus:ring-gray-500"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="w-full border border-gray-300 p-3 focus:outline-none focus:ring-0 focus:ring-gray-500"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Phone Number"
            className="w-full border border-gray-300 p-3 focus:outline-none focus:ring-0 focus:ring-gray-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 p-3 focus:outline-none focus:ring-0 focus:ring-gray-500"
          />
        </div>
        <textarea
          placeholder="Message"
          className="w-full border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-gray-500"
          rows={4}
        ></textarea>
        <button
          type="submit"
          className="w-full bg-[#C69C6D] text-white py-3 text-center font-semibold rounded-lg hover:bg-[#b3875d] transition-all"
        >
          Send Message
        </button>
      </form>

      {/* Map Section */}
      <div className="mt-12">
        {isClient && (
          <MapContainer center={position} zoom={13} scrollWheelZoom={false} className="h-[300px] md:h-[480px] w-full z-40">
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position}>
              <Popup>
                Beside Adeyi Filling Station <br /> Orogun Area, Iresa Road, Ogbomoso.
              </Popup>
            </Marker>
          </MapContainer>
        )}
      </div>
    </main>
  );
};

export default ContactUaPage;










// "use client";

// import React from "react";
// import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
// import ContactBg from "@/public/images/contact-bg.png";
// import { usePathname } from "next/navigation";
// import PagesHero from "@/app/components/PagesHero";
// import Heading from "@/app/components/Heading";
// import Line from "@/app/components/Line";

// const containerStyle = {
//   width: "100%",
//   height: "500px",
// };

// const position = { lat: 8.1339, lng: 4.2432 }; // Havilah Event Place Location

// const ContactUaPage = () => {
//   const pathname = usePathname();
//   const formattedPathname = pathname.replace("/", "");

//   return (
//     <main>
//       <PagesHero bgImage={ContactBg} pageTitle={formattedPathname} />

//       <div className="font-robotoSlab text-[12px] md:text-[14px] font-[300] leading-[18.46px] tracking-[-5%] text-center mt-8 lg:mt-24">
//         <h3 className="text-[14px] md:text-[16px] font-[600] md:leading-[21.1px] mb-3">
//           VENUE INFO
//         </h3>
//         <span>Beside Adeyi Filling Station</span>
//         <p>Orogun Area, Iresa Road</p>
//         <p>Ogbomoso, Oyo State</p>
//       </div>

//       <div className="text-center mt-6">
//         <h3 className="text-[14px] md:text-[16px] font-[600] md:leading-[21.1px] mb-3 mt-8">
//           CONTACT US
//         </h3>
//         <span>
//           Telephone:{" "}
//           <a href="tel:+2348033734820" className="hover:underline">
//             +2348033734820
//           </a>
//         </span>
//         <p>
//           E-mail:{" "}
//           <a href="mailto:hismercy03@gmail.com" className="hover:underline">
//             hismercy03@gmail.com
//           </a>
//         </p>
//       </div>

//       <div className="mt-8 mb-4 lg:mt-24 lg:mb-12">
//         <Heading text="Get in touch" text2="With Us" />
//         <Line ClassName="justify-center" />
//       </div>

//       {/* Contact Form */}
//       <form className="max-w-[600px] mx-auto space-y-6 mb-24 text-[12px] md:text-[14px] font-[400] text-havilah-gray py-8 px-4 md:px-0">
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//           <input
//             type="text"
//             placeholder="First Name"
//             className="w-full border border-gray-300 p-3 focus:outline-none"
//           />
//           <input
//             type="text"
//             placeholder="Last Name"
//             className="w-full border border-gray-300 p-3 focus:outline-none"
//           />
//         </div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//           <input
//             type="text"
//             placeholder="Phone Number"
//             className="w-full border border-gray-300 p-3 focus:outline-none"
//           />
//           <input
//             type="email"
//             placeholder="Email"
//             className="w-full border border-gray-300 p-3 focus:outline-none"
//           />
//         </div>
//         <textarea
//           placeholder="Message"
//           className="w-full border border-gray-300 p-3 focus:outline-none"
//           rows={4}
//         ></textarea>
//         <button
//           type="submit"
//           className="w-full bg-[#C69C6D] text-white py-3 text-center font-semibold rounded-lg hover:bg-[#b3875d] transition-all"
//         >
//           Send Message
//         </button>
//       </form>

//       {/* Google Map Section */}
//       <div className="w-full mx-auto mb-12">
//         <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string}>
//           <GoogleMap mapContainerStyle={containerStyle} center={position} zoom={15}>
//             <Marker position={position} />
//           </GoogleMap>
//         </LoadScript>
//       </div>
//     </main>
//   );
// };

// export default ContactUaPage;
