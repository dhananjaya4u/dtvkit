const submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", function(event) {
  event.preventDefault();
  
  const accountNumber = document.getElementById("accountNumber").value;
  const reloadCard = document.getElementById("reload-card").value;
  const ussdCode = `*679*4*${accountNumber}*${reloadCard}%23`;
  
  window.location.href = `tel:${ussdCode}`;
});
