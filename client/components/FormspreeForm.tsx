import { useState } from "react";
import { useEffect } from "react";
import { Send, CheckCircle } from "lucide-react";

interface FormspreeFormProps {
  title: string;
  description?: string;
  fields: Array<{
    name: string;
    label: string;
    type: "text" | "email" | "tel" | "textarea" | "select";
    placeholder?: string;
    required?: boolean;
    options?: Array<{ label: string; value: string }>;
    rows?: number;
  }>;
  submitButtonText?: string;
  successMessage?: string;
  className?: string;
}

export default function FormspreeForm({
  title,
  description,
  fields,
  submitButtonText = "Send Message",
  successMessage = "Thank you! Your message has been sent successfully.",
  className = "",
}: FormspreeFormProps) {
  const [formData, setFormData] = useState<Record<string, string>>(
    fields.reduce((acc, field) => ({ ...acc, [field.name]: "" }), {})
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  // Clean up timeout on unmount
  useEffect(() => {
    if (isSuccess) {
      const timeoutId = setTimeout(() => setIsSuccess(false), 5000);
      return () => clearTimeout(timeoutId);
    }
  }, [isSuccess]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("https://formspree.io/f/mkoenbdj", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData(
          fields.reduce((acc, field) => ({ ...acc, [field.name]: "" }), {})
        );
      } else {
        throw new Error("Failed to send message");
      }
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "An error occurred. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`w-full ${className}`}>
      {/* Form Header */}
      {title && (
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-black uppercase text-primary mb-4">
            {title}
          </h2>
          {description && (
            <p className="text-lg text-gray-700 leading-relaxed">
              {description}
            </p>
          )}
        </div>
      )}

      {/* Success Message */}
      {isSuccess && (
        <div className="mb-8 p-6 bg-green-50 border border-green-200 rounded-lg flex items-center gap-4">
          <CheckCircle size={32} className="text-green-600 flex-shrink-0" />
          <div>
            <p className="text-lg font-semibold text-green-900">{successMessage}</p>
            <p className="text-sm text-green-700 mt-1">
              We'll be in touch soon.
            </p>
          </div>
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="mb-8 p-6 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-lg font-semibold text-red-900">{error}</p>
          <p className="text-sm text-red-700 mt-1">
            Please try again or contact us directly.
          </p>
        </div>
      )}

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 md:p-12 border border-gray-200 shadow-lg"
      >
        {/* Fields Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {fields.map((field) => (
            <div
              key={field.name}
              className={field.type === "textarea" ? "md:col-span-2" : ""}
            >
              <label
                htmlFor={field.name}
                className="block text-sm font-black uppercase text-primary mb-3 tracking-wide"
              >
                {field.label}
                {field.required && <span className="text-accent ml-1">*</span>}
              </label>

              {field.type === "textarea" ? (
                <textarea
                  id={field.name}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  required={field.required}
                  rows={field.rows || 6}
                  placeholder={field.placeholder}
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
                />
              ) : field.type === "select" ? (
                <select
                  id={field.name}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  required={field.required}
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                >
                  <option value="">Select {field.label}</option>
                  {field.options?.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  id={field.name}
                  type={field.type}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  required={field.required}
                  placeholder={field.placeholder}
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                />
              )}
            </div>
          ))}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 font-black uppercase text-sm tracking-wide hover:bg-primary/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Sending..." : submitButtonText}
          {!isSubmitting && <Send size={20} />}
        </button>

        <p className="text-center text-gray-600 text-xs mt-6 tracking-wide">
          This site is protected by reCAPTCHA and the Google{" "}
          <a href="https://policies.google.com/privacy" className="underline">
            Privacy Policy
          </a>
          {" "}and{" "}
          <a href="https://policies.google.com/terms" className="underline">
            Terms of Service
          </a>
          {" "}apply.
        </p>
      </form>
    </div>
  );
}
