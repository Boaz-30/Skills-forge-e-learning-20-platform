import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertTriangle } from "lucide-react";

export default function ClerkDevNotice() {
  return (
    <div className="fixed top-4 left-4 right-4 z-50">
      <Alert className="border-orange-200 bg-orange-50">
        <AlertTriangle className="h-4 w-4 text-orange-600" />
        <AlertDescription className="text-orange-800">
          <strong>Development Mode:</strong> Clerk authentication is not
          configured. Please set up your Clerk keys in .env.local to enable
          authentication features.
          <br />
          <a
            href="https://dashboard.clerk.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:no-underline"
          >
            Get your keys from Clerk Dashboard →
          </a>
        </AlertDescription>
      </Alert>
    </div>
  );
}
