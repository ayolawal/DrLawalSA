
function openResearchBtn(researchBtn) {
  var i;
  var x = document.getElementsByClassName("researchDivs");
  // var z = document.getElementsByClassName("btn");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(researchBtn).style.display = "block";
  // document.getElementsByClassName(researchBtn).style.color= "#00909e"
}

// function changeBtnBackgroundColor(researchBtn) {
//   var j;
//   var y = document.getElementsByClassName("btn");
//   for (j = 0; j < y.length; j++) {
//     y[j].style.backgroundColor = "#00909e";
//   }
//   document.getElementById(researchBtn).style.backgroundColor = "#fff";
//   // document.getElementById(researchBtn).style.color="blue";
//   // document.getElementById(researchBtn).style.fontWeight = "bold";
// }
