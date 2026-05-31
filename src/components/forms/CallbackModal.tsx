"use client";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import axios from "axios";
import { X, PhoneCall, CheckCircle } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Name required"),
  phone: z.string().regex(/^[6-9]\d{9}$/, "Valid 10-digit Indian mobile number required"),
  preferredTime: z.string().min(1, "Preferred time required"),
});

type FormData = z.infer<typeof schema>;

export default function CallbackModal() {
  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener("open-callback-modal", handler);
    return () => window.removeEventListener("open-callback-modal", handler);
  }, []);

  const onSubmit = async (data: FormData) => {
    setSubmitting(true);
    try {
      await axios.post("/api/callback", data);
      setSuccess(true);
      reset();
      setTimeout(() => { setOpen(false); setSuccess(false); }, 3000);
    } catch {
      alert("Failed to submit. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setOpen(false)} />
      <div className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-md w-full p-8">
        <button onClick={() => setOpen(false)} className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
          <X className="w-5 h-5" />
        </button>

        {success ? (
          <div className="text-center py-8">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="font-display text-xl font-bold text-navy dark:text-white mb-2">Callback Scheduled!</h3>
            <p className="text-gray-600 dark:text-gray-400">Advocate Pavan will call you at your preferred time.</p>
          </div>
        ) : (
          <>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center">
                <PhoneCall className="w-5 h-5 text-navy" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-navy dark:text-white">Request a Callback</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">We'll call you back promptly</p>
              </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Full Name *</label>
                <input {...register("name")} className="w-full border border-gray-300 dark:border-gray-600 rounded-xl px-4 py-3 text-sm dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-gold" placeholder="Your name" />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Phone Number *</label>
                <input {...register("phone")} className="w-full border border-gray-300 dark:border-gray-600 rounded-xl px-4 py-3 text-sm dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-gold" placeholder="10-digit mobile number" />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Preferred Call Time *</label>
                <select {...register("preferredTime")} className="w-full border border-gray-300 dark:border-gray-600 rounded-xl px-4 py-3 text-sm dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-gold">
                  <option value="">Select preferred time</option>
                  <option value="Morning (10AM - 12PM)">Morning (10AM - 12PM)</option>
                  <option value="Afternoon (12PM - 3PM)">Afternoon (12PM - 3PM)</option>
                  <option value="Evening (3PM - 7PM)">Evening (3PM - 7PM)</option>
                  <option value="Any Time">Any Time</option>
                </select>
                {errors.preferredTime && <p className="text-red-500 text-xs mt-1">{errors.preferredTime.message}</p>}
              </div>
              <button type="submit" disabled={submitting} className="w-full bg-navy text-white py-3 rounded-xl font-semibold hover:bg-navy/90 transition-colors disabled:opacity-50">
                {submitting ? "Submitting..." : "Request Callback"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
