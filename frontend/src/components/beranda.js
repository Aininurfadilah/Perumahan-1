import React from "react";
import "./beranda.css"

function Login (){
return (
    <>
        <header>
            <li><img className="logo" src="img/logo.png" alt="logo"/></li>
            <li><p className="nmlogo">Cluster Maul Hill</p></li>
            <li><img className="rcp "src="img/receipt.png"/><a class="headnav" href="/tagihan">Tagihan</a></li>
            <li><img className="logout "src="img/logout.png"/><a class="headnav" href="/">Logout</a></li>
        </header>
        <div class="banner">
            <li style="list-style: none;"><img className="bn"src="img/rumah1.png"/></li>
        </div>
        <div className="row d-flex justify-content-center mt-100 mb-100">
            <div className="col-lg-6">
                <div className="card">
                    <div className="card-body text-center">
                        <h2 class="card-title m-b-0">Daily News Updates</h2>
                        <h4 class="card-title m-b-0">Cluster Maul Hill</h4>
                    </div>
                    <ul class="list-style-none">
                        <li className="d-flex no-block card-body border-top">
                            <i className="fa fa-plus w-30px m-t-5"></i>
                            <div>
                                <p className="m-b-0 font-medium p-0" data-abc="true">judul</p>
                                <span className="text">berita</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </>
)
}
