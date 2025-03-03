"use client";

import React from "react";
import { Formik, Form } from "formik";
import CustomField from "@/app/components/contact-us/CustomField";
import Loader from "@/app/components/Loader";
import { FormValuesProps } from "@/app/types/formTypes";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import "animate.css";
import validationSchema from "@/app/schema/validationSchema";
import { OptionsObject } from "notistack";

interface ContactFormProps {
  enqueueSnackbar: (message: string, options?: OptionsObject) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ enqueueSnackbar }) => {
  const handleSubmit = async (
    values: FormValuesProps,
    { resetForm }: { resetForm: () => void }
  ) => {
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
    const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID!;

    const templateParams = {
      to_name: process.env.NEXT_PUBLIC_COMPANY_NAME,
      from_name: `${values.firstName} ${values.lastName}`,
      from_email: values.email,
      subject: values.subject || "New Contact Message",
      phone: values.phone,
      message: values.message,
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, userId);
      enqueueSnackbar("Email sent successfully!", { variant: "success" });

      // Delay the SweetAlert2 pop-up by 2 seconds
      setTimeout(() => {
        Swal.fire({
          icon: "success",
          title:
            "<h3 style='font-size: 20px; font-weight: bold;'>Message Received</h3>",
          html: "<p style='font-size: 16px;'>Thank you for reaching out. Our team will review your inquiry and respond as soon as possible.</p>",
          confirmButtonColor: "#C69C6D",
          showClass: {
            popup: "animate__animated animate__fadeInUp animate__faster",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutDown animate__faster",
          },
          width: 500,
          padding: "2em",
          color: "#716add",
          background: "#fff url(/public/images/Havila_Logo.png)",
          backdrop: "rgba(0,0,123,0.4)",
        });
      }, 2000);
      resetForm();
    } catch (error) {
      console.error("Error sending email:", error);
      enqueueSnackbar("Oops! Something went wrong. Please try again later.", { variant: "error" });
    }
  };

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        message: "",
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="max-w-[600px] mx-auto space-y-6 text-gray-600 py-8 px-4 md:px-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <CustomField name="firstName" placeholder="First Name" />
            <CustomField name="lastName" placeholder="Last Name" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <CustomField name="phone" type="text" placeholder="Phone Number" />
            <CustomField name="email" type="email" placeholder="Email" />
          </div>
          <CustomField name="message" placeholder="Message" as="textarea" />
          <button
            type="submit"
            className={`w-full flex justify-center items-center ${
              isSubmitting
                ? "bg-[#333362]"
                : "bg-[#C69C6D] hover:bg-[#b3875d]"
            } text-white py-3 font-semibold rounded-lg transition-all overflow-hidden relative`}
            disabled={isSubmitting}
          >
            {isSubmitting ? <Loader /> : "Send Message"}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
