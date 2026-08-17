import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { site } from "../lib/site";

const title = "SM Photography | Wedding Photographer in Delhi NCR & Jaipur";
const description =
  "Candid Indian wedding photography and cinematography by SM Photography. Mehndi to reception, told chapter by chapter across Jaipur, Delhi NCR and destination weddings.";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  additionalType: "https://schema.org/Photographer",
  name: site.name,
  description,
  telephone: site.phonePrimary,
  email: site.email,
  url: site.website,
  image: "/photos/hero.webp",
  address: {
    "@type": "PostalAddress",
    streetAddress: "3rd Floor, Windsor Plaza, 309 Sansar Chandra Road, Sindhi Camp",
    addressLocality: "Jaipur",
    postalCode: "302001",
    addressCountry: "IN",
  },
  areaServed: ["Jaipur", "Delhi NCR", "India"],
  openingHours: "Mo-Sa 09:00-21:00",
};

function NotFoundComponent() {
  return (
    <div className="surface-paper flex min-h-screen items-center justify-center px-5">
      <div className="max-w-md text-center">
        <p className="meta text-[var(--muted-foreground)]">404</p>
        <h1 className="display mt-4 text-5xl md:text-6xl">This page isn’t in the album</h1>
        <p className="mt-4 text-sm leading-relaxed text-[var(--muted-foreground)]">
          The page you’re looking for doesn’t exist or has been moved.
        </p>
        <Link
          to="/"
          className="meta mt-8 inline-block border border-[var(--maroon)] px-6 py-3 text-[var(--maroon)]"
        >
          Back home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    console.error("Route error boundary", error);
  }, [error]);

  return (
    <div className="surface-paper flex min-h-screen items-center justify-center px-5">
      <div className="max-w-md text-center">
        <h1 className="display text-4xl md:text-5xl">This page didn’t load</h1>
        <p className="mt-4 text-sm leading-relaxed text-[var(--muted-foreground)]">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="meta border border-[var(--maroon)] bg-[var(--maroon)] px-6 py-3 text-paper"
          >
            Try again
          </button>
          <a href="/" className="meta border border-[var(--maroon)] px-6 py-3 text-[var(--maroon)]">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title },
      { name: "description", content: description },
      { name: "author", content: site.name },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/photos/hero.webp" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: "/photos/hero.webp" },
      { name: "theme-color", content: "#4A111D" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Manrope:wght@400;500;600;700&display=swap",
      },
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
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
