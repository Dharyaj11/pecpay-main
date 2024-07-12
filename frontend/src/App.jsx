
import {BrowserRouter, Route,Routes,} from "react-router-dom";
import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";
import { Dashboard } from "./pages/Dashboard";
import { SendMoney } from "./pages/SendMoney";
import { PaymentStatus } from "./pages/PaymentStatus";


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Signup></Signup>}></Route>
          <Route path="/signup" element={<Signup></Signup>}></Route>
          <Route path="/signin" element={<Signin></Signin>}></Route>
          <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
          <Route path="/send" element={<SendMoney></SendMoney>}></Route>
          <Route path="/paymentstatus" element={<PaymentStatus></PaymentStatus>}></Route>
        </Routes>
      </BrowserRouter>  
    </>
  )
}

export default App
