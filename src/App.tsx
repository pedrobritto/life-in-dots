import { Header } from "./components/header/header";
import { Weeks as Lifetime } from "./components/lifetime/lifetime";
import { calculateLifetime, getTimeLived } from "./helpers/time.helpers";

function App() {
  const dob = new Date("1991-02-09");
  const YEARS_IN_LIFE = 80;

  const { livedYears, livedWeeks } = getTimeLived({
    dateOfBirth: dob,
    currentDate: new Date(),
  });

  const lifetime = calculateLifetime({
    livedYears: livedYears,
    livedWeeks: livedWeeks,
    yearsInLife: YEARS_IN_LIFE,
  });

  return (
    <div className="container">
      <Header
        livedWeeks={livedWeeks}
        livedYears={livedYears}
        yearsInLife={YEARS_IN_LIFE}
      />

      <Lifetime lifetime={lifetime} />
    </div>
  );
}

export default App;
