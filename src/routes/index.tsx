import { createFileRoute } from "@tanstack/react-router";
import logo from "@/assets/logo.png.asset.json";
import floor from "@/assets/floor.png.asset.json";
import horario from "@/assets/horario.jpg.asset.json";
import planes from "@/assets/planes.jpg.asset.json";
import karina from "@/assets/karina.jpg.asset.json";
import pablo from "@/assets/pablo.jpg.asset.json";
import fachada from "@/assets/fachada.jpg.asset.json";
import spinning from "@/assets/spinning.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "JCV Fitness Center | Gimnasio en Hermosillo sin inscripción" },
      { name: "description", content: "Pesas, clases grupales, box y nutrióloga en 2 sucursales en Hermosillo. Mensualidad $950, inscripción $0." },
      { property: "og:title", content: "JCV Fitness Center | Hermosillo" },
      { property: "og:description", content: "Pesas, clases grupales, box y nutrióloga. Inscripción $0." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const WA = "https://www.instagram.com/jcvfitnesscenter/";

const plans = [
  { name: "Día", price: "150", note: "Visita de un día" },
  { name: "Semana", price: "350", note: "7 días de acceso" },
  { name: "Mes", price: "950", note: "Ambas sucursales + clases + nutrióloga", hot: true },
  { name: "Trimestre", price: "2,500", note: "3 meses" },
  { name: "Anual", price: "7,500", note: "El mejor precio por mes" },
];

type Coach = { name: string; role: string; info: string; photo?: string; tag?: string };
const coaches: Coach[] = [
  { name: "Coach Pablo", role: "Boxeo", info: "Clases de box en ambas sucursales. Guantes y material incluidos en tu mensualidad.", photo: pablo.url, tag: "Box" },
  { name: "Karina Gamboa", role: "Entrenadora personal", info: "Más de 11 años en JCV entrenando a socios de forma personalizada.", photo: karina.url, tag: "PT" },
  { name: "Amparano PT", role: "Personal trainer", info: "20 años de experiencia. Prescripción del ejercicio para lesiones y rehabilitación. JCV Mega.", tag: "PT" },
  { name: "Vladimir Bustamante", role: "Fuerza y resistencia", info: "Clases de fuerza, resistencia y yoga con pesas.", tag: "Fuerza" },
  { name: "Sergio", role: "Body Combat", info: "Lunes, miércoles y viernes 8:15 AM.", tag: "Clase" },
  { name: "Cynthia", role: "Body Pump", info: "Martes y jueves 8:15 AM.", tag: "Clase" },
  { name: "Adrián", role: "Body Pump", info: "Lunes, miércoles y viernes 7:15 PM.", tag: "Clase" },
  { name: "Oscar", role: "Zumba", info: "Lunes a viernes 6:00 PM.", tag: "Clase" },
  { name: "Charly", role: "Ritmos Latinos", info: "Lunes a viernes 9:15 AM.", tag: "Clase" },
  { name: "Qat", role: "Ritmos Latinos", info: "Lunes a viernes 7:00 AM.", tag: "Clase" },
  { name: "Alejandra", role: "Pilates Mat", info: "Martes y jueves 7:15 PM.", tag: "Clase" },
  { name: "Esthela", role: "Yoga", info: "Lunes, miércoles y viernes 8:15 PM.", tag: "Clase" },
  { name: "Adriana", role: "Yoga", info: "Martes y jueves 8:15 PM.", tag: "Clase" },
];

const days = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];
const schedule: [string, [string, string][]][] = [
  ["7:00 AM", Array(5).fill(["Ritmos Latinos", "Qat"])],
  ["8:15 AM", [["Body Combat", "Sergio"], ["Body Pump", "Cynthia"], ["Body Combat", "Sergio"], ["Body Pump", "Cynthia"], ["Body Combat", "Sergio"]]],
  ["9:15 AM", Array(5).fill(["Ritmos Latinos", "Charly"])],
  ["6:00 PM", Array(5).fill(["Zumba", "Oscar"])],
  ["7:15 PM", [["Body Pump", "Adrián"], ["Pilates Mat", "Alejandra"], ["Body Pump", "Adrián"], ["Pilates Mat", "Alejandra"], ["Body Pump", "Adrián"]]],
  ["8:15 PM", [["Yoga", "Esthela"], ["Yoga", "Adriana"], ["Yoga", "Esthela"], ["Yoga", "Adriana"], ["Yoga", "Esthela"]]],
];

function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 flex items-center gap-3 font-cond text-sm font-extrabold uppercase tracking-[0.3em] text-primary">
      <span className="h-[3px] w-10 bg-primary" />
      {children}
    </p>
  );
}

function Title({ children }: { children: React.ReactNode }) {
  return <h2 className="font-display text-5xl uppercase leading-[0.9] md:text-7xl">{children}</h2>;
}

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      {/* NAV */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
          <a href="#inicio" className="block h-12 w-40 overflow-hidden">
            <img src={logo.url} alt="JCV Fitness Center" className="h-full w-full scale-[1.75] object-cover object-center" />
          </a>
          <nav className="hidden gap-7 font-cond text-sm font-bold uppercase tracking-widest md:flex">
            {["Planes", "Clases", "Coaches", "Instalaciones", "Sucursales"].map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className="text-muted-foreground transition-colors hover:text-primary">{l}</a>
            ))}
          </nav>
          <a href="#planes" className="skew-btn bg-primary px-5 py-2 font-cond text-sm font-extrabold uppercase tracking-wider text-primary-foreground">
            <span>Inscríbete $0</span>
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="inicio" className="clip-slant relative flex min-h-[100svh] items-end overflow-hidden pb-28 pt-24">
        <img src={floor.url} alt="Piso de pesas de JCV Fitness Center" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/10" />
        <div className="absolute inset-y-0 left-0 w-2 bg-primary" />
        <div className="relative mx-auto w-full max-w-7xl px-5">
          <p className="mb-4 inline-block bg-primary px-3 py-1 font-cond text-sm font-extrabold uppercase tracking-[0.25em] text-primary-foreground">
            Hermosillo · 2 sucursales
          </p>
          <h1 className="font-display text-[17vw] uppercase leading-[0.82] md:text-[9.5rem]">
            Never<br />give <span className="text-primary">up.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-foreground/85 md:text-xl">
            Equipo Panatta, Gymleco y Life Fitness. +10 clases grupales, box, área power y nutrióloga. <b className="text-foreground">Sin inscripción. Sin plazos forzosos.</b>
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#planes" className="skew-btn bg-primary px-8 py-4 font-cond text-lg font-extrabold uppercase tracking-wider text-primary-foreground transition-transform hover:scale-105">
              <span>Ver planes →</span>
            </a>
            <a href="#clases" className="skew-btn border-2 border-foreground px-8 py-4 font-cond text-lg font-extrabold uppercase tracking-wider transition-colors hover:bg-foreground hover:text-background">
              <span>Horarios</span>
            </a>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="-mt-10 relative z-10 -rotate-2 overflow-hidden bg-primary py-3 text-primary-foreground">
        <div className="animate-marquee flex w-max gap-10 whitespace-nowrap font-display text-3xl uppercase">
          {Array(2).fill(0).map((_, k) => (
            <div key={k} className="flex gap-10">
              {["Inscripción $0", "Challenge your limits", "Box", "Body Pump", "Spinning nuevo", "Believe", "Área Power", "Yoga", "Zumba"].map((t) => (
                <span key={t} className="flex items-center gap-10">{t}<span>✕</span></span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* STATS */}
      <section className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-5 py-20 md:grid-cols-4">
        {([["$0", "Inscripción"], ["10+", "Clases grupales"], ["2", "Sucursales"], ["365", "Abrimos todos los días"]] as const).map(([n, l]) => (
          <div key={l} className="border-l-4 border-primary bg-card p-6">
            <p className="font-display text-6xl">{n}</p>
            <p className="font-cond text-sm font-bold uppercase tracking-widest text-muted-foreground">{l}</p>
          </div>
        ))}
      </section>

      {/* PLANES */}
      <section id="planes" className="relative py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid gap-12 lg:grid-cols-[1fr_340px]">
            <div>
              <Kicker>Planes de pago</Kicker>
              <Title>Paga lo justo.<br /><span className="text-primary">Entrena duro.</span></Title>
              <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {plans.map((p) => (
                  <div key={p.name} className={`group relative overflow-hidden border-2 p-6 transition-transform hover:-translate-y-1 ${p.hot ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card"}`}>
                    {p.hot && <span className="absolute right-3 top-3 bg-background px-2 py-0.5 font-cond text-xs font-extrabold uppercase tracking-widest text-foreground">Más popular</span>}
                    <p className="font-cond text-lg font-extrabold uppercase tracking-widest">{p.name}</p>
                    <p className="mt-2 font-display text-6xl">${p.price}<span className="ml-1 font-cond text-base">MXN</span></p>
                    <p className={`mt-3 text-sm ${p.hot ? "" : "text-muted-foreground"}`}>{p.note}</p>
                  </div>
                ))}
                <div className="stripe-bg flex flex-col justify-center border-2 border-primary p-6">
                  <p className="bg-background p-3 font-cond font-bold uppercase">Solo trae tu INE vigente. Tarjeta o efectivo.</p>
                </div>
              </div>
            </div>
            <img src={planes.url} alt="Flyer oficial de planes de pago JCV" className="w-full rotate-2 border-4 border-primary shadow-2xl" />
          </div>
        </div>
      </section>

      {/* CLASES */}
      <section id="clases" className="bg-card py-20">
        <div className="mx-auto max-w-7xl px-5">
          <Kicker>Clases grupales · JCV Mega Mall</Kicker>
          <Title>Horarios</Title>
          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="p-3 text-left font-cond font-extrabold uppercase tracking-widest">Hora</th>
                  {days.map((d) => <th key={d} className="p-3 text-left font-cond font-extrabold uppercase tracking-widest">{d}</th>)}
                </tr>
              </thead>
              <tbody>
                {schedule.map(([h, row]) => (
                  <tr key={h} className="border-b border-border">
                    <td className="p-3 font-display text-xl text-primary">{h}</td>
                    {row.map(([c, who], i) => (
                      <td key={i} className="p-3 transition-colors hover:bg-secondary">
                        <p className="font-bold uppercase leading-tight">{c}</p>
                        <p className="font-cond text-xs uppercase tracking-widest text-muted-foreground">{who}</p>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="border-l-4 border-primary bg-background p-6">
              <p className="font-display text-3xl uppercase">Box con Coach Pablo</p>
              <p className="mt-3 text-muted-foreground"><b className="text-foreground">Paseo Solidaridad:</b> 8:15 AM y 7:00 PM · lunes a viernes</p>
              <p className="text-muted-foreground"><b className="text-foreground">Mega Mall:</b> 9:15 AM martes y jueves · 5:15 PM lunes a viernes</p>
            </div>
            <img src={horario.url} alt="Flyer de horarios" className="hidden h-full max-h-56 w-full object-cover object-top md:block" />
          </div>
        </div>
      </section>

      {/* COACHES */}
      <section id="coaches" className="py-20">
        <div className="mx-auto max-w-7xl px-5">
          <Kicker>Team JCV</Kicker>
          <Title>Los que te<br /><span className="text-primary">empujan.</span></Title>
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {coaches.map((c) => (
              <article key={c.name} className="group overflow-hidden bg-card">
                <div className="relative aspect-[4/5] overflow-hidden">
                  {c.photo ? (
                    <img src={c.photo} alt={c.name} className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0" />
                  ) : (
                    <div className="stripe-bg flex h-full w-full items-center justify-center opacity-90">
                      <div className="bg-background px-4 py-3 text-center">
                        <p className="font-cond text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground">Foto de</p>
                        <p className="font-display text-2xl uppercase">{c.name}</p>
                      </div>
                    </div>
                  )}
                  {c.tag && <span className="absolute left-0 top-3 bg-primary px-3 py-1 font-cond text-xs font-extrabold uppercase tracking-widest text-primary-foreground">{c.tag}</span>}
                </div>
                <div className="border-t-4 border-primary p-4">
                  <h3 className="font-display text-2xl uppercase leading-none">{c.name}</h3>
                  <p className="mt-1 font-cond text-sm font-bold uppercase tracking-widest text-primary">{c.role}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{c.info}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* INSTALACIONES */}
      <section id="instalaciones" className="bg-card py-20">
        <div className="mx-auto max-w-7xl px-5">
          <Kicker>Instalaciones</Kicker>
          <Title>Hecho para<br /><span className="text-primary">sudar.</span></Title>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            <figure className="relative overflow-hidden md:col-span-2 md:row-span-2">
              <img src={floor.url} alt="Área de máquinas" className="h-full w-full object-cover" />
              <figcaption className="absolute bottom-0 left-0 bg-primary px-4 py-2 font-display text-2xl uppercase text-primary-foreground">Panatta · Gymleco · Life Fitness</figcaption>
            </figure>
            <figure className="relative overflow-hidden">
              <img src={spinning.url} alt="Nuevo salón de spinning" className="aspect-square w-full object-cover" />
              <figcaption className="absolute bottom-0 left-0 bg-background px-3 py-2 font-cond font-extrabold uppercase">Spinning renovado · +$300,000</figcaption>
            </figure>
            <figure className="relative overflow-hidden">
              <img src={fachada.url} alt="Fachada JCV Mega Mall" className="aspect-square w-full object-cover" />
              <figcaption className="absolute bottom-0 left-0 bg-background px-3 py-2 font-cond font-extrabold uppercase">Fachada JCV Mega</figcaption>
            </figure>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {([["Área Power", "Peso libre y powerlifting de alto impacto."], ["Nutrióloga", "Incluida en tu mensualidad."], ["Tienda de suplementos", "Whey, ISO, creatina, glutamina y snacks en JCV Mega."]] as const).map(([t, d]) => (
              <div key={t} className="border-2 border-border p-5">
                <p className="font-display text-2xl uppercase">{t}</p>
                <p className="text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUCURSALES */}
      <section id="sucursales" className="py-20">
        <div className="mx-auto max-w-7xl px-5">
          <Kicker>Sucursales</Kicker>
          <Title>Ven hoy.</Title>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {([["JCV Mega Mall", "Blvd. Solidaridad #432, interior Plaza Mega (junto a Costco), Villa Satélite", "662 216 4433"], ["JCV 2 Paseo Solidaridad", "Blvd. Solidaridad, Hermosillo, Sonora", "662 436 2777"]] as const).map(([n, a, t]) => (
              <div key={n} className="relative overflow-hidden bg-card p-8">
                <span className="absolute -right-4 -top-6 font-display text-[9rem] leading-none text-primary/15">{n.includes("2") ? "02" : "01"}</span>
                <p className="relative font-display text-4xl uppercase">{n}</p>
                <p className="relative mt-3 text-muted-foreground">{a}</p>
                <a href={`tel:${t.replace(/\s/g, "")}`} className="relative mt-6 inline-block font-display text-3xl text-primary hover:underline">{t}</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="stripe-bg py-3">
        <div className="bg-background py-16 text-center">
          <p className="font-display text-6xl uppercase md:text-8xl">Challenge your <span className="text-primary">limits.</span></p>
          <a href={WA} target="_blank" rel="noreferrer" className="skew-btn mt-8 inline-block bg-primary px-10 py-4 font-cond text-xl font-extrabold uppercase tracking-wider text-primary-foreground transition-transform hover:scale-105">
            <span>@jcvfitnesscenter</span>
          </a>
        </div>
      </section>

      <footer className="border-t border-border py-8 text-center font-cond text-sm uppercase tracking-widest text-muted-foreground">
        © {new Date().getFullYear()} JCV Fitness Center · Hermosillo, Sonora
      </footer>
    </div>
  );
}
