const forms = document.querySelectorAll(".delete-form");

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


/**
 * Open New Repository Modal
 */
document.getElementById('create-new').addEventListener('click', () => {
  document.querySelector('.modal-overlay').classList.add('active');
})

/**
 * Close New Repository Modal
 */
document.getElementById('close-modal').addEventListener('click', () => {
  document.querySelector('.modal-overlay').classList.remove('active');
})

/**
 * Create New Repository
 */
document.getElementById('new-repo-form').addEventListener('submit', (e) => {
  e.preventDefault();
  // Get the values from the form
  let name = document.getElementById('repo-name').value;
  let description = document.getElementById('repo-desc').value;

  // Display the new repository
  let reposDiv = document.querySelector('.repos');
  let html = `
      <div class="repo">
        <div class="img"></div>
        <div class="info">
          <p class="title">${name}</p>
          <p class="description">
            ${description}
          </p>
        </div>
        <form class="delete-form">
          <label>Type the repo name to delete</label>
          <p>You must match the repository name</p>
          <input type="text" />
          <button>Delete Repository</button>
        </form>
      </div>
    `;
      reposDiv.insertAdjacentHTML('beforeend', html);

  // Clear the form and close the modal
  document.getElementById('repo-name').value = '';
  document.getElementById('repo-desc').value = '';
  document.querySelector('.modal-overlay').classList.remove('active');
});