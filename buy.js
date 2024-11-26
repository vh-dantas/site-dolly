const products = document.querySelectorAll(".product");
const modal = document.getElementById("modal");
const orderSummary = document.getElementById("orderSummary");
const buyNow = document.getElementById("buyNow");
const confirmOrder = document.getElementById("confirmOrder");
const closeModal = document.getElementById("closeModal");
const productImagesContainer = document.getElementById("productImages");

// Adicionar funcionalidade para aumentar e diminuir quantidade
products.forEach((product) => {
    const decreaseBtn = product.querySelector(".decrease");
    const increaseBtn = product.querySelector(".increase");
    const countSpan = product.querySelector(".count");

    // Diminuir quantidade
    decreaseBtn.addEventListener("click", () => {
        let currentCount = parseInt(countSpan.textContent);
        if (currentCount > 0) {
            countSpan.textContent = currentCount - 1;
        }
    });

    // Aumentar quantidade
    increaseBtn.addEventListener("click", () => {
        let currentCount = parseInt(countSpan.textContent);
        countSpan.textContent = currentCount + 1;
    });
});

// Exibir modal de revisão do pedido
buyNow.addEventListener("click", () => {
    let summary = "";
    products.forEach((product) => {
        const name = product.querySelector("span").textContent;
        const quantity = parseInt(product.querySelector(".count").textContent);
        if (quantity > 0) {
            summary += `<li>${name}: ${quantity} unidades</li>`;
        }
    });

    if (summary) {
        orderSummary.innerHTML = summary;
        modal.style.display = "flex";
    } else {
        alert("Selecione pelo menos um produto!");
    }
});

// Fechar o modal ao clicar no botão "X"
closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

// Função para validar formato de e-mail
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expressão regular para validar e-mail
    return emailRegex.test(email);
}

// Confirmar pedido e enviar mensagem de sucesso
confirmOrder.addEventListener("click", () => {
    const emailInput = document.getElementById("email").value; // Obter valor do campo de e-mail

    // Verificar se o e-mail é válido
    if (!isValidEmail(emailInput)) {
        alert("Por favor, insira um endereço de e-mail válido.");
        return; // Não prosseguir se o e-mail for inválido
    }

    // Verificar se pelo menos um produto foi selecionado
    let hasProducts = false;
    let summary = "";
    products.forEach((product) => {
        const name = product.querySelector("span").textContent;
        const quantity = parseInt(product.querySelector(".count").textContent);
        if (quantity > 0) {
            hasProducts = true;
            summary += `<li>${name}: ${quantity}</li>`;
        }
    });

    if (!hasProducts) {
        alert("Selecione pelo menos um produto!");
        return; // Não prosseguir se nenhum produto foi selecionado
    }

    // Se o e-mail for válido e produtos forem selecionados, processar pedido
    alert(`Compra aprovada! Um e-mail foi enviado para ${emailInput}.`);
    modal.style.display = "none";
});



// Atualiza as imagens de produtos selecionados
function updateSelectedProducts() {
    productImagesContainer.innerHTML = ""; // Limpa o contêiner

    products.forEach((product, index) => {
        const quantity = parseInt(document.querySelectorAll(".count")[index].textContent);
        if (quantity > 0) {
            const img = document.createElement("img");
            img.src = `images/product${index + 1}.png`; // Certifique-se de ter essas imagens
            img.alt = product.querySelector("span").textContent;
            productImagesContainer.appendChild(img);
        }
    });
}

// Atualiza a exibição das imagens sempre que um produto é adicionado ou removido
products.forEach((product) => {
    const decreaseBtn = product.querySelector(".decrease");
    const increaseBtn = product.querySelector(".increase");

    decreaseBtn.addEventListener("click", updateSelectedProducts);
    increaseBtn.addEventListener("click", updateSelectedProducts);
});

