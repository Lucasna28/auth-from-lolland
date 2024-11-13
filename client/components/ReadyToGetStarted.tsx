"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function ReadyToGetStarted(): JSX.Element {
  return (
    <section className="bg-zinc-900 py-24 text-center text-zinc-50">
      <div className="container mx-auto px-4">
        <h2 className="mb-6 text-3xl font-semibold">Ready to get started?</h2>
        <p className="mb-12 text-xl text-zinc-400">
          Begin using the easiest and most secure authentication solution today.
        </p>
        <Button
          size="lg"
          className="bg-purple-600 text-zinc-50 hover:bg-purple-500"
        >
          Get Started <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  );
}
