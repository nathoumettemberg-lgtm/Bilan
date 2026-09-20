export default function Home() {
  return (
    <main className="min-h-screen bg-cream text-ink">
      {/* Hero */}
      <section className="px-6 pt-16 pb-12 text-center max-w-lg mx-auto">
        <p className="text-terracotta font-semibold uppercase text-sm tracking-wide mb-4">
          Pour les créateurs de contenu qui facturent au mois
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
          Le bilan mensuel envoyé à vos clients, sans y penser
        </h1>
        <p className="text-ink/70 text-lg mb-8">
          Fini le bilan fait à la main, en retard, ou pas du tout — la
          première raison pour laquelle un client ne renouvelle pas.
        </p>
        
          href="/login"
          className="inline-block bg-terracotta text-white font-semibold rounded-lg px-8 py-4 text-lg w-full sm:w-auto"
        >
          Essayer gratuitement
        </a>
      </section>

      {/* Douleur chiffrée */}
      <section className="px-6 py-10 bg-ink text-cream text-center">
        <p className="max-w-md mx-auto text-lg">
          <span className="text-terracotta font-bold">1 client sur 3</span>{" "}
          qui arrête un prestataire dit ne pas savoir ce qu&apos;il a eu pour
          son argent ce mois-là.
        </p>
      </section>

      {/* Bénéfices */}
      <section className="px-6 py-14 max-w-lg mx-auto">
        <div className="grid gap-8">
          <div>
            <h3 className="font-bold text-lg mb-1">
              Une minute pour saisir le mois
            </h3>
            <p
