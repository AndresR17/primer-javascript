let nota1=parseFloat(prompt("Ingrese su nota de 0.0 a 5.0 "));
let nota2=parseFloat(prompt("ingrese segunda nota de 0.0 a 5.0 "));
resultado=(nota1+nota2);
document.write(resultado);
if (resultado >=5.0){

    document.write(" Felicidades aprobaste");
}else{(resultado<=4.9);

document.write(" reprobaste");
}
