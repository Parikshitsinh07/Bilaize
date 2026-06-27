import { InfiniteSlider } from "./infinite-slider";
import { cn } from "../../lib/utils";

export function LogoCloud({ className, logos, ...props }) {
  return (
    <div
      {...props}
      className={cn(
        "overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black,transparent)]",
        className
      )}
    >
      <InfiniteSlider gap={42} reverse duration={80} durationOnHover={25}>
        {logos.map((logo) => (
          <img
            alt={logo.alt}
            className="pointer-events-none h-7 select-none md:h-10"
            height={logo.height || "auto"}
            key={`logo-${logo.alt}`}
            loading="lazy"
            src={logo.src}
            width={logo.width || "auto"}
            style={{ filter: "brightness(0.2)" }} // dark/charcoal color for light theme page!
          />
        ))}
      </InfiniteSlider>
    </div>
  );
}
export default LogoCloud;
