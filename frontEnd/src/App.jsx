import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import { Auth,Home } from "./pages"
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Nav } from "./components";

function App() {
  return (
    <>
      <Router>
        <Nav/>
        <div className="container m-auto px-4 mt-16">
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/auth" element={<Auth/>}/>
            </Routes>
        </div>
      </Router>
      <ToastContainer/>
    </>
  )
}

export default App
