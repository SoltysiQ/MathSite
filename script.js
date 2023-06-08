function showDiv() {
    let a = Number(document.getElementById("A").value);
    let b = Number(document.getElementById("B").value);
    let c = Number(document.getElementById("C").value);

    let delta = b * b - 4 * a * c;
    
    

    document.getElementById("hidden").style.display = "block";
    document.getElementById("container").style.opacity = "0.1";
    document.getElementById("wynik").innerHTML = "Delta = " + delta + "<br>";
    if (delta < 0) {
        document.getElementById("wynik").innerHTML += "Brak wyników";
    } else if (delta == 0) {
        let x = -b / (2 * a);
        document.getElementById("wynik").innerHTML += "x0 = " + x;
    } else {
        let x1 = (-b + Math.sqrt(delta)) / (2 * a);
        let x2 = (-b - Math.sqrt(delta)) / (2 * a);
        document.getElementById("wynik").innerHTML += "x1 = " + x1 + " x2 = " + x2;
    }

}

function showDiv2(){
    let a1 = Number(document.getElementById("a1").value);
    let r = Number(document.getElementById("r").value);
    let len = Number(document.getElementById("len").value);

    document.getElementById("hidden").style.display = "block";
    document.getElementById("container").style.opacity = "0.1";
    
    const wynik =  document.getElementById("wynik");

    let w = a1;
    wynik.innerHTML = a1 + "<br>";
            for(let i = 0; i < len-1; i++){
                w = w + r;
                wynik.innerHTML += w + "<br>";
            }
}