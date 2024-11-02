

let parent = React.createElement("div", {id : "parent"}, [
    React.createElement("div", {id : "child1"}, [
        React.createElement("h1", {id : "heading1"}, "This is h1 tag"),
        React.createElement("h2", {id : "heading2"}, "This is h2 tag")
    ]),
    React.createElement("div", {id : "child1"}, [
        React.createElement("h1", {id : "heading1"}, "This is h1 tag"),
        React.createElement("h2", {id : "heading2"}, "This is h2 tag")
    ])
])

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);