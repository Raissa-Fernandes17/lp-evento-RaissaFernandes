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

  return (
    <div className="mt-6">
      <button
        type="button"
        onClick={ativarLembrete}
        className="rounded-lg border border-orange-500/60 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
      >
        Me lembre do evento
      </button>
      {mensagem && (
        <p role="status" className="mt-2 text-sm text-orange-300">
          {mensagem}
        </p>
      )}
    </div>
  );
}

export default BotaoLembrete;
