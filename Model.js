const BASE_URL = "http://localhost:3000/goals";

export const GoalModel = {
  getGoals: () =>
    fetch(BASE_URL).then(res => res.json()),

  addGoal: (goal) =>
    fetch(BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(goal),
    }).then(res => res.json()),

  markAchieved: (id) =>
    fetch(`${BASE_URL}/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ achieved: true }),
    }).then(res => res.json()),
};
