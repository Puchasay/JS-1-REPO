/**
 * Clock 🕰️
 *
 */

// get reference to element with id `clock`
const clockEl = document.querySelector('#clock');

Date.now();  //ini di ms, sejak thn 1970
console.log(Date.now());

const now = new Date ();
now.getHours();
now.getMinutes();
now.getSeconds();

now.toLocaleString()
now.toLocaleDateString();
now.toLocaleTimeString();

/* setInterval(() => {

    const now = new Date();

    clockEl.innerText = now.toLocaleTimeString();
}, 1000)
 */
//Or write like this:

const tick = () => {
    const now = new Date();

    clockEl.innerText = now.toLocaleTimeString();
}

setInterval(tick, 1000);

tick();

