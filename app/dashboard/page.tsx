"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import type { User } from "@supabase/supabase-js";

export default function DashboardPage() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
      setLoading(false);
    });
  }, []);

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
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <p className="text-terracotta font-semibold uppercase text-sm mb-2">
        Connecté
      </p>
      <h1 className="text-2xl font-bold text-ink mb-4">{user.email}</h1>
      <button
        onClick={handleLogout}
        className="text-ink/70 underline text-sm"
      >
        Se déconnecter
      </button>
    </main>
  );
}
