import styles from "./page.module.css";
import Waves from "@/components/waves/Waves";
import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";
import Person from "@/components/person/Person";
import EventComponent from "@/components/event/Event";
import Galery from "@/components/galery/Galery";
import Gift from "@/components/gift/Gift";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <main className={styles.main}>
      <Waves />
      <Hero />
      <Person />
      <EventComponent />
      <Galery />
      {/* <Gift /> */}
      <Footer />
      <Navbar />
    </main>
  );
}
