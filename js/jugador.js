/* El objeto jugador es un objeto literal que se encuentra incompleto.
 Solo tiene asignadas algunas de sus propiedades y ningun metodo */
var Jugador = {
  /* el sprite contiene la ruta de la imagen
  */
  sprite: 'imagenes/auto_rojo_abajo.png',
  x: 130,
  y: 160,
  ancho: 15,
  alto: 30,
  velocidad: 10,
  vidas: 5, 
  mover: function(movX,movY) {
   this.x = this.x + movX;
   this.y = this.y + movY;
 },
 
 cambiarFrente: function(tecla){
  switch(tecla) {
    case 'izq':
      this.sprite = 'imagenes/auto_rojo_izquierda.png';
      this.alto = 15;
      this.ancho =30;
    break;
    case 'der':
      this.sprite = 'imagenes/auto_rojo_derecha.png';
      this.alto = 15;
      this.ancho =30;
    break;
    case 'arriba':
      this.sprite = 'imagenes/auto_rojo_arriba.png';
      this.alto = 30;
      this.ancho =15;
    break;
    default:
        this.sprite = 'imagenes/auto_rojo_abajo.png';
        this.alto = 30;
        this.ancho = 15;
    }
  },  

  perderVidas: function(cantVidas){
    this.vidas -= cantVidas;
  },
  ganarVidas: function(cantVidas){
    this.vidas += cantVidas;
  }
  
  // Hay que agregar lo que falte al jugador: movimientos, perdida de vidas,
  // y todo lo que haga falta para que cumpla con sus responsabilidades

}
