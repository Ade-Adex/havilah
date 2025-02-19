import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";
import { generateEmailTemplate } from "../lib/emailTemplate";

// Ensure API key is defined
const apiKey = process.env.NEXT_PUBLIC_RESEND_API_KEY as string;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Handle unsupported methods
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  // Initialize Resend
  const resend = new Resend(apiKey);

  try {
    // Destructure email, name, and message from the request body
    const { email, name, message }: { email: string; name: string; message: string } = req.body;
    const companyName = process.env.NEXT_PUBLIC_COMPANY_NAME || "Havilah Event Center"; // Fixed company name

    // Generate email template
    const emailTemplate = generateEmailTemplate(name, email, companyName, message);

    // Send email using Resend API
    const response = await resend.emails.send({
      from: `Havilah Event Center <adeoluamole@gmail.com>`, // Updated sender name
      to: email, // Fixed recipient email
      subject: "New Contact Us Message",
      html: emailTemplate,
    });

    // Check if there's an error in the response
    if (response.error) {
      console.error("Email send error:", response.error);
      return res
        .status(500)
        .json({ error: response.error.message || "Failed to send email" });
    }

    // Success message
    return res.status(200).json({
      message: "Thank you for contacting HavilahEventCenter! We have received your email and will get back to you shortly, usually within 1-2 business days."
    });

  } catch (error) {
    // Handle errors
    if (error instanceof Error) {
      console.error("Error:", error);
      return res.status(500).json({ error: error.message });
    } else {
      console.error("Unknown error:", error);
      return res.status(500).json({ error: "An unexpected error occurred" });
    }
  }
}
