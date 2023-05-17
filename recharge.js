const submitButton = document.getElementById("submitButton");

submitButton.addEventListener("click", function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the input field elements
  const accountNumberInput = document.getElementById("accountNumber");
  const reloadCardInput = document.getElementById("reload-card");
  
  // Get the values from the input fields
  const accountNumber = accountNumberInput.value;
  const reloadCard = reloadCardInput.value;
  
  // Construct the USSD code
  const ussdCode = `tel:*679*4*${accountNumber}*${reloadCard}#`;
  
  window.location.href = ussdCode;
});
