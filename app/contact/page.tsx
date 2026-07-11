import Container from "@/components/ui/Container";
import ContactHero from "@/components/contact/ContactHero";
import ContactCards from "@/components/contact/ContactCards";

export default function ContactPage() {
  return (
    <main className="py-24">
      <Container>
        <ContactHero />
        <ContactCards />
      </Container>
    </main>
  );
}