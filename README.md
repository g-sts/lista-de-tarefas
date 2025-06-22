# Lista de Tarefas 

Aplicação front-end desenvolvida com HTML, CSS e JavaScript puro. Este projeto permite ao usuário adicionar, concluir e excluir tarefas, com persistência local via LocalStorage.

## Funcionalidades
- Adição de novas tarefas
- Marcar tarefas como concluídas
- Exclusão de tarefas
- Salvamento automático das tarefas no navegador (LocalStorage)

## Tecnologias Utilizadas
- [HTML5](https://developer.mozilla.org/pt-BR/docs/Web/HTML) — estrutura semântica da aplicação  
- [CSS3](https://developer.mozilla.org/pt-BR/docs/Web/CSS) — estilização moderna com Flexbox e responsividade  
- [JavaScript (ES6+)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) — manipulação do DOM, eventos e armazenamento local  

## Como Funciona
1. O usuário digita uma tarefa no campo de input.
2. Ao clicar no botão “Adicionar”, a tarefa é inserida na lista com status "pendente".
3. A tarefa pode ser:
   - **Marcada como concluída** ao clicar no ícone de check ✅
   - **Removida** ao clicar no ícone de lixeira 🗑️
4. As tarefas são salvas automaticamente no navegador usando `localStorage`.
5. Ao recarregar a página, as tarefas anteriores são restauradas.
