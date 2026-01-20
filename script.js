const phoneNumber = "5511976956513";

// Dados armazenados no localStorage
let marcas = JSON.parse(localStorage.getItem('marcasData')) || {
  "Apple": [
    { nome: "iPhone 11",
         preco: 2200,
          estado: "Usado",
           armazenamento: "128GB",
            ram: "4GB",
             bateria: "3110 mAh",
              camera: "12MP",
               obs: "Revisado, excelente estado",
                imagem: "/imagens/R.png" },

    { nome: "iPhone 12", preco: 3200, estado: "Usado", armazenamento: "128GB", ram: "4GB", bateria: "2815 mAh", camera: "12MP", obs: "Saúde da bateria 90%", imagem: "/imagens/R.png" },
    { nome: "iPhone 13", preco: 3900, estado: "Novo", armazenamento: "256GB", ram: "4GB", bateria: "3227 mAh", camera: "12MP", obs: "Lacrado", imagem: "/imagens/R.png" },
    { nome: "iPhone 14", preco: 4500, estado: "Novo", armazenamento: "256GB", ram: "6GB", bateria: "3240 mAh", camera: "12MP", obs: "Novo lacrado", imagem: "/imagens/R.png" },
    { nome: "iPhone 14 Pro", preco: 5500, estado: "Novo", armazenamento: "256GB", ram: "6GB", bateria: "3200 mAh", camera: "48MP", obs: "Último modelo", imagem: "/imagens/R.png" },
    { nome: "iPhone XS", preco: 1800, estado: "Usado", armazenamento: "64GB", ram: "4GB", bateria: "2658 mAh", camera: "12MP", obs: "Bom estado", imagem: "/imagens/R.png" },
    { nome: "iPhone X", preco: 1500, estado: "Usado", armazenamento: "64GB", ram: "3GB", bateria: "2716 mAh", camera: "12MP", obs: "Funcionando bem", imagem: "/imagens/R.png" },
    { nome: "iPhone 8", preco: 1200, estado: "Usado", armazenamento: "64GB", ram: "2GB", bateria: "1821 mAh", camera: "12MP", obs: "Tela com defeito", imagem: "/imagens/R.png" }
  ],
  "Samsung": [
    { nome: "Galaxy S20", preco: 2100, estado: "Usado", armazenamento: "128GB", ram: "8GB", bateria: "4000 mAh", camera: "64MP", obs: "Sem marcas", imagem: "/imagens/R.png" },
    { nome: "Galaxy S21", preco: 2600, estado: "Usado", armazenamento: "256GB", ram: "8GB", bateria: "4000 mAh", camera: "64MP", obs: "Completo", imagem: "/imagens/R.png" },
    { nome: "Galaxy S22", preco: 3400, estado: "Novo", armazenamento: "256GB", ram: "8GB", bateria: "3700 mAh", camera: "50MP", obs: "Garantia", imagem: "/imagens/R.png" },
    { nome: "Galaxy S23", preco: 4200, estado: "Novo", armazenamento: "256GB", ram: "8GB", bateria: "4000 mAh", camera: "50MP", obs: "Cor preto", imagem: "/imagens/R.png" },
    { nome: "Galaxy A52", preco: 1600, estado: "Novo", armazenamento: "128GB", ram: "6GB", bateria: "4500 mAh", camera: "64MP", obs: "Ótimo custo", imagem: "/imagens/R.png" },
    { nome: "Galaxy A53", preco: 1900, estado: "Novo", armazenamento: "128GB", ram: "6GB", bateria: "5000 mAh", camera: "64MP", obs: "Tela AMOLED", imagem: "/imagens/R.png" },
    { nome: "Galaxy Z Fold", preco: 7500, estado: "Novo", armazenamento: "512GB", ram: "12GB", bateria: "4400 mAh", camera: "50MP", obs: "Dobrável", imagem: "/imagens/R.png" },
    { nome: "Galaxy Note 20", preco: 3200, estado: "Usado", armazenamento: "256GB", ram: "8GB", bateria: "4300 mAh", camera: "64MP", obs: "Com S-Pen", imagem: "/imagens/R.png" }
  ],
  "Xiaomi": [
    { nome: "Redmi Note 10", preco: 1200, estado: "Usado", armazenamento: "128GB", ram: "4GB", bateria: "5000 mAh", camera: "48MP", obs: "Ótimo custo-benefício", imagem: "/imagens/R.png" },
    { nome: "Redmi Note 11", preco: 1500, estado: "Novo", armazenamento: "128GB", ram: "6GB", bateria: "5000 mAh", camera: "50MP", obs: "Pronta entrega", imagem: "/imagens/R.png" },
    { nome: "Redmi Note 12", preco: 1700, estado: "Novo", armazenamento: "128GB", ram: "6GB", bateria: "5000 mAh", camera: "48MP", obs: "Muito procurado", imagem: "/imagens/R.png" },
    { nome: "Mi 11", preco: 2400, estado: "Novo", armazenamento: "256GB", ram: "8GB", bateria: "4600 mAh", camera: "108MP", obs: "Topo de linha", imagem: "/imagens/R.png" },
    { nome: "Poco X4", preco: 1800, estado: "Novo", armazenamento: "128GB", ram: "6GB", bateria: "5000 mAh", camera: "64MP", obs: "Carregamento rápido", imagem: "/imagens/R.png" },
    { nome: "Poco F3", preco: 2100, estado: "Novo", armazenamento: "256GB", ram: "8GB", bateria: "4520 mAh", camera: "48MP", obs: "Performance top", imagem: "/imagens/R.png" },
    { nome: "Redmi 9", preco: 900, estado: "Usado", armazenamento: "64GB", ram: "3GB", bateria: "5000 mAh", camera: "13MP", obs: "Bateria durável", imagem: "/imagens/R.png" },
    { nome: "Mi 9", preco: 1600, estado: "Usado", armazenamento: "128GB", ram: "6GB", bateria: "3250 mAh", camera: "48MP", obs: "Completo", imagem: "/imagens/R.png" }
  ],
  "Motorola": [
    { nome: "Moto G10", preco: 900, estado: "Usado", armazenamento: "64GB", ram: "4GB", bateria: "5000 mAh", camera: "48MP", obs: "Bom estado", imagem: "/imagens/R.png" },
    { nome: "Moto G30", preco: 1300, estado: "Novo", armazenamento: "128GB", ram: "6GB", bateria: "5000 mAh", camera: "64MP", obs: "Novo", imagem: "/imagens/R.png" },
    { nome: "Moto G60", preco: 1700, estado: "Novo", armazenamento: "128GB", ram: "6GB", bateria: "6000 mAh", camera: "108MP", obs: "Bateria gigante", imagem: "/imagens/R.png" },
    { nome: "Moto G100", preco: 2200, estado: "Novo", armazenamento: "128GB", ram: "8GB", bateria: "5000 mAh", camera: "64MP", obs: "Processador top", imagem: "/imagens/R.png" },
    { nome: "Moto E30", preco: 700, estado: "Novo", armazenamento: "64GB", ram: "3GB", bateria: "5000 mAh", camera: "13MP", obs: "Entrada iniciante", imagem: "/imagens/R.png" },
    { nome: "Moto Z4", preco: 2300, estado: "Usado", armazenamento: "128GB", ram: "6GB", bateria: "3600 mAh", camera: "48MP", obs: "Modular", imagem: "/imagens/R.png" },
    { nome: "Moto One Macro", preco: 1100, estado: "Usado", armazenamento: "64GB", ram: "4GB", bateria: "5000 mAh", camera: "13MP", obs: "Câmera macro", imagem: "/imagens/R.png" },
    { nome: "Moto X40", preco: 3500, estado: "Novo", armazenamento: "256GB", ram: "12GB", bateria: "5000 mAh", camera: "50MP", obs: "Flagship", imagem: "/imagens/R.png" }
  ],
  "LG": [
    { nome: "G8 ThinQ", preco: 2800, estado: "Usado", armazenamento: "128GB", ram: "6GB", bateria: "3500 mAh", camera: "12MP", obs: "Tela OLED", imagem: "/imagens/R.png" },
    { nome: "Velvet", preco: 2200, estado: "Usado", armazenamento: "128GB", ram: "6GB", bateria: "4300 mAh", camera: "48MP", obs: "Design elegante", imagem: "/imagens/R.png" },
    { nome: "V60", preco: 3100, estado: "Novo", armazenamento: "256GB", ram: "8GB", bateria: "4000 mAh", camera: "64MP", obs: "Tela dual", imagem: "/imagens/R.png" },
    { nome: "V50", preco: 2400, estado: "Usado", armazenamento: "128GB", ram: "6GB", bateria: "4000 mAh", camera: "48MP", obs: "5G", imagem: "/imagens/R.png" }
  ],
  "ASUS": [
    { nome: "ROG Phone 5", preco: 4200, estado: "Novo", armazenamento: "256GB", ram: "12GB", bateria: "6000 mAh", camera: "64MP", obs: "Gaming", imagem: "/imagens/R.png" },
    { nome: "ZenFone 8", preco: 3400, estado: "Novo", armazenamento: "256GB", ram: "8GB", bateria: "4000 mAh", camera: "64MP", obs: "Compacto", imagem: "/imagens/R.png" },
    { nome: "ROG Phone 3", preco: 3600, estado: "Usado", armazenamento: "128GB", ram: "8GB", bateria: "6000 mAh", camera: "64MP", obs: "Excelente gaming", imagem: "/imagens/R.png" },
    { nome: "Max Pro M1", preco: 2100, estado: "Usado", armazenamento: "128GB", ram: "6GB", bateria: "5000 mAh", camera: "48MP", obs: "Bateria durável", imagem: "/imagens/R.png" }
  ],
  "OnePlus": [
    { nome: "9 Pro", preco: 3800, estado: "Novo", armazenamento: "256GB", ram: "12GB", bateria: "4500 mAh", camera: "48MP", obs: "Câmera Hasselblad", imagem: "/imagens/R.png" },
    { nome: "10 Pro", preco: 4300, estado: "Novo", armazenamento: "256GB", ram: "12GB", bateria: "5000 mAh", camera: "48MP", obs: "Carregamento rápido", imagem: "/imagens/R.png" },
    { nome: "8T", preco: 2900, estado: "Usado", armazenamento: "128GB", ram: "8GB", bateria: "4500 mAh", camera: "48MP", obs: "OxygenOS", imagem: "/imagens/R.png" },
    { nome: "7", preco: 2200, estado: "Usado", armazenamento: "128GB", ram: "6GB", bateria: "4500 mAh", camera: "48MP", obs: "Clássico", imagem: "/imagens/R.png" }
  ],
  "Google": [
    { nome: "Pixel 6", preco: 3300, estado: "Novo", armazenamento: "128GB", ram: "8GB", bateria: "4614 mAh", camera: "50MP", obs: "Chip Tensor", imagem: "/imagens/R.png" },
    { nome: "Pixel 6 Pro", preco: 4200, estado: "Novo", armazenamento: "256GB", ram: "12GB", bateria: "5003 mAh", camera: "50MP", obs: "Tele zoom", imagem: "/imagens/R.png" },
    { nome: "Pixel 5a", preco: 2100, estado: "Usado", armazenamento: "128GB", ram: "6GB", bateria: "4680 mAh", camera: "12MP", obs: "Mais acessível", imagem: "/imagens/R.png" },
    { nome: "Pixel 4", preco: 1800, estado: "Usado", armazenamento: "128GB", ram: "6GB", bateria: "2800 mAh", camera: "12MP", obs: "Radar de movimento", imagem: "/imagens/R.png" }
  ]
};

function getAllCelulares() {
  let todosOsCelulares = [];
  Object.values(marcas).forEach(marca => {
    todosOsCelulares = todosOsCelulares.concat(marca);
  });
  return todosOsCelulares;
}

let marcaSelecionada = null;

function renderFilters() {
  const filtersContainer = document.getElementById("filters");
  
  const btnTodos = document.createElement("button");
  btnTodos.className = "filter-btn active";
  btnTodos.textContent = "✨ Todas as Marcas";
  btnTodos.onclick = () => filtrarPorMarca(null);
  filtersContainer.appendChild(btnTodos);

  Object.keys(marcas).forEach(marca => {
    const btn = document.createElement("button");
    btn.className = "filter-btn";
    btn.textContent = marca;
    btn.onclick = () => filtrarPorMarca(marca);
    filtersContainer.appendChild(btn);
  });
}

function filtrarPorMarca(marca) {
  marcaSelecionada = marca;
  
  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.classList.remove("active");
  });
  
  if (marca === null) {
    document.querySelectorAll(".filter-btn")[0].classList.add("active");
  } else {
    document.querySelectorAll(".filter-btn").forEach(btn => {
      if (btn.textContent === marca) {
        btn.classList.add("active");
      }
    });
  }
  
  renderizarCelulares();
}

function renderizarCelulares() {
  const container = document.getElementById("products");
  container.innerHTML = "";
  
  let celularesParaMostrar = marcaSelecionada === null 
    ? getAllCelulares() 
    : marcas[marcaSelecionada];

  if (celularesParaMostrar.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <p>Nenhum celular encontrado</p>
      </div>
    `;
    return;
  }

  celularesParaMostrar.forEach(cel => {
    const msg = encodeURIComponent(
`Olá! Tenho interesse no ${cel.nome}
Estado: ${cel.estado}
Armazenamento: ${cel.armazenamento}
Preço: R$ ${cel.preco}`
    );

    const badgeClass = cel.estado === "Novo" ? "novo" : "usado";
    const marca = Object.keys(marcas).find(m => marcas[m].includes(cel));

    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div class="card-image-container">
        <span class="card-badge ${badgeClass}">${cel.estado}</span>
        <img src="${cel.imagem}" alt="${cel.nome}" onerror="this.src='imagens/placeholder.jpg'">
      </div>
      <div class="card-content">
        <p class="card-brand">${marca}</p>
        <h3>${cel.nome}</h3>
        <div class="specs">
          <div class="spec">
            <strong> Armazenamento</strong>
            ${cel.armazenamento}
          </div>
          <div class="spec">
            <strong>💾 RAM</strong>
            ${cel.ram}
          </div>
          <div class="spec">
            <strong>🔋 Bateria</strong>
            ${cel.bateria}
          </div>
          <div class="spec">
            <strong>📸 Câmera</strong>
            ${cel.camera}
          </div>
        </div>
        <p class="obs">💡 ${cel.obs}</p>
        <p class="price-label">Preço</p>
        <p class="price">R$ ${cel.preco.toLocaleString('pt-BR')}</p>
        <button onclick="window.open('https://wa.me/${phoneNumber}?text=${msg}')">
          💬 Comprar no WhatsApp
        </button>
      </div>
    `;
    container.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderFilters();
  renderizarCelulares();
});

function buscarCelulares() {
  const searchTerm = document.getElementById("searchInput").value.toLowerCase().trim();
  const container = document.getElementById("products");
  container.innerHTML = "";

  if (searchTerm === "") {
    renderizarCelulares();
    return;
  }

  let resultados = [];
  const todosCelulares = getAllCelulares();

  todosCelulares.forEach(cel => {
    if (cel.nome.toLowerCase().includes(searchTerm) || 
        Object.keys(marcas).some(marca => marca.toLowerCase().includes(searchTerm) && marcas[marca].includes(cel))) {
      resultados.push(cel);
    }
  });

  if (resultados.length === 0) {
    container.innerHTML = `
      <div class="empty-state" style="grid-column: 1 / -1;">
        <p>❌ Nenhum celular encontrado para "${ searchTerm}"</p>
      </div>
    `;
    return;
  }

  resultados.forEach(cel => {
    const msg = encodeURIComponent(
`Olá! Tenho interesse no ${cel.nome}
Estado: ${cel.estado}
Armazenamento: ${cel.armazenamento}
Preço: R$ ${cel.preco}`
    );

    const badgeClass = cel.estado === "Novo" ? "novo" : "usado";
    const marca = Object.keys(marcas).find(m => marcas[m].includes(cel));

    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div class="card-image-container">
        <span class="card-badge ${badgeClass}">${cel.estado}</span>
        <img src="${cel.imagem}" alt="${cel.nome}" onerror="this.src='imagens/placeholder.jpg'">
      </div>
      <div class="card-content">
        <p class="card-brand">${marca}</p>
        <h3>${cel.nome}</h3>
        <div class="specs">
          <div class="spec">
            <strong>📦 Armazenamento</strong>
            ${cel.armazenamento}
          </div>
          <div class="spec">
            <strong>💾 RAM</strong>
            ${cel.ram}
          </div>
          <div class="spec">
            <strong>🔋 Bateria</strong>
            ${cel.bateria}
          </div>
          <div class="spec">
            <strong>📸 Câmera</strong>
            ${cel.camera}
          </div>
        </div>
        <p class="obs">💡 ${cel.obs}</p>
        <p class="price-label">Preço</p>
        <p class="price">R$ ${cel.preco.toLocaleString('pt-BR')}</p>
        <button onclick="window.open('https://wa.me/${phoneNumber}?text=${msg}')">
          💬 Comprar no WhatsApp
        </button>
      </div>
    `;
    container.appendChild(card);
  });
}

/* FUNÇÕES DE ADMINISTRAÇÃO */

const SENHA_ADMIN = "admin123";

function toggleAdminPanel() {
  const loginModal = document.getElementById("loginModal");
  const adminModal = document.getElementById("adminModal");
  
  if (sessionStorage.getItem("adminAutenticado") === "true") {
    adminModal.classList.toggle("show");
    if (adminModal.classList.contains("show")) {
      loadEditList();
    }
  } else {
    loginModal.classList.add("show");
    document.getElementById("senhaInput").focus();
  }
}

function switchTab(tabName) {
  document.querySelectorAll(".tab-content").forEach(tab => {
    tab.classList.remove("active");
  });
  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.classList.remove("active");
  });

  document.getElementById(tabName + "-tab").classList.add("active");
  event.target.classList.add("active");

  if (tabName === "editar") {
    loadEditList();
  }
}

function adicionarCelular(event) {
  event.preventDefault();

  const marca = document.getElementById("marcaNova").value;
  const nome = document.getElementById("nomeNovo").value;
  const preco = parseInt(document.getElementById("precoNovo").value);
  const estado = document.getElementById("estadoNovo").value;
  const armazenamento = document.getElementById("armazenamentoNovo").value;
  const ram = document.getElementById("ramNovo").value;
  const bateria = document.getElementById("bateriaNovo").value;
  const camera = document.getElementById("cameraNovo").value;
  const obs = document.getElementById("obsNovo").value;
  const imagem = document.getElementById("imagemNovo").value || "imagens/placeholder.jpg";

  const novoCelular = {
    nome,
    preco,
    estado,
    armazenamento,
    ram,
    bateria,
    camera,
    obs,
    imagem
  };

  if (!marcas[marca]) {
    marcas[marca] = [];
  }

  marcas[marca].push(novoCelular);
  salvarDados();

  alert("✅ Celular adicionado com sucesso!");
  document.getElementById("formAdicionar").reset();
  renderFilters();
  renderizarCelulares();
}

function loadEditList() {
  const container = document.getElementById("productsEditList");
  container.innerHTML = "";

  Object.entries(marcas).forEach(([marca, celulares]) => {
    celulares.forEach((cel, index) => {
      const item = document.createElement("div");
      item.className = "product-item";
      item.innerHTML = `
        <div class="product-info">
          <h4>${cel.nome}</h4>
          <p><strong>${marca}</strong> • R$ ${cel.preco.toLocaleString('pt-BR')}</p>
          <p>${cel.estado} • ${cel.armazenamento} • ${cel.camera}</p>
        </div>
        <div class="product-actions">
          <button class="product-actions button btn-edit" onclick="editarCelular('${marca}', ${index})">✏️ Editar</button>
          <button class="product-actions button btn-delete" onclick="deletarCelular('${marca}', ${index})">🗑️ Deletar</button>
        </div>
      `;
      container.appendChild(item);
    });
  });
}

function deletarCelular(marca, index) {
  if (confirm("Tem certeza que deseja deletar este celular?")) {
    marcas[marca].splice(index, 1);
    if (marcas[marca].length === 0) {
      delete marcas[marca];
    }
    salvarDados();
    loadEditList();
    renderFilters();
    renderizarCelulares();
    alert("✅ Celular deletado com sucesso!");
  }
}

function editarCelular(marca, index) {
  const cel = marcas[marca][index];
  
  document.getElementById("marcaNova").value = marca;
  document.getElementById("nomeNovo").value = cel.nome;
  document.getElementById("precoNovo").value = cel.preco;
  document.getElementById("estadoNovo").value = cel.estado;
  document.getElementById("armazenamentoNovo").value = cel.armazenamento;
  document.getElementById("ramNovo").value = cel.ram;
  document.getElementById("bateriaNovo").value = cel.bateria;
  document.getElementById("cameraNovo").value = cel.camera;
  document.getElementById("obsNovo").value = cel.obs;
  document.getElementById("imagemNovo").value = cel.imagem;

  document.getElementById("formAdicionar").onsubmit = (event) => {
    event.preventDefault();
    
    marcas[marca][index] = {
      nome: document.getElementById("nomeNovo").value,
      preco: parseInt(document.getElementById("precoNovo").value),
      estado: document.getElementById("estadoNovo").value,
      armazenamento: document.getElementById("armazenamentoNovo").value,
      ram: document.getElementById("ramNovo").value,
      bateria: document.getElementById("bateriaNovo").value,
      camera: document.getElementById("cameraNovo").value,
      obs: document.getElementById("obsNovo").value,
      imagem: document.getElementById("imagemNovo").value || "imagens/placeholder.jpg"
    };

    salvarDados();
    alert("✅ Celular atualizado com sucesso!");
    document.getElementById("formAdicionar").reset();
    document.getElementById("formAdicionar").onsubmit = adicionarCelular;
    switchTab("editar");
    renderFilters();
    renderizarCelulares();
  };

  switchTab("adicionar");
}

function salvarDados() {
  localStorage.setItem('marcasData', JSON.stringify(marcas));
}

function validarSenha(event) {
  event.preventDefault();
  const senha = document.getElementById("senhaInput").value;
  const errorMsg = document.getElementById("loginError");

  if (senha === SENHA_ADMIN) {
    sessionStorage.setItem("adminAutenticado", "true");
    document.getElementById("loginModal").classList.remove("show");
    document.getElementById("senhaInput").value = "";
    errorMsg.classList.remove("show");
    
    const adminModal = document.getElementById("adminModal");
    adminModal.classList.add("show");
    loadEditList();
  } else {
    errorMsg.textContent = "❌ Senha incorreta!";
    errorMsg.classList.add("show");
    document.getElementById("senhaInput").value = "";
    document.getElementById("senhaInput").focus();
    
    setTimeout(() => {
      errorMsg.classList.remove("show");
    }, 3000);
  }
}

function fecharLogin() {
  document.getElementById("loginModal").classList.remove("show");
  document.getElementById("senhaInput").value = "";
  document.getElementById("loginError").classList.remove("show");
}