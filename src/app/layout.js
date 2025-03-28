import Navbar from "@/components/navbar/Navbar";
import "./globals.css";

export const metadata = {
  title: "Profesionalno Snimanje Svadbi, Krštenja, Sportskih Utakmica | Studio Rakita",
  description: "Profesionalno snimanje i fotografisanje svadbi, krštenja, rođendana, i drugih važnih događaja. Pružamo i snimanje fudbalskih, košarkaških i vaterpolo utakmica, ritmičke gimnastike, uz snimanje dronom kao i usluge livestream. Uživajte u najlepšim uspomenama sa profesionalnim kvalitetom.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="sr-Latn-RS">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
