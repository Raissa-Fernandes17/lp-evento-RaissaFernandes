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
    <div className="mt-5 flex flex-col items-center">
      <button
        type="button"
        onClick={ativarLembrete}
        className="group inline-flex items-center gap-2.5 rounded-xl border-2 border-destaque/70 bg-white/5 px-6 py-3 text-sm font-extrabold uppercase tracking-wider text-white backdrop-blur-md shadow-md transition-all duration-200 hover:border-destaque hover:bg-destaque/20 hover:shadow-orange-500/20 motion-safe:hover:scale-105 motion-safe:active:scale-95 cursor-pointer"
      >
        <span
          aria-hidden="true"
          className="text-base transition-transform duration-200 group-hover:rotate-12"
        >
          {ativado ? "✅" : "🔔"}
        </span>
        <span>{ativado ? "Lembrete Ativado" : "Me lembre do evento"}</span>
      </button>

      {mensagem && (
        <p
          role="status"
          className={`mt-3 inline-flex items-center gap-1.5 rounded-full border px-4 py-1 text-xs font-bold tracking-wide backdrop-blur-sm ${
            ativado
              ? "border-emerald-400/40 bg-emerald-500/15 text-emerald-300"
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
