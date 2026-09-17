"use client";

import { useCallback, useMemo, useState } from "react";

import CategoryIndex from "@/components/projects/category-index";
import FeaturedProject from "@/components/projects/featured-project";
import ProjectMatrix from "@/components/projects/project-matrix";
import ProjectRegister from "@/components/projects/project-register";
import ServiceBreakdown from "@/components/projects/service-breakdown";
import {
  CATEGORIES,
  PROJECTS,
  inCategory,
  type CategoryFilter,
  type ProjectCategory,
} from "@/data/projects";

const REGISTER_ID = "register";

/**
 * Owns the state shared between the category index, the register, the
 * featured view, the matrix and the service breakdown, so a hover in one
 * section can be reflected in another.
 */
export default function ProjectArchive() {
  const [filter, setFilter] = useState<CategoryFilter>("all");
  const [expanded, setExpanded] = useState<string | null>(null);
  const [featured, setFeatured] = useState(0);
  const [highlight, setHighlight] = useState<ProjectCategory | null>(null);

  const counts = useMemo(
    () =>
      Object.fromEntries(
        CATEGORIES.map((c) => [c.id, PROJECTS.filter((p) => inCategory(p, c.id)).length]),
      ) as Record<CategoryFilter, number>,
    [],
  );

  const visible = useMemo(() => PROJECTS.filter((p) => inCategory(p, filter)), [filter]);

  const changeFilter = useCallback((next: CategoryFilter) => {
    setFilter(next);
    setExpanded((cur) => {
      if (!cur) return cur;
      const p = PROJECTS.find((x) => x.id === cur);
      return p && inCategory(p, next) ? cur : null;
    });
  }, []);

  const toggle = useCallback((id: string) => {
    setExpanded((cur) => (cur === id ? null : id));
  }, []);

  const scrollTo = (id: string) => {
    // wait one frame so a filter change has rendered the target row
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  /** From the matrix: open a project in the register. */
  const openProject = useCallback((id: string) => {
    const p = PROJECTS.find((x) => x.id === id);
    if (p && !inCategory(p, filter)) setFilter("all");
    setExpanded(id);
    scrollTo(`project-row-${id}`);
    requestAnimationFrame(() => document.getElementById(`project-row-${id}`)?.focus({ preventScroll: true }));
  }, [filter]);

  /** From the services breakdown: filter the register. */
  const filterByService = useCallback((c: ProjectCategory) => {
    changeFilter(c);
    setHighlight(null);
    scrollTo(REGISTER_ID);
  }, [changeFilter]);

  return (
    <>
      {/* the index is sticky only while the register is on screen */}
      <div className="relative">
        <CategoryIndex value={filter} onChange={changeFilter} counts={counts} controls={REGISTER_ID} />
        <ProjectRegister
          id={REGISTER_ID}
          projects={visible}
          filter={filter}
          expanded={expanded}
          onToggle={toggle}
          highlight={highlight}
        />
      </div>
      <FeaturedProject index={featured} onChange={setFeatured} />
      <ProjectMatrix highlight={highlight} onSelect={openProject} />
      <ServiceBreakdown highlight={highlight} onHighlight={setHighlight} onSelect={filterByService} />
    </>
  );
}
