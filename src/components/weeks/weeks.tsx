import {
  differenceInCalendarWeeks,
  differenceInWeeks,
  differenceInCalendarYears,
  differenceInYears,
  setYear,
} from "date-fns";

const YEARS_IN_LIFE = 80;
const dob = new Date("1991-02-09");

interface CalculateLifetime {
  livedYears: number;
  livedWeeks: number;
  yearsInLife: number;
}

function calculateLifetime({
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

function getTimeDifferences({
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

export const Weeks = ({
  dateOfBirth = dob,
  yearsInLife = YEARS_IN_LIFE,
}: {
  dateOfBirth: Date;
  yearsInLife: number;
}) => {
  const timings = getTimeDifferences({
    dateOfBirth,
    currentDate: new Date(),
  });

  const lifetime = calculateLifetime({
    livedYears: timings.livedYears,
    livedWeeks: timings.livedWeeks,
    yearsInLife,
  });

  return (
    <>
      <header style={{ textAlign: "center", marginBottom: 40 }}>
        <h1 style={{ marginBottom: 20 }}>Time is Fleeting</h1>
        <div>
          You lived {timings.livedYears} years and {timings.livedWeeks} weeks so
          far.
        </div>
        <div>
          If you live until {yearsInLife} years old, you have{" "}
          {yearsInLife - timings.livedYears} years and {52 - timings.livedWeeks}{" "}
          weeks left.
        </div>

        <div style={{ margin: 20 }}>Enjoy.</div>
      </header>

      {lifetime.map((row, rowIndex) => {
        return (
          <div>
            {rowIndex % 10 === 0 ? <div style={{ marginBottom: 20 }} /> : null}

            <div key={`row-${rowIndex}`} className="year">
              {row.map((week: string, weekIndex: number) => {
                return (
                  <div
                    key={weekIndex}
                    className={`week ${week === "filled" ? "filled" : ""}`}
                  ></div>
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
};
