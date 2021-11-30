import { differenceInWeeks, differenceInYears, setYear } from "date-fns";

interface CalculateLifetime {
  livedYears: number;
  livedWeeks: number;
  yearsInLife: number;
}

export function calculateLifetime({
  livedYears,
  livedWeeks,
  yearsInLife,
}: CalculateLifetime): string[][] {
  const WEEKS_IN_YEAR = 52;
  const remainingYears = yearsInLife - livedYears - 1;

  // do transformation here.

  const filledYear = Array(52).fill("filled");
  const emptyYear = Array(52).fill("");

  const pastYears = Array(livedYears).fill(filledYear);

  const currentYear = [
    ...Array(livedWeeks).fill("filled"),
    ...Array(WEEKS_IN_YEAR - livedWeeks),
  ];

  const futureYears = Array(remainingYears).fill(emptyYear);

  return [...pastYears, currentYear, ...futureYears];
}

export function getTimeLived({
  dateOfBirth,
  currentDate,
}: {
  dateOfBirth: Date;
  currentDate: Date;
}) {
  /**
   * NOTE I created a past birthday variable so the week diff
   * calculation is more accurate.
   *
   * For some reason, getting the full week diff from date of birth to current
   * date gives a number way off of the intended calculation.
   */
  const pastBirthday = setYear(dateOfBirth, currentDate.getFullYear() - 1);

  const yearDifference = differenceInYears(currentDate, dateOfBirth);
  const weekDifference = differenceInWeeks(currentDate, pastBirthday);

  const livedYears = yearDifference;
  const livedWeeks = Math.abs(weekDifference % 52);

  return {
    livedYears,
    livedWeeks,
  };
}
