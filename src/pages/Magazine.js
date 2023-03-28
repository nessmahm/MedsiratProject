import React from "react";
import ArticleCard from "../components/catalogue/ArticleCard";

import "../styles/magazine.css";

function Magazine() {
  return (
    <div className="magazine">
      <div className="firstPart">
        <h1 className="title">Découvrez nos articles</h1>{" "}
        <div className="categories">
          <a ><span></span>Tous</a>
          <a><span></span>Entrepreneuriat</a>
          <a><span></span>Leadership</a>
          <a><span></span>Gestion des risques</a>
        </div>
      </div>
      <div className="catalogue">
        <ArticleCard title =" Premier Article " auther=" Premier Auteur"category="Entrepreneuriat" image="https://th.bing.com/th/id/OIP.mG--ywy5Kuxn6V5BsJheswHaFJ?w=249&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"/>
        <ArticleCard title ="Deuxieme Article "auther=" Deuxieme Auteur"category="Entrepreneuriat"image="https://th.bing.com/th/id/OIP.qBNVbSfTSNaD49NA0GDfRwEkDV?w=230&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"/>
        <ArticleCard title =" Troisieme Article "auther=" Troisieme Auteur"category="Entrepreneuriat"image="https://th.bing.com/th/id/OIP.AwRFZ6_60sVThCbi3cG9bAHaE8?w=259&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"/>
        <ArticleCard title =" Quatrieme Article "auther=" Quatrieme Auteur"category="Gestion des risques"image="https://th.bing.com/th/id/OIP.6CQ8of9ShD3Ea8slCvv0OwHaCQ?w=296&h=106&c=7&r=0&o=5&dpr=1.3&pid=1.7"/>
        <ArticleCard title =" Cinquieme Article "auther=" Cinquieme Auteur"category="Gestion des risques"image="https://th.bing.com/th/id/OIP.zXPAbYpEM0wSQrMZW-5CMgHaC7?pid=ImgDet&w=1920&h=760&rs=1"/>
        <ArticleCard title =" Sixieme Article "auther="Sixieme Auteur"category="Gestion des risques"image="https://th.bing.com/th/id/OIP.AKfes3v5Zu29PHCmIsaRRQHaFA?w=290&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7"/>
    </div>
    </div>
  );
}

export default Magazine;