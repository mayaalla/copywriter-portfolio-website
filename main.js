let im = document.getElementById('im');

let name = "Eugine Joy!";
let copywrtiter = "a Copywriter!";
let servicecard = document.querySelectorAll('.service-card');
let maxhigh = 0;



servicecard.forEach((card) => {
    if(card.clientHeight > maxhigh) {
        maxhigh = card.clientHeight;
    }
});
console.log(maxhigh);
servicecard.forEach((card) => {
    card.style.height = `${maxhigh}px`;
});


function changeName() {
    for(let i = 0; i < name.length; i++) {
        setTimeout(() => {
            im.innerHTML += name[i];
        }, 200 * i);
    }
// so delte the name and replace it with copywrtiter
    setTimeout(() => {
        im.innerHTML = "";
        for(let i = 0; i < copywrtiter.length; i++) {
            setTimeout(() => {
                im.innerHTML += copywrtiter[i];
            }, 200 * i);
        }
    }, 4000);
}

changeName();
setInterval(() => {
    im.innerHTML = "";
    changeName();
}, 8000);

// explication https://chatgpt.com/share/b1ea1966-47c6-401e-9c91-b334b1de0493