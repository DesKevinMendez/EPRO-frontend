/* eslint-disable object-curly-newline */
function crearCookie(clave: string, valor: string, diasexpiracion: number) {
  const d = new Date();
  d.setTime(d.getTime() + diasexpiracion * 24 * 60 * 60 * 1000);
  const expires = `expires=${d.toUTCString()}`;
  document.cookie = `${clave}=${valor};${expires}`;
}

function obtenerCookie(clave: string) {
  const name = `${clave} =`;
  const ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i += 1) {
    let c = ca[i];
    while (c.charAt(0) === " ") c = c.substring(1);
    if (c.indexOf(name) === 0) return c.substring(name.length, c.length);
  }
  return "";
}

function comprobarCookie(clave: string) {
  const claves = obtenerCookie(clave);
  if (claves !== "") {
    // La cookie existe.
    return true;
  }
  // La cookie no existe.
  return false;
}

function eliminarCookie(cName: string) {
  crearCookie(cName, "", -1);
}
export { crearCookie, obtenerCookie, comprobarCookie, eliminarCookie };