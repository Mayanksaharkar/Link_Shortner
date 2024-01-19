import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./components/Home";
import Modal from "./components/Modal";
import NavBar from "./components/NavBar";
function App() {
  return (
    <div className="h-screen">
      <NavBar />
      <ToastContainer position="top-center" autoClose={3000} />
      <Home />
      <Modal />
    </div>
  );
}

export default App;
