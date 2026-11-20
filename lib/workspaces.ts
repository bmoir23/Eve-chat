export type WorkspaceFeature = {
  readonly slug: string;
  readonly title: string;
  readonly summary: string;
};

export type WorkspaceBlueprint = {
  readonly slug: string;
  readonly title: string;
  readonly summary: string;
  readonly outcome: string;
  readonly features: readonly WorkspaceFeature[];
};

export const WORKSPACE_BLUEPRINTS: readonly WorkspaceBlueprint[] = [
  {
    slug: "productivity",
    title: "Productivity",
    summary: "Personal and team execution workspace for planning, delivery, and updates.",
    outcome: "Keep projects moving with a single place for goals, tasks, and progress signals.",
    features: [
      {
        slug: "dashboard",
        title: "Dashboard",
        summary: "High-level goals, deadlines, and performance indicators.",
      },
      {
        slug: "task-board",
        title: "Task board",
        summary: "Kanban-style board for priorities, ownership, and progress.",
      },
      {
        slug: "status-updates",
        title: "Status updates",
        summary: "Weekly updates, blockers, and decision tracking.",
      },
      {
        slug: "agent-resources",
        title: "Agent resources",
        summary: "Prompt packs, automations, templates, and reusable productivity assets.",
      },
    ],
  },
  {
    slug: "engineering",
    title: "Product and engineering",
    summary: "Execution center for product delivery, environments, and platform integrations.",
    outcome: "Give engineering a shared operating view and integration control plane.",
    features: [
      {
        slug: "dashboard",
        title: "Dashboard",
        summary: "Roadmap health, release readiness, and service status rollups.",
      },
      {
        slug: "dev-environments",
        title: "Dev environments",
        summary: "Environment catalog, ownership, and setup runbooks.",
      },
      {
        slug: "cloudflare-workers",
        title: "Cloudflare workers",
        summary: "Worker inventory, deploy status, and integration stubs.",
      },
      {
        slug: "workers-ai",
        title: "Workers AI",
        summary: "Model endpoints, cost controls, and usage visibility.",
      },
      {
        slug: "n8n-workflows",
        title: "n8n workflows",
        summary: "Workflow registry, status tracking, and connector plans.",
      },
      {
        slug: "firecrawl-connectors",
        title: "Firecrawl connectors",
        summary: "Crawler connector setup and data sync checkpoints.",
      },
    ],
  },
  {
    slug: "content-research",
    title: "Content and research",
    summary: "Pipeline for trend research, content production, and publishing operations.",
    outcome: "Move from insights to shipped content with measurable publishing cadence.",
    features: [
      {
        slug: "dashboard",
        title: "Dashboard",
        summary: "Content pipeline health, output velocity, and channel performance.",
      },
      {
        slug: "crawl-parse-search",
        title: "Crawl, parse, and search",
        summary: "Source discovery with firecrawl and browser-driven scraping workflows.",
      },
      {
        slug: "content-library",
        title: "Content library",
        summary: "Drafts, generated assets, and reusable content blocks.",
      },
      {
        slug: "ranking-scheduling",
        title: "Ranking and scheduling",
        summary: "Priority scoring, release windows, and campaign sequencing.",
      },
      {
        slug: "calendar-publisher",
        title: "Calendar and publisher",
        summary: "Editorial calendar, channel-ready publishing queue, and post status.",
      },
      {
        slug: "market-research",
        title: "Market research",
        summary: "Product discovery, competition tracking, and opportunity analysis.",
      },
    ],
  },
];

export const WORKSPACE_NAV_LINKS = WORKSPACE_BLUEPRINTS.map((workspace) => ({
  href: `/workspaces/${workspace.slug}`,
  slug: workspace.slug,
  title: workspace.title,
}));

export function getWorkspaceBlueprint(workspaceSlug: string) {
  return WORKSPACE_BLUEPRINTS.find((workspace) => workspace.slug === workspaceSlug);
}

export function getWorkspaceFeature(workspaceSlug: string, featureSlug: string) {
  const workspace = getWorkspaceBlueprint(workspaceSlug);
  const feature = workspace?.features.find((item) => item.slug === featureSlug);

  return { feature, workspace };
}
