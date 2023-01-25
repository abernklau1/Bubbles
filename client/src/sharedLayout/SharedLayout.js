import { Outlet } from "react-router-dom"
import Navbar from "./Navbar.js"
import Footer from "./Footer.js"

const SharedLayout = () => {
  return <section>
    <Navbar />
    <div>
      <Outlet />
    </div>
    <Footer />
  </section>
}

export default SharedLayout
