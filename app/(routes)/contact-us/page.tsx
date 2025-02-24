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
import emailjs from "@emailjs/browser";
import { SnackbarProvider, useSnackbar } from "notistack";
import { Formik, Form, Field, ErrorMessage } from "formik";
import validationSchema from "@/app/schema/validationSchema";
import { FormValuesProps } from "@/app/types/formTypes";

// Dynamically import React-Leaflet components to prevent SSR issues
const MapContainer = dynamic(() => import("react-leaflet").then((mod) => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import("react-leaflet").then((mod) => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import("react-leaflet").then((mod) => mod.Marker), { ssr: false });
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), { ssr: false });



const ContactUaPage = () => {
  return (
    <SnackbarProvider maxSnack={1} autoHideDuration={5000} anchorOrigin={{ vertical: "top", horizontal: "center" }}>
      <MyApp />
    </SnackbarProvider>
  );
};

function MyApp() {
  const { enqueueSnackbar } = useSnackbar();
  const pathname = usePathname();
  const formattedPathname = pathname.replace("/", "");

  const position: LatLngExpression = [8.1339, 4.2432];
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
 

  const handleSubmit = async (values: FormValuesProps, { resetForm }: { resetForm: () => void }) => {
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
    const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID!;

    const templateParams = {
      to_name: process.env.NEXT_PUBLIC_COMPANY_NAME,
      from_name: values.firstName + " " + values.lastName, // Combining first and last name
      from_email: values.email,
      subject: values.subject || "New Contact Message", // Default subject if none is provided
      phone: values.phone,
      message: values.message,
    };
    

    try {
      await emailjs.send(serviceId, templateId, templateParams, userId);
      enqueueSnackbar("Email sent successfully! We'll be in touch soon.", { variant: "success" });
      resetForm();
    } catch (error) {
      console.error("Error sending email:", error);
      enqueueSnackbar("Oops! Something went wrong. Please try again later.", { variant: "error" });
    }
  }    

  return (
    <main>
      <PagesHero bgImage={ContactBg} pageTitle={formattedPathname} />
      <div className="text-center mt-8 lg:mt-24">
        <h3 className="text-[16px] font-semibold mb-3">VENUE INFO</h3>
        <p>Beside Adeyi Filling Station, Orogun Area, Iresa Road, Ogbomoso, Oyo State</p>
      </div>

      <div className="text-center mt-6">
        <h3 className="text-[16px] font-semibold mb-3">CONTACT US</h3>
        <p>Telephone: <a href="tel:+2348033734820" className="hover:underline">+2348033734820</a></p>
        <p>Email: <a href="mailto:hismercy03@gmail.com" className="hover:underline">hismercy03@gmail.com</a></p>
      </div>

      <div className="mt-8 mb-4 lg:mt-24 lg:mb-12">
        <Heading text="Get in touch" text2="With Us" />
        <Line ClassName="justify-center" />
      </div>

      {/* Contact Form */}
      <Formik
        initialValues={{ firstName: "", lastName: "", phone: "", email: "", message: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="max-w-[600px] mx-auto space-y-6 text-gray-600 py-8 px-4 md:px-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <Field type="text" name="firstName" placeholder="First Name" className="w-full border p-3 focus:outline-none" />
                <ErrorMessage name="firstName" component="p" className="text-red-500 text-sm mt-1" />
              </div>
              <div>
                <Field type="text" name="lastName" placeholder="Last Name" className="w-full border p-3 focus:outline-none" />
                <ErrorMessage name="lastName" component="p" className="text-red-500 text-sm mt-1" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <Field type="text" name="phone" placeholder="Phone Number" className="w-full border p-3 focus:outline-none" />
                <ErrorMessage name="phone" component="p" className="text-red-500 text-sm mt-1" />
              </div>
              <div>
                <Field type="email" name="email" placeholder="Email" className="w-full border p-3 focus:outline-none" />
                <ErrorMessage name="email" component="p" className="text-red-500 text-sm mt-1" />
              </div>
            </div>

            <div>
              <Field as="textarea" name="message" placeholder="Message" className="w-full border p-3 focus:outline-none" rows={4} />
              <ErrorMessage name="message" component="p" className="text-red-500 text-sm mt-1" />
            </div>

            <button
              type="submit"
              className="w-full bg-[#C69C6D] text-white py-3 font-semibold rounded-lg hover:bg-[#b3875d] transition-all"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </Form>
        )}
      </Formik>

      <div className="mt-12">
        {isClient && (
          <MapContainer center={position} zoom={13} scrollWheelZoom={false} className="h-[300px] md:h-[480px] w-full z-40">
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' />
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
}

export default ContactUaPage;
