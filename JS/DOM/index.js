// console.log("Hello World");

// document.getElementsByTagName("div");
// console.log(div);
// div[0].innerText = "ABES engineering college";
// div[0].style.color = "brown";

const div = document.getElementsByClassName('container');
div[0].innerHTML = `<h2 style=color:red>Hii, I'm using DOM</h2>`;
console.dir(div);
document.getElementById('btn');
console.log(btn);
const loading = document.getElementById('disp');

function displayData() {
    loading.innerHTML = `<h2>Data is loading.....</h2>`;
    // console.log("hiii.......inside displayData");
    setTimeout(() => {
        const h2 = document.createElement('h2');
        h2.innerText = "CS B Student";
        h2.style.backgroundColor = "cadetblue";
        // console.log(h2);
        div[0].appendChild(h2);

        const img = document.createElement('img');
        img.src = "https://i.pinimg.com/originals/29/86/c7/2986c709424ca231d151f718b7127bc2.jpg";
        img.setAttribute('width', '500px');
        img.setAttribute('height', '300px');
        div[0].appendChild(img);
    }, 2000);
}
btn.addEventListener('click', displayData);