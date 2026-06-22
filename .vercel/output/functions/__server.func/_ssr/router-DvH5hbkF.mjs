import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "../_libs/isbot.mjs";
const appCss = "/assets/styles-CTpHO5PL.css";
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "btn-primary", children: "Go home" }) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "btn-primary",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/", className: "btn-ghost", children: "Go home" })
    ] })
  ] }) });
}
const Route$1 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Joshua Ogunseun — Media Buyer & Automation Specialist" },
      {
        name: "description",
        content: "Joshua Ogunseun helps businesses generate qualified leads with Meta Ads, GoHighLevel automation, and high-converting funnels."
      },
      { name: "author", content: "Joshua Ogunseun" },
      { property: "og:title", content: "Joshua Ogunseun — Media Buyer & Automation Specialist" },
      {
        property: "og:description",
        content: "Scalable lead generation systems powered by Meta Ads, automation, and conversion-focused funnels."
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Joshua Ogunseun — Media Buyer & Automation Specialist" },
      { name: "description", content: "Lead Flow Systems builds scalable lead generation engines using Meta Ads, GoHighLevel automation, and high-converting funnels." },
      { property: "og:description", content: "Lead Flow Systems builds scalable lead generation engines using Meta Ads, GoHighLevel automation, and high-converting funnels." },
      { name: "twitter:description", content: "Lead Flow Systems builds scalable lead generation engines using Meta Ads, GoHighLevel automation, and high-converting funnels." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/e72f97c1-21b0-4a28-9bcc-f10149c63258/id-preview-0c659197--ec56b160-4950-4a05-98c7-8d6d27b5c7ff.lovable.app-1781628911446.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/e72f97c1-21b0-4a28-9bcc-f10149c63258/id-preview-0c659197--ec56b160-4950-4a05-98c7-8d6d27b5c7ff.lovable.app-1781628911446.png" }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Sora:wght@500;600;700;800&display=swap"
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$1.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) });
}
const joshua = "/assets/portfolio%20picture.jpg-p4ReMHM9.jpeg";
const $$splitComponentImporter = () => import("./index-BdBEjljJ.mjs");
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Joshua Ogunseun — Media Buyer & Automation Specialist"
    }, {
      name: "description",
      content: "Joshua Ogunseun helps businesses generate qualified leads with Meta Ads, GoHighLevel automation, and high-converting funnels."
    }, {
      property: "og:title",
      content: "Joshua Ogunseun — Media Buyer & Automation Specialist"
    }, {
      property: "og:description",
      content: "Scalable lead generation systems powered by Meta Ads, automation, and conversion-focused funnels."
    }],
    links: [{
      rel: "icon",
      type: "image/png",
      href: joshua
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$1
});
const rootRouteChildren = {
  IndexRoute
};
const routeTree = Route$1._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  joshua as j,
  router as r
};
