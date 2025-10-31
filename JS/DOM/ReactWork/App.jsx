const parent=document.getElementById('parent');
// console.log(parent);
const root=ReactDOM.createRoot(parent);
// const h2=React.createElement("h2",{style:{color:'brown',backgroundColor:'cyan'}},"Welcome to React App");

// const li1=React.createElement("li",{},"java");
// const li2=React.createElement("li",{},"python");
// const li3=React.createElement("li",{},"react");
// const ul=React.createElement("ul",{style:{backgroundColor:'pink'}},li1,li2,li3);

// const pic=React.createElement('img',{src:"https://picsum.photos/200/200",style:{width:'200px',height:'200px',borderRadius:'50%'}});
// const myname=React.createElement("h3",{},"Lakshay")
// const header=React.createElement("div",{style:{display:'flex',gap:"100px"}},pic,myname);
// const wrapper=React.createElement('div',{},h2,header,ul)

//JSX
const h2=<h2>Hello using JSX</h2>;
const li1=<li>React</li>;
const li2=<li>Java</li>;
const ul=<ul>{li1},{li2}</ul>
const container=(
    <div>
        {h2},
        {ul}

    </div>
)

root.render(container);