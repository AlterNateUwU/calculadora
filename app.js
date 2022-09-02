const numberOpacity = document.querySelector(".number-opacity");
const numberUnOpacity = document.querySelector(".number-unopacity");
const cuerpoCalculadora = document.querySelector(".main");
const btn0 = document.getElementById("cero");
const btn1 = document.getElementById("uno");
const btn2 = document.getElementById("dos");
const btn3 = document.getElementById("tres");
const btn4 = document.getElementById("cuatro");
const btn5 = document.getElementById("cinco");
const btn6 = document.getElementById("seis");
const btn7 = document.getElementById("siete");
const btn8 = document.getElementById("ocho");
const btn9 = document.getElementById("nueve");
const btnSumar = document.getElementById("sumar");
const btnRestar = document.getElementById("restar");
const btnMultiplicar = document.getElementById("multiplicar");
const btnDividir = document.getElementById("dividir");
const btnPorcentaje = document.getElementById("porcentaje");
const btnMasMenos = document.getElementById("masmenos");
const btnBorrarAll = document.getElementById("borrar-todo");
const btnPunto = document.getElementById("punto");
const btnIgual = document.getElementById("igual");
const darkWhite = document.querySelector(".dark-white");
const btnBorrarUno = document.getElementById("borrar-uno");

function actual() {
  fecha=new Date(); 
  hora=fecha.getHours(); 
  minuto=fecha.getMinutes(); 
  segundo=fecha.getSeconds(); 
  if (hora<10) { 
      hora="0"+hora;
      }
  if (minuto<10) { 
      minuto="0"+minuto;
      }
  if (segundo<10) { 
      segundo="0"+segundo;
      }
  mireloj = hora+" : "+minuto;	
  return mireloj; 
  }

  function actualizar() { 
    mihora=actual();
    mireloj=document.getElementById("reloj");
    mireloj.innerHTML=mihora;
    }
 setInterval(actualizar,1000);

let reset = 0;

const clickMostrarNumero = (element) => {
  element.addEventListener("click", () => {
    if (reset === 1) numberOpacity.textContent = "";
    numberOpacity.textContent += element.textContent;

    reset = 0;
  });
};

clickMostrarNumero(btn0);
clickMostrarNumero(btn1);
clickMostrarNumero(btn2);
clickMostrarNumero(btn3);
clickMostrarNumero(btn4);
clickMostrarNumero(btn5);
clickMostrarNumero(btn6);
clickMostrarNumero(btn7);
clickMostrarNumero(btn8);
clickMostrarNumero(btn9);

const clickMostrarSigno = (element) => {
  element.addEventListener("click", () => {
    let elementText = numberOpacity.textContent;

    if (reset === 1) elementText = "";

    if (elementText.length === 0) {
        alert("No puedes empezar con un signo de operacion");
        return
    }
    
    if (/([\+\-\*\.\/][\+\-\*\.\/]){1}/g.test(elementText)) {
      numberOpacity.textContent = "";
      alert("no puedes poner operadores seguidos");
    } else numberOpacity.textContent += element.textContent;



    reset = 0;
  });
};

clickMostrarSigno(btnSumar);
clickMostrarSigno(btnRestar);
clickMostrarSigno(btnMultiplicar);
clickMostrarSigno(btnDividir);
clickMostrarSigno(btnPorcentaje);
clickMostrarSigno(btnPunto);


btnMasMenos.addEventListener("click", () => {
  let valor = numberUnOpacity.textContent;

  if (valor.length >= 1) numberUnOpacity.textContent -= valor * 2;
});

btnBorrarUno.addEventListener("click", () => {
  reset = 0;

  let conArray = numberOpacity.textContent.split("");
  conArray.pop();
  numberOpacity.textContent = conArray.join("");
});

btnBorrarAll.addEventListener("click", () => {
  numberOpacity.textContent = "";
  numberUnOpacity.textContent = "";
});

btnIgual.addEventListener("click", () => {
  numberUnOpacity.textContent = eval(numberOpacity.textContent);
  reset = 1;
});

darkWhite.addEventListener("click", () => {
  const styles = document.documentElement.style;

  darkWhite.classList.toggle("unwhite");
  darkWhite.classList.toggle("unblack");

  if (darkWhite.classList.contains("unblack")) {
    styles.setProperty("--background-black", "#f1f2f3");
    styles.setProperty("--white", "#000");
    styles.setProperty("--gris-black", "#fff");
    styles.setProperty("--gris", "#d2d3da");
    document.getElementById("right").src="./iconos/Right Side (1).svg";
    document.getElementById("down").src="./iconos/Home Indicator.svg";

    btnBorrarUno.children[0].style.filter = "invert(0)";
  } else {
    styles.setProperty("--background-black", "#17171c");
    styles.setProperty("--white", "#fff");
    styles.setProperty("--gris-black", "#2e2f38");
    styles.setProperty("--gris", "#4e505f");
    document.getElementById("right").src="./iconos/Right Side.svg";
    document.getElementById("down").src="../iconos/Home Indicator (1).svg";

    btnBorrarUno.children[0].style.filter = "invert(1)";
  }
});

