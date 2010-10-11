if (window.top !== window) return;

(function() {
  var fieldset = document.querySelector("#aspnetForm > fieldset"),
      descriptions = document.querySelector("#_ctl0_ContentMain_trDescriptions");

  if (!(fieldset || descriptions)) return;
  
  document.body.className = document.body.className + " bankbest";

  var h3s = descriptions.querySelectorAll("h3");

  for (var i = 0; i < h3s.length; i=i+1) {
    var h3 = h3s[i],
        p = h3.nextElementSibling,
        div = document.createElement("div");

    div.appendChild(h3);
    div.appendChild(p);
    descriptions.appendChild(div);

    div.addEventListener("click", function(h3) {
      return function() {
        var optionVal;
        switch (h3.textContent) {
          case "BPAY®": optionVal = "BPY"; break;
          case "Internal Transfer": optionVal = "ITR"; break;
          case "Linked Account Transfer": optionVal = "SC"; break;
          case "Pay AnyBody": optionVal = "PAB"; break;
        }
      
        var select = fieldset.querySelector("select");
        select.querySelector("option[value='" + optionVal + "']").selected = "selected";

        select.onchange();
      }
    }(h3), false);
  }

})();