"use client";

import Link from "next/link";
import { Github, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer(): JSX.Element {
  return (
    <footer className="bg-zinc-950 text-zinc-50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center md:flex-row md:justify-between">
          <div className="mb-6 md:mb-0">
            <span className="text-xl font-semibold">Auth from Lolland</span>
            <p className="mt-2 text-zinc-400 text-sm">
              Secure authentication, made easy.
            </p>
          </div>
          <div className="flex space-x-6 mb-6 md:mb-0">
            <Link href="https://github.com" target="_blank" aria-label="GitHub">
              <Github className="h-6 w-6 text-zinc-400 hover:text-purple-500" />
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              aria-label="Twitter"
            >
              <Twitter className="h-6 w-6 text-zinc-400 hover:text-purple-500" />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6 text-zinc-400 hover:text-purple-500" />
            </Link>
          </div>
          <div>
            <Button
              variant="outline"
              className="text-zinc-50 border-zinc-700 hover:border-zinc-600"
            >
              Contact Support
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
