import React from "react";
import Tagihan from "./Tagihan";
import Penghuni from "./Penghuni";
import Tambahpenghuni from "./Tambahpenghuni";
import Transaksi from "./Transaksi";
import Editpenghuni from "./editpenghuni";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

function App() {
  return(
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/penghuni" element={<Penghuni />} />
          <Route path="/tagihan" element={<Tagihan/>}/>
          <Route path="/tambahpenghuni" element={<Tambahpenghuni/>} />
          <Route path="/penghuni/editpenghuni/:id" element={<Editpenghuni/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
      
}

export default App;
