# Contador de Tarefas em React

Este é um aplicativo React simples que permite que você insira tarefas e seus respectivos tempos estimados para conclusão. O aplicativo iniciará uma contagem regressiva para rastrear o tempo restante até a conclusão de cada tarefa. Ele demonstra o uso de vários conceitos importantes, como ciclos de vida, DRY (Don't Repeat Yourself), SRP (Single Responsibility Principle), componentes stateless, props, CSS Modules e orientação a objetos.

## Funcionalidades

- Adicione tarefas com nomes e tempos estimados.
- Inicie uma contagem regressiva para cada tarefa individualmente.
- Acompanhe o tempo restante para a conclusão de cada tarefa.
- Conclua as tarefas quando terminadas.

## Tecnologias e Conceitos Utilizados

- **React:** Esta aplicação é construída em React, uma biblioteca JavaScript para criar interfaces de usuário.
- **Ciclos de Vida:** Utilizamos os ciclos de vida do React para gerenciar a contagem regressiva e as atualizações da interface do usuário.
- **DRY (Don't Repeat Yourself):** Adotamos o princípio DRY para evitar duplicação de código e tornar o aplicativo mais eficiente.
- **SRP (Single Responsibility Principle):** Separamos as responsabilidades em componentes menores e focados, seguindo o princípio SRP.
- **Componentes Stateless:** Muitos componentes são stateless, o que significa que não têm estado interno e recebem dados via props.
- **Props:** Utilizamos props para passar dados entre componentes e personalizar a renderização.
- **CSS Modules:** O CSS é modularizado usando CSS Modules para evitar conflitos de estilos.
- **Orientação a Objetos:** Aplicamos conceitos de orientação a objetos para a organização do código.

## Como Usar

1. Clone este repositório em seu ambiente local.
2. No diretório raiz do projeto, execute `yarn install` para instalar as dependências.
3. Execute `yarn start` para iniciar o aplicativo no modo de desenvolvimento.
4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador para visualizar o aplicativo.