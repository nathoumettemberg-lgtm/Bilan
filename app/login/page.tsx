"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    });
    if (error) {
      setError(error.message);
    } else {
      setSent(true);
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <h1 className="text-2xl font-bold text-ink mb-2 text-center">
          Connexion
        </h1>
        <p className="text-ink/70 text-center mb-6">
          Recevez un lien de connexion par email, sans mot de passe.
        </p>

        {sent ? (
          <p className="text-center text-ink bg-terracotta/10 rounded-lg p-4">
            Vérifiez votre boîte mail : un lien de connexion vient de vous
            être envoyé.
          </p>
        ) : (
          <form onSubmit={handleLogin} className="flex flex-col gap-3">
            <input
              type="email"
              required
              placeholder="votre@email.fr"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-ink/20 rounded-lg px-4 py-3 text-base"
            />
            {error && <p className="text-red-600 text-sm">{error}</p>}
            <button
              type="submit"
              className="bg-terracotta text-white rounded-lg py-3 font-semibold"
            >
              Recevoir le lien de connexion
            </button>
          </form>
        )}
      </div>
    </main>
  );
}
