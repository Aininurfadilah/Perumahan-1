import React from "react";
import '../style/tagihan.css';
class Tagihan extends React.Component{
    render() {
        return (
            <div className="tagihan-container">
                <img className="logo" src="./img/logo.png" alt="logo"></img>
                <h1>Cluster Maul Hill</h1>
                <div className="rincian">
                    <h2 className="rincian-title">Tagihan Bulanan</h2>
                    <p className="tagihan-air">Air</p>
                    <p className="tagihan-keamanan">Keamanan</p>
                    <p className="tagihan-kebersihan">Kebersihan</p>
                    <p className="total">Total</p>
                    <p className="harga-air">Rp 100.000</p>
                    <p className="harga-keamanan">Rp 50.000</p>
                    <p className="harga-kebersihan">Rp 50.000</p>
                    <p className="harga-total">Rp 200.000</p>
                </div>
                <div className="metode">
                    <h2 className="Metode-title">Metode Pembayaran</h2>
                    <p className="BCA"><input type="radio" name="bank" value="BCA"/>BCA</p>
                    <p className="BRI"><input type="radio" name="bank" value="BRI"/>BRI</p>
                    <p className="Mandiri"><input type="radio" name="bank" value="Mandiri"/>Mandiri</p>
                </div>
                <div className="form-bayar">
                    <h2 className="bayar-title">Pembayaran</h2>
                    <p className="rek">No rekening</p>
                    <p className="norek">Nomor</p>
                    <p className="penerima">Atas Nama</p>
                    <p className="nama-penerima">Nama</p>
                    <p className="ket-jml">Jumlah Pembayaran</p>
                    <p className="jml-bayar">Rp.01010</p>
                    <p className="unggah">unggah bukti pembayaran</p>
                        <input type="file" class="btn-2" id="file" />
                    <button className="confirm-btn">Konfirmasi Pembayaran</button>
                </div>
            </div>
        );
    }
}

export default Tagihan;