
import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navigation />
      <main className="container mx-auto px-4 py-16">
        <div ref={ref} className={`max-w-4xl mx-auto transition-all duration-1000 ${
          isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-[20px]'
        }`}>
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-holy-blue dark:text-holy-gold mb-4">
              Get In Touch
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Have questions about our products or want to share your HOLYHUMOR story? 
              We'd love to hear from you!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-card rounded-2xl p-6 shadow-lg border border-border hover-scale">
                <h3 className="text-2xl font-bold text-holy-blue dark:text-holy-gold mb-4">
                  📧 Email Us
                </h3>
                <p className="text-foreground/70 mb-2">
                  For general inquiries and customer support:
                </p>
                <a href="mailto:hello@holyhumor.com" className="text-holy-blue dark:text-holy-gold hover:underline font-medium">
                  hello@holyhumor.com
                </a>
              </div>

              <div className="bg-card rounded-2xl p-6 shadow-lg border border-border hover-scale">
                <h3 className="text-2xl font-bold text-holy-blue dark:text-holy-gold mb-4">
                  📱 Follow Us
                </h3>
                <p className="text-foreground/70 mb-4">
                  Stay connected for new designs and inspiration:
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-holy-blue dark:text-holy-gold hover:scale-110 transition-transform">
                    Instagram
                  </a>
                  <a href="#" className="text-holy-blue dark:text-holy-gold hover:scale-110 transition-transform">
                    Facebook
                  </a>
                  <a href="#" className="text-holy-blue dark:text-holy-gold hover:scale-110 transition-transform">
                    Twitter
                  </a>
                </div>
              </div>
            </div>

            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
