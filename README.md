# Teste nave.rs

Projeto criado como teste técnico do processo seletivo da **nave.rs**

## Descrição &rarr; Navedex
A aplicação contém um **fluxo de autenticação**, se o usuário estiver logado é possível realizar a **visualização**, **criação** e **exclusão** de navers.

### Utilitários
Alguns utilitários, além dos informados no teste foram utilizados, são eles:

- AsyncStorage &rarr; Para salvar as informações do usuário;
- moment.js &rarr; Para facilitar o cálculo da Idade e Tempo de empresa dos navers;
- react-native-color-matrix-image-filters &rarr; Para aplicar o filtro *Grayscale* na foto dos navers;
- react-native-masked-text &rarr; Para aplicar máscara nos inputs de data;
- validator &rarr; Utilizado para aplicar validação no input de email.

### Contexts

A aplicação possui 2 contextos, um para o usuário autenticado e outro para a listagem de navers.

- User &rarr; Permite fácil acesso as informações do usuário autenticado, sem a necessidade de verificar o AsyncStorage várias vezes.
- Navers &rarr; Permite atualizar a lista de navers sem a necessidade de realizar requisições constantemente.

