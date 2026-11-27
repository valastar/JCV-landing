import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Index } from "@/routes/index";

// El número de WhatsApp de JCV Fitness Center en Hermosillo.
const WA_NUMBER = "662 216 4433 ";
const WA_LINK = "https://wa.me/526621123641";

describe("Contacto de JCV Fitness Center", () => {
  it("muestra el número de WhatsApp y abre el chat con ese número", () => {
    render(<Index />);

    const wa = screen.getByRole("link", { name: new RegExp(WA_NUMBER) });
    expect(wa).toHaveAttribute("href", expect.stringContaining(WA_LINK));
    expect(wa).toHaveTextContent(WA_NUMBER);
  });

  it("enlaza el WhatsApp desde el botón flotante y el pie de página", () => {
    render(<Index />);

    const links = screen.getAllByRole("link", { name: /whatsapp/i });
    expect(links.length).toBeGreaterThanOrEqual(2);
    for (const l of links) {
      expect(l.getAttribute("href")).toContain(WA_LINK);
    }
  });
});
