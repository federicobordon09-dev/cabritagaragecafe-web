import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Historia } from "@/components/historia";
import { ProductosEstrella } from "@/components/productos-estrella";
import { MenuDigital } from "@/components/menu-digital";
import { Resenas } from "@/components/resenas";
import { Sucursales } from "@/components/sucursales";
import { Delivery } from "@/components/delivery";
import { Eventos } from "@/components/eventos";
import { FAQ } from "@/components/faq";
import { CtaFinal } from "@/components/cta-final";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Historia />
        <ProductosEstrella />
        <MenuDigital />
        <Resenas />
        <Sucursales />
        <Delivery />
        <Eventos />
        <FAQ />
        <CtaFinal />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
