// Individual letter paths extracted from the Chasepixel logo SVG
// Each letter is provided with its original viewBox coordinates for use as decorative elements

// "chase" letters
export const LetterC = () => (
  <svg viewBox="0 0 22 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <path d="M13.3192 27.454C5.47522 27.454 -0.000781236 22.126 -0.000781236 14.097C-0.000781236 6.10501 5.54922 0.666009 13.6892 0.666009C16.6122 0.666009 19.5722 1.62801 21.8662 3.36701L17.0192 11.433C16.0942 10.656 14.9472 10.212 13.7262 10.212C11.3582 10.212 9.65622 11.84 9.65622 14.023C9.65622 16.354 11.2102 17.908 13.6892 17.908C15.0952 17.908 16.2792 17.464 17.3522 16.576L21.8662 24.716C19.7942 26.381 16.7602 27.454 13.3192 27.454Z" fill="currentColor"/>
  </svg>
);

export const LetterA = () => (
  <svg viewBox="48 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <path d="M48.9057 27.01L62.6327 9.05991e-06L76.3597 27.01H48.9057Z" fill="currentColor"/>
  </svg>
);

export const LetterX = () => (
  <svg viewBox="162 0 26 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <path d="M162.619 27.01L169.871 12.728L162.915 1.11001H187.187L180.231 12.728L187.483 27.01H162.619Z" fill="currentColor"/>
  </svg>
);

export const LetterP = () => (
  <svg viewBox="127 0 21 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <path d="M127.217 27.01V1.11001H136.467C139.538 1.11001 147.789 1.48001 147.789 10.249C147.789 16.058 144.089 18.944 136.467 19.166V27.01H127.217Z" fill="currentColor"/>
  </svg>
);

export const LetterE = () => (
  <svg viewBox="103 0 21 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <path d="M103.406 27.01V1.11001H123.201V10.212H112.508V13.135H121.203V14.837H112.508V17.908H123.201V27.01H103.406Z" fill="currentColor"/>
  </svg>
);

// Full logo component with "chase" in foreground color and "pixel" in primary color
const Logo = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 233 28" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* "chase" in foreground/navy */}
    <g className="fill-foreground">
      <path d="M13.3192 27.454C5.47522 27.454 -0.000781236 22.126 -0.000781236 14.097C-0.000781236 6.10501 5.54922 0.666009 13.6892 0.666009C16.6122 0.666009 19.5722 1.62801 21.8662 3.36701L17.0192 11.433C16.0942 10.656 14.9472 10.212 13.7262 10.212C11.3582 10.212 9.65622 11.84 9.65622 14.023C9.65622 16.354 11.2102 17.908 13.6892 17.908C15.0952 17.908 16.2792 17.464 17.3522 16.576L21.8662 24.716C19.7942 26.381 16.7602 27.454 13.3192 27.454Z"/>
      <path d="M24.6721 27.01V1.11001H33.9221V12.839H37.2521V1.11001H46.5021V27.01H37.2521V14.541H33.9221V27.01H24.6721Z"/>
      <path d="M48.9057 27.01L62.6327 9.05991e-06L76.3597 27.01H48.9057Z"/>
      <path d="M77.727 27.01V17.908C82.611 17.908 84.313 16.65 87.051 9.76801C89.419 3.81101 92.638 1.11001 98.743 1.11001H100.001V10.175H99.964C97.078 10.175 96.042 12.802 94.525 16.983C92.009 23.902 87.384 27.01 80.132 27.01H77.727Z"/>
      <path d="M103.406 27.01V1.11001H123.201V10.212H112.508V13.135H121.203V14.837H112.508V17.908H123.201V27.01H103.406Z"/>
    </g>
    {/* "pixel" in primary/orange */}
    <g className="fill-primary">
      <path d="M127.217 27.01V1.11001H136.467C139.538 1.11001 147.789 1.48001 147.789 10.249C147.789 16.058 144.089 18.944 136.467 19.166V27.01H127.217Z"/>
      <path d="M150.812 27.01V1.11001H160.062V27.01H150.812Z"/>
      <path d="M162.619 27.01L169.871 12.728L162.915 1.11001H187.187L180.231 12.728L187.483 27.01H162.619Z"/>
      <path d="M190.052 27.01V1.11001H209.847V10.212H199.154V13.135H207.849V14.837H199.154V17.908H209.847V27.01H190.052Z"/>
      <path d="M213.864 27.01V1.11001H223.114V17.908H232.438V27.01H213.864Z"/>
    </g>
  </svg>
);

export default Logo;
