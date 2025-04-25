export const GoalView = {
    renderGoal(goal, container) {
      const li = document.createElement("li");
      li.className = "goal";
      if (goal.achieved) li.classList.add("achieved");
  
      const content = document.createElement("span");
      content.innerHTML = `
        ${goal.description} - <strong>${goal.category}</strong> (${goal.repetitions})
      `;
  
      const btn = document.createElement("button");
      btn.className = "achieve-btn";
      btn.dataset.id = goal.id;
      btn.textContent = "Mark as Achieved";
  
      li.appendChild(content);
      li.appendChild(btn);
      container.appendChild(li);
    },
  
    clearForm(form) {
      form.reset();
    }
  };
  