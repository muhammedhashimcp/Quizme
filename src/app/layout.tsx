import Providers from '@/components/Providers'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import { cn } from '@/lib/utils'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Quizmify',
  description: 'Powered by openai',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
		<html lang="en">
			<body
				className={cn(
					inter.className,
					'antialiased min-h-screen pt-16'
				)}
			>
				<Providers>
					<Navbar />
					{children}
					<Toaster />
				</Providers> 
			</body>
		</html>
  );
}
