import {
  Hero,
  Footer,
  Subscriber,
  PopularProduct,
  Services,
  SpecialOffer,
  SuperQuality,
} from "./sections";
import Nav from "./components/Nav";

const App = () => (
  <main className="relative">
    <Nav />
    <section className="xl:padding-l wide:padding-r padding-b">
      <Hero />
    </section>
    <section className="padding">
      <PopularProduct />
    </section>
    <section className="bg-pale-blue padding">
      <SuperQuality />
    </section>
    <section className="padding">
      <Services />
    </section>
    <section className="padding bg-pale-blue padding">
      <SpecialOffer />
    </section>
    <section className="padding-x sm:py-32 py-10 w-full ">
      <Subscriber />
    </section>
    <section className="bg-black padding-x padding-t pb-8">
      <Footer />
    </section>
  </main>
);

export default App;
