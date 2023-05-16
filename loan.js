const submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", function(event) {
  event.preventDefault();
  
  const accountNumber = document.getElementById("accountNumber").value;
  const ussdCode = `*356*1*8*${accountNumber}%23`;
  
  window.location.href = `tel:${ussdCode}`;
});
