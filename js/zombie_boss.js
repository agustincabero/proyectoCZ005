var ZombieBoss = function(sprite, x, y, ancho, alto, velocidad, rangoMov) {
  Enemigo.call(this, sprite, x, y, ancho, alto, velocidad, rangoMov);
}
ZombieBoss.prototype = Object.create(Enemigo.prototype);
ZombieBoss.prototype.constructor = ZombieBoss;

ZombieBoss.prototype.mover = function() {
  if (Math.random() < 0.5) {
    this.x -= this.velocidad;
    this.y -= this.velocidad;
  } else {
    this.y += this.velocidad;
    this.x -= this.velocidad;
  }
  if ((this.x < this.rangoMov.desdeX) || (this.x > this.rangoMov.hastaX)){
    this.velocidad *= -1;
  }
  if ((this.y < this.rangoMov.desdeY) || (this.y > this.rangoMov.hastaY)) {
    this.y = this.rangoMov.desdeY + (this.rangoMov.hastaY - this.rangoMov.desdeY)/2;
  }
}

ZombieBoss.prototype.atacar = function(jugador){
  jugador.perderVidas(3);
}
