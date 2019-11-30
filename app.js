const chAnim = document.getElementById("firstCh");

function openCh() {
  chAnim.setAttribute("open", true);
}

setTimeout(openCh, 900);

// Next Chapter function
const dwArrow = document.getElementById("dw-arr");

function findNext() {
  console.log(
    parseInt(dwArrow.href.substr(dwArrow.href.length - 1).toString(10)) + 1
  );
  dwArrow.href =
    "#" +
    (
      parseInt(dwArrow.href.substr(dwArrow.href.length - 1).toString(10)) + 1
    ).toString(10);
}

function gotoCh(chapter) {
  setTimeout(findNext, 50);
}
