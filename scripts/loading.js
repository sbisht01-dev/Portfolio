const paper = document.querySelector("#paper"),
  pen = paper.getContext("2d");
console.log("Load");

const draw = () => {
  paper.width = paper.clientWidth;
  paper.height = paper.clientHeight;

  const start = {
    x: paper.width * 0.1,
    y: paper.height * 0.9,
  };

  const end = {
    x: paper.width * 0.9,
    y: paper.height * 0.9,
  };

  pen.strokeStyle = "red";
  pen.lineWidth = 6;
  pen.beginPath();
  pen.movetTo(start.x, start.y);
  pen.lineTo(end.x, end.y);
  pen.stroke();
};

draw();
