import React from "react";
import './Search.css';

export const Search: React.FC = () =>{
    return (
        <input type="text" placeholder="Busca tus fotos" className="SearchInput"/>
    );
}