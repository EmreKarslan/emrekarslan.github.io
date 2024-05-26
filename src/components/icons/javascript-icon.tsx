import { CustomSvgProps } from "./types";

export const JavascriptIcon = ({
  mainColor,
  secondaryColor,
  ...props
}: CustomSvgProps) => {
  return (
    <svg
      viewBox="5.5319 -8.6148 512 512"
      width={512}
      height={512}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth={0} />
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g id="SVGRepo_iconCarrier">
        <rect width={512} height={512} rx="15%" fill={mainColor || "#F7DF1E"} />
        <path
          fill={secondaryColor || "#FFF"}
          d="M 248.332 461.142 C 255.402 457.544 271.153 447.395 276.713 431.743 C 283.475 412.71 282.997 395.996 282.997 395.996 L 282.369 284.729 L 282.236 241.104 L 232.109 240.375 L 231.938 284.753 L 231.472 396.52 C 231.472 396.52 231.49 406.733 229.635 412.956 C 228.772 415.851 226.244 419.091 224.263 421.319 C 224.015 421.598 221.682 423.297 221.291 423.578 C 217.529 426.291 209.741 427.557 205.024 427.514 C 199.776 427.467 190.96 424.278 188.542 423.078 C 186.525 422.077 182.178 419.072 179.421 415.686 C 175.182 410.479 171.272 404.538 171.272 404.538 L 130.602 427.87 C 130.602 427.87 134.228 434.776 141.296 442.78 C 145.356 447.377 150.552 452.337 156.849 456.557 C 163.403 460.95 171.463 464.273 179.48 466.579 C 189.133 469.356 198.723 470.658 205.54 470.58 C 212.031 470.505 221.011 469.157 229.365 467.248 C 237.005 465.501 244.122 463.284 248.332 461.142 Z M 317 457 C 325.1 461.2 335 464.3 346 466.4 C 357 468.5 369 469.5 381 469.5 C 393 469.5 404 468.4 415 466.1 C 426 463.8 435 460 443 455.1 C 451.1 449.8 458 443.1 462 434.1 C 466 425.1 469.1 415.1 469.1 402.1 C 469.1 393 467.7 385.1 465 378.1 C 462.3 371.1 458.4 365.1 453 360.1 C 447.9 354.8 442 350.1 435 346.1 C 428 342.1 420 337.9 411 334.1 C 404.4 331.4 399 328.8 393 326.2 C 387.8 323.6 383.3 321 380 318.4 C 376.3 315.7 373.5 312.9 371.5 310 C 369.5 307 368.5 303.7 368.5 300 C 368.5 296.6 369.39 293.5 371.2 290.7 C 373.01 287.9 375.5 285.6 378.7 283.6 C 381.9 281.6 385.9 280.1 390.7 279 C 395.4 277.9 400.6 277.4 406.7 277.4 C 410.9 277.4 415.3 277.71 419.7 278.34 C 424.3 278.97 429 279.94 433.7 281.24 C 438.4 282.54 443 284.14 447.7 286.14 C 452.1 288.14 456.2 290.44 459.7 293.04 L 459.7 246.04 C 452.1 243.14 443.7 240.94 434.7 239.54 C 425.7 238.14 415.7 237.44 403.7 237.44 C 391.7 237.44 380.7 238.74 369.7 241.24 C 358.7 243.74 349.7 247.74 341.7 253.24 C 333.6 258.64 327.7 265.24 322.7 274.24 C 318 282.64 315.7 292.24 315.7 304.24 C 315.7 319.24 320 332.24 328.7 342.24 C 337.3 353.24 350.7 361.24 367.7 369.24 C 374.6 372.04 380.7 374.84 386.7 377.54 C 392.7 380.24 397.7 383.04 401.7 385.94 C 406 388.84 409.4 392.04 411.7 395.44 C 414.2 398.84 415.5 402.84 415.5 407.44 C 415.5 410.64 414.72 413.64 413.2 416.44 C 411.68 419.24 409.3 421.64 406.1 423.64 C 402.9 425.64 399 427.24 394.1 428.44 C 389.4 429.54 384.1 430.14 377.1 430.14 C 366.1 430.14 355.1 428.24 345.1 424.44 C 334.1 420.64 324.1 414.94 317 409 L 317 457 Z"
        />
      </g>
    </svg>
  );
};
