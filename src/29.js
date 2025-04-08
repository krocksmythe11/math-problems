function calculateArea(rectangle) {
  const width = rectangle.width;
  const height = rectangle.height;

  return width * height;
}

function calculatePerimeter(circle) {
  const radius = circle.radius;
  const perimeter = 2 * Math.PI * radius;

  return perimeter;
}
