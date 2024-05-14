const forms = document.querySelectorAll("form");

forms.forEach((form) => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let title = e.target.parentNode.querySelector(".title").textContent;
    let inputVal = e.target.querySelector("input").value;
    let errorText = e.target.querySelector("p");
    if (title === inputVal) {
      e.target.parentNode.remove();
    } else {
      console.log(e.target.querySelector("p"));
      errorText.style.display = "block";
    }
  });
});
