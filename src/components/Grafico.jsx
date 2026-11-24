import { useEffect, useRef } from "react";

const dados = [
  { rotulo: "Corrida 5km", valor: 180 },
  { rotulo: "Corrida 10km", valor: 115 },
  { rotulo: "Caminhada 3km", valor: 90 },
];

function Grafico() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const maior = Math.max(...dados.map((d) => d.valor));

    // Limpa o canvas antes de desenhar (útil se os dados mudarem)
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    dados.forEach((item, i) => {
      const largura = (item.valor / maior) * 200; // a maior barra tem 200px
      const y = 20 + i * 50; // cada barra 50px abaixo da anterior

      // 1. Escolhe a cor da barra (laranja destaque do seu evento)
      ctx.fillStyle = "#ff5a1f";

      // 2. Desenha a barra com fillRect, começando em x = 120
      ctx.fillRect(120, y, largura, 28);

      // 3. Troca a cor para escuro e escreve o rótulo em x = 10
      ctx.fillStyle = "#0f172a";
      ctx.font = "bold 13px sans-serif";
      ctx.fillText(item.rotulo, 10, y + 19);

      // 4. Escreve o valor logo depois do fim da barra
      ctx.fillStyle = "#334155";
      ctx.font = "bold 13px sans-serif";
      ctx.fillText(`${item.valor} atletas`, 120 + largura + 8, y + 19);
    });
  }, []);

  return (
    <section className="px-4 py-16 max-w-4xl mx-auto">
      <h2 className="text-3xl font-black uppercase tracking-tight text-slate-900">
        Inscritos por Modalidade
      </h2>
      <p className="mt-2 text-slate-600">
        Acompanhe a distribuição atual dos atletas confirmados na Corrida Noturna OC.
      </p>

      <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <canvas
          ref={canvasRef}
          width={410}
          height={170}
          role="img"
          aria-label="Gráfico de barras mostrando inscritos por modalidade: Corrida 5km com 180 atletas, Corrida 10km com 115 atletas e Caminhada 3km com 90 atletas."
          className="max-w-full"
        />
      </div>
    </section>
  );
}

export default Grafico;
