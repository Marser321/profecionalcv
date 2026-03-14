import type { Metadata } from 'next';
import './globals.css';
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import { ProfessionProvider } from "@/context/profession-context";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: 'Hub Profesional | Templates Premium',
  description: 'Galería de plantillas premium para profesionales independientes.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={cn("font-sans", geist.variable)}>
      <body className="antialiased">
        <ProfessionProvider>
          {children}
        </ProfessionProvider>
      </body>
    </html>
  );
}
