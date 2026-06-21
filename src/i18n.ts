export type LanguageCode = "en" | "nl" | "de" | "fr" | "es" | "it" | "pt";

export const languageOptions: Array<{ code: LanguageCode; label: string }> = [
  { code: "en", label: "English" },
  { code: "nl", label: "Nederlands" },
  { code: "de", label: "Deutsch" },
  { code: "fr", label: "Francais" },
  { code: "es", label: "Espanol" },
  { code: "it", label: "Italiano" },
  { code: "pt", label: "Portugues" },
];

export const languageLabels = Object.fromEntries(
  languageOptions.map((language) => [language.code, language.label])
) as Record<LanguageCode, string>;

export const translations = {
  en: {
    nav: { home: "Home", projects: "Projects", about: "About", contact: "Contact" },
    languageLabel: "Language",
    hero: {
      badge: "AVAILABLE FOR NEW PROJECTS",
      title: "Crafting digital experiences",
      accent: "with code.",
      sub: "Full-stack developer specializing in React, Node.js, and Cloud Architecture.\nBuilding scalable systems with mathematical precision.",
      work: "View My Work",
      contact: "Contact Me",
      codeStatus: "Building the future",
    },
    projects: {
      title: "Featured Projects",
      sub: "Selected engineering achievements.",
      viewAll: "VIEW_ALL_REPOS ->",
      descriptions: [
        "A minimalist focus and productivity timer designed for deep work sessions with integrated cloud syncing.",
        "A clean, enterprise-grade interface for managing complex workflows and team collaboration analytics.",
        "High-end booking experience for a premium barbershop, featuring a sleek dark theme with luxury gold highlights.",
      ],
    },
    about: {
      title: "About",
      sub: "A little context behind the code.",
      kicker: "SYSTEM PROFILE",
      headline: "I build fast, clean interfaces with a strong technical foundation.",
      body1: "My work sits between product thinking and engineering detail: responsive layouts, maintainable React components, reliable APIs, and interfaces that feel calm even when the system behind them is complex.",
      body2: "I like projects where performance, clarity, and polish all matter. From dashboards to booking flows, I focus on making the product easy to scan, easy to use, and ready to grow.",
      stats: [
        ["Focus", "React, TypeScript, scalable UI"],
        ["Approach", "Responsive, accessible, maintainable"],
        ["Base", "'s-Hertogenbosch, Netherlands"],
      ],
    },
    stack: {
      title: "Technical Stack",
      sub: "Architecting with the industry's most robust tools.",
    },
    contact: {
      title: "Let's build something",
      accent: "extraordinary.",
      sub: "Currently accepting inquiries for freelance projects and high-impact engineering roles.",
      name: "> Name",
      email: "> Email",
      details: "> Project details...",
      send: "Send Message",
      sending: "Sending...",
      sent: "Message sent.",
      error: "Message could not be sent. Try again.",
      subject: "New project inquiry",
    },
    footer: {
      rights: "All rights reserved.",
    },
  },
  nl: {
    nav: { home: "Home", projects: "Projecten", about: "Over mij", contact: "Contact" },
    languageLabel: "Taal",
    hero: {
      badge: "BESCHIKBAAR VOOR NIEUWE PROJECTEN",
      title: "Ik bouw digitale ervaringen",
      accent: "met code.",
      sub: "Full-stack developer gespecialiseerd in React, Node.js en Cloud Architecture.\nIk bouw schaalbare systemen met technische precisie.",
      work: "Bekijk Mijn Werk",
      contact: "Neem Contact Op",
      codeStatus: "Bouwt aan de toekomst",
    },
    projects: {
      title: "Uitgelichte Projecten",
      sub: "Geselecteerde technische resultaten.",
      viewAll: "BEKIJK_ALLE_REPOS ->",
      descriptions: [
        "Een minimalistische focus- en productiviteitstimer voor diepe werksessies met cloudsync.",
        "Een strak dashboard voor het beheren van complexe workflows en teamanalyses.",
        "Een luxe boekingservaring voor een premium barbershop met donker thema en gouden accenten.",
      ],
    },
    about: {
      title: "Over mij",
      sub: "Een beetje context achter de code.",
      kicker: "SYSTEEMPROFIEL",
      headline: "Ik bouw snelle, heldere interfaces met een sterke technische basis.",
      body1: "Mijn werk zit tussen productdenken en engineeringdetail: responsive layouts, onderhoudbare React-componenten, betrouwbare API's en interfaces die rustig voelen, ook wanneer het systeem erachter complex is.",
      body2: "Ik hou van projecten waar performance, duidelijkheid en afwerking tellen. Van dashboards tot boekingsflows: ik maak producten overzichtelijk, prettig in gebruik en klaar om te groeien.",
      stats: [
        ["Focus", "React, TypeScript, schaalbare UI"],
        ["Aanpak", "Responsive, toegankelijk, onderhoudbaar"],
        ["Basis", "'s-Hertogenbosch, Nederland"],
      ],
    },
    stack: {
      title: "Technische Stack",
      sub: "Gebouwd met robuuste tools uit de industrie.",
    },
    contact: {
      title: "Laten we iets",
      accent: "bijzonders bouwen.",
      sub: "Beschikbaar voor freelance projecten en technische rollen met impact.",
      name: "> Naam",
      email: "> E-mail",
      details: "> Projectdetails...",
      send: "Bericht Versturen",
      sending: "Versturen...",
      sent: "Bericht verzonden.",
      error: "Bericht kon niet worden verzonden. Probeer opnieuw.",
      subject: "Nieuwe projectaanvraag",
    },
    footer: {
      rights: "Alle rechten voorbehouden.",
    },
  },
  de: {
    nav: { home: "Home", projects: "Projekte", about: "Uber mich", contact: "Kontakt" },
    languageLabel: "Sprache",
    hero: {
      badge: "VERFUGBAR FUR NEUE PROJEKTE",
      title: "Digitale Erlebnisse bauen",
      accent: "mit Code.",
      sub: "Full-Stack-Entwickler mit Fokus auf React, Node.js und Cloud-Architektur.\nIch baue skalierbare Systeme mit technischer Prazision.",
      work: "Meine Arbeit",
      contact: "Kontakt",
      codeStatus: "Baut die Zukunft",
    },
    projects: {
      title: "Ausgewahlte Projekte",
      sub: "Ausgewahlte technische Arbeiten.",
      viewAll: "ALLE_REPOS_ANSEHEN ->",
      descriptions: [
        "Ein minimalistischer Fokus- und Produktivitatstimer fur Deep-Work-Sessions mit Cloud-Sync.",
        "Eine klare Enterprise-Oberflache fur komplexe Workflows und Team-Analytics.",
        "Ein hochwertiges Buchungserlebnis fur einen Premium-Barbershop mit dunklem Look und Goldakzenten.",
      ],
    },
    about: {
      title: "Uber mich",
      sub: "Etwas Kontext hinter dem Code.",
      kicker: "SYSTEMPROFIL",
      headline: "Ich baue schnelle, saubere Interfaces mit starker technischer Basis.",
      body1: "Meine Arbeit verbindet Produktdenken und Engineering-Detail: responsive Layouts, wartbare React-Komponenten, verlassliche APIs und Interfaces, die ruhig wirken, auch wenn das System dahinter komplex ist.",
      body2: "Ich mag Projekte, bei denen Performance, Klarheit und Feinschliff zahlen. Von Dashboards bis Buchungsflows mache ich Produkte leicht erfassbar, angenehm nutzbar und bereit zu wachsen.",
      stats: [
        ["Fokus", "React, TypeScript, skalierbare UI"],
        ["Ansatz", "Responsive, zuganglich, wartbar"],
        ["Basis", "'s-Hertogenbosch, Niederlande"],
      ],
    },
    stack: {
      title: "Technischer Stack",
      sub: "Architektur mit robusten Tools aus der Industrie.",
    },
    contact: {
      title: "Lass uns etwas",
      accent: "Aussergewohnliches bauen.",
      sub: "Offen fur Freelance-Projekte und technische Rollen mit hoher Wirkung.",
      name: "> Name",
      email: "> E-Mail",
      details: "> Projektdetails...",
      send: "Nachricht Senden",
      sending: "Senden...",
      sent: "Nachricht gesendet.",
      error: "Nachricht konnte nicht gesendet werden. Bitte erneut versuchen.",
      subject: "Neue Projektanfrage",
    },
    footer: {
      rights: "Alle Rechte vorbehalten.",
    },
  },
  fr: {
    nav: { home: "Accueil", projects: "Projets", about: "A propos", contact: "Contact" },
    languageLabel: "Langue",
    hero: {
      badge: "DISPONIBLE POUR DE NOUVEAUX PROJETS",
      title: "Creer des experiences digitales",
      accent: "avec du code.",
      sub: "Developpeur full-stack specialise en React, Node.js et architecture cloud.\nJe construis des systemes evolutifs avec precision technique.",
      work: "Voir Mon Travail",
      contact: "Me Contacter",
      codeStatus: "Construit le futur",
    },
    projects: {
      title: "Projets Phares",
      sub: "Realisations techniques selectionnees.",
      viewAll: "VOIR_TOUS_LES_REPOS ->",
      descriptions: [
        "Un minuteur minimaliste de concentration et productivite pour le deep work, avec synchronisation cloud.",
        "Une interface claire de niveau entreprise pour gerer des workflows complexes et des analyses d'equipe.",
        "Une experience de reservation haut de gamme pour un barbershop premium, avec theme sombre et accents dores.",
      ],
    },
    about: {
      title: "A propos",
      sub: "Un peu de contexte derriere le code.",
      kicker: "PROFIL SYSTEME",
      headline: "Je construis des interfaces rapides et propres sur une base technique solide.",
      body1: "Mon travail relie la pensee produit et le detail technique: layouts responsive, composants React maintenables, APIs fiables et interfaces calmes meme lorsque le systeme est complexe.",
      body2: "J'aime les projets ou performance, clarte et finition comptent. Des dashboards aux parcours de reservation, je rends les produits faciles a lire, faciles a utiliser et prets a evoluer.",
      stats: [
        ["Focus", "React, TypeScript, UI scalable"],
        ["Approche", "Responsive, accessible, maintenable"],
        ["Base", "'s-Hertogenbosch, Pays-Bas"],
      ],
    },
    stack: {
      title: "Stack Technique",
      sub: "Architecture avec des outils robustes de l'industrie.",
    },
    contact: {
      title: "Construisons quelque chose",
      accent: "d'extraordinaire.",
      sub: "Disponible pour des projets freelance et des roles techniques a fort impact.",
      name: "> Nom",
      email: "> E-mail",
      details: "> Details du projet...",
      send: "Envoyer",
      sending: "Envoi...",
      sent: "Message envoye.",
      error: "Le message n'a pas pu etre envoye. Reessayez.",
      subject: "Nouvelle demande de projet",
    },
    footer: {
      rights: "Tous droits reserves.",
    },
  },
  es: {
    nav: { home: "Inicio", projects: "Proyectos", about: "Sobre mi", contact: "Contacto" },
    languageLabel: "Idioma",
    hero: {
      badge: "DISPONIBLE PARA NUEVOS PROYECTOS",
      title: "Creando experiencias digitales",
      accent: "con codigo.",
      sub: "Desarrollador full-stack especializado en React, Node.js y arquitectura cloud.\nConstruyo sistemas escalables con precision tecnica.",
      work: "Ver Mi Trabajo",
      contact: "Contactame",
      codeStatus: "Construyendo el futuro",
    },
    projects: {
      title: "Proyectos Destacados",
      sub: "Logros tecnicos seleccionados.",
      viewAll: "VER_TODOS_LOS_REPOS ->",
      descriptions: [
        "Un temporizador minimalista de enfoque y productividad para sesiones de trabajo profundo con sincronizacion en la nube.",
        "Una interfaz clara de nivel empresarial para gestionar workflows complejos y analiticas de equipo.",
        "Una experiencia premium de reservas para una barberia de alta gama con tema oscuro y detalles dorados.",
      ],
    },
    about: {
      title: "Sobre mi",
      sub: "Un poco de contexto detras del codigo.",
      kicker: "PERFIL DEL SISTEMA",
      headline: "Construyo interfaces rapidas y limpias con una base tecnica solida.",
      body1: "Mi trabajo une pensamiento de producto y detalle tecnico: layouts responsive, componentes React mantenibles, APIs fiables e interfaces que se sienten tranquilas incluso cuando el sistema es complejo.",
      body2: "Me gustan los proyectos donde importan rendimiento, claridad y acabado. Desde dashboards hasta flujos de reserva, hago productos faciles de leer, usar y escalar.",
      stats: [
        ["Enfoque", "React, TypeScript, UI escalable"],
        ["Metodo", "Responsive, accesible, mantenible"],
        ["Base", "'s-Hertogenbosch, Paises Bajos"],
      ],
    },
    stack: {
      title: "Stack Tecnico",
      sub: "Arquitectura con herramientas robustas de la industria.",
    },
    contact: {
      title: "Construyamos algo",
      accent: "extraordinario.",
      sub: "Disponible para proyectos freelance y roles tecnicos de alto impacto.",
      name: "> Nombre",
      email: "> Email",
      details: "> Detalles del proyecto...",
      send: "Enviar Mensaje",
      sending: "Enviando...",
      sent: "Mensaje enviado.",
      error: "No se pudo enviar el mensaje. Intentalo de nuevo.",
      subject: "Nueva consulta de proyecto",
    },
    footer: {
      rights: "Todos los derechos reservados.",
    },
  },
  it: {
    nav: { home: "Home", projects: "Progetti", about: "Chi sono", contact: "Contatto" },
    languageLabel: "Lingua",
    hero: {
      badge: "DISPONIBILE PER NUOVI PROGETTI",
      title: "Creo esperienze digitali",
      accent: "con il codice.",
      sub: "Sviluppatore full-stack specializzato in React, Node.js e architettura cloud.\nCostruisco sistemi scalabili con precisione tecnica.",
      work: "Vedi Il Mio Lavoro",
      contact: "Contattami",
      codeStatus: "Costruendo il futuro",
    },
    projects: {
      title: "Progetti In Evidenza",
      sub: "Risultati tecnici selezionati.",
      viewAll: "VEDI_TUTTI_I_REPO ->",
      descriptions: [
        "Un timer minimalista per focus e produttivita, pensato per sessioni di deep work con sincronizzazione cloud.",
        "Un'interfaccia pulita di livello enterprise per gestire workflow complessi e analisi del team.",
        "Un'esperienza di prenotazione premium per un barbershop di alta gamma, con tema scuro e accenti dorati.",
      ],
    },
    about: {
      title: "Chi sono",
      sub: "Un po' di contesto dietro il codice.",
      kicker: "PROFILO SISTEMA",
      headline: "Costruisco interfacce veloci e pulite con una solida base tecnica.",
      body1: "Il mio lavoro unisce pensiero di prodotto e dettaglio tecnico: layout responsive, componenti React mantenibili, API affidabili e interfacce calme anche quando il sistema e complesso.",
      body2: "Mi piacciono i progetti in cui contano performance, chiarezza e cura. Dai dashboard ai flussi di prenotazione, rendo i prodotti facili da leggere, usare e far crescere.",
      stats: [
        ["Focus", "React, TypeScript, UI scalabile"],
        ["Approccio", "Responsive, accessibile, mantenibile"],
        ["Base", "'s-Hertogenbosch, Paesi Bassi"],
      ],
    },
    stack: {
      title: "Stack Tecnico",
      sub: "Architettura con strumenti robusti del settore.",
    },
    contact: {
      title: "Costruiamo qualcosa",
      accent: "di straordinario.",
      sub: "Disponibile per progetti freelance e ruoli tecnici ad alto impatto.",
      name: "> Nome",
      email: "> Email",
      details: "> Dettagli del progetto...",
      send: "Invia Messaggio",
      sending: "Invio...",
      sent: "Messaggio inviato.",
      error: "Impossibile inviare il messaggio. Riprova.",
      subject: "Nuova richiesta di progetto",
    },
    footer: {
      rights: "Tutti i diritti riservati.",
    },
  },
  pt: {
    nav: { home: "Inicio", projects: "Projetos", about: "Sobre", contact: "Contato" },
    languageLabel: "Idioma",
    hero: {
      badge: "DISPONIVEL PARA NOVOS PROJETOS",
      title: "Criando experiencias digitais",
      accent: "com codigo.",
      sub: "Desenvolvedor full-stack especializado em React, Node.js e arquitetura cloud.\nConstruo sistemas escalaveis com precisao tecnica.",
      work: "Ver Meu Trabalho",
      contact: "Contato",
      codeStatus: "Construindo o futuro",
    },
    projects: {
      title: "Projetos Em Destaque",
      sub: "Resultados tecnicos selecionados.",
      viewAll: "VER_TODOS_OS_REPOS ->",
      descriptions: [
        "Um temporizador minimalista de foco e produtividade para sessoes de trabalho profundo com sincronizacao em nuvem.",
        "Uma interface limpa de nivel empresarial para gerir workflows complexos e analises de equipe.",
        "Uma experiencia premium de agendamento para uma barbearia de alto nivel, com tema escuro e detalhes dourados.",
      ],
    },
    about: {
      title: "Sobre",
      sub: "Um pouco de contexto por tras do codigo.",
      kicker: "PERFIL DO SISTEMA",
      headline: "Construo interfaces rapidas e limpas com uma base tecnica forte.",
      body1: "Meu trabalho conecta pensamento de produto e detalhe tecnico: layouts responsivos, componentes React sustentaveis, APIs confiaveis e interfaces calmas mesmo quando o sistema por tras e complexo.",
      body2: "Gosto de projetos onde performance, clareza e acabamento importam. De dashboards a fluxos de agendamento, foco em produtos faceis de ler, usar e evoluir.",
      stats: [
        ["Foco", "React, TypeScript, UI escalavel"],
        ["Abordagem", "Responsivo, acessivel, sustentavel"],
        ["Base", "'s-Hertogenbosch, Paises Baixos"],
      ],
    },
    stack: {
      title: "Stack Tecnico",
      sub: "Arquitetura com ferramentas robustas da industria.",
    },
    contact: {
      title: "Vamos construir algo",
      accent: "extraordinario.",
      sub: "Disponivel para projetos freelance e cargos tecnicos de alto impacto.",
      name: "> Nome",
      email: "> Email",
      details: "> Detalhes do projeto...",
      send: "Enviar Mensagem",
      sending: "Enviando...",
      sent: "Mensagem enviada.",
      error: "Nao foi possivel enviar a mensagem. Tente novamente.",
      subject: "Nova consulta de projeto",
    },
    footer: {
      rights: "Todos os direitos reservados.",
    },
  },
};

export type Translation = (typeof translations)["en"];

export function detectLanguage(): LanguageCode {
  const browserLanguage = globalThis.navigator?.language?.split("-")[0] as
    | LanguageCode
    | undefined;
  return browserLanguage && browserLanguage in translations ? browserLanguage : "en";
}
