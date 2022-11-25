import { component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { DotGrid } from "~/components/dot-grid/dot-grid";
import { getLivedTime } from "~/helpers/time.helpers";

export default component$(() => {
  const showResults = useSignal(false);
  const dob = useSignal("");

  const YEARS_IN_LIFE = 80;

  const { livedYears, livedWeeks } = getLivedTime({
    dateOfBirth: new Date(dob.value),
    currentDate: new Date(),
  });

  return (
    <div>
      <div className="container">
        <header style={{ textAlign: "center", marginBottom: "40px" }}>
          {showResults.value ? (
            <>
              <h1>
                You lived {livedYears} years and {livedWeeks} weeks so far.
              </h1>
              <div>
                If you are lucky to live until {YEARS_IN_LIFE} years old, you
                have {YEARS_IN_LIFE - livedYears} years and {52 - livedWeeks}{" "}
                weeks left.
              </div>

              <div style={{ margin: "20px" }}>Enjoy.</div>
            </>
          ) : (
            <>
              <h1 style={{ marginBottom: "20px" }}>See your life in dots</h1>
            </>
          )}
        </header>

        {showResults.value ? (
          <button onClick$={() => (showResults.value = false)}>
            Try a different birth date
          </button>
        ) : (
          <form class="controls" preventdefault:submit>
            <label class="dob">
              <span>Your birth date</span>
              <input
                type="date"
                value={dob.value}
                onChange$={(event) => (dob.value = event.target.value)}
              />
            </label>

            <div>
              <button
                class="button main"
                type="submit"
                disabled={!dob.value}
                onClick$={() => {
                  console.log("dob", dob.value);
                  showResults.value = true;
                }}
              >
                See your life in dots
              </button>
            </div>
          </form>
        )}

        {showResults.value === true && (
          <DotGrid
            livedYears={livedYears}
            livedWeeks={livedWeeks}
            lifeSpan={YEARS_IN_LIFE}
          />
        )}
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Your life in dots",
  meta: [
    {
      name: "description",
      content: "Your life in dots",
    },
  ],
};
