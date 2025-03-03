"use client";
import Footer from "@/src/components/Footer";
import { useState } from "react";

export default function Home() {
  const [state, setState] = useState<unknown>(null);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <span>Header</span>
      </main>
      <Footer />
    </div>
  );
}
