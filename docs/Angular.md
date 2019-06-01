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

## 8. Tirando uma cópia do projeto de exemplo do professor

Se você acompanhou todas as aulas e fez o projeto de exemplo juntamente com o professor, **PARABÉNS!** Você está pronto para prosseguir no desenvolvimento do seu próprio projeto. Recomenda-se, no entanto, que você **faça uma cópia** do projeto `front-end` trabalhe nessa cópia de agora em diante.

No entanto, se seu código estiver desatualizado em relação àquele do professor ou com erros, não se preocupe. Siga os passos a seguir:
1. Acesse o [repositório do professor](https://github.com/fgcintra/4not-2019-1);
2. No botão verde `Clone or download` à direita, escolha `Download ZIP`;
3. Descompacte o arquivo baixado em um caminho do sistema operacional que **não tenha espaços nem acentos** (importante!);
4. Abra a pasta do projeto no Visual Studio Code e, no terminal, execute `yarn install` para reconstruir as dependências do projeto na pasta `node_modules`.

## 9. Criando os *services*

Os *services* são os responsáveis por fazer a comunicação entre a aplicação Angular e a API (*back-end*). Para criar um *service* do Angular, execute o comando exemplificado mais abaixo.

> **SUBSTITUA `nome-da-entidade` pelo nome da sua entidade no *back-end***. Fique atento às seguintes recomendações:
> * Use sempre **letras minúsculas** no nome da entidade;
> * Caso o nome da sua entidade tenha mais de uma palavra, mantenha-as todas em minúsculas e separe as partes com **hífen**.

No terminal:

```bash
ng generate service nome-da-entidade/nome-da-entidade
```
> **NOTA**: as palavras `generate` e `service` podem ser abreviadas pelas suas primeiras letras:
> 
> `ng g s nome-da-entidade/nome-da-entidade`

Isso irá criar um arquivo chamado `nome-da-entidade.service.ts` na pasta `src\app\nome-da-entidade`. Isso ajuda muito na organização do código.

Copie o código do *service* `marca.service.ts` do [repositório do professor](https://github.com/fgcintra/4not-2019-1) e cole no arquivo gerado, substituindo o conteúdo. Faça as adaptações e substituições necessárias para o nome de sua entidade, com cuidado para **preservar as letras maiúsculas e minúsculas** de acordo com o padrão do Angular.

É recomendável que você crie **TODOS** os *services* necessários agora no início, para que eles estejam disponíveis quando forem necessários.

## 10. Criando um componente de listagem simples

1. Para começar, escolha uma entidade simples e que não tenha nenhuma referência. No seu diagrama, essas entidades aparecem nas extremidades.

> **SUBSTITUA `nome-da-entidade` pelo nome da sua entidade no *back-end***. Fique atento às seguintes recomendações:
> * Use sempre **letras minúsculas** no nome da entidade;
> * Caso o nome da sua entidade tenha mais de uma palavra, mantenha-as todas em minúsculas e separe as partes com **hífen**.
> * **Não se esqueça do `-list` no final do comando!**

2. Escolhida a entidade, execute no terminal:

<pre>
ng generate component nome-da-entidade/nome-da-entidade<b>-list</b>
</pre>

> **NOTA**: as palavras `generate` e `component` podem ser abreviadas pelas suas primeiras letras:
> 
> <code>ng g c nome-da-entidade/nome-da-entidade<b>-list</b></code>

O comando executado irá criar os seguintes arquivos:
* <code>src/app/nome-da-entidade/nome-da-entidade-list/nome-da-entidade-list.component.<b>html</b></code>
* <code>src/app/nome-da-entidade/nome-da-entidade-list/nome-da-entidade-list.component.<b>scss</b></code>
* <code>src/app/nome-da-entidade/nome-da-entidade-list/nome-da-entidade-list.component.<b>ts</b></code>

3. Em seguida, copie o código dos arquivos  `marca-list.component.html`, `marca-list.component.scss` e `marca-list.component.ts` do [repositório do professor](https://github.com/fgcintra/4not-2019-1) e cole nos arquivo gerados, **de acordo com seus tipos**, substituindo o conteúdo. 

4. Faça as adaptações e substituições necessárias para o nome de sua entidade, com cuidado para **preservar as letras maiúsculas e minúsculas** de acordo com o padrão do Angular.

5. Você também precisará adaptar os **nomes dos atributos** da sua entidade nas colunas da tabela (arquivo `.html`) e na listagem da variável `displayedColumns` do arquivo `.ts`.
  
6. Abra o arquivo `src/app/app-routing.module`. No início do arquivo, importe o seu componente de listagem.

```typescript
import { NomeDaEntidadeListComponent } from './nome-da-entidade/nome-da-entidade-list/nome-da-entidade-list.component';
```

7. Mais abaixo, no mesmo arquivo, acrescente a rota para o seu componente:

```typescript
const routes: Routes = [
  // Pode haver outras rotas antes
  {
    path: 'nome-da-entidade',
    component: NomeDaEntidadeListComponent
  }
  // Pode haver outras rotas depois
}
```
8. No arquivo `src\app\ui\menu-principal\menu-principal.component.html`, crie um item para acessar seu component de listagem, seguindo os exemplos já existentes nesse mesmo arquivo.

9. Execute o comando `ng serve` no *front-end* e, em outro terminal, o comando `yarn start` no *back-end*. Você deve ser capaz de ver seus dados na listagem, caso os tenha cadastrado corretamente.

## 11. Criando um componente de formulário simples

1. Um componente de formulário simples fará par com um componente de listagem simples que você já criou. Portanto, **só gere componentes de formulário se você já tiver gerado o respectivo componente de listagem**.

> **SUBSTITUA `nome-da-entidade` pelo nome da sua entidade no *back-end***. Fique atento às seguintes recomendações:
> * Use sempre **letras minúsculas** no nome da entidade;
> * Caso o nome da sua entidade tenha mais de uma palavra, mantenha-as todas em minúsculas e separe as partes com **hífen**.
> * **Não se esqueça do `-form` no final do comando!**

2. Escolhida a entidade, execute no terminal:

<pre>
ng generate component nome-da-entidade/nome-da-entidade<b>-form</b>
</pre>

O comando executado irá criar os seguintes arquivos:
* <code>src/app/nome-da-entidade/nome-da-entidade-form/nome-da-entidade-form.component.<b>html</b></code>
* <code>src/app/nome-da-entidade/nome-da-entidade-form/nome-da-entidade-form.component.<b>scss</b></code>
* <code>src/app/nome-da-entidade/nome-da-entidade-form/nome-da-entidade-form.component.<b>ts</b></code>

3. Em seguida, copie o código dos arquivos  `marca-form.component.html`, `marca-form.component.scss` e `marca-form.component.ts` do [repositório do professor](https://github.com/fgcintra/4not-2019-1) e cole nos arquivo gerados, **de acordo com seus tipos**, substituindo o conteúdo. 

4. Faça as adaptações e substituições necessárias para o nome de sua entidade, com cuidado para **preservar as letras maiúsculas e minúsculas** de acordo com o padrão do Angular.

5. Você precisará trabalhar o arquivo `.html` do formulário de acordo com os atributos e tipos de atributos da sua própria entidade. No exemplo do `marca-form.component.html`, o atributo exemplificado é do tipo *string*, e, portanto, é utilizado um `<input matInput>` para capturá-lo. Se esse não for o seu caso, você encontrará mais exemplos de componentes de formulário para outros tipos de dados em `veiculo-form.component.html`.

6. Abra o arquivo `src/app/app-routing.module`. No início do arquivo, importe o seu componente de formulário.

```typescript
import { NomeDaEntidadeFormComponent } from './nome-da-entidade/nome-da-entidade-form/nome-da-entidade-form.component';
```

7. Mais abaixo, no mesmo arquivo, acrescente a rota para o seu componente:

```typescript
const routes: Routes = [
  // Pode haver outras rotas antes
  {
    path: 'nome-da-entidade/novo',
    component: NomeDaEntidadeFormComponent
  },
  {
    path: 'nome-da-entidade/:id',
    component: NomeDaEntidadeFormComponent
  }
  // Pode haver outras rotas depois
}
```
8. Execute o comando `ng serve` no *front-end* e, em outro terminal, o comando `yarn start` no *back-end*. A partir do componente de listagem, você deverá ser capaz de acesar o formulário pelo botão `Nova entidade` ou pelo botão de edição de cada uma das linhas da listagem.