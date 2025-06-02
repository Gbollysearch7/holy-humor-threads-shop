
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const { ref, isVisible } = useScrollAnimation();

  const faqs = [
    {
      question: "What sizes do you offer?",
      answer: "We offer sizes from S to 3XL. Check our size guide for detailed measurements to find your perfect fit."
    },
    {
      question: "What materials are your t-shirts made from?",
      answer: "Our t-shirts are made from high-quality, 100% cotton or cotton blends that are soft, comfortable, and durable. We prioritize ethical sourcing and quality materials."
    },
    {
      question: "How long does shipping take?",
      answer: "Standard shipping takes 3-5 business days within the UK. Express shipping is available for 1-2 business days. Free shipping on orders over £50!"
    },
    {
      question: "Can I return or exchange my order?",
      answer: "Yes! We offer a 30-day return policy. Items must be unworn with tags attached. Exchanges are free, and returns include free return shipping for UK customers."
    },
    {
      question: "Do you ship internationally?",
      answer: "Currently, we ship within the UK. We're working on expanding to international markets. Sign up for our newsletter to be notified when international shipping becomes available."
    },
    {
      question: "How do I care for my HOLYHUMOR apparel?",
      answer: "Machine wash cold with like colors, tumble dry low, and avoid bleach to keep your designs looking fresh. Turn inside out before washing to protect the print."
    },
    {
      question: "Are your designs suitable for all ages?",
      answer: "Absolutely! Our designs are family-friendly and perfect for spreading joy and faith across all age groups. We create wholesome, uplifting content that everyone can enjoy."
    },
    {
      question: "Do you offer gift cards?",
      answer: "Yes! Gift cards are available in various denominations and make perfect gifts for the faith-filled people in your life. They never expire and can be used on any item in our store."
    },
    {
      question: "Can I request a custom design?",
      answer: "While we don't currently offer custom designs, we're always open to suggestions! Email us at info@holyhumor.com with your ideas, and we might feature them in future collections."
    },
    {
      question: "How can I stay updated on new products?",
      answer: "Sign up for our newsletter and follow us on social media! We regularly announce new designs, sales, and special events to our community."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navigation />
      <main className="container mx-auto px-4 py-16">
        <div ref={ref} className={`max-w-4xl mx-auto transition-all duration-1000 ${
          isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-[20px]'
        }`}>
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-holy-blue dark:text-holy-gold mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Find answers to common questions about HOLYHUMOR products, shipping, and more
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:text-holy-blue dark:hover:text-holy-gold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center bg-muted p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-holy-blue dark:text-holy-gold mb-4">
              Still have questions?
            </h2>
            <p className="text-foreground/70 mb-4">
              We're here to help! Reach out to our friendly customer support team.
            </p>
            <a 
              href="mailto:info@holyhumor.com" 
              className="inline-block bg-holy-blue dark:bg-holy-gold text-white dark:text-gray-900 px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
            >
              Contact Support
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
