import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";

import appCss from "../styles.css?url";
import favIcon from "@/assets/fav.png";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { LanguageProvider, useLanguagePreference } from "@/lib/i18n";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-gold">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">The page you're looking for doesn't exist.</p>
        <Link to="/" className="mt-6 inline-flex rounded-md bg-gradient-primary px-4 py-2 text-sm font-medium text-primary-foreground">Go home</Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  useEffect(() => { reportLovableError(error, { boundary: "tanstack_root_error_component" }); }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">Something went wrong. Try refreshing.</p>
        <button onClick={() => { router.invalidate(); reset(); }} className="mt-6 inline-flex rounded-md bg-gradient-primary px-4 py-2 text-sm font-medium text-primary-foreground">Try again</button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Mukundhapuram Socity Limited — Trusted Financial Partner" },
      { name: "description", content: "Loans, monthly savings schemes, gold loans and fixed deposits with attractive rates from Mukundhapuram Socity Limited." },
      { property: "og:title", content: "Mukundhapuram Socity Limited" },
      { property: "og:description", content: "Your trusted partner for loans, monthly savings schemes, and fixed deposits." },
      { property: "og:type", content: "website" },
      { name: "robots", content: "index,follow" },
      { property: "og:locale", content: "en_IN" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: favIcon, type: "image/png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@600;700;800&family=Noto+Sans+Malayalam:wght@400;500;600;700;800&family=Manjari:wght@400;700&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <RootContent />
      </LanguageProvider>
    </QueryClientProvider>
  );
}

function RootContent() {
  const { lang, setLang, hasStoredLang } = useLanguagePreference();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!hasStoredLang) setOpen(true);
  }, [hasStoredLang]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1"><Outlet /></main>
      <Footer />
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{lang === "ml" ? "ഭാഷ തിരഞ്ഞെടുക്കുക" : "Choose a language"}</DialogTitle>
            <DialogDescription>
              {lang === "ml"
                ? "തുടരാൻ ഇംഗ്ലീഷോ മലയാളമോ തിരഞ്ഞെടുക്കുക."
                : "Choose English or Malayalam to continue."}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="mt-2 gap-2 sm:justify-center">
            <Button variant="outline" onClick={() => { setLang("en"); setOpen(false); }}>
              English
            </Button>
            <Button onClick={() => { setLang("ml"); setOpen(false); }}>
              മലയാളം
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
