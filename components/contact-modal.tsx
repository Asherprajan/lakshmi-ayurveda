import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";  
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";

// Phone validation regex
const PHONE_REGEX = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

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
  title = "Contact Us",
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
    if (!PHONE_REGEX.test(form.phone)) {
      toast({
        title: "Invalid phone number",
        description: "Please enter a valid phone number in format XXX-XXX-XXXX",
        variant: "destructive",
      })
      return
    }

    setSubmitting(true)

    try {
      // Always send to Google Sheets first
      const sheetUrl ="https://script.google.com/macros/s/AKfycbzHJJOVXG4BqVsTAlNmmAAphU-VgsAwOyPCl8bXm8nE4a0vwZAg4jtMQCNY6rMN0HHFoQ/exec"      
      const body = new URLSearchParams({
        Name: form.name,
        Phone: form.phone,
        Message: form.message,
      })

      console.log("Sending data to Google Sheets:", {
        url: sheetUrl,
        data: {
          Name: form.name,
          Phone: form.phone,
          Message: form.message,
        }
      })

      await fetch(sheetUrl, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      })

      // Show success message
      toast({
        title: "Message sent successfully!",
        description: "Thank you for contacting us. We'll get back to you within 24 hours.",
      })

      // Call custom onSubmit if provided (for additional functionality)
      if (onSubmit) {
        await onSubmit(form)
      }

      setSubmitted(true)
      console.log("Contact modal form submitted ✅", form)
      
      // Reset form and close modal after delay
      setTimeout(() => {
        setSubmitted(false)
        onClose()
        setForm({ name: "", phone: "", message: "" })
      }, 1500)
    } catch (error) {
      console.error("Error submitting form:", error)
      toast({
        title: "Error sending message",
        description: "Please try again later or contact us directly.",
        variant: "destructive",
      })
    } finally {
      setSubmitting(false)
    }
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 p-8 relative">
        <button
          className="absolute top-4 right-4 text-2xl text-gray-400 hover:text-gray-700"
          onClick={onClose}
          aria-label="Close"
          type="button"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-6 text-[#3C1F0F] text-center">{title}</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <Input
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#F1AD60] focus:outline-none bg-white/80"
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name || ""}
            onChange={handleChange}
            required
          />
          <Input
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#F1AD60] focus:outline-none bg-white/80"
            type="tel"
            name="phone"
            placeholder="Your Phone"
            value={form.phone || ""}
            onChange={handleChange}
            required
          />
          <Textarea
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#F1AD60] focus:outline-none bg-white/80 resize-none"
            name="message"
            placeholder="Your Message"
            value={form.message || ""}
            onChange={handleChange}
            rows={4}
            required
          />
          <button
            type="submit"
            disabled={submitting}
            className="w-full py-3 rounded-full font-semibold text-lg transition-all duration-200 bg-[#9A3E0F] text-[#F5ECE0] hover:scale-105"
          >
            {submitting ? "Sending..." : submitted ? "Sent!" : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  )
}

export default ContactModal
