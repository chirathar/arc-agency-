"use client"
import { Mail, Instagram, Linkedin, MapPin, Phone } from "lucide-react"
import Link from "next/link"
import { WavePattern, GlowingDots } from "./abstract-visuals"
import { Button } from "@/components/ui/button"

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full py-16 md:py-24 bg-gradient-to-br from-purple-600 to-purple-800 text-white relative overflow-hidden"
    >
      {/* Abstract visual elements */}
      <div className="absolute bottom-0 left-0 w-full h-40">
        <WavePattern className="w-full h-full opacity-20" />
      </div>

      <div className="absolute inset-0">
        <GlowingDots className="w-full h-full opacity-30" />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 mb-4">
              <Mail className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-heading">Get In Touch</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Ready to elevate your digital presence? Our team is here to help you achieve your business goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
            <div className="flex flex-col items-center md:items-start space-y-6">
              <div className="flex flex-col items-center md:items-start">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <span className="font-medium">Email Us</span>
                </div>
                <Link
                  href="mailto:hello@arcagency.in"
                  className="text-lg font-medium text-white hover:text-white/80 transition-colors"
                >
                  hello@arcagency.in
                </Link>
              </div>

              <div className="flex flex-col items-center md:items-start">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <span className="font-medium">Call Us</span>
                </div>
                <Link
                  href="tel:+918015117945"
                  className="text-lg font-medium text-white hover:text-white/80 transition-colors"
                >
                  +91 801 511 7945
                </Link>
              </div>

              <div className="flex flex-col items-center md:items-start">
                <div className="flex items-center gap-3 mb-2">
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center md:items-start space-y-6">
              <div className="flex flex-col items-center md:items-start">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-medium text-xl">Follow Us</span>
                </div>
                <div className="flex items-center gap-4">
                  <Link
                    href="https://www.instagram.com/arcagency.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                  >
                    <Instagram className="h-6 w-6 text-white" />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/company/arcagency-in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                  >
                    <Linkedin className="h-6 w-6 text-white" />
                  </Link>
                </div>
              </div>

              <div className="flex flex-col items-center md:items-start mt-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-medium text-xl">Working Hours</span>
                </div>
                <div className="space-y-2">
                  <p className="text-white/80">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-white/80">Saturday: 10:00 AM - 2:00 PM</p>
                  <p className="text-white/80">Sunday: Closed</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center md:items-start space-y-6">
              <div className="flex flex-col items-center md:items-start w-full">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-medium text-xl">Quick Contact</span>
                </div>
                <div className="space-y-4 w-full">
                  <p className="text-white/80">
                    Need a quick response? Send us your email and we'll get back to you within 24 hours.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-2 w-full">
                    <Button
                      onClick={() =>
                        (window.location.href = "mailto:hello@arcagency.in?subject=Quick%20Inquiry%20from%20Website")
                      }
                      className="w-full bg-white hover:bg-white/90 text-purple-700 font-bold"
                    >
                      Email Us Now
                    </Button>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center md:items-start w-full mt-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-medium text-xl">Schedule a Call</span>
                </div>
                <div className="space-y-4 w-full">
                  <p className="text-white/80">Prefer to talk? Schedule a call with our team at your convenience.</p>
                  <div className="flex flex-col sm:flex-row gap-2 w-full">
                    <Button
                      onClick={() => (window.location.href = "https://calendly.com/arcagency")}
                      className="w-full bg-purple-500 hover:bg-purple-400 text-white border border-white/20"
                    >
                      Book a Call
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
