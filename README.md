# Jotha Beauty — Salão de Beleza e Bem-Estar

![Logotipo da Jotha Beauty](img/logo.png)

## Sobre o projeto

O Jotha Beauty é um website desenvolvido para a disciplina de Programação Web Front-End, com o objetivo de apresentar um salão de beleza, divulgar seus serviços e preços e oferecer funcionalidades de cadastro, login simulado e gerenciamento de usuários.

O projeto utiliza HTML, CSS e JavaScript puro, aplicando os conceitos de manipulação do DOM, Web Storage, formulários, responsividade e acessibilidade estudados em aula.

## Integrantes

- [Júlia Bagnara Mattar](https://www.linkedin.com/in/julia-bagnara-54aa41377/)
- [Thaina Tamiris Souza Dionisio](https://www.linkedin.com/in/thaina-tamiris-souza-dionisio-3291593a8/)

**Disciplina:** Programação Web Front-End

**Turma:** ES41 — 2026/02

## Objetivos

- Divulgar os serviços e a identidade visual do salão.
- Apresentar tabelas de preços e pacotes especiais.
- Permitir o cadastro e login simulado de clientes.
- Gerenciar usuários por meio de uma área administrativa.
- Disponibilizar recursos de acessibilidade e responsividade.
- Aplicar os conhecimentos adquiridos durante a disciplina.

## Funcionalidades

### Página inicial
- Apresentação do salão.
- Seção Sobre Nós.
- Cards dos principais serviços.
- Destaques dos pacotes especiais.

### Serviços e pacotes
- Catálogo de serviços de cabelos, unhas, maquiagem e spa.
- Tabelas com os respectivos preços.
- Oito pacotes especiais para noivas e debutantes.

### Cadastro e login
- Formulário de cadastro com seis campos.
- Validação da confirmação de senha.
- Verificação de e-mails duplicados.
- Redirecionamento para a página de login.
- Login simulado utilizando os dados armazenados no navegador.

### Área administrativa
- Cadastro de usuários por nome e e-mail.
- Listagem dinâmica de usuários com data de envio.
- Pesquisa por nome ou e-mail.
- Limpeza dos campos do formulário.
- Exclusão individual de usuários.
- Exclusão de todos os usuários.
- Persistência dos dados no Local Storage.

### Acessibilidade e responsividade
- Alternância entre modo claro e modo escuro.
- Aumento e diminuição do tamanho da fonte.
- Armazenamento das preferências de acessibilidade.
- Adaptação do layout para dispositivos móveis.

## Tecnologias utilizadas

| Tecnologia | Finalidade |
|---|---|
| HTML5 | Estruturação das páginas e elementos semânticos |
| CSS3 | Estilização, Flexbox, Grid e responsividade |
| JavaScript | Eventos, validações e funcionalidades interativas |
| DOM API | Manipulação dos elementos HTML |
| Web Storage API | Armazenamento local dos dados |
| JSON | Organização e serialização dos registros |
| Google Fonts | Utilização da fonte Great Vibes |

O projeto foi desenvolvido sem frameworks ou bibliotecas JavaScript externas.

## Estrutura do projeto

```text
Jotha-Beauty/
├── index.html
├── servicos.html
├── pacotes.html
├── cadastro.html
├── login.html
├── admin.html
├── README.md
├── css/
│   └── style.css
├── js/
│   └── script.js
├── icone/
│   ├── icone_j.png
│   └── icone_T.png
└── img/
    ├── cabelo.png
    ├── logo.png
    ├── maquiagem.png
    ├── spa.png
    └── unha.png
```

## Como executar o projeto

1. Baixe ou clone o repositório.
2. Abra a pasta Jotha-Beauty no Visual Studio Code.
3. Instale a extensão Live Server, caso ainda não esteja instalada.
4. Clique com o botão direito sobre o arquivo index.html.
5. Selecione a opção Open with Live Server.
6. Navegue pelo website e teste suas funcionalidades.

Não é necessário instalar dependências ou configurar um banco de dados.

## Armazenamento de dados

O projeto utiliza o Local Storage do navegador para armazenar os usuários cadastrados.

Os registros são armazenados na chave `usuariosJotha`, utilizando objetos serializados em JSON.

As preferências de acessibilidade são armazenadas nas chaves `tema` e `fonte`, permitindo manter as configurações durante a navegação entre as páginas.

Por se tratar de um projeto acadêmico exclusivamente Front-End, o login é uma simulação local, sem servidor de autenticação ou banco de dados externo. Recomenda-se utilizar apenas dados fictícios durante os testes.

## Validação e testes

Durante o desenvolvimento, foram realizados testes das funcionalidades de cadastro, login, administração de usuários, armazenamento local, acessibilidade e responsividade.

Os códigos HTML e CSS também foram submetidos aos validadores do W3C, conforme os requisitos da disciplina.

## Documentação do projeto

O roteiro apresenta o planejamento, os objetivos, os requisitos, a identidade visual e a estrutura do website Jotha Beauty.

- [Acessar o roteiro do projeto em PDF](docs/Roteiro_Jotha_Beauty.pdf)

## Publicação

O projeto está disponível online através do GitHub Pages.

[Acesse o website Jotha Beauty](https://juliabagnara01.github.io/Jotha-Beauty/)

## Referências

- [MDN Web Docs](https://developer.mozilla.org/)
- [W3Schools](https://www.w3schools.com/)
- [Google Fonts](https://fonts.google.com/)
- [Validador HTML — W3C](https://validator.w3.org/)
- [Validador CSS — W3C](https://jigsaw.w3.org/css-validator/)
- [GitHub Pages](https://pages.github.com/)

---

Projeto acadêmico desenvolvido por Júlia Bagnara Mattar e Thaina Tamiris Souza Dionisio — 2026.
