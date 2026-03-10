"use client";

import Landing from "@/components/Landing";
import MainLayout from "@/components/layout/MainLayout";
import { AuthProvider, useAuth } from "@/context/AuthContext";

function HomeContent() {
  const { user } = useAuth();

  if (!user) {
    return <Landing />;
  }

  return <div>Profile Page</div>;
}

export default function Home() {
  return (
    <AuthProvider>
      <MainLayout>
        <HomeContent />
      </MainLayout>
    </AuthProvider>
  );
}