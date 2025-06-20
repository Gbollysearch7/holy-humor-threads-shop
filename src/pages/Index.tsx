
import { Hero } from "@/components/Hero";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Testimonials } from "@/components/Testimonials";
import { CommunityStories } from "@/components/CommunityStories";
import { OurStorySection } from "@/components/OurStorySection";
import { Newsletter } from "@/components/Newsletter";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navigation />
      <main className="animate-fade-in">
        <Hero />
        <FeaturedProducts />
        <WhyChooseUs />
        <Testimonials />
        <CommunityStories />
        <OurStorySection />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
