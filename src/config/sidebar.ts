export type SidebarDomainConfig = {
  title: string;
  icon: string;
  /**
   * Absolute path pattern root inside src/pages, e.g. "/src/pages/inicio"
   */
  pagesDir: string;
  /**
   * Route shown when clicking the domain title.
   * If omitted, the first discovered topic route is used.
   */
  href?: string;
};

export const sidebarDomains: SidebarDomainConfig[] = [
  {
    title: "Inicio",
    icon: "home",
    pagesDir: "/src/pages/inicio",
    href: "/",
  },
  { title: "Fundamentos", icon: "rocket_launch", pagesDir: "/src/pages/fundamentos" },
  { title: "Arquitectura", icon: "account_tree", pagesDir: "/src/pages/arquitectura" },
  { title: "DDD", icon: "psychology", pagesDir: "/src/pages/ddd" },
  { title: "Estructura de Proyectos", icon: "folder_code", pagesDir: "/src/pages/estructura-de-proyectos" },
  { title: "Patrones de Diseño", icon: "design_services", pagesDir: "/src/pages/patrones-de-diseno" },
  { title: "Backend Engineering", icon: "dns", pagesDir: "/src/pages/backend-engineering" },
  { title: "Frontend Engineering", icon: "web", pagesDir: "/src/pages/frontend-engineering" },
  { title: "Bases de Datos", icon: "database", pagesDir: "/src/pages/bases-de-datos" },
  { title: "Testing", icon: "science", pagesDir: "/src/pages/testing" },
  { title: "Seguridad", icon: "shield", pagesDir: "/src/pages/seguridad" },
  { title: "DevOps & Infra", icon: "deployed_code", pagesDir: "/src/pages/devops-infra" },
  { title: "Calidad de Codigo", icon: "rule", pagesDir: "/src/pages/calidad-de-codigo" },
  { title: "Git & Workflow", icon: "alt_route", pagesDir: "/src/pages/git-workflow" },
  { title: "Performance & Escalabilidad", icon: "speed", pagesDir: "/src/pages/performance-escalabilidad" },
  { title: "Observabilidad", icon: "monitoring", pagesDir: "/src/pages/observabilidad" },
  { title: "Documentacion Tecnica", icon: "description", pagesDir: "/src/pages/documentacion-tecnica" },
  { title: "Principios Profesionales", icon: "school", pagesDir: "/src/pages/principios-profesionales" },
  { title: "Tooling & Ecosistema", icon: "build", pagesDir: "/src/pages/tooling-ecosistema" },
  { title: "Roadmaps", icon: "map", pagesDir: "/src/pages/roadmaps" },
  { title: "Recursos", icon: "menu_book", pagesDir: "/src/pages/recursos" },
];
