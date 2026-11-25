document.addEventListener("DOMContentLoaded", () => {
    const btnTema = document.getElementById("btn-tema");
    const btnFonte = document.getElementById("btn-fonte");

    if (localStorage.getItem("tema") === "escuro") {
        document.body.classList.add("modo-escuro");
        if (btnTema) btnTema.textContent = "Modo claro";
    }

    if (localStorage.getItem("fonte") === "maior") {
        document.body.classList.add("fonte-maior");
        if (btnFonte) btnFonte.textContent = "Diminuir fonte";
    }

    if (btnTema) {
        btnTema.addEventListener("click", () => {
            document.body.classList.toggle("modo-escuro");
            const ativo = document.body.classList.contains("modo-escuro");
            localStorage.setItem("tema", ativo ? "escuro" : "claro");
            btnTema.textContent = ativo ? "Modo claro" : "Modo escuro";
        });
    }

    if (btnFonte) {
        btnFonte.addEventListener("click", () => {
            document.body.classList.toggle("fonte-maior");
            const maior = document.body.classList.contains("fonte-maior");
            localStorage.setItem("fonte", maior ? "maior" : "normal");
            btnFonte.textContent = maior ? "Diminuir fonte" : "Aumentar fonte";
        });
    }

    function obterUsuarios() {
        return JSON.parse(localStorage.getItem("usuariosJotha")) || [];
    }

    function salvarUsuarios(lista) {
        localStorage.setItem("usuariosJotha", JSON.stringify(lista));
    }

    const formCadastro = document.getElementById("form-cadastro");

    if (formCadastro) {
        formCadastro.addEventListener("submit", (event) => {
            event.preventDefault();

            const nome = document.getElementById("nome").value.trim();
            const email = document.getElementById("email").value.trim();
            const telefone = document.getElementById("telefone").value.trim();
            const nascimento = document.getElementById("nascimento").value;
            const senha = document.getElementById("senha").value;
            const confirmarSenha = document.getElementById("confirmar-senha").value;

            if (senha !== confirmarSenha) {
                alert("As senhas não coincidem. Verifique e tente novamente.");
                return;
            }

            const usuarios = obterUsuarios();

            const emailJaExiste = usuarios.some(
                (u) => u.email.toLowerCase() === email.toLowerCase()
            );

            if (emailJaExiste) {
                alert("Este e-mail já está cadastrado! Tente fazer login ou use outro e-mail.");
                return;
            }

            usuarios.push({
                id: Date.now(),
                dataEnvio: new Date().toLocaleDateString("pt-BR"),
                nome,
                email,
                telefone,
                nascimento,
                senha
            });

            salvarUsuarios(usuarios);
            alert("Cadastro realizado com sucesso!");
            formCadastro.reset();
            window.location.href = "login.html";
        });
    }

    const formLogin = document.getElementById("form-login");

    if (formLogin) {
        formLogin.addEventListener("submit", (event) => {
            event.preventDefault();

            const email = document.getElementById("email-login").value.trim();
            const senha = document.getElementById("senha-login").value;
            const mensagem = document.getElementById("mensagem-login");

            const usuarios = obterUsuarios();
            const usuarioEncontrado = usuarios.find(
                (u) => u.email.toLowerCase() === email.toLowerCase() && u.senha === senha
            );

            if (usuarioEncontrado) {
                mensagem.textContent = `Bem-vinda, ${usuarioEncontrado.nome}! Entrando...`;

                setTimeout(() => {
                    window.location.href = "index.html";
                }, 1500);
            } else {
                mensagem.textContent = "E-mail ou senha inválidos (ou usuário não cadastrado).";
            }
        });
    }

    const formAdmin = document.getElementById("form-admin");
    const listaUsuariosEl = document.getElementById("lista-usuarios");
    const pesquisaAdmin = document.getElementById("pesquisa-admin");
    const btnExcluirTodos = document.getElementById("btn-excluir-todos");

    function renderizarUsuarios(filtro = "") {
        if (!listaUsuariosEl) return;

        const usuarios = obterUsuarios();
        listaUsuariosEl.innerHTML = "";

        const filtrados = usuarios.filter((u) =>
            u.nome.toLowerCase().includes(filtro.toLowerCase()) ||
            u.email.toLowerCase().includes(filtro.toLowerCase())
        );

        if (filtrados.length === 0) {
            listaUsuariosEl.innerHTML = "<li>Nenhum usuário encontrado.</li>";
            return;
        }

        filtrados.forEach((usuario) => {
            const li = document.createElement("li");
            const dataExibicao = usuario.dataEnvio || new Date(usuario.id).toLocaleDateString("pt-BR");
            li.innerHTML = `
                <span>${dataExibicao} - <strong>${usuario.nome}</strong> - ${usuario.email}</span>
                <button type="button" data-id="${usuario.id}">Excluir</button>
            `;

            li.querySelector("button").addEventListener("click", () => {
                const novaLista = obterUsuarios().filter((u) => u.id !== usuario.id);
                salvarUsuarios(novaLista);
                renderizarUsuarios(pesquisaAdmin ? pesquisaAdmin.value : "");
            });

            listaUsuariosEl.appendChild(li);
        });
    }

    if (formAdmin) {
        renderizarUsuarios();

        formAdmin.addEventListener("submit", (event) => {
            event.preventDefault();

            const nome = document.getElementById("nome-admin").value.trim();
            const email = document.getElementById("email-admin").value.trim();

            const usuarios = obterUsuarios();
            const emailJaExiste = usuarios.some(
                (u) => u.email.toLowerCase() === email.toLowerCase()
            );

            if (emailJaExiste) {
                alert("Este e-mail já está cadastrado!");
                return;
            }

            usuarios.push({
                id: Date.now(),
                dataEnvio: new Date().toLocaleDateString("pt-BR"),
                nome,
                email
            });

            salvarUsuarios(usuarios);
            formAdmin.reset();
            renderizarUsuarios(pesquisaAdmin ? pesquisaAdmin.value : "");
        });
    }

    if (pesquisaAdmin) {
        pesquisaAdmin.addEventListener("input", (event) => {
            renderizarUsuarios(event.target.value);
        });
    }

    if (btnExcluirTodos) {
        btnExcluirTodos.addEventListener("click", () => {
            if (confirm("Tem certeza que deseja excluir todos os usuários?")) {
                localStorage.removeItem("usuariosJotha");
                renderizarUsuarios();
            }
        });
    }
});