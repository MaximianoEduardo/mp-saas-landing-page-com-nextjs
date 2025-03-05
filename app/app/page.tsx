import CallOutComponent from "./components/callout/callout";
import HeaderComponent from "./components/header/header";

export default function Home() {
  return (
    <main className="max-w-[1352px] mx-auto">
      <header>

        <HeaderComponent />
      </header>


      <section>
        <CallOutComponent />
      </section>

    </main>
  );
}
