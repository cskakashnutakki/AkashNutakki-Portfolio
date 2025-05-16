import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="text-center p-8">
        <h1 className="font-heading text-6xl font-bold text-primary mb-6">404</h1>
        <h2 className="text-2xl font-medium text-gray-700 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed, 
          or is temporarily unavailable.
        </p>
        <Link href="/">
          <Button className="bg-secondary hover:bg-secondary/80">
            Return to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
