"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import axios from "axios";
import { Send, CheckCircle } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian mobile number"),
  email: z.string().email("Enter a valid email address"),
  city: z.string().min(2, "City is required"),
  legalIssue: z.string().min(1, "Please select a legal issue"),
  message: z.string().min(20, "Please describe your issue in at least 20 characters"),
});

type FormData = z.infer<typeof schema>;

export default function ContactForm({ practiceAreas }: { practiceAreas: string[] }) {
  const [success, setSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState("");

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setSubmitting(true);
    setServerError("");
    try {
      await axios.post("/api/contact", data);
      setSuccess(true);
      reset();
    } catch (err: any) {
      setServerError(err?.response?.data?.error || "Failed to send. Please try calling or WhatsApp directly.");
    } finally {
      setSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className="flex flex-col items-center justify-center h-full py-20 text-center bg-gray-50 dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 px-8">
        <CheckCircle className="w-20 h-20 text-green-500 mb-6" />
        <h3 className="font-display text-3xl font-bold text-navy dark:text-white mb-3">Message Sent!</h3>
        <p className="text-gray-600 dark:text-gray-400 max-w-md">Thank you for contacting Adv. Pavan Rathod. We will review your inquiry and respond within 24 hours.</p>
        <button onClick={() => setSuccess(false)} className="mt-8 bg-navy text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-navy/90 transition-colors">
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 dark:bg-gray-900 rounded-3xl p-8 border border-gray-100 dark:border-gray-800">
      <h2 className="font-display text-2xl font-bold text-navy dark:text-white mb-6">Free Legal Consultation</h2>
      {serverError && (
        <div className="mb-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl text-red-600 dark:text-red-400 text-sm">{serverError}</div>
      )}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Full Name *</label>
            <input {...register("name")} placeholder="Your full name"
              className="w-full border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 text-sm dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-gold" />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Phone Number *</label>
            <input {...register("phone")} placeholder="10-digit mobile number"
              className="w-full border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 text-sm dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-gold" />
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email Address *</label>
            <input {...register("email")} type="email" placeholder="your@email.com"
              className="w-full border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 text-sm dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-gold" />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">City *</label>
            <input {...register("city")} placeholder="Your city"
              className="w-full border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 text-sm dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-gold" />
            {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city.message}</p>}
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Legal Issue *</label>
          <select {...register("legalIssue")}
            className="w-full border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 text-sm dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-gold">
            <option value="">Select type of legal issue</option>
            {practiceAreas.map(a => <option key={a} value={a}>{a}</option>)}
            <option value="Other">Other</option>
          </select>
          {errors.legalIssue && <p className="text-red-500 text-xs mt-1">{errors.legalIssue.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Describe Your Legal Issue *</label>
          <textarea {...register("message")} rows={5} placeholder="Please describe your situation in detail. The more context you provide, the better we can assist you."
            className="w-full border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 text-sm dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-gold resize-none" />
          {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
        </div>
        <p className="text-xs text-gray-400 dark:text-gray-500">
          🔒 All consultations are strictly confidential. Your information will not be shared with third parties.
        </p>
        <button type="submit" disabled={submitting}
          className="w-full flex items-center justify-center gap-2 bg-navy text-white py-4 rounded-xl font-bold hover:bg-navy/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
          <Send className="w-4 h-4" />
          {submitting ? "Sending your inquiry..." : "Send Free Consultation Request"}
        </button>
      </form>
    </div>
  );
}
