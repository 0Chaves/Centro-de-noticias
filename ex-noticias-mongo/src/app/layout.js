import "./globals.css";
import NavBar from "@/components/NavBar";

export const metadata = {
  title: "Noticias ADS",
  description: "Exemplo feito em aula",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <NavBar/>
        {children}
      </body>
    </html>
  );
}
