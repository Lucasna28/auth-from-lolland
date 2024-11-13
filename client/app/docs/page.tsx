"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Book,
  ChevronLeft,
  ChevronRight,
  Code,
  Lock,
  PlayCircle,
  Settings,
  } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const tabs = [
  {
    title: "Introduction",
    icon: Book,
    content:
      "Welcome to Auth from Lolland. This authentication service provides secure and easy-to-implement solutions for your applications.",
  },
  {
    title: "Getting Started",
    icon: PlayCircle,
    content:
      "To get started with Auth from Lolland, first sign up for an account and obtain your API keys. Then, integrate our SDK into your application.",
  },
  {
    title: "Authentication",
    icon: Lock,
    content:
      "Learn about our authentication methods including OAuth 2.0, JWT, and Multi-factor Authentication. Each method is designed to provide robust security for your users.",
  },
  {
    title: "API Reference",
    icon: Code,
    content:
      "Explore our comprehensive API documentation. This section provides detailed information about endpoints, request/response formats, and authentication flows.",
  },
  {
    title: "Advanced",
    icon: Settings,
    content:
      "Dive into advanced topics such as custom integrations, rate limiting, and high availability setups for Auth from Lolland.",
  },
];

export default function DocsPage() {
  const [activeTab, setActiveTab] = useState("Introduction");
  const [isSidebarMinimized, setIsSidebarMinimized] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const pathname = usePathname();

  const toggleSidebar = () => {
    setIsSidebarMinimized(!isSidebarMinimized);
  };

  return (
    <div className="flex min-h-screen flex-col bg-zinc-950 text-zinc-50">
      <motion.header
        className="sticky top-0 z-50 flex h-16 items-center justify-between border-b border-zinc-800 bg-zinc-950/80 px-4 backdrop-blur-sm"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex items-center space-x-2">
            <Lock className="h-6 w-6 text-purple-500" />
            <span className="text-xl font-bold">Auth from Lolland</span>
          </Link>
          <nav className="hidden space-x-4 md:flex">
            <Link href="/#features" className="text-sm hover:text-purple-400">
              Features
            </Link>
            <Link href="/#pricing" className="text-sm hover:text-purple-400">
              Pricing
            </Link>
            <Link href="/docs" className="text-sm text-purple-400">
              Docs
            </Link>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="sm"
            className="text-zinc-400 hover:text-zinc-50"
          >
            Sign In
          </Button>
          <Button
            size="sm"
            className="bg-purple-600 text-zinc-50 hover:bg-purple-500"
          >
            Get Started
          </Button>
        </div>
      </motion.header>
      <div className="flex flex-1">
        <motion.nav
          className={`border-r border-zinc-800 transition-all duration-300 ${
            isSidebarMinimized ? "w-16" : "w-64"
          }`}
          initial={false}
          animate={{ width: isSidebarMinimized ? 64 : 256 }}
        >
          <div className="flex h-14 items-center justify-between border-b border-zinc-800 px-4">
            <AnimatePresence>
              {!isSidebarMinimized && (
                <motion.div
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "auto" }}
                  exit={{ opacity: 0, width: 0 }}
                >
                  <Input
                    placeholder="Search docs..."
                    className="h-8 w-full bg-zinc-900 text-sm"
                    onFocus={() => setIsSearchFocused(true)}
                    onBlur={() => setIsSearchFocused(false)}
                  />
                </motion.div>
              )}
            </AnimatePresence>
            <Button variant="ghost" size="icon" onClick={toggleSidebar}>
              {isSidebarMinimized ? (
                <ChevronRight className="h-4 w-4" />
              ) : (
                <ChevronLeft className="h-4 w-4" />
              )}
            </Button>
          </div>
          <ScrollArea className="h-[calc(100vh-8rem)]">
            <TooltipProvider>
              {tabs.map((tab) => (
                <Tooltip key={tab.title} delayDuration={300}>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      className={`w-full justify-start px-4 py-2 ${
                        activeTab === tab.title
                          ? "bg-purple-500/10 text-purple-500"
                          : "text-zinc-400 hover:bg-zinc-900 hover:text-zinc-50"
                      }`}
                      onClick={() => setActiveTab(tab.title)}
                    >
                      <tab.icon className="mr-2 h-5 w-5" />
                      {!isSidebarMinimized && <span>{tab.title}</span>}
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="right" className="z-50">
                    {tab.title}
                  </TooltipContent>
                </Tooltip>
              ))}
            </TooltipProvider>
          </ScrollArea>
        </motion.nav>
        <main className="flex-1 overflow-auto">
          <div className="container mx-auto max-w-4xl px-4 py-8">
            <motion.nav
              className="mb-8 flex items-center space-x-1 text-sm text-zinc-500"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/" className="hover:text-zinc-300">
                Home
              </Link>
              <ChevronRight className="h-4 w-4" />
              <Link href="/docs" className="hover:text-zinc-300">
                Docs
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-zinc-300">{activeTab}</span>
            </motion.nav>
            <article>
              <motion.h1
                className="mb-4 text-4xl font-bold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {activeTab}
              </motion.h1>
              <motion.p
                className="text-lg text-zinc-400"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {tabs.find((tab) => tab.title === activeTab)?.content}
              </motion.p>
              <motion.div
                className="mt-8 grid gap-6 md:grid-cols-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="rounded-lg bg-zinc-900 p-6">
                  <h2 className="mb-2 text-xl font-semibold">Quick Start</h2>
                  <p className="text-zinc-400">
                    Get up and running with Auth from Lolland in minutes.
                  </p>
                  <Button className="mt-4" variant="outline">
                    Learn More
                  </Button>
                </div>
                <div className="rounded-lg bg-zinc-900 p-6">
                  <h2 className="mb-2 text-xl font-semibold">API Reference</h2>
                  <p className="text-zinc-400">
                    Explore our comprehensive API documentation.
                  </p>
                  <Button className="mt-4" variant="outline">
                    View Docs
                  </Button>
                </div>
              </motion.div>
              <motion.div
                className="mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <h2 className="mb-4 text-2xl font-semibold">Featured Guides</h2>
                <ul className="space-y-2">
                  {[
                    "Implementing OAuth 2.0",
                    "Securing Your API",
                    "User Management Best Practices",
                  ].map((guide, index) => (
                    <motion.li
                      key={guide}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    >
                      <Link
                        href="#"
                        className="text-purple-400 hover:underline"
                      >
                        {guide}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </article>
          </div>
        </main>
      </div>
    </div>
  );
}
