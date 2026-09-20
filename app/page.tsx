export default function Home() {
  return (
    <main className="min-h-screen bg-cream text-ink">
      <section className="px-6 pt-16 pb-12 text-center max-w-lg mx-auto">
        <p className="text-terracotta font-semibold uppercase text-sm tracking-wide mb-4">
          Pour les créateurs de contenu qui facturent au mois
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
          Le bilan mensuel envoyé à vos clients, sans y penser
        </h1>
        <p className="text-ink/70 text-lg mb-8">
          Fini le bilan fait à la main, en retard, ou pas du tout.
        </p>
        <a href="/login" className="inline-block bg-terracotta text-white font-semibold rounded-lg px-8 py-4 text-lg w-full sm:w-auto">
          Essayer gratuitement
        </a>
      </section>

      <section className="px-6 py-10 bg-ink text-cream text-center">
        <p className="max-w-md mx-auto text-lg">
          1 client sur 3 qui arrête un prestataire dit ne pas savoir ce qu'il a eu pour son argent ce mois-là.
        </p>
      </section>

      <section className="px-6 py-14 max-w-lg mx-auto">
        <div className="grid gap-8">
          <div>
            <h3 className="font-bold text-lg mb-1">Une minute pour saisir le mois</h3>
            <p className="text-ink/70">Vous entrez les chiffres, on s'occupe de la mise en forme.</p>
          </div> 
                    <div>
            <h3 className="font-bold text-lg mb-1">Envoyé automatiquement le 1er</h3>
            <p className="text-ink/70">Plus besoin d'y penser : le rapport part tout seul, à vos couleurs.</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-1">Vous savez qui a lu</h3>
            <p className="text-ink/70">Un accusé de lecture vous dit exactement quand votre client a ouvert son bilan.</p>
          </div>
        </div>
      </section>

      <section className="px-6 py-10 bg-ink/5 text-center">
        <p className="text-sm text-ink/50 italic max-w-md mx-auto">
          [Emplacement réservé aux premiers retours clients — à remplacer par de vrais témoignages]
        </p>
      </section>

      <section className="px-6 py-14 text-center max-w-lg mx-auto">
        <h2 className="text-2xl font-bold mb-4">Votre premier bilan, envoyé ce mois-ci</h2>
        <a href="/login" className="inline-block bg-terracotta text-white font-semibold rounded-lg px-8 py-4 text-lg w-full sm:w-auto">
          Essayer gratuitement
        </a>
      </section>
    </main>
  );
}
