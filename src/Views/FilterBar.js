import React from "react";
import "./FilterBar.css"
import up from "../img/Up.png"
import list from "../img/list.png"
import column from "../img/column.png"

const FilterBar = () => {
    return (
        <div className="containerFilter col-8">
            <div className="border">
                <input type="text" placeholder="Buscar empleos" className="inputBorder col-3"/>
                <input type="text" placeholder="Ingresar Ubicación" className="inputBorder col-2" />
                <input type="select" placeholder="Área" className="inputBorder col-1" />
                <input type="select" placeholder="Jornada" className="inputBorder col-1" />
                <button className="btnColor col-1">Filtrar</button>
            </div>
            <div className="border">
                <h1>Conecta con ofertas exclusivas</h1>
                <div  className="border">
                    <p className="itemGreen">Más Recientes</p>
                    <button className="btnTransparent"><img src={up} className="imgIcon" alt="icon"/></button>
                    <button className="btnTransparent"><img src={list} className="imgIcon"  alt="icon" /></button>
                    <button className="btnTransparent"><img src={column} className="imgIcon"  alt="icon" /></button>
                </div>
            </div>
        </div>
    )
}

export default FilterBar;