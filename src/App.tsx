import Main from './components/Main.tsx' ; 
import Layout from "./components/Layout.tsx"
import Detail from './components/Detail/Detail.tsx';
import Checkout from './components/Checkout/Checkout.tsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={< Layout/>}>
          <Route index element={<Main />} />
          <Route path="detail" element={<Detail />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
