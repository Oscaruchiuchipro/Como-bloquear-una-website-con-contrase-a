var enter = prompt("Introduzca la contraseña para entrar");
var contra = "contraseña"; //Podéis cambiar 'contraseña' a vuestro gusto.

if (enter == contra) {
  alert('Has introducido la contraseña correcta');
}

else{
  alert('Has introducido una contraseña incorrecta');
  location.href = 'index.html'; //Es importante que el archivo se llame 'index.html' si el nombre del archivo HTML es 'index.html', si no no funcionará.
}
