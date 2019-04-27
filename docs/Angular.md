# Instalação e configuração do Angular

## 1. Instalação

No terminal (**em qualquer sistema operacional**), execute o comando abaixo. 
* No Linux, o comando deverá ser precedido por `sudo`.

```bash
npm install -g @angular/cli@latest
```

* Se você estiver utilizando Windows, deverá reiniciar o computador.

Verifique a versão instalada:

```bash
ng --version
```

A versão esperada do Angular CLI, em abril de 2019, é, pelo menos, **7.3.7**.

> No Windows (principalmente nos computadores dos laboratórios), muitas vezes, por falta de permissão, o comando `ng` não é adicionado ao *path*. Em consequência, ao tentar executar o comando `ng`, recebemos uma mensagem de que o comando não existe ou é desconhecido.
>
> Nesse caso, precisaremos criar um arquivo de nome `ng.bat`, dentro da pasta de trabalho (`ProgWeb` ou semelhante), com o seguinte conteúdo:
>
> ```cmd
 > %USERPROFILE%\AppData\Roaming\npm\ng %1 %2 %3 %4 %5 %6 %7 %8 %9
> ```
>
> Após criar e salvar o arquivo, o comando `ng --version` deve funcionar no terminal.

## 2. Configuração

Por padrão, o Angular CLI trabalha com o `npm` como gerenciador de dependências. Para fazê-lo utilizar o `yarn` para esse propósito, precisamos executar o comando a seguir **em qualquer sistema operacional**.
* No Linux, o comando deverá ser precedido por `sudo`.

```bash
ng config -g cli.packageManager yarn
```

## 3. Criação do projeto Angular

O comando `ng` é uma caixa de ferramentas que nos ajuda a trabalhar com o Angular. Uma de suas capacidades é a criação do projeto. Para a criação do projeto chamado **front-end**, devemos executar, no terminal, o comando a seguir.

```bash
ng new front-end
```

Esse comando fará algumas perguntas. Responda conforme o modelo a seguir.
* `? Would you like to add Angular routing? (y/N)` Responda **Y**.
* `? Which stylesheet format would you like to use? (Use arrow keys)` Usando as setas, selecione **SCSS**.

Respondidas as perguntas, o comando irá criar os arquivos dos projeto e instalar suas respectivas dependências. **Isso pode demorar um pouco, dependendo da sua conexão com a Internet**.

## 4. Trabalhando no projeto Angular

O comando anterior terá criado uma pasta chamada `front-end` com vários arquivos dentro dela. Portanto, de agora em diante, para trabalharmos como esse projeto, precisaremos entrar dentro dessa pasta. No terminal:

```bash
cd front-end
```

> Se você precisou criar o arquivo `ng.bat` no passo nº 1, mova agora esse arquivo para dentro da pasta `front-end`.

O comando `ng new`, que executamos no passo anterior, gera um projeto Angular funcional. Para vê-lo, execute o seguinte comando no terminal:

```bash
ng serve
```

Esse comando irá compilar o projeto (demora um pouco na primeira execução). Ao final, abra seu navegador no endereço [http://localhost:4200](http://localhost:4200). Você verá a página padrão do projeto com o logotipo do Angular. 

## 5. Adicionando os componentes Angular Material ao projeto

Os componentes [Angular Material](https://material.angular.io/) foram desenvolvidos segundo as diretrizes do [Material Design](https://material.io/design/) do Google. Utilizando esses componentes, nosso projeto terá uma série de benefícios, como a padronização da interface e a habilidade de deixar a aplicação "pronta" para ambientes *mobile*.

Para adicionar a biblioteca de componentes ao projeto, execute o comando abaixo no terminal:

```bash
ng add @angular/material
```

Esse comando também faz algumas perguntas. Responda conforme o modelo abaixo.

* `? Choose a prebuilt theme name, or "custom" for a custom theme: (Use arrow keys)` Com a seta, escolha a primeira opção, **Indigo/Pink** (as demais são horrorosas :P)
* `? Set up HammerJS for gesture recognition? (Y/n)` Responda **Y**.
* `? Set up browser animations for Angular Material? (Y/n)` Responda **Y**.

## 6. Instalando a biblioteca de ícones Material Icons

No terminal:

```bash
yarn add material-design-icons --network-timeout 1000000000
```
* Há relatos de que a execução desse comando é demorada. É por isso que aumentamos o tempo de expiração da rede (`--network-timeout`).

Abra o arquivo `src/styles.scss` e acrescente a **última linha**:

```css
/* src/styles.scss */

@import '~@angular/material/prebuilt-themes/indigo-pink.css';

/* Acrescente a linha a seguir */
@import "~material-design-icons/iconfont/material-icons.css";
```

## 7. Adicionando um módulo para os componentes do Angular Material

Os componentes Angular Material são frequentemente utilizados, e, como qualquer componente da plataforma, precisam ser importados dentro de um módulo para funcionar.

Para evitar importar esses componentes um a um, é mais prático criar um módulo com todos os componentes do Angular Material e importá-los todos de uma vez para dentro do projeto.

Para tanto:

1. Gere um módulo vazio:
```bash
ng generate module material
```

2. Abra o arquivo `src/app/material/material.module.ts` e substitua seu conteúdo pelo código deste [gist](https://gist.github.com/mlabieniec/821356ddc5cbf19124601981a23b12e3#file-material-module-ts).

3. Abra o arquivo `src/app/app.module.ts` e **acrescente as linhas indicadas** (**NÃO SUBSTITUA O CONTEÚDO DO ARQUIVO!!!**):
```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Acrescentar a linha abaixo 
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // Acrescentar a linha abaixo e uma vírgula no final da linha acima
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
});

export class AppModule { }
```
**PRONTO**! Agora todos os componentes Angular Material já podem ser utilizados no projeto.