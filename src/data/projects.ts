export type ProjectSection = {
  title: string;
  body: string;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  sections: [ProjectSection, ProjectSection];
  url?: string;
  images: string[];
};

export const projects: Project[] = [
  {
    id: "bilancio-consolidato",
    title: "Bilancio Consolidato",
    description: "Redazione del bilancio consolidato per un gruppo societario con 12 controllate, applicando i principi IAS/IFRS e garantendo la conformità normativa.",
    sections: [
      {
        title: "Il contesto",
        body: "Un gruppo societario con 12 controllate operative in 4 paesi richiedeva il consolidamento dei conti secondo i principi IAS/IFRS, con eliminazione delle partite infragruppo e gestione delle differenze di cambio.",
      },
      {
        title: "Il mio contributo",
        body: "Ho coordinato la raccolta dati dalle singole società, supervisionato le rettifiche di consolidamento e redatto la nota integrativa, garantendo la conformità alla normativa vigente e il rispetto delle scadenze di deposito.",
      },
    ],
    images: [
      "https://picsum.photos/seed/gds1a/900/600",
      "https://picsum.photos/seed/gds1b/900/600",
      "https://picsum.photos/seed/gds1c/900/600",
      "https://picsum.photos/seed/gds1d/900/600",
    ],
  },
  {
    id: "ottimizzazione-fiscale",
    title: "Ottimizzazione Fiscale PMI",
    description: "Analisi e ristrutturazione della posizione fiscale di una PMI manifatturiera, con riduzione del carico tributario del 18% nel rispetto della normativa vigente.",
    sections: [
      {
        title: "La sfida",
        body: "La PMI presentava una struttura societaria inefficiente dal punto di vista fiscale, con duplicazioni di costi e mancato utilizzo di agevolazioni previste dalla normativa per il settore manifatturiero.",
      },
      {
        title: "I risultati",
        body: "Attraverso la riorganizzazione delle voci di costo e l'applicazione dei crediti d'imposta per ricerca e sviluppo, il carico tributario si è ridotto del 18%, con un risparmio netto di circa 120.000 euro nell'esercizio.",
      },
    ],
    images: [
      "https://picsum.photos/seed/gds2a/900/600",
      "https://picsum.photos/seed/gds2b/900/600",
      "https://picsum.photos/seed/gds2c/900/600",
      "https://picsum.photos/seed/gds2d/900/600",
    ],
  },
  {
    id: "due-diligence",
    title: "Due Diligence Societaria",
    description: "Attività di due diligence contabile e fiscale in supporto a un'operazione di M&A da 4 milioni di euro, con analisi dei rischi e delle passività potenziali.",
    sections: [
      {
        title: "L'operazione",
        body: "Un'acquisizione da 4 milioni di euro nel settore dei servizi logistici ha richiesto un'analisi approfondita della target, con verifica della qualità degli utili, delle contingenze fiscali e dei contratti in essere.",
      },
      {
        title: "La metodologia",
        body: "Ho condotto l'analisi dei bilanci storici su base triennale, identificato le passività potenziali non rilevate e predisposto il report finale con le raccomandazioni per la strutturazione del prezzo e delle garanzie contrattuali.",
      },
    ],
    images: [
      "https://picsum.photos/seed/gds3a/900/600",
      "https://picsum.photos/seed/gds3b/900/600",
      "https://picsum.photos/seed/gds3c/900/600",
      "https://picsum.photos/seed/gds3d/900/600",
    ],
  },
  {
    id: "revisione-contabile",
    title: "Revisione Contabile",
    description: "Revisione legale dei conti per azienda del settore retail con 3 sedi operative. Emissione della relazione di revisione con giudizio senza rilievi.",
    sections: [
      {
        title: "Il mandato",
        body: "La società retail, con tre punti vendita e un fatturato annuo di circa 8 milioni di euro, era soggetta a revisione legale obbligatoria. L'incarico comprendeva la verifica delle aree più rischiose: rimanenze, crediti commerciali e ricavi.",
      },
      {
        title: "L'approccio",
        body: "Ho pianificato il lavoro con focus sulle aree di rischio significativo, eseguito le procedure di audit campionarie e supervisionato le verifiche fisiche delle rimanenze presso i tre punti vendita, concludendo con giudizio senza rilievi.",
      },
    ],
    images: [
      "https://picsum.photos/seed/gds4a/900/600",
      "https://picsum.photos/seed/gds4b/900/600",
      "https://picsum.photos/seed/gds4c/900/600",
      "https://picsum.photos/seed/gds4d/900/600",
    ],
  },
  {
    id: "business-plan",
    title: "Business Plan Startup",
    description: "Sviluppo del piano industriale e finanziario per una startup fintech in fase seed. Modellizzazione dei flussi di cassa e del break-even su orizzonte triennale.",
    sections: [
      {
        title: "Il progetto",
        body: "Una startup fintech in fase di raccolta seed necessitava di un business plan credibile per presentarsi agli investitori. Il modello doveva coprire tre scenari (pessimistico, base, ottimistico) con proiezioni mensili nel primo anno.",
      },
      {
        title: "Il modello",
        body: "Ho costruito il modello finanziario da zero, definito le ipotesi di crescita utenti e monetizzazione, calcolato il punto di break-even e strutturato il piano di utilizzo dei fondi raccolti, integrando le metriche SaaS richieste dagli investitori.",
      },
    ],
    images: [
      "https://picsum.photos/seed/gds5a/900/600",
      "https://picsum.photos/seed/gds5b/900/600",
      "https://picsum.photos/seed/gds5c/900/600",
      "https://picsum.photos/seed/gds5d/900/600",
    ],
  },
  {
    id: "analisi-costi",
    title: "Analisi Costi e Ricavi",
    description: "Implementazione di un sistema di controllo di gestione per azienda di servizi: budget, analisi degli scostamenti e reporting mensile alla direzione.",
    sections: [
      {
        title: "Il problema",
        body: "L'azienda di servizi operava senza un sistema strutturato di controllo di gestione: le decisioni venivano prese senza dati aggiornati e il confronto tra budget e consuntivo avveniva solo a fine anno, troppo tardi per correggere le rotte.",
      },
      {
        title: "La soluzione",
        body: "Ho progettato il sistema di reporting mensile con analisi degli scostamenti per centro di costo, implementato il processo di budgeting annuale e formato il team amministrativo sull'utilizzo degli strumenti, riducendo i tempi di chiusura da 20 a 7 giorni.",
      },
    ],
    images: [
      "https://picsum.photos/seed/gds6a/900/600",
      "https://picsum.photos/seed/gds6b/900/600",
      "https://picsum.photos/seed/gds6c/900/600",
      "https://picsum.photos/seed/gds6d/900/600",
    ],
  },
  {
    id: "ristrutturazione",
    title: "Ristrutturazione Aziendale",
    description: "Supporto nella riorganizzazione finanziaria di un'impresa in crisi: piano di risanamento, accordo con i creditori e monitoraggio dell'esecuzione.",
    sections: [
      {
        title: "La situazione",
        body: "Un'impresa manifatturiera con 45 dipendenti si trovava in stato di crisi da sovraindebitamento, con esposizioni bancarie scadute e fornitori insoddisfatti. Il rischio di insolvenza era concreto e richiedeva un intervento rapido.",
      },
      {
        title: "Il piano",
        body: "Ho supportato la predisposizione del piano di risanamento attestato, condotto le trattative con gli istituti di credito per la rinegoziazione dei debiti e monitorato l'esecuzione trimestrale degli indicatori chiave, accompagnando l'impresa al ritorno all'equilibrio in 18 mesi.",
      },
    ],
    images: [
      "https://picsum.photos/seed/gds7a/900/600",
      "https://picsum.photos/seed/gds7b/900/600",
      "https://picsum.photos/seed/gds7c/900/600",
      "https://picsum.photos/seed/gds7d/900/600",
    ],
  },
  {
    id: "compliance-normativa",
    title: "Compliance Normativa",
    description: "Adeguamento dei processi amministrativi e contabili alle novità introdotte dal D.Lgs. 254/2016 in materia di rendicontazione non finanziaria.",
    sections: [
      {
        title: "Il quadro normativo",
        body: "Il D.Lgs. 254/2016 ha introdotto l'obbligo di rendicontazione non finanziaria per le grandi imprese di interesse pubblico. La società interessata non disponeva né dei processi né degli strumenti per raccogliere i dati ESG richiesti.",
      },
      {
        title: "L'implementazione",
        body: "Ho mappato i processi esistenti, identificato i gap rispetto ai requisiti normativi, progettato il sistema di raccolta degli indicatori ambientali e sociali e coordinato la redazione della prima Dichiarazione Non Finanziaria, approvata dal consiglio senza rilievi.",
      },
    ],
    images: [
      "https://picsum.photos/seed/gds8a/900/600",
      "https://picsum.photos/seed/gds8b/900/600",
      "https://picsum.photos/seed/gds8c/900/600",
      "https://picsum.photos/seed/gds8d/900/600",
    ],
  },
];
