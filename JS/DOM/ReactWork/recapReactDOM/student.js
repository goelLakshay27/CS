const parent = document.getElementById("parent");
//console.log(parent);
const Root = ReactDOM.createRoot(parent);

//const h2 = React.createElement("h2",{style:{color:"browm",backgroundColor:"blue"}},"Hello");
const img = <img src="https://picsum.photos/200/200"></img>
const myname = <h2>Lakshay goel</h2>;
const Branch = <p>Computer Science</p>;
const section = <p>B</p>
const college = "ABES Engineering College";

const wrapper = React.createElement("div",{style:{backgroundColor:"grey" , width:"19%"}}, img,myname,Branch,section,college)
Root.render(wrapper);