
function openResearchBtn(researchBtn) {
  var i;
  var x = document.getElementsByClassName("index.html.researchDivs");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(researchBtn).style.display = "block";
}

function changeBackgroundColor(researchBtn) {
  var i;
  var x = document.getElementsByClassName("btn");
  for (i = 0; i < x.length; i++) {
    x[i].style.backgroundColor = "#00909e";
  }
  // document.getElementById(researchBtn).style.display = "block";
  document.getElementById(researchBtn).style.backgroundColor = "#fff";
}
