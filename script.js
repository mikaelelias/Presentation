const list = document.querySelector('ul');

const buttonListProducts = document.querySelector('.btn-menu'); // botão ForEatch, para mapear itens
const buttonFilterVegan = document.querySelector('.btn-filter')
const buttonSun = document.querySelector('.btn-reduce') // btn ativador reduce
const buttonDiscount = document.querySelector('.btn-map'); // mapear os itens e aplicar 10% de desconto

const itemPrice = document.querySelector('.item-price')
const resultFilterVegan = document.querySelector('.filter-products-vegan')
const resultSun = document.querySelector('.result-sun-products')


function showAll(productsArray) {
    let myLi = '';
    /*ADICIONANDO UMA LI DENTRO DO HTML*/
    productsArray.forEach((product) => {
        myLi += `
       <li class="itens">
            <img src=${formatCurrency(product.src)} alt="hamburg">
            <p> ${formatCurrency(product.name)}</p>
            <p class="item-price"> ${formatCurrency(product.price)} </p>
        </li>
    `
    })

    list.innerHTML = myLi
}


function disc10Percent() {
    const discountedPrices = menuOptions.map((result) => ({
        ...result, //Spread Operator - vai manter como a lista tá e só troca o solicitado
        price: result.price * 0.9, // 10% de desconto
    }))
    
    showAll(discountedPrices)
}


function sunPriceProducts() {

    const sumValue = menuOptions.reduce((acc, curr) => {
        return acc + curr.price
    }, 0);

    list.innerHTML = `
       <li>         
            <p>O valor total dos intens é R$ ${formatCurrency(sumValue)}</p>
        </li>
    `
}


function valueFilterVegan() {
    const filterProducts = menuOptions.filter((product) => product.vegan === true)
    showAll(filterProducts)
}


function formatCurrency(value) {
    const newValue = value.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});

    return newValue
}

/*ADICIONANDO O EVENTO DO CLICK AO BOTÃO NO HTML*/
buttonListProducts.addEventListener('click', () => showAll(menuOptions)) // sempre colocar a () => antes de chamar para que carregue depois de iniciar o navegador
buttonDiscount.addEventListener('click', disc10Percent)
buttonSun.addEventListener('click', sunPriceProducts)
buttonFilterVegan.addEventListener('click', valueFilterVegan)








