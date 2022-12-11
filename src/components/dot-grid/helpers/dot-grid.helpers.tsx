interface DotGridProps {
  livedYears: number;
  livedMonths: number;
  lifeSpan: number;
}

export function generateDotGrid({
  livedYears,
  livedMonths,
  lifeSpan,
}: DotGridProps) {
  let currentRow = 0;

  const gridComponents = [];

  const yearRow = Array(12)
    .fill("")
    .map(() => <div class="dot" />);

  while (currentRow < lifeSpan) {
    const currentYear = currentRow + 1;

    if (currentRow === 0) {
      gridComponents.push(
        <div class="break">
          <span>Your first years</span>
        </div>
      );
    }

    if (currentRow < livedYears) {
      gridComponents.push(
        <div class="year filled" id={`year-${currentYear}`}>
          {yearRow}
        </div>
      );
    } else if (currentRow === livedYears) {
      const filledMonths = Array(livedMonths)
        .fill("")
        .map(() => <div class="dot filled" />);

      const emptyMonths = Array(12 - livedMonths)
        .fill("")
        .map(() => <div class="dot empty" />);

      gridComponents.push(
        <div class="year" id={`year-${currentYear}`}>
          {[...filledMonths, ...emptyMonths]}
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
