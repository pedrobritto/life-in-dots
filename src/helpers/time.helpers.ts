import {
  differenceInYears,
  setYear,
  compareAsc,
  differenceInMonths,
} from "date-fns";

export function getLivedTime({
  dateOfBirth,
  currentDate,
}: {
  dateOfBirth: Date;
  currentDate: Date;
}) {
  const birthdayCurrentYear = setYear(dateOfBirth, currentDate.getFullYear());
  const birthdayLastYear = setYear(dateOfBirth, currentDate.getFullYear() - 1);

  /**
   * The latestBirthday variable was created so the month diff
   * calculation is more accurate, as comparing dates with 10+ years of
   * difference can lead to month numbers that are not multiples of 52.
   */
  const latestBirthday =
    compareAsc(currentDate, birthdayCurrentYear) >= 1
      ? birthdayCurrentYear
      : birthdayLastYear;

  const yearDifference = differenceInYears(currentDate, dateOfBirth);
  const monthDifference = differenceInMonths(currentDate, latestBirthday);

  const livedYears =
    monthDifference === 12 ? yearDifference + 1 : yearDifference;

  const livedMonths = Math.abs(monthDifference % 12);

  return {
    livedYears,
    livedMonths,
  };
}
