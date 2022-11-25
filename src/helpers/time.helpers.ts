import {
  differenceInWeeks,
  differenceInYears,
  setYear,
  compareAsc,
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
   * The latestBirthday variable was created so the week diff
   * calculation is more accurate, as comparing dates with 10+ years of
   * difference can lead to week numbers that are not multiples of 52.
   */
  const latestBirthday =
    compareAsc(currentDate, birthdayCurrentYear) >= 1
      ? birthdayCurrentYear
      : birthdayLastYear;

  const yearDifference = differenceInYears(currentDate, dateOfBirth);
  const weekDifference = differenceInWeeks(currentDate, latestBirthday);

  const livedYears =
    weekDifference === 52 ? yearDifference + 1 : yearDifference;

  const livedWeeks = Math.abs(weekDifference % 52);

  return {
    livedYears,
    livedWeeks,
  };
}
