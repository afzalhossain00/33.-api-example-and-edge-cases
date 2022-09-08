const loadMeals = (search) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals));
}
const displayMeals = meals => {
    const mealsContainer = document.getElementById('meal-container');
    mealsContainer.innerHTML = ``;
    meals.forEach(meal => {
        // console.log(meal)
        const mealDiv = document.createElement('div')
        mealDiv.classList.add('col');
        mealDiv.innerHTML = `
            <div onclick="loadMealDetail(${meal.idMeal})" class="card h-100">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0, 300)}</p>
        </div>
    </div>
        `
        mealsContainer.appendChild(mealDiv)
    })
}

const searchFood = () => {
    const searchField = document.getElementById('search-field')
    const searchText = searchField.value;
    // console.log('searching', searchText)
    loadMeals(searchText)
    searchField.value = ''
}

const loadMealDetail = (idMeal) => {
    // console.log('Get details of', idMeal)
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    // console.log(url)

    fetch(url)
        .then(res => res.json())
        .then(data => displayMealsDetail(data.meals[0]))

}

const displayMealsDetail = meal => {
    const mealDetailContainer = document.getElementById('meal-detail-container')
    mealDetailContainer.innerHTML = ''
    const mealDiv = document.createElement('div')
    mealDiv.classList.add('card');
    mealDiv.innerHTML = `  
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>
        <p class="card-text">${meal.strInstructions.slice(0, 300)}</p > `
    mealDetailContainer.appendChild(mealDiv)
}

loadMeals('')