"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

type Client = { id: string; name: string; email: string };

export default function ClientPage() {
  const params = useParams();
  const clientId = params.id as string;

  const [client, setClient] = useState<Client | null>(null);
  const [posts, setPosts] = useState("");
  const [vues, setVues] = useState("");
  const [abonnes, setAbonnes] = useState("");
  const [note, setNote] = useState("");
  const [saved, setSaved] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase
      .from("clients")
      .select("id, name, email")
      .eq("id", clientId)
      .single()
      .then(({ data }) => {
        setClient(data);
        setLoading(false);
      });
  }, [clientId]);
    const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(false);
    const month = new Date().toISOString().slice(0, 7);
    await supabase.from("monthly_reports").insert({
      client_id: clientId,
      user_id: client ? (await supabase.auth.getUser()).data.user?.id : null,
      month,
      data: { posts, vues, abonnes, note },
    });
    setSaved(true);
  };

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-ink/60">Chargement...</p>
      </main>
    );
  }

  if (!client) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-ink/60">Client introuvable.</p>
      </main>
    );
      return (
    <main className="min-h-screen px-6 py-10 max-w-lg mx-auto">
      <a href="/dashboard" className="text-ink/50 text-sm underline">
        ← Retour
      </a>

      <h1 className="text-2xl font-bold text-ink mt-4 mb-1">{client.name}</h1>
      <p className="text-ink/50 mb-8">Bilan du mois</p>

      {saved ? (
        <div className="bg-terracotta/10 rounded-lg p-6 text-center">
          <p className="text-ink font-semibold mb-2">Bilan enregistré !</p>
          <p className="text-ink/60 text-sm">
            Il sera mis en page et envoyé automatiquement le 1er du mois
            prochain.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSave} className="flex flex-col gap-4">
          <div>
            <label className="text-sm text-ink/70 block mb-1">
              Contenus publiés
            </label>
            <input
              type="number"
              value={posts}
              onChange={(e) => setPosts(e.target.value)}
              className="border border-ink/20 rounded-lg px-4 py-3 w-full"
            />
          </div>
          <div>
            <label className="text-sm text-ink/70 block mb-1">
  }
