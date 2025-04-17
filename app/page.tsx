import Hero from "@/components/hero"
import Services from "@/components/services"
import MissionRoas from "@/components/mission-roas"
import Contact from "@/components/contact"
import ScrollToTop from "@/components/scroll-to-top"
import About from "@/components/about"
import WhyChooseUs from "@/components/why-choose-us"

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <MissionRoas />
      <Contact />
      <ScrollToTop />
    </main>
  )
}
