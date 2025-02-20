function calcCols(width) {
  if (width > 1200) return 20;
  if (width > 800) return 15;
  if (width > 500) return 10;
  return 6;
}

export default function BgBars() {
  const cols = calcCols(window.innerWidth);
  const length = window.innerWidth / cols;
  const rows = Math.ceil(window.innerHeight / length);
  return (
    <>
      <svg
        className="fixed left-0 right-0 top-0 z-[-1] w-full"
        width="900"
        height="900"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g stroke="#1f1f1f" fill="transparent" strokeWidth="1">
          {[...Array(rows)].map((_, i) =>
            [...Array(cols)].map((_, j) => (
              <rect
                key={`${i}-${j}`}
                x={j * length}
                y={i * length}
                width={length}
                height={length}
              />
            )),
          )}
        </g>
      </svg>
    </>
  );
}
