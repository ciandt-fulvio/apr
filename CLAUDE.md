# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Projeto

Framework de documentação estático — HTML + CSS + vanilla JS. Sem build, sem framework, sem package manager. Conteúdo em português.

## Preview local

```bash
python3 -m http.server 8000   # ou: npx serve .
```

## Estrutura de páginas

| Arquivo | Conteúdo |
|---|---|
| `index.html` | Home — visão geral do framework |
| `assessment.html` | Fase 01 — Assessment Agêntico |
| `future-back.html` | Fase 02 — Visão Future-Back |
| `priorizacao.html` | Fase 03 — Pareto e Priorização |
| `codificacao.html` | Fase 04 — Codificação do humano |
| `primitivas.html` | Fase 05 — Primitivas agênticas |
| `experimento.html` | Fase 06 — Experimento em campo |
| `escala.html` | Fase 07 — Escala e operação |
| `evolucao.html` | Fase 08 — Evolução contínua |
| `diferenciais.html` | Apêndice A — Diferenciais |
| `squad.html` | Apêndice B — Squad sugerida |

## Arquitetura

- `assets/css/styles.css` — CSS global único. Tokens de design ficam em `:root` (cores `--navy`, `--coral`, etc.; dimensões de layout). Não hardcode valores que têm variável.
- `assets/js/main.js` — JS global único, carregado por todas as páginas. Responsabilidades: highlight do link ativo no sidebar (via `window.location.pathname`), build do TOC (lê `data-toc` JSON do `<section class="page">`), scrollspy, menu mobile, loader de infográfico.
- `assets/images/` — imagens estáticas. O loader de infográfico em `main.js` tenta vários nomes comuns automaticamente.

## Convenções

- **Topbar + sidebar + footer são duplicados** em cada arquivo HTML (não há template engine). Ao adicionar uma página, copiar um arquivo existente e **atualizar a `<nav class="sidebar">` em todos os arquivos** para manter a navegação consistente.
- **Links de navegação são `href` relativos** (`href="assessment.html"`), não `data-route`. Não reintroduzir SPA routing.
- **TOC**: cada `<section class="page">` tem um atributo `data-toc` com array JSON de `{"id","label"}`. O JS constrói o TOC direito automaticamente; os `id`s devem corresponder aos `h2`/`h3` da página.
- **Links de página anterior/próxima** ficam num `<div class="page-nav">` no final de cada `<section>`. O link da direita leva `.next` (alinhado à direita via CSS).
- Manter sem dependências externas além do Google Fonts, a menos que o usuário peça explicitamente.
