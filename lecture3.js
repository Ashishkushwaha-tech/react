import React from "react";
import ReactDOM from "react-dom/client";

const elem=(
    <h2>I am React Element</h2>
)
const Title= function(){
    return (
        <h2>I am anonymous function</h2>
    )
}
const Heades = () => {
    return <h1 className="head">I am react Element 😁</h1>;
};

const Comp = () => (
    <div id="container">
        <h1>comp start </h1>
        <Heades/>
        {elem}
        <Title/>
        <h1>comp over</h1>
    </div>
);

const root =ReactDOM.createRoot(document.getElementById("root"));
root.render(<Comp/>);