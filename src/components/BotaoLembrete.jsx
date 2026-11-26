import { useState } from "react";

function BotaoLembrete() {
  const [mensagem, setMensagem] = useState("");

  async function ativarLembrete() {
    // 1. Se o navegador não tiver 'Notification' em window
    if (!("Notification" in window)) {
      setMensagem("Este navegador não aceita notificações.");
      return;
    }

    // 2. Peça a permissão e guarde a resposta numa constante
    const resposta = await Notification.requestPermission();

    // 3. Se a resposta for diferente de 'granted'
    if (resposta !== "granted") {
      setMensagem("Você não permitiu as notificações.");
      return;
    }

    // 4. Espere o Service Worker ficar pronto e guarde em 'registro'
    const registro = await navigator.serviceWorker.ready;

    // 5. Mostre a notificação com registro.showNotification(...)
    registro.showNotification("Corrida Noturna OC", {
      body: "Lembrete ativado! Largada dia 17 de abril de 2027 às 19h30 na Praça Central.",
      icon: "/icone-192.png",
    });

    // 6. Mostre na tela a mensagem "Lembrete ativado!"
    setMensagem("Lembrete ativado!");
  }

  const ativado = mensagem === "Lembrete ativado!";

  return (
    <div className="flex flex-col items-stretch sm:items-start">
      <button
        type="button"
        onClick={ativarLembrete}
        className={`group inline-flex min-h-[3.5rem] items-center justify-center gap-2.5 rounded-xl border px-6 py-3.5 text-sm font-extrabold uppercase tracking-wider backdrop-blur-md transition-all duration-200 cursor-pointer motion-safe:hover:-translate-y-0.5 motion-safe:active:scale-95 ${
          ativado
            ? "border-emerald-400/50 bg-emerald-500/15 text-emerald-200 shadow-lg shadow-emerald-950/30"
            : "border-white/25 bg-white/10 text-white shadow-lg shadow-black/20 hover:border-orange-400/80 hover:bg-white/15"
        }`}
      >
        <span
          aria-hidden="true"
          className="flex items-center justify-center text-orange-400 transition-transform duration-200 group-hover:rotate-12"
        >
          {ativado ? (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5 text-emerald-300"
            >
              <path d="M20 6L9 17l-5-5" />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5"
            >
              <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
              <path d="M13.73 21a2 2 0 0 1-3.46 0" />
            </svg>
          )}
        </span>
        <span>{ativado ? "Lembrete Ativado" : "Me lembre do evento"}</span>
      </button>

      {mensagem && (
        <p
          role="status"
          className={`mt-3 inline-flex items-center gap-1.5 rounded-full border px-4 py-1.5 text-xs font-bold tracking-wide backdrop-blur-sm ${
            ativado
              ? "border-emerald-400/40 bg-emerald-500/15 text-emerald-200"
              : "border-orange-400/40 bg-orange-500/15 text-orange-200"
          }`}
        >
          {mensagem}
        </p>
      )}
    </div>
  );
}

export default BotaoLembrete;
