interface Props {
  livedWeeks: number;
  livedYears: number;
  yearsInLife: number;
}

export const Header = ({ livedWeeks, livedYears, yearsInLife }: Props) => {
  return (
    <header style={{ textAlign: "center", marginBottom: 40 }}>
      <h1 style={{ marginBottom: 20 }}>This is your life</h1>
      <div>
        You lived {livedYears} years and {livedWeeks} weeks so far.
      </div>
      <div>
        If you live until {yearsInLife} years old, you have{" "}
        {yearsInLife - livedYears} years and {52 - livedWeeks} weeks left.
      </div>

      <div style={{ margin: 20 }}>Enjoy.</div>
    </header>
  );
};
