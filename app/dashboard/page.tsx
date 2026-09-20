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
