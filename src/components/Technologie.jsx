export default function Technologie({ src, alt, className, label, htmlFor }) {
  return (
    <div className="flex flex-col items-center gap-1 hover:scale-150 transition delay-80 ">
      <img src={src} alt={`logo ${alt}`} className={`w-23 h-23 ${className}`} />
      <label htmlFor={htmlFor} className="text-xs font-bold">
        {label}
      </label>
    </div>
  );
}
