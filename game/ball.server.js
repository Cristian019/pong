class Ball {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radius = 10;
    this.speed = (Math.random()< 0.5 ? -1 : 1)+10;
    this.dx = this.speed;
    this.dy = this.speed;
    this.color = "#" + Math.floor(Math.random() * 16777215).toString(16);
  }

  move(width, height) {
    // Comprobar si el círculo ha chocado con los bordes superior o inferior
    if (this.y + this.dy > height - this.radius) {
      this.dy = -this.dy;
    } else if (this.y + this.dy < this.radius) {
      this.dy = this.speed; // reiniciar la dirección hacia abajo
    }
    // Comprobar si el círculo ha chocado con los bordes laterales
    if (
      this.x + this.dx > width - this.radius ||
      this.x + this.dx < this.radius
    ) {
      this.x = width / 2;
      this.y = height / 2;
      this.dx = Math.random() * 2 - 1; // asignar una dirección horizontal aleatoria
      this.dy = Math.random() * 2 - 1; // asignar una dirección vertical aleatoria
      this.dx = this.dx / Math.abs(this.dx);
      this.dy = this.dy / Math.abs(this.dy);
      this.dx *= this.speed; // asignar una dirección horizontal aleatoria
      this.dy *= this.speed; // asignar una dirección vertical aleatoria
    }

    // Actualizar la posición del círculo
    this.x += this.dx;
    this.y += this.dy;
  }
  bounce(player) {
    // Calcular la distancia entre el centro del círculo y el rectángulo
    let distX = Math.abs(this.x - player.x - player.height / 2);
    let distY = Math.abs(this.y - player.y - player.width / 2);

    // Comprobar si hay colisión entre el círculo y el rectángulo
    if (
      distX <= player.height / 2 + this.radius &&
      distY <= player.width / 2 + this.radius
    ) {
      console.log("bounce");
      this.dx = -this.dx;
    }
  }
}

module.exports = {
  Ball,
};
