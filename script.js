let ip = document.getElementById('inputbox');
let btns = document.querySelectorAll('button');

let string = "";
let arr = Array.from(btns);
arr.forEach(button => {
    button.addEventListener('click', (get) => {
        if (get.target.innerHTML == "=") {
            string = eval(string);
            ip.value = string;
        }

        else if (get.target.innerHTML == 'AC') {
            string = "";
            ip.value = string;
        }

        else if(get.target.innerHTML== 'DE'){
            string = string.substring(0, string.length-1);
            ip.value = string;
        }

        else{
            string = string + get.target.innerHTML;
            ip.value = string;
        }
    })
})