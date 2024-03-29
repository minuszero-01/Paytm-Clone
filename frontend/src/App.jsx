import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Signin } from "./pages/Signin";
import { Signup } from "./pages/Signup";
import { Dashboard } from "./pages/Dashboard";
import { SendMoney } from "./pages/SendMoney";
import { Me } from "./pages/Me";
import { LandingPage } from "./pages/LandingPage";
import { NameContextProvider } from "./providers/NameContextProvider";

function App() {
  return (
    <BrowserRouter>
      <NameContextProvider>
        <Routes>
          <Route path="/" element={<Me />} />
          <Route path="/landingpage" element={<LandingPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/send" element={<SendMoney />} />
        </Routes>
      </NameContextProvider>
    </BrowserRouter>
  );
}

export default App;
