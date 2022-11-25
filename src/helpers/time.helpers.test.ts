import { describe, test, expect } from "vitest";
import { getLivedTime } from "./time.helpers";

describe("Test 1", () => {
  test("Should correctly calculate lived time", () => {
    expect(
      getLivedTime({
        dateOfBirth: new Date("1991-02-09"),
        currentDate: new Date("2022-02-08"),
      })
    ).toEqual({
      livedYears: 30,
      livedWeeks: 51,
    });

    expect(
      getLivedTime({
        dateOfBirth: new Date("1991-02-09"),
        currentDate: new Date("2022-02-09"),
      })
    ).toEqual({
      livedYears: 31,
      livedWeeks: 0,
    });

    expect(
      getLivedTime({
        dateOfBirth: new Date("1991-02-09"),
        currentDate: new Date("2022-02-10"),
      })
    ).toEqual({
      livedYears: 31,
      livedWeeks: 0,
    });
  });
});
