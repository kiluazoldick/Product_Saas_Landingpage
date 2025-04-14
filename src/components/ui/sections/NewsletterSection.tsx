import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function NewsletterSection() {
  return (
    <section className="py-20 bg-white text-center">
      <div className="max-w-xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">Subscribe to our newsletter</h2>
        <p className="text-gray-600 mb-6">
          Join our 400,000+ person community and stay up to date with the latest
          news.
        </p>
        <form className="flex flex-col sm:flex-row items-center gap-4 justify-center">
          <Input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-auto"
          />
          <Button type="submit">Subscribe</Button>
        </form>
      </div>
    </section>
  );
}
