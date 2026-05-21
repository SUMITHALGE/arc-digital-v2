"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import { sendContactEmail } from "@/app/actions";
import styles from "./contact.module.css";

const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setServerError(null);
    const result = await sendContactEmail(data);
    if (result.success) {
      setIsSubmitted(true);
      reset();
    } else {
      setServerError(result.error || "Something went wrong.");
    }
  };

  return (
    <div className={styles.contactPage}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Info Details */}
          <div className={styles.infoCol}>
            <div>
              <span className={styles.label}>Get In Touch</span>
              <h1 className={styles.title}>Let&apos;s build something premium together</h1>
              <p className={styles.subtitle}>
                Have a project in mind or need an SEO audit? Reach out today.
                Our team responds within 24 hours.
              </p>
            </div>

            <div className={styles.contactDetails}>
              <div className={styles.contactItem}>
                <div className={styles.iconWrapper}>
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className={styles.itemLabel}>Email Us</div>
                  <div className={styles.itemVal}>agency@arcdigitalsolutions.com</div>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.iconWrapper}>
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className={styles.itemLabel}>Call Us</div>
                  <div className={styles.itemVal}>+1 (555) 019-2834</div>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.iconWrapper}>
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className={styles.itemLabel}>Visit Us</div>
                  <div className={styles.itemVal}>
                    100 Pine Street, San Francisco, CA 94111
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className={styles.formBox}>
            {isSubmitted ? (
              <div className={styles.successMsg}>
                <h3 className="text-xl font-bold font-heading mb-2 text-primary-navy">
                  Inquiry Received!
                </h3>
                <p className="text-sm text-gray-600">
                  Thank you for reaching out. We have received your message and our systems
                  team will contact you shortly.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 inline-block bg-primary-navy hover:bg-accent-blue text-white text-sm font-semibold py-2 px-6 rounded-full transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.fieldLabel}>
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    {...register("name")}
                    placeholder="John Doe"
                    className={styles.input}
                    disabled={isSubmitting}
                  />
                  {errors.name && (
                    <span className={styles.error}>{errors.name.message}</span>
                  )}
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.fieldLabel}>
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register("email")}
                    placeholder="john@example.com"
                    className={styles.input}
                    disabled={isSubmitting}
                  />
                  {errors.email && (
                    <span className={styles.error}>{errors.email.message}</span>
                  )}
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="subject" className={styles.fieldLabel}>
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    {...register("subject")}
                    placeholder="Website Dev Inquiry"
                    className={styles.input}
                    disabled={isSubmitting}
                  />
                  {errors.subject && (
                    <span className={styles.error}>{errors.subject.message}</span>
                  )}
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.fieldLabel}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    {...register("message")}
                    placeholder="Tell us about your project constraints, timeline, and SEO goals..."
                    className={`${styles.input} resize-none`}
                    disabled={isSubmitting}
                  />
                  {errors.message && (
                    <span className={styles.error}>{errors.message.message}</span>
                  )}
                </div>

                {serverError && (
                  <div className="text-sm text-accent-pink font-semibold">
                    {serverError}
                  </div>
                )}

                <button
                  type="submit"
                  className={styles.submitBtn}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <Loader2 className="w-4 h-4 animate-spin" /> Processing...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      <Send className="w-4 h-4" /> Send Inquiry
                    </span>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
