import {
  Rocket,
  Smartphone,
  PanelsTopLeft,
  Cpu,
  Database,
  Globe2,
  Layers,
  Code2,
  MessageCircle,
  Mail,
  ArrowRight,
  Shield,
  CheckCircle2,
  ChevronRight,
  Zap,
} from "lucide-react";
import React from "react";

export function High2Landing() {
  const whatsappLink =
    "https://wa.me/5547988034149?text=Ol%C3%A1%2C%20vim%20do%20site%20da%20high2%20e%20quero%20falar%20sobre%20um%20projeto.";

  function scrollToId(id: string) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 flex flex-col">
      {/* HEADER */}
      <header className="sticky top-0 z-40 border-b border-slate-800/70 bg-slate-950/80 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-16 flex items-center justify-between gap-4">
            {/* Logo / Marca */}
            <button
              onClick={() => scrollToId("top")}
              className="flex items-center gap-3 group cursor-pointer"
            >
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-lg shadow-blue-900/40">
                <Rocket className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
              </div>
              <div className="flex flex-col items-start">
                <span className="font-semibold tracking-tight text-white text-base leading-none">
                  high2
                </span>
                <span className="text-[11px] uppercase tracking-[0.15em] text-blue-300/80">
                  Software Studio
                </span>
              </div>
            </button>

            {/* Navegação */}
            <nav className="hidden md:flex items-center gap-8 text-sm text-slate-300">
              <button
                onClick={() => scrollToId("services")}
                className="hover:text-white transition-colors"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToId("techs")}
                className="hover:text-white transition-colors"
              >
                Tecnologias
              </button>
              <button
                onClick={() => scrollToId("cases")}
                className="hover:text-white transition-colors"
              >
                Cases
              </button>
              <button
                onClick={() => scrollToId("contact")}
                className="hover:text-white transition-colors"
              >
                Contato
              </button>
            </nav>

            {/* Ações */}
            <div className="flex items-center gap-2">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-lg shadow-emerald-500/30 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section
        id="top"
        className="relative overflow-hidden border-b border-slate-800/60 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900"
      >
        {/* Glows */}
        <div
          className="pointer-events-none absolute -top-32 -left-32 h-80 w-80 rounded-full blur-3xl opacity-40"
          style={{ background: "#1d4ed8" }}
        />
        <div
          className="pointer-events-none absolute top-10 right-0 h-72 w-72 rounded-full blur-3xl opacity-40"
          style={{ background: "#0ea5e9" }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Texto principal */}
            <div className="relative z-10">
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-blue-200">
                <Zap className="w-3 h-3" />
                Software sob medida
              </span>

              <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-50">
                Criamos{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
                  apps, sistemas e integrações
                </span>{" "}
                para levar seu negócio mais alto.
              </h1>

              <p className="mt-4 text-slate-300/90 text-sm sm:text-base max-w-xl">
                A <span className="font-semibold text-slate-50">high2</span> é um estúdio de software que
                desenvolve aplicações modernas, seguras e escaláveis. Web, mobile, APIs e soluções
                completas para o seu produto digital.
              </p>

              {/* CTA */}
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => scrollToId("contact")}
                  className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold text-slate-950 bg-gradient-to-r from-blue-500 to-cyan-400 shadow-lg shadow-blue-500/40 hover:brightness-110 transition-all"
                >
                  Iniciar um projeto
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => scrollToId("techs")}
                  className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold border border-slate-700 text-slate-200 hover:bg-slate-900 transition-colors"
                >
                  Ver tecnologias
                </button>
              </div>

              {/* Stats */}
              <div className="mt-8 grid grid-cols-3 gap-4 max-w-md text-xs sm:text-sm">
                <div className="rounded-xl border border-slate-800 bg-slate-900/60 px-3 py-3">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">
                    Foco em produto
                  </p>
                  <p className="mt-1 text-lg font-semibold text-slate-50">Apps & APIs</p>
                </div>
                <div className="rounded-xl border border-slate-800 bg-slate-900/60 px-3 py-3">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">
                    Multi-stack
                  </p>
                  <p className="mt-1 text-lg font-semibold text-slate-50">Web & Mobile</p>
                </div>
                <div className="rounded-xl border border-slate-800 bg-slate-900/60 px-3 py-3">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">
                    Suporte
                  </p>
                  <p className="mt-1 text-lg font-semibold text-slate-50">Continuous</p>
                </div>
              </div>
            </div>

            {/* Card “técnico” / visual de código */}
            <div className="relative">
              <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-blue-500/20 via-transparent to-cyan-400/10 blur-3xl opacity-80" />
              <div className="relative rounded-3xl border border-slate-800/80 bg-slate-900/80 p-4 sm:p-5 shadow-2xl shadow-blue-900/70 backdrop-blur">
                {/* Header do card */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-500" />
                  </div>
                  <span className="text-[11px] text-slate-400 flex items-center gap-1">
                    high2-app.tsx
                  </span>
                </div>

                {/* "Código" fake */}
                <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4 text-[11px] sm:text-xs font-mono text-slate-300 space-y-1">
                  <p>
                    <span className="text-blue-400">const</span>{" "}
                    <span className="text-cyan-300">stack</span> = [
                    <span className="text-emerald-300">'React'</span>,{" "}
                    <span className="text-emerald-300">'React Native'</span>,{" "}
                    <span className="text-emerald-300">'Node.js'</span>,{" "}
                    <span className="text-emerald-300">'PostgreSQL'</span>];
                  </p>
                  <p>
                    <span className="text-blue-400">function</span>{" "}
                    <span className="text-indigo-300">buildProduct</span>(
                    <span className="text-rose-300">idea</span>) {"{"}
                  </p>
                  <p className="pl-4">
                    <span className="text-blue-400">return</span>{" "}
                    <span className="text-cyan-300">high2</span>.
                    <span className="text-indigo-300">ship</span>(idea, stack);
                  </p>
                  <p>{"}"}</p>
                  <p className="mt-2 text-slate-500">// Apps, dashboards e APIs prontos para produção.</p>
                </div>

                {/* Tech badges dentro do card */}
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/80 px-3 py-2">
                    <Code2 className="w-4 h-4 text-sky-400" />
                    <span className="text-[11px] text-slate-300">Front-end moderno</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/80 px-3 py-2">
                    <Database className="w-4 h-4 text-emerald-400" />
                    <span className="text-[11px] text-slate-300">Back-end escalável</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/80 px-3 py-2">
                    <Cpu className="w-4 h-4 text-violet-400" />
                    <span className="text-[11px] text-slate-300">Integração com IA</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/80 px-3 py-2">
                    <Shield className="w-4 h-4 text-blue-400" />
                    <span className="text-[11px] text-slate-300">
                      Segurança e boas práticas
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="services" className="py-12 lg:py-16 border-b border-slate-800 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-blue-300/80">
                O que fazemos
              </p>
              <h2 className="mt-2 text-2xl sm:text-3xl font-semibold text-slate-50">
                Soluções completas de software
              </h2>
            </div>
            <p className="text-sm text-slate-400 max-w-md">
              Da ideia ao deploy: a high2 cuida da experiência, arquitetura e código para que você
              foque no seu negócio.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="group rounded-2xl border border-slate-800 bg-slate-900/50 p-5 hover:border-blue-500/80 hover:bg-slate-900/90 transition-all">
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="flex items-center gap-2">
                  <Smartphone className="w-5 h-5 text-blue-400" />
                  <h3 className="font-semibold text-slate-50 text-sm">Apps Mobile & PWAs</h3>
                </div>
              </div>
              <p className="text-sm text-slate-400">
                Aplicativos sob medida para Android, iOS e web, com foco em performance, UX e
                escalabilidade.
              </p>
            </div>

            <div className="group rounded-2xl border border-slate-800 bg-slate-900/50 p-5 hover:border-blue-500/80 hover:bg-slate-900/90 transition-all">
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="flex items-center gap-2">
                  <PanelsTopLeft className="w-5 h-5 text-cyan-400" />
                  <h3 className="font-semibold text-slate-50 text-sm">
                    Sistemas Web & Dashboards
                  </h3>
                </div>
              </div>
              <p className="text-sm text-slate-400">
                Painéis administrativos, CRMs, ERPs e plataformas completas para gestão do seu
                negócio.
              </p>
            </div>

            <div className="group rounded-2xl border border-slate-800 bg-slate-900/50 p-5 hover:border-blue-500/80 hover:bg-slate-900/90 transition-all">
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="flex items-center gap-2">
                  <Layers className="w-5 h-5 text-emerald-400" />
                  <h3 className="font-semibold text-slate-50 text-sm">
                    Integrações & APIs
                  </h3>
                </div>
              </div>
              <p className="text-sm text-slate-400">
                Conectamos sua operação a meios de pagamento, gateways, serviços de terceiros e
                ferramentas de IA.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TECNOLOGIAS */}
      <section id="techs" className="py-12 border-b border-slate-800 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-blue-300/80">
                Stack de tecnologia
              </p>
              <h2 className="mt-2 text-2xl sm:text-3xl font-semibold text-slate-50">
                Multi-linguagens. Multi-plataformas.
              </h2>
            </div>
            <p className="text-sm text-slate-400 max-w-md">
              Trabalhamos com as tecnologias mais usadas no mercado, garantindo suporte e evolução
              contínua.
            </p>
          </div>

          {/* “Carrossel” horizontal com logos / chips */}
          <div className="flex gap-3 overflow-x-auto pb-2 snap-x snap-mandatory">
            {[
              { label: "TypeScript", desc: "Front + Back", hue: "from-sky-500 to-blue-500" },
              { label: "React", desc: "Web", hue: "from-cyan-400 to-sky-500" },
              { label: "React Native", desc: "Mobile", hue: "from-sky-500 to-indigo-500" },
              { label: "Node.js", desc: "APIs", hue: "from-emerald-400 to-emerald-600" },
              { label: "PostgreSQL", desc: "Banco", hue: "from-sky-400 to-blue-500" },
              { label: "Python", desc: "Data & IA", hue: "from-yellow-400 to-amber-500" },
              { label: "AWS / Cloud", desc: "Infra", hue: "from-orange-400 to-rose-500" },
            ].map((item) => (
              <div
                key={item.label}
                className="snap-start min-w-[190px] rounded-2xl border border-slate-800 bg-slate-900/70 px-4 py-3 flex items-center justify-between"
              >
                <div>
                  <p className="text-xs font-semibold text-slate-50">{item.label}</p>
                  <p className="text-[11px] text-slate-400">{item.desc}</p>
                </div>
                <div
                  className={`h-9 w-9 rounded-xl bg-gradient-to-br ${item.hue} flex items-center justify-center text-slate-950 text-[11px] font-semibold`}
                >
                  <Code2 className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>

          {/* Linha “como trabalhamos” */}
          <div className="mt-8 grid md:grid-cols-3 gap-6 text-sm">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5" />
              <div>
                <p className="font-semibold text-slate-50">Descoberta & Product Design</p>
                <p className="text-slate-400">
                  Entendemos seu negócio, definimos escopo e priorizamos entregas com visão de
                  produto.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Cpu className="w-5 h-5 text-blue-400 mt-0.5" />
              <div>
                <p className="font-semibold text-slate-50">Arquitetura & Desenvolvimento</p>
                <p className="text-slate-400">
                  Construção com boas práticas, code review e foco em performance.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Globe2 className="w-5 h-5 text-cyan-400 mt-0.5" />
              <div>
                <p className="font-semibold text-slate-50">Deploy & Evolução contínua</p>
                <p className="text-slate-400">
                  Monitoramos, ajustamos e evoluímos o produto junto com o seu negócio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CASES / CARROSSEL */}
      <section id="cases" className="py-12 border-b border-slate-800 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-blue-300/80">
                Cases & projetos
              </p>
              <h2 className="mt-2 text-2xl sm:text-3xl font-semibold text-slate-50">
                Projetos que falam por nós
              </h2>
            </div>
            <p className="text-sm text-slate-400 max-w-md">
              Alguns exemplos de como transformamos ideias em softwares reais. Os nomes são
              ilustrativos, mas a experiência é real.
            </p>
          </div>

          <div className="flex gap-5 overflow-x-auto pb-3 snap-x snap-mandatory">
            {[
              {
                title: "Plataforma de Gestão Imobiliária",
                tag: "Web + API",
                description:
                  "Sistema completo para gestão de contratos, locatários, proprietários e financeiro.",
              },
              {
                title: "App de Serviços On-Demand",
                tag: "Mobile + Painel",
                description:
                  "Aplicativo para contratação de serviços com geolocalização e pagamentos integrados.",
              },
              {
                title: "Portal de Análises & Relatórios",
                tag: "Dashboard",
                description:
                  "Dashboard em tempo real para acompanhar indicadores críticos do negócio.",
              },
            ].map((caseItem, index) => (
              <article
                key={caseItem.title}
                className="snap-start min-w-[260px] max-w-sm rounded-2xl border border-slate-800 bg-slate-900/70 p-5 flex flex-col justify-between"
              >
                <div>
                  <span className="inline-flex items-center gap-1 rounded-full bg-blue-500/10 border border-blue-500/40 px-2.5 py-1 text-[11px] text-blue-100">
                    <Layers className="w-3 h-3" />
                    {caseItem.tag}
                  </span>
                  <h3 className="mt-3 text-sm font-semibold text-slate-50">
                    {caseItem.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-400">{caseItem.description}</p>
                </div>
                <div className="mt-4 flex items-center justify-between text-[11px] text-slate-400">
                  <span>
                    {index === 0
                      ? "Escalável e multi-tenant"
                      : index === 1
                        ? "UX focada em conversão"
                        : "Insights em tempo real"}
                  </span>
                  <span className="inline-flex items-center gap-1 text-blue-300">
                    Detalhes sob consulta
                    <ChevronRight className="w-3 h-3" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contact" className="py-14 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.1fr,1fr] gap-10 items-start">
            {/* Texto + CTA WhatsApp */}
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-blue-300/80">
                Vamos conversar?
              </p>
              <h2 className="mt-3 text-2xl sm:text-3xl font-semibold text-slate-50">
                Conte para a high2 o que você quer construir.
              </h2>
              <p className="mt-3 text-sm text-slate-400 max-w-xl">
                Envie uma mensagem pelo WhatsApp ou preencha o formulário. Vamos responder com
                ideias, prazos e caminhos possíveis para o seu projeto.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-lg shadow-emerald-500/30 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  Falar no WhatsApp
                </a>

                <button
                  onClick={() => {
                    const el = document.getElementById("contact-form");
                    if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
                  }}
                  className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold border border-slate-700 text-slate-200 hover:bg-slate-900 transition-colors"
                >
                  Preferir formulário
                </button>
              </div>

              <ul className="mt-6 space-y-2 text-sm text-slate-400">
                <li className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-blue-400" />
                  <span>Projetos com contrato, escopo e comunicação clara.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Suporte contínuo e evolução do produto.</span>
                </li>
              </ul>
            </div>

            {/* Formulário */}
            <div
              id="contact-form"
              className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 shadow-xl shadow-slate-950/70"
            >
              <div className="flex items-center gap-2 mb-4">
                <Mail className="w-5 h-5 text-blue-400" />
                <p className="text-sm font-semibold text-slate-50">Formulário de contato</p>
              </div>

              <form
                className="space-y-4 text-sm"
                onSubmit={(e) => {
                  e.preventDefault();
                  // Integração futura com backend/email
                }}
              >
                <div className="space-y-1.5">
                  <label className="block text-xs font-medium text-slate-300">
                    Nome completo
                  </label>
                  <input
                    className="w-full rounded-xl border border-slate-800 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/70 focus:border-blue-500/60"
                    placeholder="Como podemos te chamar?"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-medium text-slate-300">
                    E-mail
                  </label>
                  <input
                    type="email"
                    className="w-full rounded-xl border border-slate-800 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/70 focus:border-blue-500/60"
                    placeholder="voce@empresa.com"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-medium text-slate-300">
                    Tipo de projeto
                  </label>
                  <select
                    className="w-full rounded-xl border border-slate-800 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/70 focus:border-blue-500/60"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Selecione uma opção
                    </option>
                    <option value="app">App Mobile / PWA</option>
                    <option value="web">Sistema Web / Dashboard</option>
                    <option value="api">API / Integrações</option>
                    <option value="consultoria">Consultoria / Arquitetura</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-medium text-slate-300">
                    Conte um pouco da sua ideia
                  </label>
                  <textarea
                    className="w-full rounded-xl border border-slate-800 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/70 focus:border-blue-500/60 min-h-[90px]"
                    placeholder="Qual problema você quer resolver? Já tem algo em produção?"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 px-4 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-blue-500/40 hover:brightness-110 transition-all"
                >
                  Enviar mensagem
                  <ArrowRight className="w-4 h-4" />
                </button>

                <p className="mt-2 text-[11px] text-slate-500">
                  Usamos seus dados apenas para retornar o contato sobre seu projeto.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-800 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-200">high2</span>
            <span className="hidden sm:inline-block text-slate-500">
              • estúdio de software
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <span>© {new Date().getFullYear()} high2. Todos os direitos reservados.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
