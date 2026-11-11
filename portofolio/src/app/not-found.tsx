import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col items-start justify-center px-4 py-16 sm:px-6">
      <p className="font-mono text-sm text-muted">404</p>
      <h1 className="mt-2 text-4xl font-bold md:text-5xl">
        Halaman tidak ditemukan
      </h1>
      <p className="mt-4 max-w-prose text-base leading-relaxed text-muted">
        Tautan yang Anda buka mungkin sudah dipindahkan atau tidak pernah ada.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center rounded-full bg-accent px-5 py-2.5 text-on-accent transition-base hover:opacity-90"
      >
        Kembali ke beranda
      </Link>
    </main>
  );
}