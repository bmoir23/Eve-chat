import Link from "next/link";
import { notFound } from "next/navigation";
import { getWorkspaceBlueprint } from "@/lib/workspaces";

export default async function WorkspacePage({
  params,
}: {
  readonly params: Promise<{ readonly workspace: string }>;
}) {
  const { workspace: workspaceSlug } = await params;
  const workspace = getWorkspaceBlueprint(workspaceSlug);

  if (!workspace) {
    notFound();
  }

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-6 px-4 pt-16 pb-8 sm:px-6 md:pt-12">
      <header className="space-y-2">
        <p className="text-sm text-muted-foreground">
          <Link className="underline underline-offset-4 hover:text-foreground" href="/workspaces">
            Workspaces
          </Link>
        </p>
        <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">{workspace.title}</h1>
        <p className="max-w-3xl text-sm text-muted-foreground sm:text-base">{workspace.summary}</p>
      </header>

      <section className="rounded-lg border border-border bg-card p-4 sm:p-5">
        <h2 className="text-lg font-medium">Mission</h2>
        <p className="mt-2 text-sm text-muted-foreground">{workspace.outcome}</p>
      </section>

      <section className="grid gap-3 md:grid-cols-2">
        {workspace.features.map((feature) => (
          <article className="rounded-lg border border-border bg-card p-4" key={feature.slug}>
            <h2 className="text-base font-medium">{feature.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{feature.summary}</p>
            <Link
              className="mt-4 inline-flex rounded-md border border-border px-3 py-1.5 text-sm transition-colors hover:bg-muted"
              href={`/workspaces/${workspace.slug}/${feature.slug}`}
            >
              Open route
            </Link>
          </article>
        ))}
      </section>
    </div>
  );
}
