import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#dcf1f7",
};

export const metadata: Metadata = {
  title: {
    default: "Detoxie - Break Instagram Reels Addiction",
    template: "%s | Detoxie"
  },
  description: "Stop mindless scrolling on Instagram Reels. Detoxie helps you overcome social media addiction with smart timers, to-do list overlays, and focus reminders. Take back control of your screen time and reclaim your focus.",
  keywords: [
    "instagram reels addiction",
    "stop scrolling instagram",
    "social media addiction app",
    "screen time control",
    "digital detox app",
    "instagram addiction help",
    "reduce screen time",
    "focus app",
    "productivity app",
    "mindless scrolling",
    "reels addiction cure",
    "phone addiction app",
    "social media detox",
    "instagram timer",
    "screen time tracker",
    "digital wellbeing",
    "break phone addiction",
    "stop instagram addiction",
    "social media blocker",
    "focus mode app"
  ],
  authors: [{ name: "Anamika Aggarwal", url: "https://anamikaagg.com" }],
  creator: "Anamika Aggarwal",
  publisher: "Detoxie",
  applicationName: "Detoxie",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://detoxie.vercel.app",
    siteName: "Detoxie",
    title: "Detoxie - Break Instagram Reels Addiction",
    description: "Stop mindless scrolling on Instagram Reels. Smart timers, to-do overlays, and focus reminders to help you overcome social media addiction and reclaim your productivity.",
    images: [
      {
        url: "https://detoxie.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Detoxie App - Break Instagram Reels Addiction",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Detoxie - Break Instagram Reels Addiction",
    description: "Stop mindless scrolling. Smart timers & to-do overlays to overcome Instagram addiction and boost productivity.",
    images: ["https://detoxie.vercel.app/og-image.png"],
    creator: "@anamika_agg",
  },

  // App links
  appLinks: {
    android: {
      package: "com.detoxie",
      app_name: "Detoxie",
      url: "https://play.google.com/store/apps/details?id=com.detoxie",
    },
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Verification 
  // verification: {
  //   google: "google-verification-code",
  //   yandex: "yandex-verification-code",
  // },

  alternates: {
    canonical: "https://detoxie.vercel.app",
  },

  // Category
  category: "technology",

};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "name": "Detoxie",
      "applicationCategory": "LifestyleApplication",
      "operatingSystem": "Android",
      "description": "Detoxie helps you overcome Instagram Reels addiction with smart timers, to-do list overlays, and focus reminders. Take back control of your screen time.",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.5",
        "ratingCount": "100"
      },
      "downloadUrl": "https://play.google.com/store/apps/details?id=com.detoxie",
      "screenshot": [
        "https://detoxie.vercel.app/detoxie/welcome.jpg",
        "https://detoxie.vercel.app/detoxie/home.jpg",
        "https://detoxie.vercel.app/detoxie/overlay.png"
      ],
      "featureList": [
        "Instagram Reels timer",
        "To-do list overlay",
        "Screen time tracking",
        "Focus reminders",
        "Vacation mode",
        "Digital detox tools"
      ]
    },
    {
      "@type": "WebSite",
      "name": "Detoxie",
      "url": "https://detoxie.vercel.app",
      "description": "Break free from Instagram Reels addiction. Detoxie app helps you control screen time with smart timers and focus tools.",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://detoxie.vercel.app/?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "Organization",
      "name": "Detoxie",
      "url": "https://detoxie.vercel.app",
      "logo": "https://detoxie.vercel.app/logo.png",
      "sameAs": [
        "https://play.google.com/store/apps/details?id=com.detoxie"
      ],
      "founder": {
        "@type": "Person",
        "name": "Anamika Aggarwal",
        "url": "https://anamikaagg.com"
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How does Detoxie help with Instagram addiction?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Detoxie helps you overcome Instagram Reels addiction by displaying your timers, to-do lists, and vision photos as overlays when you exceed your daily time limit. This gentle reminder helps you make conscious choices about your screen time."
          }
        },
        {
          "@type": "Question",
          "name": "Is Detoxie free to use?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Detoxie is free to download and use. It provides all essential features to help you control your Instagram scrolling habit without any cost."
          }
        },
        {
          "@type": "Question",
          "name": "What is Vacation Mode in Detoxie?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Vacation Mode allows you to temporarily pause all Detoxie overlays and reminders when you are on holiday or need a break. You can easily toggle it back on when you are ready to refocus."
          }
        }
      ]
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
