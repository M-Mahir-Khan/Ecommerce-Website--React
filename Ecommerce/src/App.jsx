import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect, useState } from "react"
import Banner from "./Components/Banner/Banner";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";


function App() {
  const [orderedPopup, setOrderedPopup] = useState(false);

  const handleOrderPopup = () => {
    setOrderedPopup(!orderedPopup)
  }

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    })
    AOS.refresh()
  }, [])
  return (
    <>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
        <Navbar handleOrderPopup={handleOrderPopup} />
        <Hero/>
        <Banner />
      </div>
    </>
  )
}

export default App
