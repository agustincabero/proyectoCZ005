/* El objeto jugador es un objeto literal que se encuentra incompleto.
 Solo tiene asignadas algunas de sus propiedades y ningun metodo */
var Jugador = {
  sprite: 'imagenes/auto_rojo_abajo.png',
  x: 130,
  y: 160,
  ancho: 15,
  alto: 30,
  velocidad: 10,
  vidas: 5,
  
  moverse: function(movX, movY, tecla) {
		this.x += movX;
		this.y += movY;
		switch (tecla) {
			case 'izq':
				this.sprite = 'imagenes/auto_rojo_izquierda.png';
				this.ancho = 30;
  			this.alto = 15;
				break;
			case 'arriba':
				this.sprite = 'imagenes/auto_rojo_arriba.png';
				this.ancho = 15;
  			this.alto = 30;
				break;
			case 'der':
				this.sprite = 'imagenes/auto_rojo_derecha.png';
				this.ancho = 30;
  			this.alto = 15;
				break;
			case 'abajo':
				this.sprite = 'imagenes/auto_rojo_abajo.png';
				this.ancho = 15;
  			this.alto = 30;
				break;
		}
	},

	perderVidas: function(cantVidas) {
		this.vidas -= cantVidas;
	}
}
