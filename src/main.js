document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("modal");
    const buyButton = document.getElementById("buyButton");
    const closeButton = document.querySelector(".close");
    const orderForm = document.getElementById("orderForm");
  
    buyButton.addEventListener("click", function () {
        modal.style.display = "flex";
    });
  
    closeButton.addEventListener("click", function () {
        modal.style.display = "none";
    });
  
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
  
    orderForm.addEventListener("submit", function (event) {
        event.preventDefault();
        showCustomAlert("Замовлення прийнято! Очікуйте підтвердження.");
        modal.style.display = "none";
    });
  });
  
  function showCustomAlert(message) {
    const alertBox = document.createElement("div");
    alertBox.className = "custom-alert";
    alertBox.innerHTML = `<span>${message}</span><button class='alert-close'>ОК</button>`;
    document.body.appendChild(alertBox);
  
    document.querySelector(".alert-close").addEventListener("click", function () {
        alertBox.remove();
  });
  }
  function changeLanguage(url) {
    location.href = url;
}

document.getElementById("languageSwitcher").addEventListener("change", function () {
    location.href = this.value;
});
document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("modal");
    const closeModal = document.querySelector(".close");
    const buyButtons = document.querySelectorAll(".product button");

    buyButtons.forEach(button => {
        button.addEventListener("click", function () {
            modal.style.display = "block";
        });
    });

    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
    });

    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});