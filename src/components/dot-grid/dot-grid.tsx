import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { generateDotGrid } from "~/components/dot-grid/helpers/dot-grid.helpers";

import dotGridStyles from "./dot-grid.css?inline";

interface DotGridProps {
  livedYears: number;
  livedMonths: number;
  lifeSpan: number;
}
export const DotGrid = component$(
  ({ livedYears, livedMonths, lifeSpan }: DotGridProps) => {
    useStylesScoped$(dotGridStyles);

    const dotGrid = generateDotGrid({
      livedYears: livedYears,
      livedMonths: livedMonths,
      lifeSpan: lifeSpan,
    });

    return (
      <div class="text-center">
        <div class="mb-8 italic">
          Each row represents a year and each dot represents a month.
        </div>

        <div class="grid">{dotGrid}</div>

        <div class="mt-16">
          <div>And then, just like that, you're gone.</div>
          <div class="text-5xl mt-4">🪦</div>
        </div>
      </div>
    );
  }
);
