// MickyBulking - Complete Nutrition Tracking App
// Optimized for Mozambique with Portuguese PT localization

// Food Database with Mozambican foods and Portuguese names
const FOOD_DATABASE = {
  "arroz": { "calories": 130, "protein": 2.7, "carbs": 28, "fat": 0.3, "category": "Grãos e Cereais", "image": "🍚" },
  "arroz branco": { "calories": 130, "protein": 2.7, "carbs": 28, "fat": 0.3, "category": "Grãos e Cereais", "image": "🍚" },
  "arroz integral": { "calories": 111, "protein": 2.6, "carbs": 22, "fat": 0.9, "category": "Grãos e Cereais", "image": "🍚" },
  "feijão": { "calories": 127, "protein": 8.9, "carbs": 23, "fat": 0.5, "category": "Leguminosas", "image": "🫘" },
  "feijão preto": { "calories": 132, "protein": 8.9, "carbs": 24, "fat": 0.5, "category": "Leguminosas", "image": "🫘" },
  "feijão frade": { "calories": 130, "protein": 8.5, "carbs": 23, "fat": 0.6, "category": "Leguminosas", "image": "🫘" },
  "frango": { "calories": 165, "protein": 31, "carbs": 0, "fat": 3.6, "category": "Carnes", "image": "🍗" },
  "peito de frango": { "calories": 165, "protein": 31, "carbs": 0, "fat": 3.6, "category": "Carnes", "image": "🍗" },
  "coxa de frango": { "calories": 204, "protein": 18.4, "carbs": 0, "fat": 14.2, "category": "Carnes", "image": "🍗" },
  "galinha": { "calories": 185, "protein": 25, "carbs": 0, "fat": 8.5, "category": "Carnes", "image": "🐔" },
  "ovo": { "calories": 155, "protein": 13, "carbs": 1.1, "fat": 11, "category": "Proteínas", "image": "🥚" },
  "ovos": { "calories": 155, "protein": 13, "carbs": 1.1, "fat": 11, "category": "Proteínas", "image": "🥚" },
  "clara de ovo": { "calories": 52, "protein": 11, "carbs": 0.7, "fat": 0.2, "category": "Proteínas", "image": "🥚" },
  "pão": { "calories": 265, "protein": 9, "carbs": 49, "fat": 3.2, "category": "Pães e Massas", "image": "🍞" },
  "pão de forma": { "calories": 248, "protein": 8.9, "carbs": 45, "fat": 3.5, "category": "Pães e Massas", "image": "🍞" },
  "pãozinho": { "calories": 300, "protein": 9.4, "carbs": 58, "fat": 3.1, "category": "Pães e Massas", "image": "🥖" },
  "pão integral": { "calories": 247, "protein": 13, "carbs": 41, "fat": 4.2, "category": "Pães e Massas", "image": "🍞" },
  "banana": { "calories": 89, "protein": 1.1, "carbs": 23, "fat": 0.3, "category": "Frutas", "image": "🍌" },
  "maçã": { "calories": 52, "protein": 0.3, "carbs": 14, "fat": 0.2, "category": "Frutas", "image": "🍎" },
  "laranja": { "calories": 47, "protein": 0.9, "carbs": 12, "fat": 0.1, "category": "Frutas", "image": "🍊" },
  "papaia": { "calories": 43, "protein": 0.5, "carbs": 11, "fat": 0.3, "category": "Frutas", "image": "🟡" },
  "manga": { "calories": 60, "protein": 0.8, "carbs": 15, "fat": 0.4, "category": "Frutas", "image": "🥭" },
  "ananás": { "calories": 50, "protein": 0.5, "carbs": 13, "fat": 0.1, "category": "Frutas", "image": "🍍" },
  "coco": { "calories": 354, "protein": 3.3, "carbs": 15, "fat": 33, "category": "Frutas", "image": "🥥" },
  "goiaba": { "calories": 68, "protein": 2.6, "carbs": 14, "fat": 1, "category": "Frutas", "image": "🟢" },
  "maracujá": { "calories": 97, "protein": 2.2, "carbs": 23, "fat": 0.7, "category": "Frutas", "image": "🟡" },
  "tangerina": { "calories": 53, "protein": 0.8, "carbs": 13, "fat": 0.3, "category": "Frutas", "image": "🍊" },
  "limão": { "calories": 29, "protein": 1.1, "carbs": 9, "fat": 0.3, "category": "Frutas", "image": "🍋" },
  "leite": { "calories": 42, "protein": 3.4, "carbs": 5, "fat": 1, "category": "Laticínios", "image": "🥛" },
  "leite integral": { "calories": 61, "protein": 3.2, "carbs": 4.8, "fat": 3.2, "category": "Laticínios", "image": "🥛" },
  "leite desnatado": { "calories": 34, "protein": 3.4, "carbs": 5, "fat": 0.2, "category": "Laticínios", "image": "🥛" },
  "iogurte": { "calories": 59, "protein": 10, "carbs": 3.6, "fat": 0.9, "category": "Laticínios", "image": "🥛" },
  "queijo": { "calories": 356, "protein": 25, "carbs": 3.4, "fat": 27, "category": "Laticínios", "image": "🧀" },
  "amendoim": { "calories": 567, "protein": 26, "carbs": 16, "fat": 49, "category": "Oleaginosas", "image": "🥜" },
  "castanha de caju": { "calories": 553, "protein": 18, "carbs": 30, "fat": 44, "category": "Oleaginosas", "image": "🥜" },
  "caju": { "calories": 43, "protein": 1, "carbs": 9, "fat": 0.4, "category": "Frutas", "image": "🍎" },
  "aveia": { "calories": 389, "protein": 17, "carbs": 66, "fat": 7, "category": "Grãos e Cereais", "image": "🌾" },
  "milho": { "calories": 86, "protein": 3.3, "carbs": 19, "fat": 1.4, "category": "Grãos e Cereais", "image": "🌽" },
  "mapira": { "calories": 339, "protein": 10, "carbs": 69, "fat": 3.5, "category": "Grãos e Cereais", "image": "🌾" },
  "mexoeira": { "calories": 345, "protein": 11, "carbs": 70, "fat": 3.8, "category": "Grãos e Cereais", "image": "🌾" },
  "batata doce": { "calories": 86, "protein": 1.6, "carbs": 20, "fat": 0.1, "category": "Tubérculos", "image": "🍠" },
  "batata rena": { "calories": 77, "protein": 2, "carbs": 17, "fat": 0.1, "category": "Tubérculos", "image": "🥔" },
  "inhame": { "calories": 118, "protein": 1.5, "carbs": 28, "fat": 0.2, "category": "Tubérculos", "image": "🥔" },
  "mandioca": { "calories": 160, "protein": 1.4, "carbs": 38, "fat": 0.3, "category": "Tubérculos", "image": "🥔" },
  "macaza": { "calories": 162, "protein": 1.5, "carbs": 39, "fat": 0.3, "category": "Tubérculos", "image": "🥔" },
  "carne bovina": { "calories": 250, "protein": 26, "carbs": 0, "fat": 15, "category": "Carnes", "image": "🥩" },
  "carne de vaca": { "calories": 250, "protein": 26, "carbs": 0, "fat": 15, "category": "Carnes", "image": "🥩" },
  "carne de porco": { "calories": 242, "protein": 27, "carbs": 0, "fat": 14, "category": "Carnes", "image": "🐷" },
  "carne de cabra": { "calories": 143, "protein": 27, "carbs": 0, "fat": 3, "category": "Carnes", "image": "🐐" },
  "peixe": { "calories": 206, "protein": 22, "carbs": 0, "fat": 12, "category": "Peixes", "image": "🐟" },
  "capitão": { "calories": 190, "protein": 24, "carbs": 0, "fat": 9, "category": "Peixes", "image": "🐟" },
  "chewa": { "calories": 180, "protein": 26, "carbs": 0, "fat": 8, "category": "Peixes", "image": "🐟" },
  "tilápia": { "calories": 96, "protein": 20, "carbs": 0, "fat": 1.7, "category": "Peixes", "image": "🐟" },
  "camarão": { "calories": 85, "protein": 18, "carbs": 0.9, "fat": 1.1, "category": "Peixes", "image": "🦐" },
  "lagosta": { "calories": 89, "protein": 19, "carbs": 0, "fat": 0.9, "category": "Peixes", "image": "🦞" },
  "couve": { "calories": 25, "protein": 1.3, "carbs": 6, "fat": 0.1, "category": "Vegetais", "image": "🥬" },
  "couve galega": { "calories": 28, "protein": 2.2, "carbs": 6, "fat": 0.4, "category": "Vegetais", "image": "🥬" },
  "espinafre": { "calories": 23, "protein": 2.9, "carbs": 3.6, "fat": 0.4, "category": "Vegetais", "image": "🥬" },
  "alface": { "calories": 15, "protein": 1.4, "carbs": 2.9, "fat": 0.2, "category": "Vegetais", "image": "🥬" },
  "tomate": { "calories": 18, "protein": 0.9, "carbs": 3.9, "fat": 0.2, "category": "Vegetais", "image": "🍅" },
  "cebola": { "calories": 40, "protein": 1.1, "carbs": 9, "fat": 0.1, "category": "Vegetais", "image": "🧅" },
  "alho": { "calories": 149, "protein": 6.4, "carbs": 33, "fat": 0.5, "category": "Vegetais", "image": "🧄" },
  "piri-piri": { "calories": 40, "protein": 1.9, "carbs": 7, "fat": 0.4, "category": "Temperos", "image": "🌶️" },
  "azeite": { "calories": 884, "protein": 0, "carbs": 0, "fat": 100, "category": "Óleos", "image": "🫒" },
  "óleo de cozinha": { "calories": 884, "protein": 0, "carbs": 0, "fat": 100, "category": "Óleos", "image": "🛢️" },
  "mel": { "calories": 304, "protein": 0.3, "carbs": 82, "fat": 0, "category": "Doces", "image": "🍯" },
  "açúcar": { "calories": 387, "protein": 0, "carbs": 100, "fat": 0, "category": "Doces", "image": "🧂" }
};

// Global state
let currentPage = 'profile';
let userData = null;
let dailyIntake = { calories: 0, protein: 0, carbs: 0, fat: 0 };
let dailyGoals = { calories: 2500, protein: 150, carbs: 300, fat: 80 };
let mealHistory = [];
let selectedFood = null;
let searchResults = [];
let selectedCategory = 'Todos';

// Utility functions
function getJohannesburgTime() {
    return new Date().toLocaleString('pt-PT', {
        timeZone: 'Africa/Johannesburg',
        hour: '2-digit',
        minute: '2-digit'
    });
}

function calculateDailyGoals(userData) {
    const { age, gender, weight, height, activity } = userData;
    
    // Calculate BMR using Mifflin-St Jeor Equation
    let bmr;
    if (gender === 'male') {
        bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else {
        bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }
    
    // Activity multipliers
    const multipliers = {
        sedentary: 1.2,
        light: 1.375,
        moderate: 1.55,
        very: 1.725,
        extra: 1.9
    };
    
    const tdee = bmr * multipliers[activity];
    const bulkingCalories = Math.round(tdee + 300); // Add 300 calories for bulking
    
    return {
        calories: bulkingCalories,
        protein: Math.round(weight * 2), // 2g per kg
        carbs: Math.round(bulkingCalories * 0.5 / 4), // 50% of calories from carbs
        fat: Math.round(bulkingCalories * 0.25 / 9) // 25% of calories from fat
    };
}

function parseFoodInput(input) {
    const regex = /^(.+?)\s+(\d+(?:\.\d+)?)\s*g?$/i;
    const match = input.trim().match(regex);
    
    if (!match) return null;
    
    const foodName = match[1].toLowerCase().trim();
    const quantity = parseFloat(match[2]);
    
    if (FOOD_DATABASE[foodName]) {
        return { foodName, quantity };
    }
    
    return null;
}

function calculateNutrition(foodName, quantity) {
    const food = FOOD_DATABASE[foodName];
    if (!food) return null;
    
    const multiplier = quantity / 100;
    return {
        calories: Math.round(food.calories * multiplier),
        protein: Math.round(food.protein * multiplier * 10) / 10,
        carbs: Math.round(food.carbs * multiplier * 10) / 10,
        fat: Math.round(food.fat * multiplier * 10) / 10
    };
}

function getMotivationalFeedback(nutrition, goals) {
    const messages = [
        "Excelente escolha! 💪",
        "Ótima refeição para o bulking! 🔥",
        "Perfeito para ganhar massa! 🎯",
        "Continue assim! 🚀",
        "Muito bem! 👏"
    ];
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    return {
        message: randomMessage,
        style: 'border-green-500'
    };
}

// Storage functions
function saveToStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

function loadFromStorage(key, defaultValue = null) {
    try {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : defaultValue;
    } catch {
        return defaultValue;
    }
}

function saveUserData(data) {
    userData = data;
    saveToStorage('userData', data);
}

function saveDailyIntake(intake) {
    const today = new Date().toDateString();
    saveToStorage(`dailyIntake_${today}`, intake);
}

function loadDailyIntake() {
    const today = new Date().toDateString();
    return loadFromStorage(`dailyIntake_${today}`, { calories: 0, protein: 0, carbs: 0, fat: 0 });
}

function saveMealHistory(history) {
    const today = new Date().toDateString();
    saveToStorage(`mealHistory_${today}`, history);
}

function loadMealHistory() {
    const today = new Date().toDateString();
    return loadFromStorage(`mealHistory_${today}`, []);
}

// UI update functions
function updateProgressBars() {
    const caloriesPercent = Math.min((dailyIntake.calories / dailyGoals.calories) * 100, 100);
    const proteinPercent = Math.min((dailyIntake.protein / dailyGoals.protein) * 100, 100);
    const carbsPercent = Math.min((dailyIntake.carbs / dailyGoals.carbs) * 100, 100);
    const fatPercent = Math.min((dailyIntake.fat / dailyGoals.fat) * 100, 100);

    // Update main page progress
    document.getElementById('calories-current').textContent = Math.round(dailyIntake.calories);
    document.getElementById('calories-goal').textContent = dailyGoals.calories;
    document.getElementById('calories-progress').style.width = `${caloriesPercent}%`;
    document.getElementById('calories-status').textContent = 
        caloriesPercent >= 100 ? '🎯 Meta alcançada!' : `${Math.round(caloriesPercent)}% da meta`;

    document.getElementById('protein-current').textContent = Math.round(dailyIntake.protein);
    document.getElementById('protein-goal').textContent = dailyGoals.protein;
    document.getElementById('protein-progress').style.width = `${proteinPercent}%`;
    document.getElementById('protein-status').textContent = 
        proteinPercent >= 100 ? '🎯 Meta alcançada!' : `${Math.round(proteinPercent)}% da meta`;

    // Update progress page
    document.getElementById('progress-calories-current').textContent = Math.round(dailyIntake.calories);
    document.getElementById('progress-calories-goal').textContent = dailyGoals.calories;
    document.getElementById('progress-calories-bar').style.width = `${caloriesPercent}%`;

    document.getElementById('progress-protein-current').textContent = Math.round(dailyIntake.protein);
    document.getElementById('progress-protein-goal').textContent = dailyGoals.protein;
    document.getElementById('progress-protein-bar').style.width = `${proteinPercent}%`;

    document.getElementById('progress-carbs-current').textContent = Math.round(dailyIntake.carbs);
    document.getElementById('progress-carbs-goal').textContent = dailyGoals.carbs;
    document.getElementById('progress-carbs-bar').style.width = `${carbsPercent}%`;

    document.getElementById('progress-fat-current').textContent = Math.round(dailyIntake.fat);
    document.getElementById('progress-fat-goal').textContent = dailyGoals.fat;
    document.getElementById('progress-fat-bar').style.width = `${fatPercent}%`;

    // Update header
    if (userData) {
        document.getElementById('user-name').textContent = userData.name;
        document.getElementById('user-goals').textContent = dailyGoals.calories;
        document.getElementById('user-info').classList.remove('hidden');
    }
}

function updateMealHistory() {
    const historyList = document.getElementById('meal-history-list');
    
    if (mealHistory.length === 0) {
        historyList.innerHTML = `
            <div class="empty-state">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <p>Nenhuma refeição registrada hoje</p>
                <p class="text-sm">Comece a registar as suas refeições!</p>
            </div>
        `;
        return;
    }

    historyList.innerHTML = mealHistory.map((meal, index) => `
        <div class="meal-item">
            <div class="meal-time">${meal.time}</div>
            <div class="meal-info">
                <div class="meal-name">${meal.food}</div>
                <div class="meal-nutrition">
                    ${meal.quantity}g • ${meal.nutrition.calories} kcal • ${meal.nutrition.protein}g proteína
                </div>
            </div>
            <div class="meal-actions">
                <button class="btn-delete" onclick="deleteMeal(${index})">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                    </svg>
                </button>
            </div>
        </div>
    `).join('');
}

function updateFoodSearch() {
    const query = document.getElementById('food-search').value.toLowerCase();
    const resultsContainer = document.getElementById('search-results');
    
    if (query.length < 2 && selectedCategory === 'Todos') {
        resultsContainer.innerHTML = `
            <div class="empty-state">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
                <p>Digite pelo menos 2 caracteres para buscar</p>
            </div>
        `;
        return;
    }

    let filtered = Object.entries(FOOD_DATABASE);

    // Filter by search query
    if (query.length >= 2) {
        filtered = filtered.filter(([name]) => 
            name.toLowerCase().includes(query)
        );
    }

    // Filter by category
    if (selectedCategory !== 'Todos') {
        filtered = filtered.filter(([, food]) => food.category === selectedCategory);
    }

    // Sort by relevance
    filtered.sort(([nameA], [nameB]) => {
        const exactMatchA = nameA.toLowerCase() === query;
        const exactMatchB = nameB.toLowerCase() === query;
        
        if (exactMatchA && !exactMatchB) return -1;
        if (!exactMatchA && exactMatchB) return 1;
        
        return nameA.localeCompare(nameB);
    });

    searchResults = filtered.slice(0, 20);

    if (searchResults.length === 0) {
        resultsContainer.innerHTML = `
            <div class="empty-state">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
                <p>Nenhum alimento encontrado</p>
                <p class="text-sm">Tente buscar por outro termo</p>
            </div>
        `;
        return;
    }

    resultsContainer.innerHTML = searchResults.map(([foodName, food]) => `
        <div class="food-item ${selectedFood === foodName ? 'selected' : ''}" onclick="selectFood('${foodName}')">
            <div class="flex items-start space-x-3 mb-3">
                <div class="food-image">
                    ${food.image || '🍽️'}
                </div>
                <div class="flex-1 min-w-0">
                    <h4 class="font-semibold capitalize text-sm mb-1 truncate">${foodName}</h4>
                    <div class="text-xs bg-muted text-muted-foreground px-2 py-1 rounded">
                        ${food.category}
                    </div>
                </div>
                <div class="text-right flex-shrink-0">
                    <div class="text-lg font-bold text-primary">${food.calories}</div>
                    <div class="text-xs text-muted-foreground">kcal/100g</div>
                </div>
            </div>
            
            <div class="grid grid-cols-3 gap-3 text-xs">
                <div class="nutrition-badge protein">
                    <div class="font-semibold text-sm">${food.protein}g</div>
                    <div>Proteína</div>
                </div>
                <div class="nutrition-badge carbs">
                    <div class="font-semibold text-sm">${food.carbs}g</div>
                    <div>Carbo</div>
                </div>
                <div class="nutrition-badge fat">
                    <div class="font-semibold text-sm">${food.fat}g</div>
                    <div>Gordura</div>
                </div>
            </div>
        </div>
    `).join('');
}

function updateNutritionPreview() {
    const quantity = parseInt(document.getElementById('food-quantity').value) || 100;
    const food = FOOD_DATABASE[selectedFood];
    const nutrition = calculateNutrition(selectedFood, quantity);
    
    document.getElementById('nutrition-preview').innerHTML = `
        <h5 class="font-semibold mb-2">${selectedFood} (${quantity}g)</h5>
        <div class="grid grid-cols-4 gap-2 text-xs">
            <div class="text-center">
                <div class="font-bold text-primary">${nutrition.calories}</div>
                <div class="text-muted-foreground">kcal</div>
            </div>
            <div class="text-center">
                <div class="font-bold text-green-500">${nutrition.protein}g</div>
                <div class="text-muted-foreground">Proteína</div>
            </div>
            <div class="text-center">
                <div class="font-bold text-yellow-500">${nutrition.carbs}g</div>
                <div class="text-muted-foreground">Carbo</div>
            </div>
            <div class="text-center">
                <div class="font-bold text-orange-500">${nutrition.fat}g</div>
                <div class="text-muted-foreground">Gordura</div>
            </div>
        </div>
    `;
}

// Navigation functions
function showPage(pageName) {
    // Hide all pages
    document.querySelectorAll('.page-content').forEach(page => {
        page.classList.add('hidden');
    });
    
    // Show selected page
    document.getElementById(`page-${pageName}`).classList.remove('hidden');
    
    // Update navigation
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    document.querySelector(`[data-page="${pageName}"]`).classList.add('active');
    
    currentPage = pageName;
    
    // Page-specific updates
    if (pageName === 'history') {
        updateMealHistory();
    } else if (pageName === 'progress') {
        updateProgressBars();
    }
}

function selectFood(foodName) {
    selectedFood = foodName;
    document.getElementById('food-selector').classList.remove('hidden');
    updateNutritionPreview();
    updateFoodSearch(); // Refresh to show selection
}

function deleteMeal(index) {
    const meal = mealHistory[index];
    
    // Remove from daily intake
    dailyIntake.calories -= meal.nutrition.calories;
    dailyIntake.protein -= meal.nutrition.protein;
    dailyIntake.carbs -= meal.nutrition.carbs;
    dailyIntake.fat -= meal.nutrition.fat;
    
    // Remove from history
    mealHistory.splice(index, 1);
    
    // Save changes
    saveDailyIntake(dailyIntake);
    saveMealHistory(mealHistory);
    
    // Update UI
    updateProgressBars();
    updateMealHistory();
    
    showNotification('Refeição removida', 'Refeição removida do histórico');
}

function addMeal(foodName, quantity, nutrition) {
    // Add to daily intake
    dailyIntake.calories += nutrition.calories;
    dailyIntake.protein += nutrition.protein;
    dailyIntake.carbs += nutrition.carbs;
    dailyIntake.fat += nutrition.fat;

    // Add to history
    const newMeal = {
        food: foodName,
        quantity: quantity,
        nutrition: nutrition,
        time: getJohannesburgTime()
    };
    mealHistory.unshift(newMeal);

    // Save changes
    saveDailyIntake(dailyIntake);
    saveMealHistory(mealHistory);

    // Show feedback
    const feedback = getMotivationalFeedback(nutrition, dailyGoals);
    document.getElementById('feedback-message').textContent = feedback.message;
    document.getElementById('feedback-area').classList.remove('hidden');
    
    setTimeout(() => {
        document.getElementById('feedback-area').classList.add('hidden');
    }, 5000);

    // Update UI
    updateProgressBars();
    showNotification('Refeição registada!', `+${nutrition.calories} kcal, +${nutrition.protein}g proteína`);
}

function showNotification(title, message) {
    // Simple notification system - could be enhanced with toast library
    console.log(`${title}: ${message}`);
}

// Event handlers
function handleProfileSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const userData = {
        name: formData.get('name'),
        age: parseInt(formData.get('age')),
        gender: formData.get('gender'),
        weight: parseFloat(formData.get('weight')),
        height: parseInt(formData.get('height')),
        activity: formData.get('activity')
    };
    
    // Calculate goals
    dailyGoals = calculateDailyGoals(userData);
    
    // Save data
    saveUserData(userData);
    
    // Show register page
    showPage('register');
    updateProgressBars();
}

function handleQuickMealSubmit(e) {
    e.preventDefault();
    
    const input = document.getElementById('quick-food-input').value.trim();
    if (!input) return;

    const parsed = parseFoodInput(input);
    if (!parsed) {
        showNotification('Formato inválido!', 'Use: "alimento quantidade" (ex: "arroz 150g")');
        return;
    }

    const nutrition = calculateNutrition(parsed.foodName, parsed.quantity);
    if (!nutrition) {
        showNotification('Alimento não encontrado', `Alimento "${parsed.foodName}" não encontrado na base de dados.`);
        return;
    }

    addMeal(parsed.foodName, parsed.quantity, nutrition);
    document.getElementById('quick-food-input').value = '';
}

function handleAddFood() {
    if (!selectedFood) return;
    
    const quantity = parseInt(document.getElementById('food-quantity').value) || 100;
    const nutrition = calculateNutrition(selectedFood, quantity);
    
    if (nutrition) {
        addMeal(selectedFood, quantity, nutrition);
        
        // Reset selection
        selectedFood = null;
        document.getElementById('food-selector').classList.add('hidden');
        document.getElementById('food-search').value = '';
        document.getElementById('food-quantity').value = '100';
        updateFoodSearch();
    }
}

// Initialize app
function initializeApp() {
    // Load saved data
    userData = loadFromStorage('userData');
    dailyIntake = loadDailyIntake();
    mealHistory = loadMealHistory();
    
    if (userData) {
        dailyGoals = calculateDailyGoals(userData);
        showPage('register');
    } else {
        showPage('profile');
    }
    
    // Set up event listeners
    document.getElementById('profile-form').addEventListener('submit', handleProfileSubmit);
    document.getElementById('quick-meal-form').addEventListener('submit', handleQuickMealSubmit);
    document.getElementById('add-food-btn').addEventListener('click', handleAddFood);
    
    // Navigation
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', () => {
            showPage(item.dataset.page);
        });
    });
    
    // Tabs
    document.querySelectorAll('.tab-trigger').forEach(trigger => {
        trigger.addEventListener('click', () => {
            const tabName = trigger.dataset.tab;
            
            // Update tab triggers
            document.querySelectorAll('.tab-trigger').forEach(t => t.classList.remove('active'));
            trigger.classList.add('active');
            
            // Update tab content
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.add('hidden');
            });
            document.getElementById(`tab-${tabName}`).classList.remove('hidden');
        });
    });
    
    // Category filters
    document.querySelectorAll('.category-filter').forEach(filter => {
        filter.addEventListener('click', () => {
            const category = filter.dataset.category;
            
            // Update filter buttons
            document.querySelectorAll('.category-filter').forEach(f => f.classList.remove('active'));
            filter.classList.add('active');
            
            selectedCategory = category;
            updateFoodSearch();
        });
    });
    
    // Food search
    document.getElementById('food-search').addEventListener('input', updateFoodSearch);
    document.getElementById('food-quantity').addEventListener('input', () => {
        if (selectedFood) {
            updateNutritionPreview();
        }
    });
    
    // Update UI
    updateProgressBars();
    updateFoodSearch();
}

// Start the app when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeApp);
