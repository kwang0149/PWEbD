$(document).ready(function () {
  $(".search").click(function () {
    const input = $(".userNumber").val();

    console.log(nearestPolindrome(input));
    $(".hasil").html(nearestPolindrome(input));
  });

  function cekPolindrome(number) {
    let stringAngka = number.toString();
    let cek = true;
    for (let i = 0; i < stringAngka.length; i++) {
      if (stringAngka[i] != stringAngka[stringAngka.length - 1 - i]) cek = false;
      return cek;
    }
  }

  function nearestPolindrome(number) {
    while (cekPolindrome(number) == false) {
      number++;
    }
    return number;
  }
});

function execute() {
  let numberInput = prompt("Enter number");
  if (numberInput != null) {
    document.getElementById("demo").innerHTML = "Nearest palindrome number from " + numberInput + " is " + nearestPolindrome(numberInput);
  }
}

// document.querySelector("hasil").value = hasil;
