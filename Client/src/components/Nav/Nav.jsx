import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import {MenuBar, MenuItem} from "./styledNav"

function Nav({onSearch}) {
    return (
        <div>
        <MenuBar>
            <Link to='/home'><MenuItem>HOME</MenuItem></Link>
            <Link to='/favorites'><MenuItem>FAVORITES</MenuItem></Link>
            <Link to='/about'><MenuItem>ABOUT</MenuItem></Link>
        </MenuBar>
        <SearchBar onSearch={onSearch}/>
        </div>
    )
}

export default Nav