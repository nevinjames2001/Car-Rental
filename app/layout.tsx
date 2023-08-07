import { relative } from 'path'
import './globals.css';
import { Navbar,Footer } from '@/components';


export const metadata = {
  title: 'Create Next App',
  description: 'Discover the best cars in the world.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
