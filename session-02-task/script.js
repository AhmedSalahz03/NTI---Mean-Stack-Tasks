document.getElementById('search-btn').addEventListener('click', async function() {
    const ingredient = document.getElementById('ingredient-input').value.trim();
    const mealsContainer = document.getElementById('meals-container');
    mealsContainer.innerHTML = '';

    if (!ingredient) {
        mealsContainer.innerHTML = '<div class="friendly-message">Please enter an ingredient to search.</div>';
        return;
    }

    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(ingredient)}`);
        const data = await response.json();
        if (!data.meals) {
            mealsContainer.innerHTML = `<div class="friendly-message">No meals found for "${ingredient}". Try another ingredient!</div>`;
            return;
        }
        mealsContainer.innerHTML = data.meals.map(meal => `
            <div class="meal-card">
                <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
                <div class="meal-name">${meal.strMeal}</div>
            </div>
        `).join('');
    } catch (error) {
        mealsContainer.innerHTML = '<div class="friendly-message">Error fetching meals. Please try again later.</div>';
    }
});
