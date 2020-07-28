const MAX = 600;
let cont = document.getElementById("space");
class Shape {
  constructor(x, y, shape) {
    this.x = x;

    this.y = y;

    this.shape = shape;
  }
}
class Square extends Shape {
  constructor(x, y, shape, size) {
    super(x, y, shape);
    this.size = size;
    this.div = document.createElement("div");
    this.div.style.backgroundColor = "#dc3545";
    this.div.style.width = `${size}px`;
    this.div.style.height = `${size}px`;
    this.div.style.cursor = `pointer`;
    this.div.style.left = `${x}px`;

    this.div.style.position = "absolute";
    this.div.style.top = `${y}px`;

    this.div.addEventListener("click", () => {
      this.describe();
    });
    this.div.addEventListener("dblclick", () => {
      cont.removeChild(this.div);
    });
    cont.append(this.div);
  }

  describe() {
    document.getElementById("shape").value = `${this.shape}`;
    document.getElementById("width").value = `${this.size}px`;
    document.getElementById("height").value = `${this.size}px`;
    document.getElementById("perimeter").value =
      (this.size * 4).toFixed(2) + "px";
    document.getElementById("area").value =
      (this.size * this.size).toFixed(2) + "px";
    document.getElementById("radius").value = "N/A";
  }
}

class Rectangle extends Shape {
  constructor(x, y, shape, width, height) {
    super(x, y, shape);
    this.width = width;
    this.height = height;
    this.div = document.createElement("div");
    this.div.style.backgroundColor = "#28a745";
    this.div.style.width = `${width}px`;
    this.div.style.height = `${height}px`;
    this.div.style.cursor = `pointer`;
    this.div.style.left = `${x}px`;

    this.div.style.position = "absolute";
    this.div.style.top = `${y}px`;

    this.div.addEventListener("click", () => {
      this.describe();
    });
    this.div.addEventListener("dblclick", () => {
      cont.removeChild(this.div);
    });
    cont.append(this.div);
  }

  describe() {
    document.getElementById("shape").value = `${this.shape}`;
    document.getElementById("width").value = `${this.width}px`;
    document.getElementById("height").value = `${this.height}px`;
    document.getElementById("perimeter").value =
      (this.height * 2 + this.width * 2).toFixed(2) + "px";
    document.getElementById("area").value =
      (this.height * this.width).toFixed(2) + "px";
    document.getElementById("radius").value = "N/A";
  }
}

class Circle extends Shape {
  constructor(x, y, shape, radius) {
    super(x, y, shape);
    this.radius = radius;
    this.div = document.createElement("div");
    this.div.classList.add("rounded-circle");
    this.div.style.backgroundColor = "plum";
    this.div.style.width = `${radius}px`;
    this.div.style.height = `${radius}px`;
    this.div.style.cursor = `pointer`;
    this.div.style.left = `${x}px`;

    this.div.style.position = "absolute";
    this.div.style.top = `${y}px`;

    this.div.addEventListener("click", () => {
      this.describe();
    });
    this.div.addEventListener("dblclick", () => {
      cont.removeChild(this.div);
    });
    cont.append(this.div);
  }

  describe() {
    document.getElementById("shape").value = `${this.shape}`;
    document.getElementById("width").value = `N/A`;
    document.getElementById("height").value = `N/A`;
    document.getElementById("perimeter").value =
      (Math.PI * 2 * this.radius).toFixed(2) + "px";
    document.getElementById("area").value =
      (this.radius * this.radius * Math.PI).toFixed(2) + "px";
    document.getElementById("radius").value = `${this.radius}px`;
  }
}

class Triangle extends Shape {
  constructor(x, y, shape, size) {
    super(x, y, shape);
    this.size = size;
    this.div = document.createElement("div");
    this.div.style.Color = "#ffc107";
    this.div.style.width = `0px`;
    this.div.style.height = `0px`;

    this.div.style.borderBottom = "" + this.size + "px solid #ffc107";
    this.div.style.borderRight = "" + this.size + "px solid transparent";
    this.div.style.left = `${x}px`;

    this.div.style.position = "absolute";
    this.div.style.top = `${y}px`;
    this.div.addEventListener("mousemove", (e) => {
      if (e.offsetX <= e.offsetY) this.div.style.cursor = `pointer`;
      else this.div.style.cursor = `default`;
    });

    this.div.addEventListener("click", (e) => {
      if (e.offsetX <= e.offsetY) this.describe();
    });
    this.div.addEventListener("dblclick", (e) => {
      if (e.offsetX <= e.offsetY) cont.removeChild(this.div);
    });

    cont.append(this.div);
  }

  describe() {
    document.getElementById("shape").value = `${this.shape}`;
    document.getElementById("width").value = `${this.size}px`;
    document.getElementById("height").value = `${this.size}px`;
    document.getElementById("perimeter").value =
      this.size * 2 + (Math.sqrt(2) * this.size).toFixed(2) + "px";
    document.getElementById("area").value =
      (this.size * this.size * 0.5).toFixed(2) + "px";
    document.getElementById("radius").value = "N/A";
  }
}

document.getElementById("sqrbtn").addEventListener("click", () => {
  if (
    0 <= parseInt(document.getElementById("sqrpx").value) &&
    parseInt(document.getElementById("sqrpx").value) <= MAX
  )
    return new Square(
      randomVal(0, MAX - parseInt(document.getElementById("sqrpx").value)),
      randomVal(0, MAX - parseInt(document.getElementById("sqrpx").value)),
      "Square",
      parseInt(document.getElementById("sqrpx").value)
    );
  else
    alert(
      "the size you entered is not within frame of the cavanas frame. Please eneter valid dimensions to fit accordingly within a 600x600 canvas."
    );
});

document.getElementById("recbtn").addEventListener("click", () => {
  if (
    0 <= parseInt(document.getElementById("recw").value) &&
    parseInt(document.getElementById("recw").value) <= MAX &&
    parseInt(document.getElementById("rech").value) <= MAX &&
    0 <= parseInt(document.getElementById("recw").value)
  )
    return new Rectangle(
      randomVal(0, MAX - parseInt(document.getElementById("recw").value)),
      randomVal(0, MAX - parseInt(document.getElementById("rech").value)),
      "Rectangle",
      parseInt(document.getElementById("recw").value),
      parseInt(document.getElementById("rech").value)
    );
  else
    alert(
      "the size you entered is not within frame of the cavanas frame. Please eneter valid dimensions to fit accordingly within a 600x600 canvas."
    );
});

document.getElementById("circbtn").addEventListener("click", () => {
  if (
    0 <= parseInt(document.getElementById("circpx").value) &&
    parseInt(document.getElementById("circpx").value) <= MAX
  )
    return new Circle(
      randomVal(0, MAX - parseInt(document.getElementById("circpx").value)),
      randomVal(0, MAX - parseInt(document.getElementById("circpx").value)),
      "Circle",
      parseInt(document.getElementById("circpx").value)
    );
  else
    alert(
      "the size you entered is not within frame of the cavanas frame. Please eneter valid dimensions to fit accordingly within a 600x600 canvas."
    );
});

document.getElementById("tribtn").addEventListener("click", () => {
  if (
    0 <= parseInt(document.getElementById("tripx").value) &&
    parseInt(document.getElementById("tripx").value) <= MAX
  )
    return new Triangle(
      randomVal(0, MAX - parseInt(document.getElementById("tripx").value)),
      randomVal(0, MAX - parseInt(document.getElementById("tripx").value)),
      "Triangle",
      parseInt(document.getElementById("tripx").value)
    );
  else
    alert(
      "the size you entered is not within frame of the cavanas frame. Please eneter valid dimensions to fit accordingly within a 600x600 canvas."
    );
});

function randomVal(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
