const corners = [
  { className: "top-4 left-4 sm:top-6 sm:left-6", delay: "0ms" },
  { className: "crop-flip-x top-4 right-4 sm:top-6 sm:right-6", delay: "80ms" },
  { className: "crop-flip-y bottom-4 left-4 sm:bottom-6 sm:left-6", delay: "160ms" },
  { className: "crop-flip-xy right-4 bottom-4 sm:right-6 sm:bottom-6", delay: "240ms" },
];

/** Four registration marks. Each path is the same corner, mirrored in CSS. */
export function CropMarks() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      {corners.map((corner) => (
        <svg
          key={corner.delay}
          viewBox="0 0 28 28"
          className={`absolute size-7 text-lilac ${corner.className}`}
          fill="none"
        >
          <path
            d="M1 16 V1 H16"
            className="crop-draw"
            stroke="currentColor"
            strokeWidth="1"
            style={{ animationDelay: corner.delay }}
          />
        </svg>
      ))}
    </div>
  );
}
