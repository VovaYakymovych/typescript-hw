// ==================================task #HmvAfRQM======================================

// fetch('https://dummyjson.com/carts')
//     .then(response => response.json())
//     .then(res => {
//         const carts = res.carts;
//         console.log(carts);
//
//         let wrapper:HTMLDivElement = document.createElement('div')
//         wrapper.classList.add('wrapper1')
//
//         for (let cart of carts) {
//
//             let cartWrapper:HTMLDivElement = document.createElement('div')
//             cartWrapper.classList.add('cartWrapper')
//             cartWrapper.innerHTML = /*html*/ `
//
//                 <div class = "cartHeader">
//                     <h2>Кошик №: ${cart.id}</h2>
//                     <p><strong>Користувач ID:</strong> ${cart.userId}</p>
//                     <p><strong>Кількість товарів:</strong> ${cart.totalProducts}</p>
//                     <p><strong>Загальна сума:</strong> $${cart.total.toFixed(2)}</p>
//                     <p><strong>Сума зі знижкою:</strong> $${cart.discountedTotal.toFixed(2)}</p>
//                     <h3>Товари:</h3>
//                 <div>
//             `
//             let products:HTMLDivElement = document.createElement('div')
//             products.classList.add('products')
//
//             for (const product of cart.products) {
//                 let productWrapper:HTMLDivElement = document.createElement('div')
//                 productWrapper.classList.add('productWrapper')
//                 productWrapper.innerHTML = /*html*/`
//
//                 <img src="${product.thumbnail}" alt="${product.title}">
//                     <div>
//                         <h4>${product.title}</h4>
//                         <p>Ціна: $${product.price}</p>
//                         <p>Кількість: ${product.quantity}</p>
//                         <p>Загальна сума: $${product.total.toFixed(2)}</p>
//                         <p>Зі знижкою: $${product.discountedTotal.toFixed(2)}</p>
//                     </div>
//
//                 `
//                 products.appendChild(productWrapper)
//             }
//             cartWrapper.appendChild(products)
//             wrapper.appendChild(cartWrapper)
//         }
//         document.body.appendChild(wrapper)
//     })

// ==================================task #whXxOBlYS0H======================================

fetch('https://dummyjson.com/recipes')
    .then(res => res.json())
    .then(res =>{
        const recipes = res.recipes
        console.log(recipes);

        let wrapper:HTMLDivElement = document.createElement('div')
        wrapper.classList.add('wrapper2')

      for (let recipe of recipes) {

        let recipeWrapper:HTMLDivElement = document.createElement('div')
        recipeWrapper.classList.add('recipeWrapper')

        recipeWrapper.innerHTML = /*html*/`
            <div class = "meal-description-wrapper">
                <img src ="${recipe.image}" alt ="${recipe.name}"/>
                <div class = "meal-description">
                    <h2>${recipe.name}</h2>
                    <p><strong>Cuisine:</strong> ${recipe.cuisine}</p>
                    <p><strong>Difficulty:</strong> ${recipe.difficulty}</p>
                    <p><strong>Preparing time:</strong> ${recipe.prepTimeMinutes} minutes</p>
                    <p><strong>Cooking time:</strong> ${recipe.cookTimeMinutes} minutes</p>
                    <p><strong>Servings:</strong> ${recipe.servings}</p>
                    <p><strong>Calories (per serving):</strong> ${recipe.caloriesPerServing}</p>
                    <p><strong>Rating:</strong> 🌟 ${recipe.rating} (${recipe.reviewCount} reviews)</p>
                </div>
          </div>
        `


        function createList(title:string, listType:string, items:string[], listClass:string):HTMLDivElement {
          let titleElement:HTMLHeadingElement = document.createElement('h3')
          titleElement.innerText = title

          let listElement:HTMLUListElement = document.createElement(listType) as HTMLUListElement

          for (const item of items) {
            let listItem:HTMLLIElement = document.createElement('li')
            listItem.innerText = item
            listElement.appendChild(listItem)
          }

          let wrapper:HTMLDivElement = document.createElement('div')
          wrapper.appendChild(titleElement)
          wrapper.appendChild(listElement)

          if (listClass) {
            wrapper.classList.add(listClass)
          }
          return wrapper
        }

        let recipeListsWrapper:HTMLDivElement = document.createElement('div')
        recipeListsWrapper.classList.add('recipe-lists-wrapper')

        recipeListsWrapper.appendChild(createList("Meal type:", "ul", recipe.mealType, "meal-type-list"))
        recipeListsWrapper.appendChild(createList("Ingredients:", "ul", recipe.ingredients, "meal-type-list"))
        recipeListsWrapper.appendChild(createList("Instructions:", "ol", recipe.instructions, "instructions-list"))
        recipeListsWrapper.appendChild(createList("Tags:", "ul", recipe.tags, "tags-list"))

        recipeWrapper.appendChild(recipeListsWrapper)
        wrapper.appendChild(recipeWrapper)
      }
      document.body.appendChild(wrapper)
    })