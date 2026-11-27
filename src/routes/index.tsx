import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";
import floor from "@/assets/floor.png";
import planes from "@/assets/planes.jpg";
import spinning from "@/assets/spinning2.png";
import power from "@/assets/power.png";
import mancuernas from "@/assets/mancuernas.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "JCV Fitness Center | Gimnasio en Hermosillo sin inscripción" },
      {
        name: "description",
        content:
          "Pesas, clases grupales, box y nutrióloga en 2 sucursales en Hermosillo. Mensualidad $950, inscripción $0. WhatsApp 662 112 3641.",
      },
      { property: "og:title", content: "JCV Fitness Center | Hermosillo" },
      {
        property: "og:description",
        content: "Pesas, clases grupales, box y nutrióloga. Inscripción $0.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const IG = "https://www.instagram.com/jcvfitnesscenter/";
const WHATSAPP =
  "https://wa.me/526621123641?text=Hola%20JCV%2C%20quiero%20informaci%C3%B3n%20de%20planes";
const WA_PHONE = "662 112 3641";

const plans = [
  { name: "Día", price: "150", note: "Visita de un día" },
  { name: "Semana", price: "350", note: "7 días de acceso" },
  { name: "Mes", price: "950", note: "Ambas sucursales + clases + nutrióloga", hot: true },
  { name: "Trimestre", price: "2,500", note: "3 meses" },
  { name: "Anual", price: "7,500", note: "El mejor precio por mes" },
];
const branches = [
  {
    num: "01",
    name: "JCV Mega Mall",
    address: "Blvd. Solidaridad #432, interior Plaza Mega (junto a Costco), Villa Satélite",
    phone: "662 216 4433",
  },
  {
    num: "02",
    name: "JCV 2 Paseo Solidaridad",
    address: "Blvd. Solidaridad, Hermosillo, Sonora",
    phone: "662 436 2777",
  },
  {
    num: "03",
    name: "JCV Fitness Center",
    address: "Av. Luis Donaldo Colosio Murrieta 432, Hermosillo, Sonora",
    phone: "662 216 4433",
    rating: "4.7",
    reviews: 396,
    hours: "Cierra a las 10 PM",
  },
];

const days = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];
const schedule: [string, [string, string][]][] = [
  ["7:00 AM", Array(5).fill(["Ritmos Latinos", "Qat"])],
  [
    "8:15 AM",
    [
      ["Body Combat", "Sergio"],
      ["Body Pump", "Cynthia"],
      ["Body Combat", "Sergio"],
      ["Body Pump", "Cynthia"],
      ["Body Combat", "Sergio"],
    ],
  ],
  ["9:15 AM", Array(5).fill(["Ritmos Latinos", "Charly"])],
  ["6:00 PM", Array(5).fill(["Zumba", "Oscar"])],
  [
    "7:15 PM",
    [
      ["Body Pump", "Adrián"],
      ["Pilates Mat", "Alejandra"],
      ["Body Pump", "Adrián"],
      ["Pilates Mat", "Alejandra"],
      ["Body Pump", "Adrián"],
    ],
  ],
  [
    "8:15 PM",
    [
      ["Yoga", "Esthela"],
      ["Yoga", "Adriana"],
      ["Yoga", "Esthela"],
      ["Yoga", "Adriana"],
      ["Yoga", "Esthela"],
    ],
  ],
];

function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 flex items-center gap-3 font-cond text-sm font-extrabold uppercase tracking-[0.3em] text-primary">
      <span className="h-[3px] w-10 bg-primary" />
      {children}
    </p>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.47-2.39-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.44-.53.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.03 1.02-1.03 2.48s1.06 2.87 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.7.3 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.18-1.42-.08-.12-.27-.2-.57-.35M12.05 21.8h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.89 9.89-9.89 2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 0 1 2.89 6.99c0 5.45-4.43 9.89-9.88 9.89m8.41-18.3A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L0 24l6.3-1.65a11.88 11.88 0 0 0 5.69 1.45c6.55 0 11.89-5.34 11.89-11.9 0-3.18-1.24-6.17-3.48-8.41Z" />
    </svg>
  );
}

function Title({ children }: { children: React.ReactNode }) {
  return <h2 className="font-display text-5xl uppercase leading-[0.9] md:text-7xl">{children}</h2>;
}

function Schedule() {
  const [day, setDay] = useState(0);
  const [today, setToday] = useState(-1);
  useEffect(() => {
    const d = new Date().getDay() - 1;
    if (d >= 0 && d < 5) {
      setDay(d);
      setToday(d);
    }
  }, []);
  return (
    <div className="mt-10">
      <div role="tablist" aria-label="Día" className="grid grid-cols-5 gap-2">
        {days.map((d, i) => (
          <button
            key={d}
            role="tab"
            aria-selected={day === i}
            onClick={() => setDay(i)}
            className={`relative py-3 font-cond text-sm font-extrabold uppercase tracking-widest transition-colors md:text-base ${day === i ? "bg-primary text-primary-foreground" : "bg-background text-muted-foreground hover:text-foreground"}`}
          >
            <span className="md:hidden">{d.slice(0, 3)}</span>
            <span className="hidden md:inline">{d}</span>
            {today === i && (
              <span className="absolute -top-2 right-1 bg-foreground px-1.5 font-cond text-[10px] text-background">
                HOY
              </span>
            )}
          </button>
        ))}
      </div>
      <ul className="mt-4 divide-y divide-border border-2 border-border bg-background">
        {schedule.map(([h, row]) => {
          const [c, who] = row[day]!;
          return (
            <li
              key={h}
              className="flex items-center gap-5 p-4 transition-colors hover:bg-secondary md:gap-8 md:px-6"
            >
              <span className="w-24 shrink-0 font-display text-2xl text-primary md:w-32 md:text-3xl">
                {h}
              </span>
              <span className="flex-1">
                <span className="block font-display text-2xl uppercase leading-none md:text-3xl">
                  {c}
                </span>
                <span className="font-cond text-xs uppercase tracking-widest text-muted-foreground">
                  con {who}
                </span>
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      {/* NAV */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
          <a href="#inicio" className="block h-12 w-40 overflow-hidden">
            <img
              src={logo}
              alt="JCV Fitness Center"
              className="h-full w-full object-cover object-center"
            />
          </a>
          <nav className="hidden gap-7 font-cond text-sm font-bold uppercase tracking-widest md:flex">
            {["Planes", "Clases", "Instalaciones", "Sucursales", "Contacto"].map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                {l}
              </a>
            ))}
          </nav>
          <a
            href="#planes"
            className="skew-btn bg-primary px-5 py-2 font-cond text-sm font-extrabold uppercase tracking-wider text-primary-foreground"
          >
            <span>Inscríbete $0</span>
          </a>
        </div>
      </header>

      {/* HERO */}
      <section
        id="inicio"
        className="clip-slant relative flex min-h-[100svh] items-end overflow-hidden pb-28 pt-24"
      >
        <img
          src={floor}
          alt="Piso de pesas de JCV Fitness Center"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/10" />
        <div className="absolute inset-y-0 left-0 w-2 bg-primary" />
        <div className="relative mx-auto w-full max-w-7xl px-5">
          <p className="mb-4 inline-block bg-primary px-3 py-1 font-cond text-sm font-extrabold uppercase tracking-[0.25em] text-primary-foreground">
            Hermosillo · 2 sucursales
          </p>
          <h1 className="font-display text-[17vw] uppercase leading-[0.82] md:text-[9.5rem]">
            Never
            <br />
            give <span className="text-primary">up.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-foreground/85 md:text-xl">
            Equipo Panatta, Gymleco y Life Fitness. +10 clases grupales, box, área power y
            nutrióloga. <b className="text-foreground">Sin inscripción. Sin plazos forzosos.</b>
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#planes"
              className="skew-btn bg-primary px-8 py-4 font-cond text-lg font-extrabold uppercase tracking-wider text-primary-foreground transition-transform hover:scale-105"
            >
              <span>Ver planes →</span>
            </a>
            <a
              href="#clases"
              className="skew-btn border-2 border-foreground px-8 py-4 font-cond text-lg font-extrabold uppercase tracking-wider transition-colors hover:bg-foreground hover:text-background"
            >
              <span>Horarios</span>
            </a>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="-mt-10 relative z-10 -rotate-2 overflow-hidden bg-primary py-3 text-primary-foreground">
        <div className="animate-marquee flex w-max gap-10 whitespace-nowrap font-display text-3xl uppercase">
          {Array(2)
            .fill(0)
            .map((_, k) => (
              <div key={k} className="flex gap-10">
                {[
                  "Inscripción $0",
                  "Challenge your limits",
                  "Box",
                  "Body Pump",
                  "Spinning nuevo",
                  "Believe",
                  "Área Power",
                  "Yoga",
                  "Zumba",
                ].map((t) => (
                  <span key={t} className="flex items-center gap-10">
                    {t}
                    <span>✕</span>
                  </span>
                ))}
              </div>
            ))}
        </div>
      </div>

      {/* STATS */}
      <section className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-5 py-20 md:grid-cols-4">
        {(
          [
            ["$0", "Inscripción"],
            ["10+", "Clases grupales"],
            ["2", "Sucursales"],
            ["365", "Abrimos todos los días"],
          ] as const
        ).map(([n, l]) => (
          <div key={l} className="border-l-4 border-primary bg-card p-6">
            <p className="font-display text-6xl">{n}</p>
            <p className="font-cond text-sm font-bold uppercase tracking-widest text-muted-foreground">
              {l}
            </p>
          </div>
        ))}
      </section>

      {/* PLANES */}
      <section id="planes" className="relative py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid gap-12 lg:grid-cols-[1fr_340px]">
            <div>
              <Kicker>Planes de pago</Kicker>
              <Title>
                Paga lo justo.
                <br />
                <span className="text-primary">Entrena duro.</span>
              </Title>
              <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {plans.map((p) => (
                  <div
                    key={p.name}
                    className={`group relative overflow-hidden border-2 p-6 transition-transform hover:-translate-y-1 ${p.hot ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card"}`}
                  >
                    {p.hot && (
                      <span className="absolute right-3 top-3 bg-background px-2 py-0.5 font-cond text-xs font-extrabold uppercase tracking-widest text-foreground">
                        Más popular
                      </span>
                    )}
                    <p className="font-cond text-lg font-extrabold uppercase tracking-widest">
                      {p.name}
                    </p>
                    <p className="mt-2 font-display text-6xl">
                      ${p.price}
                      <span className="ml-1 font-cond text-base">MXN</span>
                    </p>
                    <p className={`mt-3 text-sm ${p.hot ? "" : "text-muted-foreground"}`}>
                      {p.note}
                    </p>
                  </div>
                ))}
                <div className="stripe-bg flex flex-col justify-center border-2 border-primary p-6">
                  <p className="bg-background p-3 font-cond font-bold uppercase">
                    Solo trae tu INE vigente. Tarjeta o efectivo.
                  </p>
                </div>
              </div>
            </div>
            <img
              src={planes}
              alt="Flyer oficial de planes de pago JCV"
              className="w-full rotate-2 border-4 border-primary shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* CLASES */}
      <section id="clases" className="bg-card py-20">
        <div className="mx-auto max-w-7xl px-5">
          <Kicker>Clases grupales · JCV Mega Mall</Kicker>
          <Title>Horarios</Title>
          <Schedule />
          <div className="mt-10">
            <div className="border-l-4 border-primary bg-background p-6">
              <p className="font-display text-3xl uppercase">Box con Coach Pablo</p>
              <p className="mt-3 text-muted-foreground">
                <b className="text-foreground">Paseo Solidaridad:</b> 8:15 AM y 7:00 PM · lunes a
                viernes
              </p>
              <p className="text-muted-foreground">
                <b className="text-foreground">Mega Mall:</b> 9:15 AM martes y jueves · 5:15 PM
                lunes a viernes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INSTALACIONES */}
      <section id="instalaciones" className="bg-card py-20">
        <div className="mx-auto max-w-7xl px-5">
          <Kicker>Instalaciones</Kicker>
          <Title>
            Hecho para
            <br />
            <span className="text-primary">sudar.</span>
          </Title>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            <figure className="relative overflow-hidden md:col-span-2 md:row-span-2">
              <img src={floor} alt="Área de máquinas" className="h-full w-full object-cover" />
              <figcaption className="absolute bottom-0 left-0 bg-primary px-4 py-2 font-display text-2xl uppercase text-primary-foreground">
                Panatta · Gymleco · Life Fitness
              </figcaption>
            </figure>
            <figure className="relative overflow-hidden md:row-span-2">
              <img
                src={spinning}
                alt="Salón de spinning renovado"
                className="h-full max-h-[640px] w-full object-cover md:max-h-none"
              />
              <figcaption className="absolute bottom-0 left-0 bg-background px-3 py-2 font-cond font-extrabold uppercase">
                Spinning renovado · +$300,000
              </figcaption>
            </figure>
            <figure className="relative overflow-hidden">
              <img
                src={power}
                alt="Socia haciendo peso muerto en el Área Power"
                className="aspect-square w-full object-cover object-top"
              />
              <figcaption className="absolute bottom-0 left-0 bg-primary px-3 py-2 font-cond font-extrabold uppercase text-primary-foreground">
                Área Power
              </figcaption>
            </figure>
            <figure className="relative overflow-hidden md:col-span-2">
              <img
                src={mancuernas}
                alt="Rack de mancuernas"
                className="aspect-square w-full object-cover md:aspect-[2/1]"
              />
              <figcaption className="absolute bottom-0 left-0 bg-background px-3 py-2 font-cond font-extrabold uppercase">
                Mancuernas de sobra
              </figcaption>
            </figure>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {(
              [
                ["Área Power", "Peso libre y powerlifting de alto impacto."],
                ["Nutrióloga", "Incluida en tu mensualidad."],
                ["Tienda de suplementos", "Whey, ISO, creatina, glutamina y snacks en JCV Mega."],
              ] as const
            ).map(([t, d]) => (
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
            {branches.map((b) => (
              <div key={b.name} className="relative overflow-hidden bg-card p-8">
                <span className="absolute -right-4 -top-6 font-display text-[9rem] leading-none text-primary/15">
                  {b.num}
                </span>
                <p className="relative font-display text-4xl uppercase">{b.name}</p>

                {b.rating && (
                  <div className="relative mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 font-cond text-sm font-bold uppercase tracking-widest">
                    <span className="flex items-center gap-1 text-primary">
                      <span aria-hidden="true">★</span> {b.rating}
                      <span className="text-muted-foreground">({b.reviews} reseñas)</span>
                    </span>
                    <span className="text-muted-foreground">· Gimnasio</span>
                    <span className="text-muted-foreground">· +10 años</span>
                  </div>
                )}

                <p className="relative mt-3 text-muted-foreground">{b.address}</p>
                {b.address2 && (
                  <p className="relative text-sm text-muted-foreground">También: {b.address2}</p>
                )}
                {b.hours && (
                  <p className="relative mt-2 font-cond text-sm font-bold uppercase tracking-widest text-foreground">
                    {b.hours}
                  </p>
                )}

                <a
                  href={`tel:${b.phone.replace(/\s/g, "")}`}
                  className="relative mt-6 inline-block font-display text-3xl text-primary hover:underline"
                >
                  {b.phone}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="stripe-bg py-3">
        <div className="bg-background py-16 text-center">
          <p className="font-display text-6xl uppercase md:text-8xl">
            Challenge your <span className="text-primary">limits.</span>
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="skew-btn inline-block bg-whatsapp px-10 py-4 font-cond text-xl font-extrabold uppercase tracking-wider text-whatsapp-foreground transition-transform hover:scale-105"
            >
              <span>Escríbenos por WhatsApp</span>
            </a>
            <a
              href={IG}
              target="_blank"
              rel="noreferrer"
              className="skew-btn inline-block bg-primary px-10 py-4 font-cond text-xl font-extrabold uppercase tracking-wider text-primary-foreground transition-transform hover:scale-105"
            >
              <span>@jcvfitnesscenter</span>
            </a>
          </div>
        </div>
      </section>

      <a
        href={WHATSAPP}
        target="_blank"
        rel="noreferrer"
        aria-label="Escríbenos por WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full bg-whatsapp px-5 py-4 text-whatsapp-foreground shadow-2xl transition-transform hover:scale-105"
      >
        <WhatsAppIcon className="h-8 w-8" />
        <span className="hidden font-cond text-sm font-extrabold uppercase tracking-widest sm:inline">
          WhatsApp
        </span>
      </a>

      <footer className="border-t border-border py-8 text-center font-cond text-sm uppercase tracking-widest text-muted-foreground">
        <p>© {new Date().getFullYear()} JCV Fitness Center · Hermosillo, Sonora</p>
        <p className="mt-2">
          WhatsApp:{" "}
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="text-primary hover:underline"
          >
            escríbenos
          </a>{" "}
          · Instagram:{" "}
          <a href={IG} target="_blank" rel="noreferrer" className="text-primary hover:underline">
            @jcvfitnesscenter
          </a>
        </p>
      </footer>
    </div>
  );
}
