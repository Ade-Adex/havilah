import React from "react";
import { useField } from "formik";

interface CustomFieldProps {
  name: string;
  type?: string;
  placeholder: string;
  as?: "input" | "textarea";
  className?: string;
}

const CustomField: React.FC<CustomFieldProps> = ({ name, type = "text", placeholder, as = "input", className }) => {
  const [field, meta] = useField(name);
  const error = meta.touched && meta.error ? meta.error : "";

  return React.createElement(as, {
    ...field,
    type,
    placeholder: error || placeholder,
    className: `w-full rounded-sm border p-2 focus:outline-none ${error ? "border-red-500 placeholder-red-500" : ""} ${className}`,
    rows: as === "textarea" ? 4 : undefined,
  });
};

export default CustomField;
