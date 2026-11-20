import Link from "next/link";
import { notFound } from "next/navigation";
import { getWorkspaceFeature } from "@/lib/workspaces";

export default async function WorkspaceFeaturePage({
  params,
}: {
  readonly params: Promise<{ readonly feature: string; readonly workspace: string }>;
}) {
  const { feature: featureSlug, workspace: workspaceSlug } = await params;
  const { feature, workspace } = getWorkspaceFeature(workspaceSlug, featureSlug);

  if (!workspace || !feature) {
    notFound();
  }

  return (
    <div className="mx-auto flex w-full max-w-4xl flex-1 flex-col gap-6 px-4 pt-16 pb-8 sm:px-6 md:pt-12">
      <header className="space-y-2">
        <p className="text-sm text-muted-foreground">
          <Link className="underline underline-offset-4 hover:text-foreground" href="/workspaces">
            Workspaces
          </Link>{" "}
          /{" "}
          <Link
            className="underline underline-offset-4 hover:text-foreground"
            href={`/workspaces/${workspace.slug}`}
          >
            {workspace.title}
          </Link>
        </p>
        <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">{feature.title}</h1>
        <p className="max-w-3xl text-sm text-muted-foreground sm:text-base">{feature.summary}</p>
      </header>

      <section className="rounded-lg border border-border bg-card p-4 sm:p-5">
        <h2 className="text-lg font-medium">Route skeleton</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          This page is a scaffold route for {workspace.title}. Add data models, agent tools,
          integrations, and UI workflows here as implementation begins.
        </p>
      </section>
    </div>
  );
}
