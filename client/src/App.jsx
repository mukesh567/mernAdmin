import { Routes, Route, BrowserRouter } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Register from "./pages/Register"
import Service from "./pages/Service"
import Login from "./pages/Login"
import Logout from "./pages/Logout"
import Error from "./pages/Error"
import { AdminLayout } from "./components/layouts/Admin-Layout"
import { AdminUsers } from "./pages/Admin-Users"
import { AdminContacts } from "./pages/Admin-Contacts"
import AdminUpdate from "./pages/Admin-Update"


const App = () => {
  return <>
    <BrowserRouter>
      <Navbar />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<Error />} />

        {/* Create nested route and handle by outlet in adminlayout page */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="users" element={<AdminUsers />} />
          <Route path="contacts" element={<AdminContacts />} />
          <Route path="users/:id/edit" element={<AdminUpdate />} />
        </Route>

      </Routes>
      <Footer />
    </BrowserRouter>

  </>
}

export default App