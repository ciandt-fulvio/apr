# Ajustes ao framework — ferramentas Anthropic por fase

Documento de trabalho. Consolida onde as ferramentas da Anthropic aceleram, dão robustez
ou escalam o processo do APR. **Critério de inclusão:** a ferramenta resolve melhor do que
a alternativa "natural" já existente — onde não resolve, ficou de fora.

Pesquisa base: ferramentas Anthropic 2025–2026 (Claude Design, Cowork, Agent Skills,
Claude Code/Agent SDK, Evaluation Tool, MCP, Connectors).

---

## Princípio de seleção

As fases **01–03** (Assessment, Future-Back, Priorização) e parte da **07** têm soluções
mais simples e naturais para seus problemas — não se força ferramenta Anthropic onde o
processo já funciona bem. As adições abaixo são apenas onde há ganho real.

> Descartados por baixa aderência ao contexto: conector Microsoft Teams/M365 (read-only,
> pouco útil aqui); "Stitch" (é do Google, não da Anthropic).

---

## Adições por fase

### Fase 02 — Visão Future-Back

**Ferramenta: Claude Design** (Anthropic Labs, powered by Opus 4.7).

Colaboração visual dentro do Claude — de prompt de texto a protótipo interativo sem abrir
o Figma. Gera wireframes, mockups, variações, decks e landing pages; exporta HTML/PPTX/PDF/Canva.

- **Aplicação:** prototipar as 3 variações de TO-BE (conservadora, moderada, radical) como
  artefatos visuais interativos navegáveis — o stakeholder *vê* o futuro, não só lê a descrição.
- **Brand integration:** monta um design system a partir do codebase + arquivos de design do
  cliente, aplicando cores, tipografia e componentes automaticamente.

---

### Fase 04 — Codificação do humano

**Ferramentas: Claude Desktop + MCP Filesystem; Projects.**

- **Claude Desktop + MCP Filesystem:** processar transcrições de sessões com top performers
  direto do sistema de arquivos local — sem expor dados sensíveis a serviços externos.
- **Projects como repositório de conhecimento codificado:** cada sessão de codificação
  alimenta uma knowledge base estruturada, com custom instructions para extração de padrões
  de decisão. O "caderno de campo" vira base de dados consultável.

---

### Fase 05 — Primitivas agênticas

**Ferramentas: Agent Skills (open standard); Claude Design; Cowork.**

- **Agent Skills (open standard, dez/2025):** as primitivas agênticas do framework podem ser
  entregues literalmente nesse formato — compatível com Claude.ai, Claude Code, Cursor,
  Gemini CLI. O entregável da fase ganha um padrão técnico de indústria, reutilizável além
  do engagement.
- **Claude Design:** desenhar a interface humano-agente (especialmente os pontos de HITL)
  antes de codar, com **handoff bundle** direto para implementação no Claude Code.
- **Cowork:** testar a primitiva em contexto real antes de validar com o cliente, sem
  precisar de ambiente separado.

---

### Fase 06 — Experimento em campo

**Ferramentas: Claude Cowork; Scheduled Tasks.**

- **Claude Cowork:** o experimento roda como tarefa autônoma, com log de decisões e aprovação
  humana — HITL nativo da plataforma, não processo manual paralelo.
- **Scheduled Tasks:** monitoramento automatizado — relatório de progresso do experimento
  gerado a cada N dias sem intervenção manual.

---

### Fase 07 — Escala e operação

**Ferramenta: Claude Code como runtime de agentes operacionais** (não só dev local).

É a ponte natural do protótipo validado (Fase 06, no Cowork) para produção operada.

- **Headless (`claude -p`):** roda em CI, cron, pipelines, com output estruturado (JSON/schema)
  e custo rastreável por invocação.
- **Agent SDK (Python/TS):** mesma agent loop e context management do Claude Code, programável
  — base para construir os agentes de operação em produção.
- **Subagents + Dynamic Workflows:** orquestração de dezenas a centenas de agentes por run,
  com padrões de qualidade repetíveis (ex.: verificação adversarial entre agentes).
- **Routines (cloud, abr/2026):** config salva do Claude Code rodando na infra da Anthropic,
  sem depender de máquina local. Gatilhos por agenda, **API (HTTP POST)** ou **GitHub**
  (PR/push/release). Cada run em container fresco; commita em branches `claude/` ou abre PR.

---

### Fase 08 — Evolução contínua

**Ferramenta: Evaluation Tool** (console.anthropic.com → aba "Evaluate").

- **Aplicação:** comparar versões de primitivas/skills ao longo das iterações com test cases
  estruturados, grade quantitativa (escala 1–5) e comparação side-by-side. Torna a evolução
  **mensurável** — confirma que uma nova versão de primitiva realmente melhorou o output, e
  não só "parece melhor".
- Complementos via API quando necessário: LLM-as-judge (Likert/binário/ordinal), padrão
  pass@k vs. pass^k para agentes.

---

## Quadro-resumo

| Fase | Ferramenta Anthropic | Ganho |
|---|---|---|
| 01 — Assessment | — | soluções naturais já resolvem |
| 02 — Future-Back | **Claude Design** | TO-BE como protótipo visual navegável |
| 03 — Priorização | — | soluções naturais já resolvem |
| 04 — Codificação do humano | Claude Desktop + MCP Filesystem; Projects | extração de conhecimento tácito sistematizada e privada |
| 05 — Primitivas agênticas | Agent Skills; Claude Design; Cowork | entregável em padrão de indústria; interface HITL desenhada antes de codar |
| 06 — Experimento em campo | Cowork; Scheduled Tasks | HITL e monitoramento nativos |
| 07 — Escala e operação | Claude Code (headless / Agent SDK / Subagents+Workflows / Routines) | protótipo → produção operada, com escala e gatilhos automáticos |
| 08 — Evolução contínua | Evaluation Tool | evolução de primitivas mensurável, não percebida |

---

## Próximos passos sugeridos

1. Validar o quadro com o squad.
2. Decidir quais adições viram conteúdo nas páginas do site (e em que profundidade).
3. Refletir os ajustes nas páginas HTML correspondentes mantendo as convenções do projeto.
