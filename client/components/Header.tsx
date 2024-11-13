"use client";

import { useState } from "react";
import { Lock, User, Menu, X } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/lib/auth";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const { user, signOut } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuVariants = {
    closed: { opacity: 0, x: "-100%" },
    open: { opacity: 1, x: 0 },
  };

  return (
    <motion.header
      className="fixed top-0 z-50 w-full backdrop-blur-md"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <motion.div
          className="flex items-center space-x-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Lock className="h-8 w-8 text-purple-500" />
          <span className="text-2xl font-bold">Auth from Lolland</span>
        </motion.div>
        <nav className="hidden space-x-6 md:flex">
          {["Features", "Pricing", "Docs"].map((item) => (
            <motion.div
              key={item}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link
                href={`#${item.toLowerCase()}`}
                className="text-sm hover:text-purple-400"
              >
                {item}
              </Link>
            </motion.div>
          ))}
        </nav>
        <div className="flex items-center space-x-4">
          <AnimatePresence>
            {user ? (
              <motion.div
                className="flex items-center space-x-4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
              >
                <Button
                  variant="ghost"
                  className="text-zinc-400 hover:text-zinc-50"
                  onClick={() => signOut()}
                >
                  Sign Out
                </Button>
                <Link href="/profile">
                  <Button className="bg-purple-600 text-zinc-50 hover:bg-purple-500">
                    <User className="mr-2 h-4 w-4" />
                    Profile
                  </Button>
                </Link>
              </motion.div>
            ) : (
              <motion.div
                className="flex items-center space-x-4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
              >
                <Link href="/signin">
                  <Button
                    variant="ghost"
                    className="text-zinc-400 hover:text-zinc-50"
                  >
                    Sign In
                  </Button>
                </Link>
                <Link href="/signup">
                  <Button className="bg-purple-600 text-zinc-50 hover:bg-purple-500">
                    Get Started
                  </Button>
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
          <motion.button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </motion.button>
        </div>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="absolute top-20 left-0 w-full bg-zinc-900 p-4 md:hidden"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            {["Features", "Pricing", "Docs"].map((item) => (
              <motion.div
                key={item}
                className="py-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={`#${item.toLowerCase()}`}
                  className="text-sm hover:text-purple-400"
                >
                  {item}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
