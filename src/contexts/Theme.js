import React from "react";

const Theme = React.createContext();

function Themes (){

const lightTheme = {

    body:"#cce8cc",
    text: "#8ea08e",
    toggleBorder: "#fff"
}

const darkTheme = {

    body:"#111",
    backgroundColor: "#111",
    text:"#fafafa",
    toggleBorder: "#6b8096"
}
}
export default Themes;