import Homepage from "../../views/homepage/Homepage";

import type { Metadata } from "next";

export const metadata: Metadata = {
  generator: "Next.js",
  title: "Frontend Test",
  description: "Frontend Test",
};

export default function Home() {
  return <Homepage />;
}
