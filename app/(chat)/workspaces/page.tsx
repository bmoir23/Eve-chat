import Link from "next/link";
import { WORKSPACE_BLUEPRINTS } from "@/lib/workspaces";

const DELIVERY_PHASES = [
  "Foundation: finalize authentication provider and tenant model before deep feature work.",
  "Productivity workspace: establish dashboard, task board, and status updates first.",
  "Engineering workspace: add dev environments and integration control panels next.",
  "Content and research workspace: complete crawler, content pipeline, and publishing flows.",
] as const;

export default function WorkspacesPage() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-6 px-4 pt-16 pb-8 sm:px-6 md:pt-12">
      <header className="space-y-2">
        <p className="text-sm text-muted-foreground">Workspace blueprint</p>
        <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Multi-workspace operating system
        </h1>
        <p className="max-w-3xl text-sm text-muted-foreground sm:text-base">
          This scaffold sets route foundations for your productivity, engineering, and
          content/research surfaces so implementation can be phased without losing scope.
        </p>
      </header>

      <section className="rounded-lg border border-border bg-card p-4 sm:p-5">
        <h2 className="text-lg font-medium">Authentication foundation</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Compare Clerk and Auth0 and keep provider decisions isolated from workspace features.
        </p>
        <Link
          className="mt-3 inline-flex rounded-md border border-border px-3 py-1.5 text-sm transition-colors hover:bg-muted"
          href="/workspaces/authentication"
        >
          Open authentication plan
        </Link>
      </section>

      <section className="grid gap-3 md:grid-cols-3">
        {WORKSPACE_BLUEPRINTS.map((workspace) => (
          <article className="rounded-lg border border-border bg-card p-4" key={workspace.slug}>
            <h2 className="text-base font-medium">{workspace.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{workspace.summary}</p>
            <p className="mt-2 text-sm text-muted-foreground">{workspace.outcome}</p>
            <Link
              className="mt-4 inline-flex rounded-md border border-border px-3 py-1.5 text-sm transition-colors hover:bg-muted"
              href={`/workspaces/${workspace.slug}`}
            >
              Open workspace
            </Link>
          </article>
        ))}
      </section>

      <section className="rounded-lg border border-border bg-card p-4 sm:p-5">
        <h2 className="text-lg font-medium">Recommended rollout order</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-muted-foreground">
          {DELIVERY_PHASES.map((phase) => (
            <li key={phase}>{phase}</li>
          ))}
        </ol>
      </section>
    </div>
  );
}
