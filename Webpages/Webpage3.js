function calculator(){
  var num1 = document.getElementById("numberInput1").value;
  var num2 = document.getElementById("numberInput2").value;
  var calOutput;
  console.log(num1);
  console.log(num2);

  calOutput = Number(num1) + Number(num2);
  console.log(calOutput);
  document.getElementById("finalOutput").innerHTML = calOutput;
}

function calculator1(){
  var num1 = document.getElementById("numberInput1").value;
  var num2 = document.getElementById("numberInput2").value;
  var calOutput;
  console.log(num1);
  console.log(num2);

  calOutput = Number(num1) - Number(num2);
  console.log(calOutput);
  document.getElementById("finalOutput").innerHTML = calOutput;
}

function calculator2(){
  var num1 = document.getElementById("numberInput1").value;
  var num2 = document.getElementById("numberInput2").value;
  var calOutput;
  console.log(num1);
  console.log(num2);

  calOutput = Number(num1) * Number(num2);
  console.log(calOutput);
  document.getElementById("finalOutput").innerHTML = calOutput;
}

function calculator3(){
  var num1 = document.getElementById("numberInput1").value;
  var num2 = document.getElementById("numberInput2").value;
  var calOutput;
  console.log(num1);
  console.log(num2);

  calOutput = Number(num1) / Number(num2);
  console.log(calOutput);
  document.getElementById("finalOutput").innerHTML = calOutput;
}



// When the user clicks on <div>, open the popup
function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}

setInterval(displayclock, 500);
            function displayclock() {
             var time = new Date();
             var hrs = time.getHours();
             var min = time.getMinutes();
             var sec = time.getSeconds();
             var en = 'AM';

             if (hrs > 12) {
                en = 'PM';
             }

                if (hrs > 12) {
                    hrs = hrs -12;
                }

             if (hrs == 0) {
                hrs = 12;
             }

            if (hrs < 10) {
                hrs = '0' + hrs;
            }

            if (min < 10) {
                min = '0' + min;
            }

            if (sec < 10) {
                sec = '0' + sec;
            }

         document.getElementById('clock').innerHTML = hrs + ':' + min + ':' +sec;
            + ' ' + en;
}
