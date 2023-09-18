function calculateTotal() {
    var total = 0;
    var rows = document.querySelectorAll("tbody tr");
    for (var i = 0; i < rows.length; i++) {
      var cells = rows[i].querySelectorAll("td");
      var price = parseFloat(cells[1].innerText.replace('R$ ', ''));
      var quantity = parseInt(cells[2].querySelector("input").value);
      var rowTotal = price * quantity;
      cells[3].innerHTML = "R$ " + rowTotal.toFixed(2);
      total += rowTotal;
    }
  
    var totalCell = document.querySelector("tfoot td:last-child");
    totalCell.innerHTML = "R$ " + total.toFixed(2);
  }
  
  // Adicione um evento de escuta para chamar a função calculateTotal sempre que houver uma mudança na entrada do usuário.
  var inputElements = document.querySelectorAll("input");
  for (var i = 0; i < inputElements.length; i++) {
    inputElements[i].addEventListener("input", calculateTotal);
  }