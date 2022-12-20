import React, {useState,useEffect}  from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../style/penghuni.css";

function Penghuni(){
    const [penghuni, setPenghuni] = useState([]);


    useEffect(() => {
        (async () => {
          try {
            const getPenghuni = await (await axios.get("/api/penghuni/getallpenghuni")).data;
            setPenghuni(getPenghuni);
            console.log(getPenghuni)
          } catch (error) {
            console.log(error);
          }
        }
        )();
      }, []);

      const hapuspenghuni = (id) =>{
        axios.delete(`/api/penghuni/hapuspenghuni/${id}`).then((res)=>{
          console.log(res);
        });
        window.location.reload()
      };

        return(
            <div className="container">
                <div className="nav">
                    <img className="logo" src="./img/logo.png" alt="logo"></img>
                    <h1 className="prm">Cluster Maul Hill</h1>
                    <img className="prof" src="img/Ellipse.png" alt=""></img>
                    <h2 className="us">Aditya</h2>
                    <a href="/dashboard" className="boa">Dashboard</a>
                    <a href="/transaksi"className="tr">Transaksi</a>
                    <a href="/penghuni"className="ph">Penghuni</a>
                    <a href="https://app.crisp.chat/website/6cf840b1-2824-4046-adb9-d74aff907c1b/inbox/session_cee53073-701c-4371-8245-e2f641cbe20b/"className="ps">Pesan</a>
                    <a href="/berita"className="ber">Berita</a>
                </div>
                <div className="con">
            <h1 className="sh">Daftar Penghuni</h1>
            <table>
                <thead>
                <tr className="up">
                  <td className="no">ID</td>
                  <td className="name">Nama</td>
                  <td className="telp">No Telepon</td>
                  <td className="rmh">No Rumah</td>
                  <td className="srn">Username</td>
                  <td className="password">Password</td>
                  <td className="ket">Action</td>
                </tr>
                </thead>
                <tbody>
                {penghuni && penghuni.map((penghuni)=>{
                    return(
                        <tr>
                  <td className="user">{penghuni._id}</td>
                  <td className="user">{penghuni.nama}</td>
                  <td className="user">{penghuni.telp}</td>
                  <td className="user">{penghuni.rumah}</td>
                  <td className="user">{penghuni.username}</td>
                  <td className="user">{penghuni.password}</td>
                  <td>
                  <a className="lh">Edit</a>
                  <button className="hapus" onClick={()=>hapuspenghuni(penghuni._id)}>
                 Hapus
                </button>
                <Link
                    to={`editpenghuni/${penghuni._id}`}
                    className="button is-info is-small mr-1"
                  >
                    Edit
                  </Link>
                  </td>
                </tr>
                    )
                })}
                </tbody>
            </table>
            <a className="tph" href="/tambahpenghuni">Tambah Penghuni</a>
        </div>
            </div>
        )
    }

export default Penghuni;