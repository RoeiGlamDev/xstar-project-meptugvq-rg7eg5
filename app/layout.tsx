import React from 'react';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'GlamCS',
  description: 'GlamCS - e-commerce store | Premium beauty and cosmetics platform with 3D designs, luxury effects',
  keywords: 'GlamCS, e-commerce store, beauty and cosmetics, 3D designs, luxury effects',
  authors: [{ name: 'GlamCS' }],
  openGraph: {
    title: 'GlamCS',
    description: 'GlamCS - e-commerce store | Premium beauty and cosmetics platform',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="">
      <body className="antialiased bg-white text-black">{children}</body>
    </html>
  );
}