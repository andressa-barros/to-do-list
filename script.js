document.addEventListener("DOMContentLoaded", () => {
  const taskList = document.getElementById("task-list");
  const taskForm = document.getElementById("task-form");
  const taskInput = document.getElementById("task-input");

  taskForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const li = document.createElement("li");
    li.className = "task-item";
    li.innerHTML = `
      <span>${taskText}</span>
      <div class="actions">
        <button class="btn-check" type="button">
          <img src="img/check.svg" alt="check" />
        </button>
      </div>
    `;

    taskList.appendChild(li);
    taskInput.value = "";
  });

  taskList.addEventListener("click", (e) => {
    const target = e.target;
    const btnCheck = target.closest(".btn-check");
    const btnDelete = target.closest(".btn-delete");
    const taskItem = target.closest(".task-item");

    if (!taskItem) return;

    if (btnCheck) {
      taskItem.classList.toggle("completed");
      const actionsDiv = taskItem.querySelector(".actions");

      if (taskItem.classList.contains("completed")) {
        if (!actionsDiv.querySelector(".btn-delete")) {
          const deleteBtn = document.createElement("button");
          deleteBtn.className = "btn-delete";
          deleteBtn.type = "button";
          deleteBtn.innerHTML = `<img src="img/trash.svg" alt="trash" />`;
          actionsDiv.appendChild(deleteBtn);
        }
      } else {
        const deleteBtn = actionsDiv.querySelector(".btn-delete");
        if (deleteBtn) {
          deleteBtn.remove();
        }
      }
    }

    if (btnDelete) {
      taskItem.remove();
    }
  });
});
