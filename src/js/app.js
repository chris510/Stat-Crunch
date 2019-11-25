// import './court';

const CONSTANTS = {
  courtWidth: 500,
  courtHeight: 470,
}

document.addEventListener("DOMContentLoaded", () => {
  let app = document.getElementById('app')

  let svg = d3.select("#svg")
    .append("svg").attr("width", CONSTANTS.courtWidth).attr("height", CONSTANTS.courtHeight);

  const court = new Court(svg);
  // court.render();
  console.log('HELLO')
});