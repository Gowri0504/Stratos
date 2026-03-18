"use client";

import { useEffect, useRef } from "react";
import cytoscape from "cytoscape";

const elements = [
  // Nodes
  { data: { id: "calc", label: "Calculus", type: "subject", strength: 80 } },
  { data: { id: "deriv", label: "Derivatives", type: "topic", strength: 90 } },
  { data: { id: "integ", label: "Integrals", type: "topic", strength: 65 } },
  { data: { id: "lim", label: "Limits", type: "topic", strength: 85 } },
  { data: { id: "phys", label: "Physics", type: "subject", strength: 70 } },
  { data: { id: "mech", label: "Mechanics", type: "topic", strength: 75 } },
  { data: { id: "optics", label: "Optics", type: "topic", strength: 40 } },
  { data: { id: "thermo", label: "Thermodynamics", type: "topic", strength: 55 } },

  // Edges
  { data: { source: "calc", target: "deriv" } },
  { data: { source: "calc", target: "integ" } },
  { data: { source: "calc", target: "lim" } },
  { data: { source: "deriv", target: "integ" } },
  { data: { source: "phys", target: "mech" } },
  { data: { source: "phys", target: "optics" } },
  { data: { source: "phys", target: "thermo" } },
  { data: { source: "deriv", target: "phys" } }, // Cross-disciplinary link
];

export const KnowledgeGraph = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const cy = cytoscape({
      container: containerRef.current,
      elements: elements,
      style: [
        {
          selector: "node",
          style: {
            "background-color": (ele: any) => {
              const strength = ele.data("strength");
              if (strength > 80) return "#10b981"; // Strong - Green
              if (strength > 60) return "#6366f1"; // Medium - Indigo
              return "#ef4444"; // Weak - Red
            },
            label: "data(label)",
            color: "#fff",
            "font-size": "12px",
            "text-valign": "center",
            "text-halign": "center",
            width: (ele: any) => (ele.data("type") === "subject" ? "60px" : "40px"),
            height: (ele: any) => (ele.data("type") === "subject" ? "60px" : "40px"),
            "border-width": "2px",
            "border-color": "#ffffff20",
            "overlay-padding": "6px",
            "ghost": "yes",
            "ghost-offset-x": 2,
            "ghost-offset-y": 2,
            "ghost-opacity": 0.1,
          },
        },
        {
          selector: "edge",
          style: {
            width: 2,
            "line-color": "#ffffff10",
            "target-arrow-color": "#ffffff10",
            "target-arrow-shape": "triangle",
            "curve-style": "bezier",
            opacity: 0.5,
          },
        },
      ],
      layout: {
        name: "cose",
        animate: true,
        padding: 50,
      },
      userZoomingEnabled: true,
      userPanningEnabled: true,
    });

    return () => cy.destroy();
  }, []);

  return (
    <div className="w-full h-full glass-card relative overflow-hidden">
      <div className="absolute top-6 left-6 z-10 space-y-2">
        <h3 className="text-xl font-bold">Knowledge Graph</h3>
        <p className="text-white/40 text-xs font-medium uppercase tracking-widest">Topic Dependencies & Strength</p>
      </div>
      
      <div className="absolute top-6 right-6 z-10 flex gap-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-emerald-500" />
          <span className="text-[10px] text-white/40 font-bold uppercase">Strong</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-indigo-500" />
          <span className="text-[10px] text-white/40 font-bold uppercase">Medium</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <span className="text-[10px] text-white/40 font-bold uppercase">Weak</span>
        </div>
      </div>

      <div ref={containerRef} className="w-full h-[500px]" />
    </div>
  );
};
