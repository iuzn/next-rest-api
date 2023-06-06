export const metadata = {
  title: 'Next.js API Routes for Restful API',
  description: 'This template is a starting point for building a RESTful API with Next.js API Routes.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
