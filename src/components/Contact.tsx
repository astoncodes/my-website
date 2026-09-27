import ContactForm from "@/components/ContactForm";
import CopyButton from "@/components/CopyButton";
import ExternalLink from "@/components/ExternalLink";
import { LINKS } from "@/data/links";

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-1 py-3.5">
      <dt className="label">{label}</dt>
      <dd className="flex items-center gap-5">{children}</dd>
    </div>
  );
}

export default function Contact() {
  return (
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-16">
      <dl className="self-start divide-y divide-line border-y border-line">
        <Row label="Email">
          <a href={`mailto:${LINKS.email}`} className="link">{LINKS.email}</a>
          <CopyButton value={LINKS.email} what="email address" />
        </Row>
        <Row label="Phone">
          <a href={LINKS.phoneHref} className="link">{LINKS.phone}</a>
        </Row>
        <Row label="LinkedIn">
          <ExternalLink href={LINKS.linkedin} className="link">ayobami-daniel</ExternalLink>
        </Row>
        <Row label="GitHub">
          <ExternalLink href={LINKS.github} className="link">astoncodes</ExternalLink>
        </Row>
      </dl>

      <ContactForm />
    </div>
  );
}
