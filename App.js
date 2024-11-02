import React from "react";  //These two are coming from node_modules
import ReactDOM from "react-dom/client";

let parent = React.createElement("div", {id : "parent"}, [
    React.createElement("div", {id : "child1"}, [
        React.createElement("h1", {id : "heading1"}, "Namaste React🚀"),
        React.createElement("h2", {id : "heading2"}, "This is h2 tag")
    ]),
    React.createElement("div", {id : "child1"}, [
        React.createElement("h1", {id : "heading1"}, "This is heading tag"),
        React.createElement("h2", {id : "heading2"}, "This is h2 tag")
    ])
])

console.log(parent);
let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);