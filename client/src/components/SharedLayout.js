import { Outlet } from "react-router-dom"
import { Navbar, Footer } from "./index.js"

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
