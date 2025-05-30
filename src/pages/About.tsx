
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const About = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navigation />
      <main className="container mx-auto px-4 py-16">
        <div ref={ref} className={`max-w-4xl mx-auto transition-all duration-1000 ${
          isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-[20px]'
        }`}>
          <h1 className="text-4xl lg:text-5xl font-bold text-holy-blue dark:text-holy-gold mb-8 text-center">
            Our Story
          </h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-xl text-foreground/80 mb-8 text-center">
              HOLYHUMOR was born from a simple belief: faith and joy go hand in hand.
            </p>
            
            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <h2 className="text-3xl font-bold text-holy-blue dark:text-holy-gold mb-4">
                  Our Mission
                </h2>
                <p className="text-foreground/70 leading-relaxed">
                  We create premium quality apparel that celebrates faith with humor and style. 
                  Every design is carefully crafted to honor God while bringing smiles and 
                  sparking meaningful conversations about faith.
                </p>
              </div>
              
              <div className="text-6xl text-center animate-float">
                ✝️
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div className="order-2 md:order-1 text-6xl text-center animate-float" style={{ animationDelay: '0.5s' }}>
                👕
              </div>
              
              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-bold text-holy-blue dark:text-holy-gold mb-4">
                  Our Values
                </h2>
                <ul className="space-y-3 text-foreground/70">
                  <li className="flex items-center">
                    <span className="text-holy-gold mr-2">✓</span>
                    Premium quality materials and craftsmanship
                  </li>
                  <li className="flex items-center">
                    <span className="text-holy-gold mr-2">✓</span>
                    Faith-centered designs with purpose
                  </li>
                  <li className="flex items-center">
                    <span className="text-holy-gold mr-2">✓</span>
                    Building community through shared values
                  </li>
                  <li className="flex items-center">
                    <span className="text-holy-gold mr-2">✓</span>
                    Spreading joy and positivity
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
