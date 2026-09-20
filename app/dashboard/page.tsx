"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import type { User } from "@supabase/supabase-js";

type Client = {
  id: string;
  name: string;
  email: string;
};

export default function DashboardPage() {
  const [user, setUser] = useState<User | null>(null);
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [adding, setAdding] = useState(false);

  const loadClients = async (userId: string) => {
    const { data } = await supabase
      .from("clients")
      .select("id, name, email")
      .eq("user_id", userId)
      .order("created_at", { ascending: false });
    setClients(data || []);
  };
    useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
      if (data.user) loadClients(data.user.id);
      setLoading(false);
    });
  }, []);

  const handleAddClient = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;
    setAdding(true);
    await supabase.from("clients").insert({
      user_id: user.id,
      name,
      email,
    });
    setName("");
    setEmail("");
    setAdding(false);
    loadClients(user.id);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = "/login";
  };

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-ink/60">Chargement...</p>
      </main>
    );
  }

  if (!user) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <p className="text-ink mb-4">Vous n'êtes pas connecté.</p>
        <a href="/login" className="text-terracotta font-semibold underline">
          Aller à la connexion
        </a>
      </main>
    );
  }
  return (
    <main className="min-h-screen px-6 py-10 max-w-lg mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
          <p className="text-terracotta font-semibold text-sm">Connecté</p>
          <p className="text-ink/60 text-sm">{user.email}</p>
        </div>
        <button onClick={handleLogout} className="text-ink/50 underline text-sm">
          Se déconnecter
        </button>
      </div>

      <h1 className="text-2xl font-bold text-ink mb-6">Vos clients suivis</h1>

      {clients.length === 0 ? (
        <p className="text-ink/60 mb-6">
          Aucun client pour l'instant. Ajoutez le premier ci-dessous pour créer
          votre premier bilan.
        </p>
      ) : (
        <ul className="mb-8 flex flex-col gap-3">
          {clients.map((c) => (
            <li key={c.id} className="border border-ink/10 rounded-lg p-4">
              <a href={`/dashboard/clients/${c.id}`} className="font-semibold text-ink block">
                {c.name}
              </a>
              <p className="text-ink/50 text-sm">{c.email}</p>
            </li>
          ))}
        </ul>
      )}
