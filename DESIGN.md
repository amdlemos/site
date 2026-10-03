# AMDLEMOS — identidade e composição da home

## Referência preservada

AMDLEMOS — identidade e home.html (621854 bytes), SHA-256 eab3f75a010d2a24a595be3d7f4aee128aa624afd5ab3817745d78e4e089ec43, permanece intacto, somente para consulta. A inspeção original percorreu o manifesto raiz, os três bundles gzip/base64, seus templates e recursos incorporados; a galeria de pranchas e seu runtime não são elementos da marca.

A prancha Identidade — marca, cor, tipo mede 1440 × 1720; Home — desktop, 1440 × 5600; Home — mobile, 390 × 8000 no iframe externo. O wrapper mobile interno de 390 × 9200 importa a composição de desktop com flex-wrap e auto-fit. A home atual tem altura natural. React, preview, iframes, estilos do editor e fontes remotas pertencem à infraestrutura do artefato e não foram incorporados ao site.

A primeira implementação reproduzia a composição do artefato. O usuário autorizou uma nova apresentação: “Siga no padrão filament mantendo nossa identidade de cores”. A referência de identidade continua vinculante; a composição antiga deixa de ser o alvo de reprodução.

## Marca, paleta e fonte

Wordmark amdlemos em minúsculas, Instrument Sans, peso CSS 700. O ponto é quadrado, verde, com 7 px no header e 8 px no footer. A home mantém entreletra −4,5%, tamanho de 26 px no header e 30 px no footer. Sobre escuro usa verde claro. Brand.astro continua suportando a extensão sites, sem introduzi-la na assinatura da home. Treinamentos e outros produtos citados no artefato não comprovam disponibilidade.

Os tokens de cor permanecem iguais: Verde Maringá #0A6B4B; grafite #141618; grafite médio #4A4F54; linhas #E3E4E0; papel #FAFAF8; verde claro #3FB58A somente sobre escuro. Apoios: branco #FFFFFF, superfície #F0F1ED, texto escuro #F3F4F1, secundários escuros #9CA19A e #C9CCC5, traçado #D3D6CF e #B9BDB4, divisória escura #2A2D30.

Instrument Sans é a única família. O WOFF2 Latin local de 30092 bytes é a fonte incorporada original, identificada como Regular sem eixo variável; o original declara o mesmo arquivo para 400, 500, 600 e 700. Preservamos arquivo e faixa CSS, sem download silencioso. Corpo 17 px/1,55; descrições 15–21 px; labels 12–14 px em peso 600. Títulos usam peso 600 e tracking fechado. Os tokens de escala de H1/H2 continuam iguais; o hero usa escala local clamp(36 px, 3,7vw, 52 px), line-height 1,1 e título grafite.

O favicon deriva do ícone de 64 px da prancha. A imagem social raster permanece pendente: socialImage aceita um arquivo local real, e nenhum SVG é anunciado como imagem de card.

## Composição atual

A inspiração é a apresentação pública atual de [Filament](https://filamentphp.com/): promessa central, demonstração visual e catálogo de capacidades. Essa lógica é adaptada a uma empresa que cria sites, integrações e produtos de software para pequenos negócios de Maringá; a página não apresenta frameworks ao cliente. Não copiamos ativos, logotipo, mascote, fontes, paleta, textos ou estatísticas da Filament.

A sequência atual é header; Hero; ServiceOverview; serviços; benefícios; caso CYMH; processo; sobre; FAQ; contato; footer. ServiceOverview é uma representação reutilizável do site institucional, presença local e contato, com estilos próprios e sem dependência do Hero. Header, serviços e demais seções conservam seu conteúdo e seus estilos.

O hero é uma faixa editorial compacta: metadados “Criação de sites” e “Maringá · PR” entre filetes, título grafite em largura livre e, abaixo, descrição junto das ações. O H1 de 36–52 px aproxima seu peso da seção de serviços; não há divisão entre título à esquerda e copy à direita. A descrição explicita sites institucionais para empresas de Maringá e região, sem garantia de resultado. Verde aparece no marcador e na ação principal. Recuos e colunas 1,3/1 acompanham ServiceOverview, com 28 px entre texto e representação.

A representação estática permanece intacta: um módulo grafite representa a estrutura do site, um módulo mostra o traçado local e outro representa o caminho de contato. Paths, círculos, ponto quadrado, textos, cores e geometria interna permanecem iguais na extração para ServiceOverview. A legenda visível foi removida; o figure conserva uma descrição acessível. Os quatro links de capacidades também foram removidos porque repetiam as quatro entregas da seção de serviços imediatamente seguinte. Não há conteúdo ou ação entre ServiceOverview e serviços.

Serviços usam uma grade de doze colunas no desktop, com módulos 7/5 na primeira linha e 5/7 na segunda. Cada entrega tem título, descrição, ícone vetorial simples e uma lista de escopo. O módulo de suporte usa grafite; os demais usam branco, papel e superfície. Produtos próprios continuam em uma faixa separada, explicitamente planejados e com detalhes pendentes.

Benefícios usam uma introdução editorial lateral e quatro itens em grade 2 × 2 no desktop. Os números são apenas marcadores de ordem, não métricas. Texto comercial e intenção são preservados; as mudanças locais de texto no hero e SEO evitam apresentar descoberta em busca como garantia.

## Três variações anteriores para o topo do hero (superadas)

Este registro pertence à revisão anterior. A faixa editorial descrita acima substitui a proposta B; as três variações não são opções ativas nem alvo desta revisão.

As três propostas usam o mesmo título e descrição, a mesma paleta e os mesmos destinos. Os wireframes comparam apenas o topo; a vitrine inferior aprovada é comum a todas.

A — editorial centralizada: título grafite menor, copy curta e ações agrupadas, com menos espaço antes da vitrine. Dá mais contenção à tipografia, mas conserva o eixo central que motivou a revisão.

```text
          label local
       título em duas linhas
           descrição
         CTA + caso real
[          vitrine aprovada          ]
```

B — assimétrica em grade: label sobre a composição, título à esquerda e copy/ações à direita. Recuos e colunas 1,3/1 acompanham o módulo do site e a coluna local/contato. Foi escolhida na revisão anterior: criava hierarquia e conecta texto à demonstração com a geometria existente, sem acrescentar outra superfície.

```text
─────────────────────────────────────
 label local
 título em duas linhas | descrição
                       | CTA + caso
[ módulo do site       | local/contato ]
```

C — mais integrada: título em faixa larga à esquerda, copy e ações numa segunda faixa, visualmente encostadas à vitrine com o mesmo fundo claro. Aproxima texto e gráfico como um conjunto único; não foi escolhida porque a moldura conjunta daria mais peso ao painel e reduziria a distinção entre proposta e representação dos serviços.

```text
┌ label + título em faixa larga ──────┐
│ descrição             | CTA + caso │
└─────────────────────────────────────┘
[          vitrine aprovada          ]
```

A revisão atual limita-se à introdução editorial, à extração de ServiceOverview e ao espaçamento externo. Header, composição interna da representação, serviços, cards, superfícies e demais seções continuam aprovados e preservados. As variações anteriores ficam apenas como histórico; não adicionam variantes, controles ou JavaScript à página.

## Geometria, superfícies e ações

O limite de conteúdo continua 1240 px, antes dos gutters clamp(20 px, 5vw, 64 px). Não há reset global border-box: a geometria das seções preservadas continua igual. Box-sizing border-box fica restrito à vitrine, seus elementos internos, cards de serviços e itens de benefícios.

O espaçamento de seções continua clamp(56 px, 7vw, 112 px). A composição usa gaps de 16 px para módulos, 24 px entre linhas editoriais do hero, 28 px até ServiceOverview e 32–48 px antes da seção de serviços. A vitrine tem raio de 24 px e módulos de 16 px, com bordas finas e sem sombras adicionais; essas superfícies substituem as antigas linhas de serviços. Ações mantêm o raio original de 3 px. Não há foto de banco, mockup de dispositivo ou imagem gerada.

Links do hero e header continuam destinos reais da mesma página. O foco mantém outline de 3 px: verde sobre claro, verde claro no caso/footer, branco no contato verde. O contato final continua desativado com aviso enquanto não há WhatsApp confirmado; com número real, renderiza link. Os diagramas não recebem tabindex, links ou aparência de ações clicáveis.

## Regras responsivas

Em 390 px, o conteúdo tem gutters de 20 px. Hero, ServiceOverview, serviços e benefícios ficam em coluna única; título, descrição e ações do hero se alinham à esquerda, com recuo interno de 13 px igual ao da representação. Metadados e ações quebram naturalmente; os links de ações mantêm alvos de pelo menos 44 px. A estrutura esquemática do site conserva três pequenos blocos com minmax(0, 1fr), textos curtos e altura natural. O traçado é decorativo e pode ser recortado dentro de seu módulo, sem cortar texto.

A partir de 48rem (768 px), ServiceOverview passa a duas colunas, com o site ocupando duas linhas e os módulos local/contato na coluna direita. Serviços passam à grade 7/5 e 5/7; os benefícios têm duas colunas. A partir de 64rem (1024 px), apenas a linha inferior do hero divide descrição e ações em colunas 1,3/1 com gap de 16 px; o título mantém largura livre e a introdução de benefícios fica ao lado da grade. Em 1440 px, o H1 chega a 52 px e o recuo de 25 px repete os 24 px internos mais a borda da representação. Nenhum bloco recebe altura fixa para texto; min-width: 0 e minmax(0, ...) permitem reflow.

As demais seções continuam usando suas bases flex e auto-fit originais, incluindo o header sem menu hambúrguer. O caso CYMH conserva duas capturas menores lado a lado. Em telas largas, o conteúdo para em 1240 px. A ordem visual acompanha a ordem do HTML. Redução de movimento mantém scroll sem animação e desliga animações/transições.

## Conteúdo, limites e verificação

Não inventamos resultados, estatísticas, ranking, preço, prazo, endereço, contato, CNPJ, depoimento ou disponibilidade de produto. O caso CYMH fica fora desta mudança, inclusive seus placeholders de capturas e evidências pendentes. Foto de Maringá e imagem social também continuam pendentes. Os dados confirmáveis permanecem em site.ts e o estado inicial conserva noindex, contato vazio e sitemap sem URL.

A página tem landmarks, um H1, skip link, foco visível, FAQ em details/summary e dados estruturados Organization. O HTML é estático; application/ld+json é apenas dados. Não há hidratação, JavaScript de interface, dependência nova, formulário operacional, backend, CMS, blog, analytics ou deploy.

Validar com npm run check, npm run build e git diff --check. Conferir a composição atual em 390, 768, 1024, 1440 e 1920 px, altura natural, overflow, teclado e destinos internos. Comparar a identidade com o artefato, e a hierarquia visual com a referência pública da Filament. Build/check são executáveis com as dependências instaladas; a inspeção visual em navegador continua pendente se o ambiente bloquear HTTP/Chromium. Não declarar essa inspeção aprovada a partir de leitura de CSS.
