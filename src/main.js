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

document.addEventListener("DOMContentLoaded", function () {
    console.log("JS працює!"); // Перевірка, чи підключений файл main.js

    const buyButtons = document.querySelectorAll(".buyButton");
    const modal = document.getElementById("modal");
    const closeButton = document.querySelector(".close");

    if (!modal || !closeButton) {
        console.error("Помилка: Модальне вікно або кнопка закриття не знайдені!");
        return;
    }

    if (buyButtons.length === 0) {
        console.error("Помилка: Кнопки 'Купити' не знайдені!");
        return;
    }

    buyButtons.forEach(button => {
        button.addEventListener("click", function () {
            console.log("Кнопка натиснута!");
            modal.style.display = "block";
        });
    });

    closeButton.addEventListener("click", function () {
        modal.style.display = "none";
    });

    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
