import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const CallToAction = () => (
  <section className="py-24">
    <div className="container mx-auto px-4">
      <div className="rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 p-8 text-center shadow-lg">
        <h2 className="mb-4 text-3xl font-bold">Ready to get started?</h2>
        <p className="mb-6 text-lg">
          Join thousands of developers building secure applications with Auth
          from Lolland
        </p>
        <div className="flex justify-center space-x-4">
          <Input
            placeholder="Enter your email"
            className="max-w-xs bg-white/10 text-zinc-50 placeholder:text-zinc-300"
          />
          <Button className="bg-zinc-950 text-zinc-50 hover:bg-zinc-800">
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default CallToAction;
