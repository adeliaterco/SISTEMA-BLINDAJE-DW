import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "🛡️ Sistema de Blindaje Total - Protocolo Anti-Pérdida",
  description: "El método secreto para mantener su obsesión para siempre. Solo para clientes VIP.",
  generator: "v0.app",
  keywords: "reconquista, relaciones, sistema blindaje, protocolo anti-pérdida",
  robots: "noindex, nofollow",
  viewport: "width=device-width, initial-scale=1.0, viewport-fit=cover",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense>
          {children}
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
