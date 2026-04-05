import { HeroParallax } from "@/components/ui/HeroParallax";

const products = [
  { title: "Golden Hour Magic", link: "#", thumbnail: "/assets/n1.jpg" },
  { title: "Composition Theory", link: "#", thumbnail: "/assets/n2.jpg" },
  { title: "Wildlife Patience", link: "#", thumbnail: "/assets/n3.jpg" },
  { title: "Macro Worlds", link: "#", thumbnail: "/assets/n1.jpg" },
  { title: "Deep Cosmic Narratives", link: "#", thumbnail: "/assets/n2.jpg" },
  { title: "Mountain Vistas", link: "#", thumbnail: "/assets/n3.jpg" },
  { title: "Ocean Whispers", link: "#", thumbnail: "/assets/n1.jpg" },
  { title: "Desert Solitude", link: "#", thumbnail: "/assets/n2.jpg" },
  { title: "Forest Echoes", link: "#", thumbnail: "/assets/n3.jpg" },
  { title: "Arctic Silence", link: "#", thumbnail: "/assets/n1.jpg" },
  { title: "Urban Exploration", link: "#", thumbnail: "/assets/n2.jpg" },
  { title: "Aerial Perspectives", link: "#", thumbnail: "/assets/n3.jpg" },
  { title: "Sunset Silhouettes", link: "#", thumbnail: "/assets/n1.jpg" },
  { title: "Mist & Shadows", link: "#", thumbnail: "/assets/n2.jpg" },
  { title: "Rivers of Life", link: "#", thumbnail: "/assets/n3.jpg" },
];

export const ExplorersLensSection = () => (
  <section className="bg-white dark:bg-zinc-950">
    <HeroParallax products={products} />
  </section>
);
