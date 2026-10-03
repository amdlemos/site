# AMDLEMOS — referência de identidade e home

Fonte única: AMDLEMOS — identidade e home.html (621854 bytes), SHA-256 eab3f75a010d2a24a595be3d7f4aee128aa624afd5ab3817745d78e4e089ec43. O arquivo permanece intacto, somente para consulta. A inspeção percorreu o manifesto raiz, os três bundles gzip/base64, seus templates e recursos incorporados; não confundiu a galeria de pranchas ou o runtime com a marca.

## Pranchas e empacotamento

A prancha Identidade — marca, cor, tipo mede 1440 × 1720; Home — desktop mede 1440 × 5600; Home — mobile (390px) mede 390 × 8000 no iframe externo. A galeria tem fundo e rótulos próprios, que não pertencem ao site. O wrapper mobile interno tem 390 × 9200 com overflow hidden e importa Main.dc.html: é a mesma composição de desktop, com flex-wrap, auto-fit e tamanhos fluidos, sem uma folha mobile distinta. A página implementada deixa a altura natural, para que nada fique recortado.

Os manifests incorporam DC/support, React 18, lógica de preview, comunicação entre iframes, estilos do editor e a fonte. Esses itens são infraestrutura de autoria, não elementos de design. O site não copia esse runtime, iframes, placeholders de loading, scripts de substituição, seletores do editor ou fontes remotas.

## Marca e arquitetura

Wordmark amdlemos em minúsculas, Instrument Sans, peso CSS 700, entreletra −5,5% na prancha principal; o ponto é quadrado, não circular, em verde. Na home a entreletra do wordmark é −4,5%, com 26 px no header e 30 px no footer; o ponto mede 7 e 8 px respectivamente. Sobre escuro usa verde claro. A extensão amdlemos.sites preserva marca-mãe, ponto e sufixo regular em grafite médio; Brand.astro a suporta sem introduzir uma assinatura ausente na home. O exemplo amdlemos.treinamentos é marcado como futuro na identidade e não comprova um produto disponível.

Favicon: quadrado verde com a minúscula e ponto brancos, derivado do ícone de 64 px da prancha. Uma imagem social raster permanece pendente: não anunciamos o SVG como imagem de card. Fornecer um PNG/JPEG/WebP local fiel à marca e configurar socialImage; até lá os metadados sociais usam título/descrição e card summary, sem imagem fictícia.

## Paleta e tipografia

Verde Maringá #0A6B4B; grafite #141618; grafite médio #4A4F54; linhas #E3E4E0; papel #FAFAF8; verde claro #3FB58A somente sobre escuro. Apoios da home: branco #FFFFFF, superfície #F0F1ED, texto escuro #F3F4F1, secundários escuros #9CA19A e #C9CCC5, linhas do mapa #D3D6CF e #B9BDB4. Os tokens CSS registram esses valores sem uma nova paleta.

Instrument Sans é a única família. Corpo 17 px/1,55; descrições menores 15–16 px; labels 13–14 px, peso 600, caixa alta e tracking 0,08 em. Títulos em 600 e tracking fechado. H1 clamp(42 px, 6,4% da largura, 92 px)/0,98; H2 comum clamp(30 px, 3,4%, 46 px)/1,08. O caso e contato têm escalas próprias, preservadas no CSS.

Há somente um WOFF2 Latin incorporado, de 30092 bytes, identificado como Instrument Sans Regular sem eixo variável. O original declara esse mesmo arquivo para 400, 500, 600 e 700; as faces Latin Extended referenciam URLs remotas e não estão incorporadas. Preservamos o arquivo e a faixa CSS dos quatro pesos, sem substituição ou download silencioso. Os caracteres portugueses usados no texto estão cobertos. A aparência final dos pesos e o favicon ainda precisam de conferência no navegador.

## Grid, composição e linguagem visual

O max-width original de 1240 px é da caixa de conteúdo, à qual se somam gutters clamp(20 px, 5% da largura, 64 px). Em 1440 px, a caixa externa mede 1368 px e o conteúdo começa em x=100 px. Não aplicar um reset global border-box: ele mudaria essa geometria. A implementação troca cqi por vw porque a referência usa um container que ocupa a largura inteira da viewport. Flex-bases, gaps e auto-fit são preservados para reproduzir as quebras naturais, incluindo a navegação sem menu hambúrguer.

Ordem: header com navegação e CTA; hero com título, descrição, ações e mapa; benefícios em quatro colunas; serviços editoriais; caso CYMH em fundo grafite; processo em quatro etapas; sobre com foto pendente; FAQ em details/summary; CTA verde; footer grafite. Divisórias finas, cantos de 3 px nas ações e 2 px na etiqueta Produtos, poucos fundos e espaços generosos. O mapa é o SVG original: traçado fino, duas vias mais fortes, duas circunferências e um único ponto quadrado. Não usar foto de banco, mockup de aparelho, nova ilustração ou imagens geradas.

## Espaçamento e tokens de dimensão

| Token existente | Valor CSS | Aplicação |
| --- | --- | --- |
| --content-width | 1240px | Limite da caixa de conteúdo, antes dos gutters |
| --gutter | clamp(20px, 5vw, 64px) | Padding horizontal dos containers |
| --section-space | clamp(56px, 7vw, 112px) | Padding vertical de serviços, caso, processo, sobre e FAQ |
| --radius-small | 3px | Cantos das ações de header, hero e contato |

Os demais espaçamentos preservam valores locais do desenho. Proximidade usa 4, 6, 8, 10, 12 e 14 px; texto e pequenos blocos usam 16, 18, 20, 22, 24 e 28 px; composição usa 32, 36, 40, 48, 56 e 64 px. Header: padding vertical 18 px e gap 12 × 32 px; navegação: 4 × 28 px. Hero: topo clamp(48px, 8vw, 112px), base clamp(56px, 7vw, 96px), gap de 56 px; ações após 40 px, com gap 12 × 24 px. Benefícios: padding vertical clamp(56px, 7vw, 96px), grade após 56 px e gap 40 × 32 px. Serviços e caso: gap 48 × 64 px; sobre e FAQ: 40 × 64 px. Processo: grade após 56 px, gap 32 px. Contato: padding vertical clamp(56px, 8vw, 120px), gap 32 × 64 px. Footer: 64 px no topo e 40 px na base; divisória após 56 px, com padding superior de 20 px. Esses valores não são novos tokens de implementação.

## Links, ações e superfícies

Links de navegação: 15 px, peso 500, grafite médio, sem sublinhado, padding vertical 10 px. Links editoriais do hero e caso: peso 600, sublinhado de 1 px afastado 6 px do texto; o caso usa texto claro sobre grafite. Footer: 15 px, secundário claro, sem sublinhado. O hover aumenta a espessura dos sublinhados existentes para 2 px. Foco de teclado: outline de 3 px, afastado 5 px, verde sobre claro, verde claro sobre grafite e branco sobre o contato verde.

Ações retangulares: peso 600, radius --radius-small e box-sizing border-box. Header: grafite/branco, texto 15 px, padding 12 × 18 px, altura mínima 44 px. Hero: verde/branco, texto 17 px, padding 16 × 26 px, altura mínima 52 px. Contato: branco/grafite, texto 18 px, padding 18 × 24 px, altura mínima 56 px, seta original de 20 px. Com WhatsApp pendente, mantém a mesma superfície em button nativamente desativado, opacidade 1 e aviso textual; com número confirmado, renderiza um link real.

Benefícios são colunas editoriais com linha superior de 2 px e padding superior de 20 px. Serviços são linhas com padding vertical de 28 px e divisórias de 1 px. Mapa: quadrado 1:1, superfície #F0F1ED, borda de 1 px; seu rótulo tem padding 12 × 14 px e a sombra discreta original 0 1px 2px rgba(20,22,24,0.06). Capturas pendentes da CYMH: proporção 4:3, borda tracejada de 1 px, padding de 24 px na principal e 12 px nas menores. Foto pendente de Maringá: 5:4, padding 24 px, superfície e borda iguais às do mapa. Não há um sistema de cards arredondados ou sombras adicionais.

## Regras responsivas

As quebras usam flex-wrap, min-width: 0 e auto-fit, sem media queries por largura. Bases do hero: texto 560 px e figura 380 px, com gap 56 px. Serviços e FAQ: 300 px + 560 px, gap 64 px. Caso: 420 px + 420 px, gap 64 px. Sobre: 360 px + 480 px, gap 64 px. Contato: título 520 px e ação até 360 px, gap 64 px. A ordem de cada bloco é a ordem do HTML; o header mantém navegação de ordem 3 e CTA de ordem 4, com quebra em linhas.

Grades auto-fit: benefícios com mínimo de 240 px e gap horizontal 32 px; processo com mínimo de 220 px e gap 32 px; dados institucionais com mínimo de 160 px e gap 20 px; colunas do footer com mínimo de 150 px e gap 32 px. As duas capturas menores do caso mantêm duas colunas minmax(0, 1fr), com gap 12 px. Em 390 px, o gutter chega ao mínimo de 20 px e os blocos principais empilham; em 1440 px, o gutter chega a 64 px e a composição principal usa colunas. As larguras intermediárias refluem pelas bases declaradas, não por layouts novos; por exemplo, hero e serviços já empilham em 1024 px, enquanto caso e sobre ainda podem ocupar duas colunas. Em telas largas, o conteúdo para em 1240 px. A altura é natural, sem o recorte fixo da prancha mobile. Redução de movimento desliga animações/transições e mantém scroll sem animação. Ausência de overflow em 390/768/1024/1440/1920 permanece uma verificação de navegador pendente.

## Conteúdo e diferenças intencionais

Preservamos títulos, tom e conteúdo comercial. Ajustes locais tornam explícitos o que a referência não comprova: estatística sobre visitas mobile removida; nomes/status de produtos tratados como planejados; preço, prazo, contato, endereço e CNPJ pendentes sem números ou domínio fictícios; prazo de resposta pendente. O caso CYMH continua sendo o projeto institucional e de SEO local informado, sem números ou promessa de posição. As observações originais são identificadas como relato com evidências pendentes, e capturas, resultados e depoimento autorizado permanecem placeholders visíveis. A foto de Maringá também continua pendente.

Adicionamos landmarks sem mudar a ordem, um único H1, skip link, foco visível e FAQ nativa; corrigimos viewBox e links internos sem destino. O contato final só vira link quando existe número confirmado. Não há formulário na referência, portanto não adicionamos um. A resposta estática não executa JavaScript de interface; application/ld+json é somente dados estruturados.

## Verificação visual

Comparar o artefato e o site em 1440 e 390 px; conferir também 768, 1024 e 1920 px, overflow, navegação e teclado. Não há capturas validadas neste sandbox: o ambiente bloqueia sockets HTTP e a inicialização do Chromium. A geometria foi conferida no código da referência; isso não substitui o aceite visual. Build/check também dependem da instalação real de dependências.
