// Dados dos produtos
const products = [
    {
        name: "Novo Dolly Cítrico",
        size: "310ml",
        flavor: "Sabor: Limão",
        image: "images/product1.png",
        isLarge: false
    },
    {
        name: "Novo Dolly Laranja",
        size: "350ml",
        flavor: "Sabor: Laranja",
        image: "images/product2.png",
        isLarge: false
    },
    {
        name: "Novo Dolly Cola",
        size: "600ml",
        flavor: "Sabor: Cola",
        image: "images/product3.png",
        isLarge: false
    },
    {
        name: "Novo Dolly Cola",
        size: "2000ml",
        flavor: "Sabor: Cola",
        image: "images/product4.png",
        isLarge: true
    }
];

let currentIndex = 0;

// Atualiza a vitrine com os dados do produto atual
function updateProduct() {
    const productName = document.getElementById("product-name");
    const productSize = document.getElementById("product-size");
    const productFlavor = document.getElementById("product-flavor");
    const productImageContainer = document.getElementById("product-image");
    const productImage = productImageContainer.querySelector("img");

    const product = products[currentIndex];

    // Atualiza informações do produto
    productName.textContent = product.name;
    productSize.textContent = product.size;
    productFlavor.textContent = product.flavor;
    productImage.src = product.image;

    // Adiciona ou remove a classe `product-large` dinamicamente
    if (product.isLarge) {
        productImageContainer.classList.add("product-large");
    } else {
        productImageContainer.classList.remove("product-large");
    }
}

// Avança para o próximo produto
function nextProduct() {
    currentIndex = (currentIndex + 1) % products.length;
    updateProduct();
}

// Volta para o produto anterior
function previousProduct() {
    currentIndex = (currentIndex - 1 + products.length) % products.length;
    updateProduct();
}

// Inicializa a vitrine
updateProduct();
