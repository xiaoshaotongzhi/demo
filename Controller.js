import { GoalModel } from "./Model.js";
import { GoalView } from "./View.js";

const form = document.querySelector("#goal-form");
const goalContainer = document.querySelector(".todo__list");

function loadGoals() {
  GoalModel.getGoals().then(goals => {
    goalContainer.innerHTML = "";
    goals.forEach(goal => GoalView.renderGoal(goal, goalContainer));
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const desc = form.description.value.trim();
  const cat = form.category.value;
  const reps = form.repetitions.value.trim();

  if (!desc || !reps) return alert("Please fill out all fields");

  const newGoal = {
    description: desc,
    category: cat,
    repetitions: reps,
    achieved: false,
  };

  GoalModel.addGoal(newGoal).then(goal => {
    GoalView.renderGoal(goal, goalContainer);
    GoalView.clearForm(form);
  });
});

goalContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("achieve-btn")) {
    const id = e.target.dataset.id;
    GoalModel.markAchieved(id).then(loadGoals);
  }
});

loadGoals();
