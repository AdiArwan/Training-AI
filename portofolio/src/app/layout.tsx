import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Adi Arwan Syah — Portofolio",
    template: "%s — Adi Arwan Syah",
  },
  description:
    "Portofolio Adi Arwan Syah, mahasiswa Sistem Informasi yang berfokus pada software engineering.",
  applicationName: "Portofolio Adi Arwan Syah",
  authors: [{ name: "Adi Arwan Syah" }],
  creator: "Adi Arwan Syah",
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: "Portofolio Adi Arwan Syah",
    title: "Adi Arwan Syah — Portofolio",
    description:
      "Portofolio Adi Arwan Syah, mahasiswa Sistem Informasi yang berfokus pada software engineering.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
};

/**
 * Dijalankan sebelum paint supaya tidak ada kedipan tema (FOUC).
 * Prioritas: pilihan tersimpan di localStorage, lalu preferensi sistem.
 * Setiap akses storage dibungkus try/catch sesuai brief bagian 5.
 */
const themeBootstrap = `
(function () {
  try {
    var stored = localStorage.getItem("theme");
    var isDark = stored === "dark" || (stored !== "light" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);
    document.documentElement.classList.toggle("dark", isDark);
  } catch (e) {
    /* storage tidak tersedia: abaikan, pakai tema default */
  }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootstrap }} />
      </head>
      <body className="flex min-h-full flex-col bg-bg text-fg font-sans">
        {children}
      </body>
    </html>
  );
}
