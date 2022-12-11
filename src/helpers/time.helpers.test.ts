import { describe, test, expect } from "vitest";
import { getLivedTime } from "./time.helpers";

describe("Time calculations", () => {
  test("should correctly calculate lived time", () => {
    expect(
      getLivedTime({
        dateOfBirth: new Date("1991-02-09"),
        currentDate: new Date("2022-02-08"),
      })
    ).toEqual({
      livedYears: 30,
      livedMonths: 11,
    });

    expect(
      getLivedTime({
        dateOfBirth: new Date("1991-02-09"),
        currentDate: new Date("2022-02-09"),
      })
    ).toEqual({
      livedYears: 30,
      livedMonths: 11,
    });

    expect(
      getLivedTime({
        dateOfBirth: new Date("1991-02-09"),
        currentDate: new Date("2022-02-10"),
      })
    ).toEqual({
      livedYears: 31,
      livedMonths: 0,
    });
  });
});
