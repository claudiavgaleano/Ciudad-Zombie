/* Un objeto que representa a los aliados. Recibe un sprite que tendra la
imagen que lo representa y una potencia indicando cuantas vidas suma al chocar
al jugador, ademas de los parametros comunes x, y, ancho y alto*/
var Aliado = function (sprite, x, y, ancho, alto, potencia) {
  this.sprite = sprite;
  this.x = x;
  this.y = y;
  this.ancho = ancho;
  this.alto = alto;
  this.potencia = potencia;
  this.sumarVida = function(jugador){
      Jugador.ganarVidas(this.potencia);
      this.potencia = 0;
  }  
}
