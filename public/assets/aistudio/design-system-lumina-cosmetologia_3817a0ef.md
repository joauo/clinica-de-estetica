# Design System --- Lumina Cosmétologia

## 1. Cores

Paleta extraída visualmente da referência. Os HEX são aproximações dos
pixels da imagem.

### Cores primárias

  -----------------------------------------------------------------------
  Token                   HEX                     Uso
  ----------------------- ----------------------- -----------------------
  Primary Brown           `#45251A`               Cor externa de
                                                  apresentação e possível
                                                  acento institucional

  Primary Gold            `#BA9B6E`               Botões principais,
                                                  ícones e elementos de
                                                  destaque

  Gold Light              `#D6C3A3`               Detalhes decorativos e
                                                  estados suaves

  Warm Beige              `#E3DCD2`               Fundos de destaque e
                                                  áreas institucionais
  -----------------------------------------------------------------------

### Cores secundárias

  Token        HEX         Uso
  ------------ ----------- -----------------------
  Beige Soft   `#F4F1EC`   Fundos de seções
  Champagne    `#E8E1D7`   Elementos decorativos
  Sand         `#DCD2C5`   Bordas e separadores

### Neutros

  Token         HEX         Uso
  ------------- ----------- -----------------------------
  White         `#FEFEFE`   Fundo principal
  Off White     `#F7F6F4`   Cards e superfícies
  Light Gray    `#EAE8E5`   Bordas e divisores
  Medium Gray   `#99938D`   Textos secundários
  Dark Gray     `#55504B`   Textos de apoio
  Black         `#252321`   Títulos e textos principais

### Estados

Os estados abaixo são recomendações de implementação, não elementos
identificáveis na captura.

  Estado     HEX         Aplicação
  ---------- ----------- --------------------------
  Hover      `#A8895F`   Hover de botões dourados
  Active     `#96764F`   Botões pressionados
  Focus      `#BA9B6E`   Indicador de foco
  Error      `#B94A48`   Mensagens de erro
  Success    `#64866A`   Confirmações
  Disabled   `#D8D4CE`   Elementos desabilitados

------------------------------------------------------------------------

## 2. Tipografia

A referência utiliza contraste entre títulos serifados elegantes e
textos auxiliares sem serifa.

As famílias exatas não podem ser identificadas apenas pela captura. As
seguintes são alternativas visuais recomendadas.

### Famílias tipográficas

  Aplicação             Fonte recomendada
  --------------------- --------------------
  Títulos principais    Cormorant Garamond
  Títulos de seções     Cormorant Garamond
  Textos e descrições   Inter
  Navegação             Inter
  Botões                Inter

### Escala tipográfica

  Elemento            Desktop   Mobile Peso
  ----------------- --------- -------- ------
  Hero H1                48px     34px 400
  H2                     32px     27px 400
  H3                     23px     21px 400
  H4                     18px     17px 500
  Texto principal        14px     14px 400
  Texto auxiliar         12px     12px 400
  Navegação              13px     12px 400
  Botões                 13px     13px 500
  Legendas               11px     11px 400

### Características tipográficas

-   Títulos com aparência editorial e sofisticada.
-   Peso predominantemente regular.
-   Textos auxiliares pequenos e discretos.
-   Entrelinha dos títulos: 1.15 a 1.25.
-   Entrelinha dos parágrafos: 1.5 a 1.7.
-   Letter spacing dos títulos: -0.02em.
-   Letter spacing dos textos: 0 a 0.01em.
-   Letter spacing de botões: 0.01em.

------------------------------------------------------------------------

## 3. Tokens CSS

### Variáveis globais

``` css
:root {
  /* CORES */
  --color-primary: #BA9B6E;
  --color-primary-hover: #A8895F;
  --color-primary-active: #96764F;

  --color-brown: #45251A;
  --color-beige: #E3DCD2;
  --color-beige-soft: #F4F1EC;
  --color-champagne: #E8E1D7;

  --color-white: #FEFEFE;
  --color-surface: #F7F6F4;
  --color-border: #EAE8E5;

  --color-text: #252321;
  --color-text-secondary: #55504B;
  --color-text-muted: #99938D;

  --color-error: #B94A48;
  --color-success: #64866A;

  /* ESPAÇAMENTO */
  --spacing-1: 4px;
  --spacing-2: 8px;
  --spacing-3: 12px;
  --spacing-4: 16px;
  --spacing-5: 20px;
  --spacing-6: 24px;
  --spacing-8: 32px;
  --spacing-10: 40px;
  --spacing-12: 48px;
  --spacing-16: 64px;
  --spacing-20: 80px;

  /* RAIOS */
  --radius-sm: 6px;
  --radius-md: 12px;
  --radius-lg: 18px;
  --radius-xl: 24px;
  --radius-pill: 999px;

  /* SOMBRAS */
  --shadow-card:
    0 4px 16px rgba(50, 40, 30, 0.04);

  --shadow-modal:
    0 12px 40px rgba(50, 40, 30, 0.12);

  /* TIPOGRAFIA */
  --font-heading: "Cormorant Garamond", serif;
  --font-body: "Inter", sans-serif;

  --font-size-xs: 11px;
  --font-size-sm: 12px;
  --font-size-base: 14px;
  --font-size-lg: 18px;
  --font-size-xl: 23px;
  --font-size-2xl: 32px;
  --font-size-hero: 48px;

  --line-height-heading: 1.2;
  --line-height-body: 1.6;
}
```

------------------------------------------------------------------------

## 4. Layout, Grid e Espaçamento

### Estrutura geral

O site apresenta uma composição editorial, com bastante espaço em
branco, seções organizadas verticalmente e alinhamento consistente.

  Elemento                   Configuração recomendada
  -------------------------- --------------------------
  Container principal        1200px
  Largura máxima             1280px
  Padding lateral desktop    40px
  Padding lateral tablet     28px
  Padding lateral mobile     20px
  Grid de procedimentos      4 colunas
  Grid de diferenciais       4 colunas
  Grid de processo           4 etapas
  Espaçamento entre seções   64px a 80px
  Espaçamento entre cards    16px

### Organização visual

1.  Header com logotipo, navegação e contato.
2.  Hero com título, descrição, CTA e imagem.
3.  Diferenciais da clínica em quatro colunas.
4.  Procedimentos populares em quatro cards.
5.  Seção institucional com imagem e informações.
6.  Processo de atendimento em quatro etapas.
7.  Banner promocional.
8.  Footer com informações e navegação.

### Grid CSS

``` css
.container {
  width: min(100% - 40px, 1200px);
  margin-inline: auto;
}

.procedures-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.about-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr 0.45fr;
  gap: 24px;
}
```

------------------------------------------------------------------------

## 5. Componentes

### 5.1 Botões

O botão principal utiliza fundo dourado, texto branco e formato
arredondado.

  Variante    Aparência                  Utilização
  ----------- -------------------------- --------------------
  Primary     Dourado com texto branco   Agendamento
  Secondary   Branco com texto escuro    Ações secundárias
  Outline     Borda dourada              Ações alternativas
  Text        Sem fundo                  Links e navegação

``` css
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  min-height: 44px;
  padding: 12px 24px;

  border: none;
  border-radius: 999px;

  font-family: var(--font-body);
  font-size: 13px;
  font-weight: 500;

  cursor: pointer;
  transition: background 0.2s ease;
}

.btn-primary {
  background: var(--color-primary);
  color: white;
}

.btn-primary:hover {
  background: var(--color-primary-hover);
}

.btn-secondary {
  background: var(--color-white);
  color: var(--color-text);
}
```

### 5.2 Inputs

Os campos de formulário devem manter uma aparência discreta e
minimalista.

Características:

-   Fundo branco.
-   Bordas em cinza claro.
-   Cantos arredondados.
-   Altura mínima de 48px.
-   Labels acima dos campos.
-   Mensagens de validação abaixo dos campos.

``` css
.input {
  width: 100%;
  min-height: 48px;
  padding: 12px 16px;

  background: white;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);

  font-family: var(--font-body);
  font-size: 14px;
}

.input:focus {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

.input-error {
  border-color: var(--color-error);
}
```

### 5.3 Cards

Os cards de procedimentos são elementos importantes da identidade
visual.

Características observadas:

-   Fundo cinza muito claro.
-   Imagem na parte superior.
-   Bordas arredondadas.
-   Título abaixo da imagem.
-   Descrição curta.
-   Preço na parte inferior.
-   Ícone de seta para indicar navegação.

``` css
.procedure-card {
  overflow: hidden;
  background: var(--color-surface);
  border-radius: var(--radius-lg);
}

.procedure-card img {
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
}

.procedure-card-content {
  padding: 16px;
}

.procedure-card h3 {
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 500;
}

.procedure-card p {
  color: var(--color-text-secondary);
  font-size: 12px;
  line-height: 1.6;
}
```

### 5.4 Navegação

Header minimalista com:

-   Logotipo alinhado à esquerda.
-   Links centralizados.
-   Telefone e horário à direita.
-   Botão de agendamento em destaque.
-   Fundo claro.

No mobile, substituir a navegação horizontal por menu compacto.

### 5.5 Badges

Utilizar badges discretos para categorias, condições e informações
complementares.

-   Fundo bege claro.
-   Texto escuro.
-   Formato arredondado.
-   Tipografia pequena.

### 5.6 Modais

Não há modal visível na referência. Para funcionalidades de agendamento,
utilizar:

-   Fundo branco.
-   Bordas arredondadas.
-   Sombra suave.
-   Botão de fechamento discreto.
-   Formulário organizado verticalmente.

------------------------------------------------------------------------

## 6. Responsividade

Abordagem Mobile First.

### Breakpoints

  Dispositivo     Largura
  --------------- ------------------
  Mobile          320px -- 767px
  Tablet          768px -- 1023px
  Desktop         1024px -- 1439px
  Large Desktop   1440px+

### Mobile

-   Header compacto com menu hambúrguer.
-   Hero em uma coluna.
-   Imagem abaixo do título e CTA.
-   Cards de procedimentos em duas colunas ou carrossel.
-   Seção institucional empilhada verticalmente.
-   Processo de atendimento em sequência vertical.
-   Banner promocional adaptado para imagem e texto empilhados.
-   Footer em colunas empilhadas.

### Tablet

-   Hero com duas colunas quando houver espaço.
-   Procedimentos em duas colunas.
-   Diferenciais em duas colunas.
-   Seção institucional em duas colunas.
-   Redução dos espaçamentos laterais.

### Desktop

-   Hero em duas colunas.
-   Quatro cards de procedimentos.
-   Quatro diferenciais em linha.
-   Seção institucional em composição de três áreas.
-   Processo de atendimento horizontal.
-   Footer com múltiplas colunas.

### CSS responsivo

``` css
/* MOBILE FIRST */

.procedures-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

@media (min-width: 768px) {
  .procedures-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .about-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (min-width: 1024px) {
  .procedures-grid {
    grid-template-columns: repeat(4, 1fr);
  }

  .features-grid {
    grid-template-columns: repeat(4, 1fr);
  }

  .about-grid {
    grid-template-columns: 1.2fr 1fr 0.45fr;
  }
}
```

------------------------------------------------------------------------

## 7. Usabilidade e Acessibilidade

### Contraste

-   Utilizar textos escuros sobre fundos claros.
-   Evitar textos pequenos em bege sobre branco.
-   Garantir contraste mínimo WCAG AA: 4.5:1 para textos normais e 3:1
    para textos grandes.
-   Verificar especialmente o contraste do dourado com o branco antes de
    utilizá-lo em textos.

### Área de toque

-   Botões com pelo menos 44 × 44px.
-   Links com espaçamento suficiente.
-   Ícones clicáveis com área de toque ampliada.

### Foco visível

-   Utilizar contorno dourado ou escuro.
-   Nunca remover o outline sem substituição acessível.
-   Garantir navegação completa pelo teclado.

### Hierarquia visual

1.  Título principal.
2.  CTA de agendamento.
3.  Imagens dos procedimentos.
4.  Títulos das seções.
5.  Informações complementares.
6.  Detalhes institucionais.

### Boas práticas

-   Utilizar textos alternativos nas imagens.
-   Adicionar labels aos formulários.
-   Não depender exclusivamente das cores para comunicar estados.
-   Respeitar a preferência por redução de movimento.
-   Garantir legibilidade em telas pequenas.

------------------------------------------------------------------------

## 8. Direção de Imagens e Ícones

### Estilo fotográfico

A identidade visual utiliza fotografias com estética editorial de beleza
e cosmética premium.

Características:

-   Fotografias realistas.
-   Pele natural e bem iluminada.
-   Tons quentes e neutros.
-   Iluminação suave.
-   Enquadramentos próximos.
-   Composição sofisticada.
-   Ambientes internos luxuosos e minimalistas.

### Imagens principais

  Seção           Direção visual
  --------------- ---------------------------------------------------
  Hero            Retrato feminino de beleza, enquadramento próximo
  Procedimentos   Fotografias detalhadas dos tratamentos
  Clínica         Arquitetura interna elegante e iluminação quente
  Promoção        Retrato feminino com foco nos olhos e pele
  Institucional   Ambiente premium e acolhedor

### Proporções

  Aplicação            Proporção
  -------------------- ------------
  Hero                 4:3 ou 3:4
  Cards                1:1
  Clínica              4:3
  Banner promocional   2.5:1
  Retratos             3:4

### Tratamento das imagens

-   Evitar saturação excessiva.
-   Priorizar tons naturais de pele.
-   Utilizar balanço de branco levemente quente.
-   Evitar filtros artificiais.
-   Manter consistência de iluminação entre as fotografias.
-   Utilizar `object-fit: cover` nos cards.

### Ícones

A referência utiliza ícones lineares, minimalistas e delicados.

Recomendações:

-   Traços finos.
-   Cor dourada.
-   Formato simples.
-   Tamanho entre 16px e 24px.
-   Preferência por ícones SVG.
-   Manter o mesmo padrão visual em todo o site.

------------------------------------------------------------------------

## 9. Regras de Implementação

### Convenções de nomenclatura

Utilizar nomes semânticos e consistentes.

Exemplos:

``` text
components/
  Header/
  Hero/
  Features/
  Procedures/
  About/
  Process/
  Promotion/
  Footer/

styles/
  tokens.css
  global.css
  typography.css
  components.css

assets/
  images/
  icons/
  logos/
```

### Boas práticas

1.  Centralizar as cores em variáveis CSS.
2.  Utilizar componentes reutilizáveis.
3.  Manter consistência nos espaçamentos.
4.  Utilizar imagens otimizadas em WebP ou AVIF.
5.  Implementar carregamento otimizado de imagens.
6.  Utilizar HTML semântico.
7.  Aplicar responsividade desde o início.
8.  Manter hierarquia tipográfica consistente.
9.  Utilizar SVG para ícones e logotipo.
10. Garantir acessibilidade em botões e formulários.

### O que evitar

-   Cores vibrantes ou saturadas.
-   Gradientes exagerados.
-   Sombras pesadas.
-   Bordas muito escuras.
-   Tipografia excessivamente bold.
-   Cards com excesso de informações.
-   Animações desnecessárias.
-   Ícones com estilos diferentes.
-   Imagens com filtros artificiais.
-   Espaçamentos inconsistentes.
-   Elementos visuais que comprometam a estética minimalista.

### Diretriz final de identidade visual

O resultado deve preservar a identidade visual observada na referência:

**Elegância, minimalismo, sofisticação, naturalidade e estética
premium.**

A interface deve transmitir a experiência de uma clínica de cosmetologia
de alto padrão, utilizando predominantemente branco, bege, dourado suave
e tipografia editorial serifada.

O objetivo é manter uma experiência visual limpa, com imagens
protagonistas, textos discretos, botões elegantes e navegação intuitiva.
