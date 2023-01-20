/* 25. In the following shopping cart add, remove, edit items
    => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
    - add 'Meat' in the beginning of your shopping cart if it has not been already added
    - add Sugar at the end of you shopping cart if it has not been already added
    - remove 'Honey' if you are allergic to honey
    - modify Tea to 'Green Tea'
 */

    const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
    if(shoppingCart[0]!=='Meat'){
        shoppingCart.unshift('Meat')
    }
    if(shoppingCart[shoppingCart.length-1]!=='Sugar'){
        shoppingCart.push('Sugar')
    }
    const allergic = shoppingCart.indexOf('Honey')
    shoppingCart.splice(allergic,1)
    console.log(allergic)
    const teaIndex = shoppingCart.indexOf('Tea')
    shoppingCart.splice(teaIndex,1,'Green Tea')
    console.log(shoppingCart)