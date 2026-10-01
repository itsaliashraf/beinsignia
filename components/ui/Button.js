import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

const base =
  "group relative inline-flex items-center gap-3 rounded-full font-medium tracking-[-0.01em] whitespace-nowrap " +
  "transition-[transform,background-color,border-color,color] duration-300 ease-out-expo active:scale-[0.98]";

const variants = {
  primary: "bg-accent text-on-accent hover:bg-accent-hover",
  ghost: "border border-line-strong text-fg hover:border-fg/40 hover:bg-fg/[0.04]",
  inverse: "bg-fg text-canvas hover:bg-fg/90",
};

const sizes = {
  md: "h-12 text-[15px]",
  lg: "h-14 text-base",
};

/**
 * Pill CTA with a nested icon chip ("button in button").
 * Without `arrow` it renders as a plain pill.
 */
export default function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  arrow = true,
  icon: Icon = ArrowUpRight,
  full = false,
  className = "",
  ...rest
}) {
  const padding = arrow ? "pl-6 pr-1.5" : "px-6";
  const chip =
    variant === "primary"
      ? "bg-on-accent/12 text-on-accent"
      : variant === "inverse"
        ? "bg-canvas/10 text-canvas"
        : "bg-fg/[0.07] text-fg";

  const content = (
    <>
      <span>{children}</span>
      {arrow && (
        <span
          className={`grid place-items-center rounded-full ${size === "lg" ? "size-11" : "size-9"} ${chip} transition-transform duration-500 ease-out-expo group-hover:rotate-45`}
        >
          <Icon size={size === "lg" ? 18 : 16} weight="regular" aria-hidden="true" />
        </span>
      )}
    </>
  );

  const layout = full ? "w-full justify-between" : "justify-center";
  const cls = `${base} ${layout} ${variants[variant]} ${sizes[size]} ${padding} ${className}`;
  const external = /^(https?:|mailto:|tel:)/.test(href);

  if (external) {
    return (
      <a href={href} className={cls} {...rest}>
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} {...rest}>
      {content}
    </Link>
  );
}
