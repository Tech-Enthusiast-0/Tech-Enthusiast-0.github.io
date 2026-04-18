import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import WhyChooseUs from './components/WhyChooseUs'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
      </main>
      <Footer />
    </div>
  )
}

export default App
