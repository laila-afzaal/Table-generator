function calculate() {
  let num = document.querySelector('#num').value;
  document.querySelector('#table').innerHTML = ``;
  
  for (let i = 1; i <= 10; i++) {
      document.querySelector('#table').innerHTML += `<span>${num} x ${i} = ${num *i}<br></span>`;
  }
} 

var el = document.getElementById("myInputID");
el.addEventListener("keydown", function(event) {
     if (event.key === "Enter") {
        // Enter key was hit
     }
});

