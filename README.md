# Notas do Curso de React Router

Este documento resume os conceitos principais e as funcionalidades do React Router, além de algumas funcionalidades do React, que foram abordadas no curso. O curso focou na utilização do `react-router-dom` para navegação em aplicações React, cobrindo desde a instalação até o uso avançado de seus hooks e componentes.

## Tópicos Principais

### React Router Dom

Para começar a usar o React Router em seu projeto React, é necessário instalar o pacote `react-router-dom`. [Tutorial de Instalação](https://reactrouter.com/en/main/start/tutorial). [Principais conceitos](https://reactrouter.com/en/main/start/concepts).

```bash
npm install react-router-dom
```

### Principais Componentes e Hooks

*   **`<BrowserRouter>`**: Um componente de alto nível que envolve a aplicação para habilitar o roteamento baseado em HTML5 history API. 
*   **`<Routes>`**: Um componente que encapsula múltiplas rotas (`<Route>`).
*   **`<Route>`**: Define a correspondência entre o caminho da URL (`path=`) e o componente que deve ser renderizado (`element={<Elemento />}`). Suporta rotas aninhadas e indexadas.
- **`<Link to="...">`**: Permite navegação entre páginas sem recarregar a aplicação.
- **`<NavLink to="...">`**: Similar ao `<Link>`, mas permite estilização do link ativo (`className={({ isActive }) => isActive ? "nome-da-classe" : ""`). OBS.: Por padrão a classe que vem no isActive é ".active". [Documentação - NavLink](https://reactrouter.com/en/main/components/nav-link).
- **`<Outlet>`**: Usado para renderizar componentes de rotas aninhadas no componente pai.
- **`useLocation`**: Hook que fornece acesso ao objeto de localização, permitindo ler a URL atual, parâmetros de busca, estado, etc.
- **`useNavigate`**: Hook para programar navegações, incluindo voltar para a página anterior com `useNavigate(-1)`. [Documentação - useNavigate](https://reactrouter.com/en/main/hooks/use-navigate).
- **`useParams`**: Hook para acessar os parâmetros da URL atual. Ex.: "posts/:id/*" => "https://.../posts/1" => objeto com "id: 1".

### Hooks do React

- **`useEffect`**: Executa a função fornecida em componentes funcionais. Pode ser configurado para rodar sob determinadas condições ou após cada renderização.

### Dicas Adicionais

- **ReactMarkdown**: Para renderizar arquivos Markdown dentro de aplicações React. Útil para projetos que incluem documentação ou conteúdo dinâmico em formato Markdown.
- **Absolute Imports**: Uma funcionalidade do Create React App que permite importar componentes e módulos usando caminhos absolutos, simplificando a estrutura de importação em projetos grandes. [Saiba mais aqui](https://create-react-app.dev/docs/importing-a-component/#absolute-imports).
