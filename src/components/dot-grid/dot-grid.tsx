import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { generateDotGrid } from "~/components/dot-grid/helpers/dot-grid.helpers";

import dotGridStyles from "./dot-grid.css?inline";

interface DotGridProps {
  livedYears: number;
  livedWeeks: number;
  lifeSpan: number;
}
export const DotGrid = component$(
  ({ livedYears, livedWeeks, lifeSpan }: DotGridProps) => {
    useStylesScoped$(dotGridStyles);

    const dotGrid = generateDotGrid({
      livedYears: livedYears,
      livedWeeks: livedWeeks,
      lifeSpan: lifeSpan,
    });

    return (
      <div class="dot-grid__container">
        <div class="dot-grid__description">
          Each row represents a year and each dot represents a week.
        </div>

        <div class="dot-grid__grid">{dotGrid}</div>

        <div class="dot-grid__end">
          <div>And then, just like that...</div>
          <div className="dot-grid__tomb">🪦</div>
        </div>
      </div>
    );
  }
);
