import { component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { DotGrid } from "~/components/dot-grid/dot-grid";
import { getLivedTime } from "~/helpers/time.helpers";

export default component$(() => {
  const showResults = useSignal(false);
  const dob = useSignal("");

  const YEARS_IN_LIFE = 80;

  const { livedYears, livedMonths } = getLivedTime({
    dateOfBirth: new Date(dob.value),
    currentDate: new Date(),
  });

  return (
    <div>
      <div class="mx-auto py-16 px-8 text-center max-w-4xl">
        {!showResults.value && <div class="pt-16" />}

        <header class="text-center mb-8">
          {showResults.value ? (
            <h1 class="text-2xl font-bold">
              You lived {livedYears} years and {livedMonths} months so far.
            </h1>
          ) : (
            <h1 class="font-bold text-3xl">See your life in dots</h1>
          )}
        </header>

        {showResults.value ? (
          <>
            <div>
              If you are lucky enough to live until {YEARS_IN_LIFE} years old,
              then you have {YEARS_IN_LIFE - livedYears} years and{" "}
              {12 - livedMonths} months left.
            </div>

            <div class="mt-5 font-bold">Don't waste it.</div>

            <button
              class="text-blue-600 underline mb-8 mt-5"
              onClick$={() => (showResults.value = false)}
            >
              Try a different birth date
            </button>
          </>
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
            livedMonths={livedMonths}
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
