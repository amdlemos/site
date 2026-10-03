# AMDLEMOS

Site institucional estático em Astro, reconstruído a partir do artefato de identidade e home preservado no repositório. Consulte DESIGN.md para a origem das medidas, composição e diferenças intencionais.

## Rodar localmente

Node.js 22.12 ou superior. Execute npm install, npm run dev e abra a URL indicada pelo Astro. Para validar, execute npm run check e npm run build; npm run preview serve o resultado estático. Os scripts já declaram Astro, @astrojs/check e TypeScript. Quando npm install terminar, versionar o package-lock.json junto com os fontes; não fabricar um lockfile em ambiente sem rede.

## Configuração e pendências

Preencha src/config/site.ts apenas com informações confirmadas: origem HTTPS pública, WhatsApp com DDI/DDD, telefone de apresentação, e-mail, endereço, CNPJ e URL da CYMH. socialImage aceita o caminho local de uma imagem PNG/JPEG/WebP real, por exemplo /images/social.png somente quando esse arquivo existir em public/images; até lá não é anunciado um card com imagem. O estado inicial é para revisão local: noindex, robots bloqueando indexação, sitemap sem URL e CTA final desativado com aviso. Configurar uma origem ativa canonical, URLs de OG/Twitter, sitemap da home e robots permitindo indexação; faça isso apenas junto do conteúdo real e da revisão visual. Não há domínio ou contato deduzido.

Pendências editoriais: preço e prazo de referência, horário/prazo de resposta, escopo comercial definitivo, status de produtos, foto autorizada de Maringá, capturas reais da CYMH, evidências de consultas com contexto/data, depoimento autorizado e imagem social raster. O relato de observações do caso não é garantia de ranking. Nenhum placeholder deve ser confundido com dado ou prova real. Os recursos gráficos e a fonte são locais.

## Estrutura e próximos caminhos

BaseLayout.astro concentra idioma, metadados e dados Organization; site.ts concentra os dados confirmáveis; Brand.astro concentra wordmark e extensão sites; os demais componentes correspondem a seções completas da referência. CSS normal em src/styles/global.css mantém tokens e medidas. Não há framework de componentes de cliente, hidratação, backend, CMS, blog, analytics ou formulário.

Futuras páginas, somente quando houver conteúdo aprovado: src/pages/sites-institucionais-maringa.astro → /sites-institucionais-maringa/; src/pages/seo-local-maringa.astro → /seo-local-maringa/; src/pages/projetos/cymh.astro → /projetos/cymh/; src/pages/produtos/[produto].astro → produtos próprios com getStaticPaths e dados reais. Reutilizar BaseLayout, Brand e tokens; criar componentes adicionais apenas quando compartilhados. Esses arquivos e links públicos não são criados nesta PR.

## Aceite

Conferir em 390, 768, 1024, 1440 e 1920 px; comparar capturas da home desktop/mobile com o artefato. Testar navegação por teclado, skip link, foco, FAQ e contato configurado/pendente. Confirmar um H1, recursos locais, ausência de JavaScript executável, links internos, SEO e ausência de conteúdo fictício. Confirmar também que o SHA-256 do artefato continua eab3f75a010d2a24a595be3d7f4aee128aa624afd5ab3817745d78e4e089ec43. O sandbox de elaboração bloqueia instalação por rede, servidor HTTP e Chromium; validações que dependem deles permanecem pendentes, não aprovadas.
