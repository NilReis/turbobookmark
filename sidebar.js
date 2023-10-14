// Injetar o HTML do acordeão na página
let accordionHTML = `
<div class="accordion-sidebar">
    <button class="accordion-button">Seção 1</button>
    <div class="panel">
        <p>Conteúdo da Seção 1.</p>
    </div>

    <button class="accordion-button">Seção 2</button>
    <div class="panel">
        <p>Conteúdo da Seção 2.</p>
    </div>
</div>
`;

document.body.insertAdjacentHTML('beforeend', accordionHTML);

// Adicionar funcionalidade ao acordeão
let acc = document.getElementsByClassName("accordion-button");
for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        } 
    });
}
