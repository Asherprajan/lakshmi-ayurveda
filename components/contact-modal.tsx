import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";

// Phone validation regex (India + international, 10-15 digits)
const PHONE_REGEX = /^(\+?\d{1,4}[\s-]?)?(\d{10,15})$/;

type ContactModalProps = {
  open: boolean
  onClose: () => void
  onSubmit?: (data: { name: string; phone: string; message: string }) => void
  title?: string
}

const ContactModal: React.FC<ContactModalProps> = ({
  open,
  onClose,
  onSubmit,
  title = "Enquire with Lakshmi Ayurveda",
}) => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    message: "",
  })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate phone number
    if (!PHONE_REGEX.test(form.phone.replace(/\s+/g, ""))) {
      toast({
        title: "Invalid phone number",
        description: "Please enter a valid phone number (10-15 digits, with or without country code).",
        variant: "destructive",
      })
      return
    }

    setSubmitting(true)

    try {
      // Always send to Google Sheets first
      const sheetUrl = "https://script.google.com/macros/s/AKfycbzHJJOVXG4BqVsTAlNmmAAphU-VgsAwOyPCl8bXm8nE4a0vwZAg4jtMQCNY6rMN0HHFoQ/exec"
      const body = new URLSearchParams({
        Name: form.name,
        Phone: form.phone,
        Message: form.message,
      })

      await fetch(sheetUrl, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      })

      // Show success message
      toast({
        title: "Thank you for your enquiry!",
        description: "We appreciate your interest in Lakshmi Ayurveda. Our team will contact you within 24 hours.",
      })

      // Call custom onSubmit if provided (for additional functionality)
      if (onSubmit) {
        await onSubmit(form)
      }

      setSubmitted(true)

      // Reset form and close modal after delay
      setTimeout(() => {
        setSubmitted(false)
        onClose()
        setForm({ name: "", phone: "", message: "" })
      }, 1800)
    } catch (error) {
      toast({
        title: "Could not send your enquiry",
        description: "Please try again later or call us directly at +91 98765 43210.",
        variant: "destructive",
      })
    } finally {
      setSubmitting(false)
    }
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-[6px]">
      <div
        className="
          w-full max-w-md mx-4 p-8 relative
          rounded-2xl shadow-2xl
          bg-gradient-to-br from-[#18181b]/80 via-[#23232a]/80 to-[#111112]/80
          border border-white/10
          backdrop-blur-2xl
          glassmorphic-dark
        "
        style={{
          boxShadow: "0 8px 32px 0 rgba(0,0,0,0.45)",
          border: "1.5px solid rgba(255,255,255,0.08)",
          background:
            "linear-gradient(135deg, rgba(24,24,27,0.85) 0%, rgba(35,35,42,0.85) 60%, rgba(17,17,18,0.85) 100%)",
          backdropFilter: "blur(16px) saturate(180%)",
        }}
      >
        <button
          className="absolute top-4 right-4 text-2xl text-gray-400 hover:text-[#F1AD60] transition-colors duration-200"
          onClick={onClose}
          aria-label="Close"
          type="button"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-2 text-[#F1AD60] text-center drop-shadow-lg">
          {title}
        </h2>
        <p className="text-center text-gray-300 mb-6 text-base">
          Fill out the form below and our Ayurveda team will reach out to you soon.<br />
          <span className="text-xs text-gray-400">All fields are required.</span>
        </p>
        <form className="space-y-4" onSubmit={handleSubmit} autoComplete="off">
          <Input
            className="
              w-full px-4 py-3 rounded-lg border border-white/10
              focus:border-[#F1AD60] focus:outline-none
              bg-white/5 text-white placeholder:text-gray-300
              transition-all duration-200
              shadow-inner
            "
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
            autoComplete="off"
            aria-label="Full Name"
            maxLength={60}
          />
          <Input
            className="
              w-full px-4 py-3 rounded-lg border border-white/10
              focus:border-[#F1AD60] focus:outline-none
              bg-white/5 text-white placeholder:text-gray-300
              transition-all duration-200
              shadow-inner
            "
            type="tel"
            name="phone"
            placeholder="Phone Number (with country code)"
            value={form.phone}
            onChange={handleChange}
            required
            autoComplete="off"
            aria-label="Phone Number"
            maxLength={18}
            inputMode="tel"
          />
          <Textarea
            className="
              w-full px-4 py-3 rounded-lg border border-white/10
              focus:border-[#F1AD60] focus:outline-none
              bg-white/5 text-white placeholder:text-gray-300
              resize-none
              transition-all duration-200
              shadow-inner
            "
            name="message"
            placeholder="How can we help you? (e.g. consultation, therapy, retreat...)"
            value={form.message}
            onChange={handleChange}
            rows={4}
            required
            aria-label="Your Message"
            maxLength={600}
          />
          <button
            type="submit"
            disabled={submitting}
            className={`
              w-full py-3 rounded-full font-semibold text-lg
              transition-all duration-200
              bg-gradient-to-r from-[#9A3E0F] via-[#F1AD60] to-[#9A3E0F]
              text-[#18181b] hover:scale-105
              shadow-lg
              disabled:opacity-60
              ${submitting ? "cursor-not-allowed" : ""}
            `}
            style={{
              background:
                "linear-gradient(90deg, #9A3E0F 0%, #F1AD60 50%, #9A3E0F 100%)",
              color: "#18181b",
              fontWeight: 700,
              letterSpacing: "0.01em",
            }}
            aria-busy={submitting}
          >
            {submitting
              ? "Sending..."
              : submitted
                ? "Enquiry Sent!"
                : "Send Enquiry"}
          </button>
          <div className="text-xs text-center text-gray-400 mt-2">
            Prefer to call? <a href="tel:+919876543210" className="text-[#F1AD60] underline hover:text-[#9A3E0F] transition-colors">+91 98765 43210</a>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactModal
