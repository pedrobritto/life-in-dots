interface DotGridProps {
  livedYears: number;
  livedWeeks: number;
  lifeSpan: number;
}

export function generateDotGrid({
  livedYears,
  livedWeeks,
  lifeSpan,
}: DotGridProps) {
  let currentRow = 0;

  const gridComponents = [];

  const yearRow = Array(52)
    .fill("")
    .map(() => <div class="dot" />);

  while (currentRow < lifeSpan) {
    const currentYear = currentRow + 1;

    if (currentRow < livedYears) {
      gridComponents.push(
        <div class="year filled" id={`year-${currentYear}`}>
          {yearRow}
        </div>
      );
    } else if (currentRow === livedYears) {
      const filledWeeks = Array(livedWeeks)
        .fill("")
        .map(() => <div class="dot filled" />);

      const emptyWeeks = Array(52 - livedWeeks)
        .fill("")
        .map(() => <div class="dot empty" />);

      gridComponents.push(
        <div class="year" id={`year-${currentYear}`}>
          {[...filledWeeks, ...emptyWeeks]}
        </div>
      );
    } else {
      gridComponents.push(
        <div class="year" id={`year-${currentYear}`}>
          {yearRow}
        </div>
      );
    }

    if (currentYear % 10 === 0 && currentYear !== 80) {
      gridComponents.push(
        <div class="break">
          <span>Your {currentYear}'s</span>
        </div>
      );
    }

    currentRow += 1;
  }

  return gridComponents;
}
