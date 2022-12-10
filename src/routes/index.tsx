import { component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { DotGrid } from "~/components/dot-grid/dot-grid";
import { getLivedTime } from "~/helpers/time.helpers";

export default component$(() => {
  const showResults = useSignal(true);
  const dob = useSignal("");

  const YEARS_IN_LIFE = 80;

  const { livedYears, livedWeeks } = getLivedTime({
    dateOfBirth: new Date(dob.value),
    currentDate: new Date(),
  });

  return (
    <div>
      <div class="mx-auto py-16 text-center max-w-4xl">
        <header class="text-center mb-10">
          {showResults.value ? (
            <>
              <h1 class="text-xl font-bold">
                You lived {livedYears} years and {livedWeeks} weeks so far.
              </h1>

              <div>
                If you are lucky to live until {YEARS_IN_LIFE} years old, you
                have {YEARS_IN_LIFE - livedYears} years and {52 - livedWeeks}{" "}
                weeks left.
              </div>

              <div class="mt-5">Enjoy.</div>
            </>
          ) : (
            <>
              <h1 class="font-bold text-3xl">See your life in dots</h1>
            </>
          )}
        </header>

        {showResults.value ? (
          <button
            class="text-blue-600 underline mb-8"
            onClick$={() => (showResults.value = false)}
          >
            Try a different birth date
          </button>
        ) : (
          <form
            class="flex flex-col justify-center items-center gap-4"
            preventdefault:submit
          >
            <label class="dob">
              <span class="block mb-1">Your birth date</span>
              <input
                type="date"
                class="block rounded py-1 px-2 border border-gray-900"
                value={dob.value}
                onChange$={(event) => (dob.value = event.target.value)}
              />
            </label>

            <div>
              <button
                class="bg-blue-600 hover:bg-blue-800 transition text-white text-lg cursor-pointer rounded-md px-4 py-2 disabled:bg-gray-500 disabled:cursor-default"
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
