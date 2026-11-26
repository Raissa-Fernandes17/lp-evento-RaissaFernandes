import { useEffect, useRef } from "react";

const dados = [
  { rotulo: "Corrida 5km", valor: 180 },
  { rotulo: "Corrida 10km", valor: 115 },
  { rotulo: "Caminhada 3km", valor: 90 },
];

const totalAtletas = dados.reduce((soma, item) => soma + item.valor, 0);

function retanguloArredondado(ctx, x, y, largura, altura, raio) {
  const r = Math.min(raio, largura / 2, altura / 2);
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + largura - r, y);
  ctx.quadraticCurveTo(x + largura, y, x + largura, y + r);
  ctx.lineTo(x + largura, y + altura - r);
  ctx.quadraticCurveTo(x + largura, y + altura, x + largura - r, y + altura);
  ctx.lineTo(x + r, y + altura);
  ctx.quadraticCurveTo(x, y + altura, x, y + altura - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

function Grafico() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const container = canvas.parentElement;

    function desenhar() {
      const ctx = canvas.getContext("2d");
      const maior = Math.max(...dados.map((d) => d.valor));
      const dpr = window.devicePixelRatio || 1;
      const larguraLogica = Math.max(260, Math.floor(container?.clientWidth || 580));
      const compacto = larguraLogica < 460;
      const alturaLogica = compacto ? 236 : 224;

      canvas.width = larguraLogica * dpr;
      canvas.height = alturaLogica * dpr;
      canvas.style.width = `${larguraLogica}px`;
      canvas.style.height = `${alturaLogica}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Limpa o canvas antes de desenhar
      ctx.clearRect(0, 0, larguraLogica, alturaLogica);

      if (compacto) {
        const inicioX = 4;
        const larguraMaxBarra = larguraLogica - 8;

        dados.forEach((item, i) => {
          const topo = 14 + i * 74;
          const largura = Math.max(24, (item.valor / maior) * larguraMaxBarra);
          const alturaBarra = 24;

          ctx.fillStyle = "#0b1528";
          ctx.font = "700 13px 'Plus Jakarta Sans', sans-serif";
          ctx.textBaseline = "alphabetic";
          ctx.textAlign = "left";
          ctx.fillText(item.rotulo, inicioX, topo + 12);

          ctx.fillStyle = "#c2410c";
          ctx.font = "800 13px 'Plus Jakarta Sans', sans-serif";
          ctx.textAlign = "right";
          ctx.fillText(`${item.valor} atletas`, larguraLogica - 4, topo + 12);

          ctx.textAlign = "left";
          ctx.fillStyle = "#f1f5f9";
          retanguloArredondado(ctx, inicioX, topo + 22, larguraMaxBarra, alturaBarra, 8);
          ctx.fill();

          const gradiente = ctx.createLinearGradient(inicioX, topo + 22, inicioX + largura, topo + 22);
          gradiente.addColorStop(0, "#c2410c");
          gradiente.addColorStop(1, "#ff5a1f");
          ctx.fillStyle = gradiente;
          retanguloArredondado(ctx, inicioX, topo + 22, largura, alturaBarra, 8);
          ctx.fill();
        });
        return;
      }

      const inicioX = 142;
      const larguraMaxBarra = Math.max(180, larguraLogica - inicioX - 108);

      // Linhas sutis de grade vertical
      ctx.strokeStyle = "#e2e8f0";
      ctx.lineWidth = 1;
      [0.25, 0.5, 0.75, 1].forEach((fator) => {
        const gx = inicioX + larguraMaxBarra * fator;
        ctx.beginPath();
        ctx.setLineDash([4, 4]);
        ctx.moveTo(gx, 16);
        ctx.lineTo(gx, alturaLogica - 16);
        ctx.stroke();
      });
      ctx.setLineDash([]);

      dados.forEach((item, i) => {
        const largura = (item.valor / maior) * larguraMaxBarra;
        const y = 26 + i * 66;
        const alturaBarra = 34;
        const raio = 10;

        // Trilha de fundo da barra
        ctx.fillStyle = "#f1f5f9";
        retanguloArredondado(ctx, inicioX, y, larguraMaxBarra, alturaBarra, raio);
        ctx.fill();

        // Barra principal em gradiente laranja
        const gradiente = ctx.createLinearGradient(inicioX, y, inicioX + largura, y);
        gradiente.addColorStop(0, "#c2410c");
        gradiente.addColorStop(1, "#ff5a1f");
        ctx.fillStyle = gradiente;
        retanguloArredondado(ctx, inicioX, y, largura, alturaBarra, raio);
        ctx.fill();

        // Rótulo da modalidade em azul-marinho
        ctx.fillStyle = "#0b1528";
        ctx.font = "700 14px 'Plus Jakarta Sans', sans-serif";
        ctx.textBaseline = "middle";
        ctx.textAlign = "left";
        ctx.fillText(item.rotulo, 6, y + alturaBarra / 2);

        // Valor destacado em laranja logo após a barra
        ctx.fillStyle = "#c2410c";
        ctx.font = "800 14px 'Plus Jakarta Sans', sans-serif";
        ctx.fillText(`${item.valor} atletas`, inicioX + largura + 12, y + alturaBarra / 2);
      });
    }

    desenhar();

    if (typeof ResizeObserver !== "undefined" && container) {
      const observer = new ResizeObserver(() => desenhar());
      observer.observe(container);
      return () => observer.disconnect();
    }
  }, []);

  return (
    <section
      aria-labelledby="titulo-grafico"
      className="py-20 sm:py-24 bg-slate-50 border-b border-slate-200/80"
    >
      <div className="section-shell reveal">
        <div className="section-heading">
          <span className="section-kicker">Participação em Tempo Real</span>
          <h2 id="titulo-grafico" className="section-title">
            Inscritos por Modalidade
          </h2>
          <p className="section-description">
            Acompanhe a distribuição atual dos atletas confirmados na Corrida Noturna OC.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 items-stretch">
          {/* Cards de números destacados */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="rounded-3xl bg-primaria text-white p-6 shadow-lg border border-white/10 flex items-center justify-between gap-4">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-[0.16em] text-orange-300">
                  Total Confirmado
                </span>
                <p className="font-display text-5xl font-black text-white mt-1 leading-none">
                  {totalAtletas}{' '}
                  <span className="text-xl font-bold text-orange-400 uppercase">
                    atletas
                  </span>
                </p>
              </div>
              <span
                aria-hidden="true"
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-destaque text-white shadow-md"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <path d="M18 20V10M12 20V4M6 20v-6" />
                </svg>
              </span>
            </div>

            <div className="grid sm:grid-cols-3 lg:grid-cols-1 gap-3 flex-1">
              {dados.map((item) => {
                const percentual = Math.round((item.valor / totalAtletas) * 100);
                return (
                  <div
                    key={item.rotulo}
                    className="rounded-2xl border border-slate-200/90 bg-white p-4 shadow-xs flex items-center justify-between gap-3 hover:border-orange-300 transition-colors"
                  >
                    <div>
                      <p className="text-sm font-extrabold text-primaria">
                        {item.rotulo}
                      </p>
                      <p className="text-xs font-bold text-slate-500 mt-0.5">
                        {percentual}% dos inscritos
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="font-display text-3xl font-black text-destaque leading-none">
                        {item.valor}
                      </span>
                      <span className="block text-[10px] font-extrabold uppercase tracking-wider text-slate-500">
                        atletas
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Gráfico Canvas aprimorado */}
          <div className="lg:col-span-7 rounded-3xl border border-slate-200/90 bg-white p-5 sm:p-7 shadow-sm flex flex-col justify-between">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-slate-100">
              <h3 className="text-sm font-extrabold uppercase tracking-wider text-primaria">
                Comparativo por Categoria
              </h3>
              <span className="inline-flex items-center gap-2 text-xs font-bold text-slate-600">
                <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-destaque" />
                Atletas confirmados
              </span>
            </div>

            <div className="mt-4 w-full">
              <canvas
                ref={canvasRef}
                role="img"
                aria-label="Gráfico de barras mostrando inscritos por modalidade: Corrida 5km com 180 atletas, Corrida 10km com 115 atletas e Caminhada 3km com 90 atletas."
                className="block w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Grafico;
