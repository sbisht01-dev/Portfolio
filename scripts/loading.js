{
  function width() {
    let left = document.getElementById("inner_container");
    let leftWidth = left.offsetWidth;
    console.log("left width", leftWidth);

    let right = document.getElementsByClassName("bento");
    let rightWidth = right[0].offsetWidth;
    console.log("right width", rightWidth);
  }
  width();

  setTimeout(() => {
    width();
  }, 5000);
}

const paper = document.querySelector("#paper"),
  pen = paper.getContext("2d");
console.log("Load");
let startTime = new Date().getTime();
const draw = () => {
  const currentTime = new Date().getTime(),
    elapsedTime = (currentTime - startTime) / 1000;

  // console.log(elapsedTime);
  paper.width = paper.clientWidth;
  paper.height = paper.clientHeight;

  const start = {
    x: paper.width * 0.1,
    y: paper.height * 0.5,
  };

  const end = {
    x: paper.width * 0.9,
    y: paper.height * 0.5,
  };

  const center = {
    x: paper.width * 0.5,
    y: paper.height * 0.2,
  };

  const arcradius = 5,
    velocity = 10;
  (distance = Math.PI + elapsedTime * velocity), (length = 20);
  const x = center.x + length * Math.cos(distance),
    y = center.y + length * Math.sin(distance);

  // pen.strokeStyle = "black";
  // pen.lineWidth = 5;
  // pen.beginPath();
  // pen.moveTo(start.x, start.y);
  // pen.lineTo(end.x, end.y);
  // pen.stroke();

  pen.fillStyle = "black";
  pen.beginPath();
  pen.arc(x, y, arcradius, 0, 2 * Math.PI);
  // pen.moveTo(start.x, start.y);

  pen.stroke();
  pen.fill();
  requestAnimationFrame(draw);
};

draw();
