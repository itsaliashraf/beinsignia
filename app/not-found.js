import Button from "@/components/ui/Button";
import { Accent, Eyebrow } from "@/components/ui/SectionHeader";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <section className="relative isolate overflow-hidden">
      <div aria-hidden="true" className="blueprint absolute inset-0 -z-10" />
      <div className="container-x flex min-h-[100dvh] flex-col justify-center gap-8 py-32">
        <Eyebrow>Error 404</Eyebrow>
        <p aria-hidden="true" className="text-mega font-medium text-outline">404</p>
        <h1 className="max-w-[16ch] text-headline font-medium">
          This page took a wrong <Accent>click.</Accent>
        </h1>
        <p className="max-w-[48ch] text-base leading-relaxed text-fg-muted md:text-lg">
          The link may be broken or the page may have moved. Head back home or tell us what you were looking for.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href="/" size="lg">Back to home</Button>
          <Button href="/contact" variant="ghost" size="lg" arrow={false}>Contact us</Button>
        </div>
      </div>
    </section>
  );
}
