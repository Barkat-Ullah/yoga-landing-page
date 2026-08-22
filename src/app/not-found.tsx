import type { Metadata } from "next";
import NotFoundModule from "@/modules/NotFound";

export const metadata: Metadata = {
  title: "404 - Lost in Stillness | Yoga Flow Studio",
  description:
    "The page you are seeking has dissolved into stillness. Take a deep breath and return to our sanctuary.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return <NotFoundModule />;
}
