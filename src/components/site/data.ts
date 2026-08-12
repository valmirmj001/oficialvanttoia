export const WHATSAPP_URL =
  "https://wa.me/5500000000000?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Vantto%20AI%20e%20quero%20analisar%20a%20opera%C3%A7%C3%A3o%20da%20minha%20empresa.";

export const PIPELINE = [
  { n: "01", title: "Lead recebido", meta: "origem · campanha" },
  { n: "02", title: "Agente iniciou conversa", meta: "contexto · tom de voz" },
  { n: "03", title: "Lead qualificado", meta: "critérios · score" },
  { n: "04", title: "CRM atualizado", meta: "registro · histórico" },
  { n: "05", title: "Agendamento realizado", meta: "agenda · confirmação" },
  { n: "06", title: "Time comercial acionado", meta: "handoff · vendedor" },
];

export const PROBLEMS = [
  { when: "22:47", title: "Leads chegam fora do horário", tag: "sem resposta" },
  { when: "+ 2 h", title: "Mensagens ficam sem retorno", tag: "procura o concorrente" },
  { when: "D + 3", title: "Vendedores esquecem o follow-up", tag: "esquecido" },
  { when: "Diário", title: "Processos continuam manuais", tag: "tempo caro" },
  { when: "Sempre", title: "Dados espalhados entre app, planilha e caderno", tag: "sem histórico" },
  { when: "Mensal", title: "Oportunidades pagas se perdem no caminho", tag: "verba parada" },
];

export const ECOSYSTEM = [
  {
    n: "01",
    title: "Atrair",
    subtitle: "Tráfego pago",
    text: "Campanhas que colocam a oferta na frente de quem tem perfil para comprar.",
  },
  {
    n: "02",
    title: "Converter",
    subtitle: "Sites e landing pages",
    text: "Páginas rápidas que explicam a proposta e conduzem para a próxima ação.",
  },
  {
    n: "03",
    title: "Atender",
    subtitle: "Agentes de IA",
    text: "Resposta imediata, a qualquer horário, com qualificação no meio da conversa.",
  },
  {
    n: "04",
    title: "Automatizar",
    subtitle: "Integrações e processos",
    text: "CRM, agenda e ferramentas internas atualizados sem ninguém copiar e colar.",
  },
  {
    n: "05",
    title: "Crescer",
    subtitle: "Dados e otimização",
    text: "Leitura de cada etapa para descobrir onde o sistema trava e corrigir a rota.",
  },
];

export const CHAT = [
  { from: "lead", text: "Oi, vi o anúncio de vocês. Como funciona?" },
  {
    from: "agent",
    text: "Olá! Trabalhamos com sistemas de IA e automação comercial. Me conta: qual o nome da sua empresa e o que você quer resolver hoje?",
  },
  { from: "lead", text: "Sou da Nexora. A gente perde lead fora do horário." },
  {
    from: "agent",
    text: "Entendi — atendimento fora do horário é a maior fonte de perda. Vocês recebem quantos contatos por semana, mais ou menos?",
  },
  { from: "lead", text: "Uns 60 por semana, e respondemos talvez metade." },
  {
    from: "agent",
    text: "Perfeito. Isso é um caso clássico para um agente 24/7. Tenho quinta às 16:30 com um especialista. Fecha para você?",
  },
  { from: "lead", text: "Fecha!" },
];

export const STATUS_STEPS = [
  "Conversa iniciada",
  "Necessidade identificada",
  "Lead qualificado",
  "CRM atualizado",
];

export const FLOW = [
  {
    n: "01",
    title: "Tráfego",
    kind: "mídia paga",
    metric: "24.892 impressões",
    text: "A campanha coloca a oferta na frente de quem tem perfil para comprar.",
  },
  {
    n: "02",
    title: "Site",
    kind: "experiência",
    metric: "1.284 visitantes",
    text: "A página explica a proposta em segundos e conduz para a próxima ação.",
  },
  {
    n: "03",
    title: "Captura",
    kind: "formulário · mensagem",
    metric: "312 leads",
    text: "Todo contato entra por um canal só, com origem registrada.",
  },
  {
    n: "04",
    title: "Agente de IA",
    kind: "automático",
    metric: "198 conversas",
    text: "Responde na hora, a qualquer horário, e conduz a conversa com contexto.",
  },
  {
    n: "05",
    title: "Qualificação",
    kind: "automático",
    metric: "74 oportunidades",
    text: "Separa quem tem fit de quem não tem, segundo critérios definidos com você.",
  },
  {
    n: "06",
    title: "CRM",
    kind: "automático",
    metric: "52 leads quentes",
    text: "Registro, histórico e origem atualizados sem ninguém digitar nada.",
  },
  {
    n: "07",
    title: "Agendamento automático",
    kind: "automático",
    metric: "16:30 confirmado",
    text: "O agente consulta disponibilidade, oferece horários e confirma a reunião automaticamente.",
  },
  {
    n: "08",
    title: "Time comercial",
    kind: "handoff",
    metric: "",
    text: "O vendedor entra com histórico completo e agenda definida — só para negociar.",
  },
  {
    n: "09",
    title: "Venda",
    kind: "fechamento",
    metric: "",
    text: "E o que aconteceu em cada etapa volta como dado para ajustar a campanha.",
  },
];

export const PRINCIPLES = [
  {
    n: "01",
    title: "Estrutura antes de volume",
    text: "Não adianta aumentar o tráfego se o atendimento não dá conta. Primeiro a operação sustenta, depois ela escala.",
  },
  {
    n: "02",
    title: "Automação com critério",
    text: "Automatizamos o que é repetitivo e previsível. O que exige julgamento humano continua com o seu time — com contexto pronto.",
  },
  {
    n: "03",
    title: "Tudo medido",
    text: "Cada etapa gera dado: origem, resposta, qualificação, agendamento e fechamento. Decisão sem achismo.",
  },
  {
    n: "04",
    title: "Um sistema, não peças soltas",
    text: "Site, campanha, agente e CRM são entregues conectados. Nada fica dependendo de alguém lembrar de repassar.",
  },
];

export const PROCESS = [
  {
    n: "01",
    when: "Semana 1",
    title: "Diagnóstico",
    text: "Mapeamos como o lead entra hoje, onde ele para e quanto isso custa por mês.",
  },
  {
    n: "02",
    when: "Semana 1",
    title: "Desenho da operação",
    text: "Definimos funil, critérios de qualificação, regras de agendamento e pontos de handoff.",
  },
  {
    n: "03",
    when: "Semanas 2–3",
    title: "Construção",
    text: "Site ou landing page, campanhas, agente de IA e integrações com CRM e agenda.",
  },
  {
    n: "04",
    when: "Semana 3",
    title: "Treinamento do agente",
    text: "O agente aprende sua oferta, objeções, tom de voz e limites — validado com você.",
  },
  {
    n: "05",
    when: "Semana 4",
    title: "Go-live",
    text: "Publicação, campanha no ar e acompanhamento diário nos primeiros dias.",
  },
  {
    n: "06",
    when: "Mensal",
    title: "Otimização contínua",
    text: "Leitura de dados, ajuste de criativos, verba, roteiros e taxa de agendamento.",
  },
];

export const FAQ = [
  {
    q: "O agente de IA substitui meu time comercial?",
    a: "Não. Ele cobre a primeira resposta, a qualificação e o agendamento — as etapas repetitivas e sensíveis a tempo. O vendedor entra na negociação já com o histórico e a agenda definida.",
  },
  {
    q: "O cliente percebe que está falando com uma IA?",
    a: "O agente é transparente quando perguntado e usa o tom de voz da sua marca. A conversa é objetiva, sem enrolação, e passa para um humano sempre que o caso sai do escopo definido.",
  },
  {
    q: "Funciona com o CRM e a agenda que já uso?",
    a: "Sim. Integramos com as ferramentas que sua operação já usa. Quando não existe integração pronta, conectamos via API ou automação intermediária.",
  },
  {
    q: "Preciso contratar site, tráfego e IA juntos?",
    a: "Não é obrigatório, mas o resultado é maior quando as peças conversam. Se você já tem site ou campanhas rodando, avaliamos o que aproveitar antes de propor qualquer refação.",
  },
  {
    q: "Quanto tempo até ver resultado?",
    a: "A operação costuma entrar no ar em cerca de 4 semanas. Os primeiros dados de qualificação e agendamento aparecem nos primeiros dias de campanha; a otimização é contínua a partir daí.",
  },
  {
    q: "E se minha empresa for pequena?",
    a: "O método é o mesmo, com escopo proporcional. Operações menores costumam ganhar ainda mais com automação, porque não têm equipe sobrando para responder fora do horário.",
  },
];
