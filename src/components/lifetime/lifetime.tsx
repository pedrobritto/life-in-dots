export const Weeks = ({ lifetime }) => {
  return (
    <div>
      <div>Each row represents a year and each dot represents a week.</div>

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

      <div>
        <div style={{ marginTop: 30, textAlign: "center" }}>Memento Mori</div>
        <div style={{ marginTop: 20, textAlign: "center", fontSize: 30 }}>
          💀
        </div>
        <div>
          Gather ye rose-buds while ye may, Old Time is still a-flying; And this
          same flower that smiles today, Tomorrow will be dying
        </div>
      </div>
    </div>
  );
};
