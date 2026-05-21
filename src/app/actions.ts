"use server";

// import { Resend } from "resend";

// Resend initialization with fallback for build environment
// const resendKey = process.env.RESEND_API_KEY || "re_123456789";
// const resend = new Resend(resendKey);

export async function sendContactEmail(data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  try {
    // In a real environment, you would call:
    // await resend.emails.send({
    //   from: "Arc Agency <onboarding@resend.dev>",
    //   to: "sumit.halge@example.com", // client email
    //   subject: `Project Inquiry: ${data.subject}`,
    //   html: `
    //     <h3>New Contact Form Submission</h3>
    //     <p><strong>Name:</strong> ${data.name}</p>
    //     <p><strong>Email:</strong> ${data.email}</p>
    //     <p><strong>Subject:</strong> ${data.subject}</p>
    //     <p><strong>Message:</strong></p>
    //     <p>${data.message}</p>
    //   `
    // });
    
    // Simulate slight server latency
    await new Promise((resolve) => setTimeout(resolve, 800));
    
    console.log("Mock Resend: Email sent successfully for", data.email);
    return { success: true };
  } catch (error: unknown) {
    console.error("Resend error:", error);
    const message = error instanceof Error ? error.message : "Failed to process inquiry.";
    return { success: false, error: message };
  }
}
