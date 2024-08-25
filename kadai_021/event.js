const btn = document.getElementById("btn");
setTimeout(() => {
  btn.addEventListener("click", function () {
    document.getElementById("text").innerText = "ボタンをクリックしました";
  });
}, 2000);
