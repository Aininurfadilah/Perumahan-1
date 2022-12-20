import React from "react";
import "../style/tr.css";

function Transaksi() {
  return (
    <div>
      <div className="container">
        <div class="nav">
          <img class="logo" src="img/Vector1.png" alt="" />
          <h1 class="prm">Cluster Maul Hill</h1>
          <img class="prof" src="img/Ellipse.png" alt="" />
          <h2 class="us">Aditya</h2>
          <a href="/dashboard" class="boa">
            Dashboard
          </a>
          <a href="/transaksi" class="tr">
            Transaksi
          </a>
          <a href="/penghuni" class="ph">
            Penghuni
          </a>
          <a href="/" class="ps">
            Pesan
          </a>
          <a href="/berita" class="ber">
            Berita
          </a>
        </div>
      </div>

      {/* copy */}

      <div class="con">
        <h1 class="sh">Daftar Transaksi</h1>
        <div class="tag">
          <h1 class="tags">Tagihan</h1>
          <p class="pp">Pilih Penghuni</p>
          <select class="drop" name="dropdown" id="">
            <option value="1m">Roy Handsome</option>
            <option value="2m">Aldi Ganteng</option>
            <option value="3m">Kevin Ramadhan</option>
            <option value="2d">Steven Con</option>
            <option value="4d">Uajng Iteng</option>
          </select>
          <p class="ta">Tagihan air</p>
          <input type="text" class="inpa" />
          <p class="tk">Tagihan Keamanan</p>
          <input type="text" class="input" />
          <p class="tb">Tagihan Kebersihan</p>
          <input type="text" class="inpk" />
          <button class="krm">Kirim Tagihan</button>
        </div>
        <div class="stap">
          <h1 class="sp">Status Pembayaran</h1>
          <table>
            <thead>
            <tr class="up">
              <td class="no">No</td>
              <td class="name">Nama</td>
              <td class="ket">Keterangan</td>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td class="user">1</td>
              <td class="user">Roy Handsome</td>
              <td class="user">
                
                <button class="lihat">Lihat</button>
                <button class="Terima">Terima</button>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Transaksi;