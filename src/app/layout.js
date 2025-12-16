import "./globals.css";

// Commented out due to network restrictions in build environment
// import { Noto_Sans } from "next/font/google";
// const notoSans = Noto_Sans({
//   subsets: ["latin"],
//   weight: ["400", "700"],
// });

export const metadata = {
  title: "Louis Deng - Student & Indie Developer",
  description: "Student and indie developer passionate about technology, literature, music, and traveling. HSEFZ '25, SJTU '29. Experienced in iOS, macOS, Android development, and AI.",
  keywords: ["Louis Deng", "Developer", "SJTU", "AI", "iOS Development", "Software Engineer", "Student"],
  authors: [{ name: "Louis Deng" }],
  creator: "Louis Deng",
  metadataBase: new URL('https://aeilot.github.io'),
  
  // Open Graph
  openGraph: {
    title: "Louis Deng - Student & Indie Developer",
    description: "Student and indie developer passionate about technology, literature, music, and traveling. HSEFZ '25, SJTU '29.",
    url: 'https://aeilot.github.io',
    siteName: "Louis Deng",
    images: [
      {
        url: '/avatar.png',
        width: 400,
        height: 400,
        alt: 'Louis Deng',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: "Louis Deng - Student & Indie Developer",
    description: "Student and indie developer passionate about technology, literature, music, and traveling. HSEFZ '25, SJTU '29.",
    creator: '@aeilotd',
    images: ['/avatar.png'],
  },

  // Additional meta tags
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  themeColor: '#000000',
  
  // Icons
  icons: {
    icon: '/favicon.ico',
    apple: '/avatar.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css"
          rel="stylesheet"
        />
      </head>

      <body>
        {children}
      </body>
    </html>
  );
}
