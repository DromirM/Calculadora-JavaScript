//Funcion que agrega a la pantalla el valor pasado como argumento, por medio del boton de la calculadora.
function agregar(valor){
  document.getElementById('pantalla').value += valor;
  playSound(); // Ejecuto un sonido.
}

//Funcion que vacia la pantalla.
function borrar(){
  document.getElementById('pantalla').value = '';
  playSound();
}

//Funcion que calcula y muestra en la pantalla el resultado.
function calcular(){
  const valorPantalla = document.getElementById('pantalla');
  playSound();
  
  try {

    const valor = valorPantalla.value;
    
    if(valor === ''){
      valorPantalla.value = '';
      return;
    }

    //Valido que el ingreso sea adecuado.
    if(/^[0-9+\-*/().\s]*$/.test(valor) && valor !== ''){

      const resultado = eval(valor); //No utilizar eval() a la ligera en el futuro.

      if(typeof resultado === 'number' && isFinite(resultado)){
      
        valorPantalla.value = resultado;
    
      } else if(resultado === Infinity){
    
        valorPantalla.value = 'Infinity';
    
      } else {
        valorPantalla.value = 'error';
      }
    } else {
      valorPantalla.value = 'ingreso no valido.'
    }
    
  } catch (error) {
    valorPantalla.value = 'se ha producido un error';
  }
}

function playSound(){
  try {
    let sound = new Audio();
    let random =  getRandomIntInclusive(1, 3);

    switch (random) {
      case 1:
        sound.src = '../../assets/sonidos/boton1.mp3';
        sound.play();
        break;
      
      case 2:
        sound.src = '../../assets/sonidos/boton2.mp3';
        sound.play();
        break;

      case 3:
        sound.src = '../../assets/sonidos/boton3.mp3';
        sound.play();
        break;

      default:
        console.log("No se seleccionó un sonido válido."); 
        return; // Salir si no se selecciona un sonido válido.
    }
    
    sound.play().catch(error => { 
      console.log("Se produjo un error al reproducir el sonido: " + error.message); 
    });

  } catch (error) {
    console.log("Se produjo un error: " + error.message);
  }
}

function getRandomIntInclusive(min, max) {
  //Funcion que devuelve un valor aleatorio inclusivo tanto con el valor minimo como maximo indicados.
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); /* The maximum is inclusive and the minimum is inclusive */
}