const PROVIDER_CHECKLIST = {
  auth0: [
    "Enterprise SSO, fine-grained policies, and mature B2B identity controls.",
    "Best fit when external enterprise identity requirements lead the product.",
  ],
  clerk: [
    "Fast Next.js integration with polished user management and org support.",
    "Best fit when product velocity and frontend experience are the top priority.",
  ],
} as const;

const SHARED_IMPLEMENTATION_STEPS = [
  "Introduce an auth adapter boundary in lib/ so provider wiring stays isolated.",
  "Map provider users and organizations to your existing database user model.",
  "Keep route guards workspace-aware so each workspace can evolve independently.",
  "Add webhook handling for user/org lifecycle events before enabling production sync.",
] as const;

export default function WorkspaceAuthenticationPage() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-1 flex-col gap-6 px-4 pt-16 pb-8 sm:px-6 md:pt-12">
      <header className="space-y-2">
        <p className="text-sm text-muted-foreground">Authentication foundation</p>
        <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Clerk or Auth0 decision track
        </h1>
        <p className="max-w-3xl text-sm text-muted-foreground sm:text-base">
          Keep your current flow in place while preparing a provider-backed user system for all
          workspaces.
        </p>
      </header>

      <section className="grid gap-3 md:grid-cols-2">
        <article className="rounded-lg border border-border bg-card p-4">
          <h2 className="text-base font-medium">Clerk</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
            {PROVIDER_CHECKLIST.clerk.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
        <article className="rounded-lg border border-border bg-card p-4">
          <h2 className="text-base font-medium">Auth0</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
            {PROVIDER_CHECKLIST.auth0.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="rounded-lg border border-border bg-card p-4 sm:p-5">
        <h2 className="text-lg font-medium">Suggested implementation approach</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-muted-foreground">
          {SHARED_IMPLEMENTATION_STEPS.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>
    </div>
  );
}
