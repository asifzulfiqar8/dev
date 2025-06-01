import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { RootProvider } from "./components/providers/root-provider";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Asif Zulfiqar - Software Engineer",
  description:
    "Hi, I'm Asif Zulfiqar, a passionate Software Engineer with expertise in HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, Reactjs, Nextjs, Node.js, Express, MongoDB, WordPress, Git/GitHub and Typescript. Explore my work and experience in building dynamic, scalable web applications and crafting visually stunning, interactive web solutions.",
  keywords: [
    "Software Engineer",
    "React.js",
    "Next.js",
    "TypeScript",
    "TanStack",
    "Node.js ",
    "Express",
    "MongoDB",
    "WordPress",
    "Git/GitHub",
    "Full Stack Developer",
    "Web Development",
    "Frontend Developer",
  ],
  openGraph: {
    title: "Asif Zulfiqar - Software Engineer",
    description:
      "Explore the world of web development with Asif Zulfiqar, a Software Engineer skilled in HTML, CSS, JavaScript, Tailwind CSS, Reactjs, Nextjs, Node.js, Express, MongoDB, WordPress, Git/GitHub and Typescript. Discover visually stunning and interactive web solutions in my portfolio.",
    url: "https://www.asifzulfiqar.pro",
    images: [
      {
        url: "https://asifzulfiqar.vercel.app/assets/images/asif.png",
        width: 50,
        height: 50,
        alt: "Asif Zulfiqar - Software Engineer",
      },
    ],
  },
  authors: [
    {
      name: "Asif Zulfiqar",
      url: "https://www.asifzulfiqar.pro",
    },
  ],
  alternates: {
    types: {
      "application/x-github": "https://github.com/asifzulfiqar8",
      "application/x-linkedin": "https://www.linkedin.com/in/asifzulfiqar8/",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="light">
      <head>
        <title>Asif Zulfiqar - Software Engineer</title>
        <meta
          name="description"
          content="Hi, I'm Asif Zulfiqar, a passionate Software Engineer with expertise in HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, Reactjs, Nextjs, Node.js, Express, MongoDB, WordPress, Git/GitHub and Typescript. Explore my work and experience in building dynamic, scalable web applications and crafting visually stunning, interactive web solutions."
        />
        <meta
          name="keywords"
          content="Software Engineer, React.js, Next.js, TypeScript, TanStack, Node.js, Express, MongoDB, WordPress, Git/GitHub, Full Stack Developer, Web Development, Frontend Developer"
        />

        {/* Open Graph (WhatsApp, LinkedIn, Facebook) */}
        <meta property="og:title" content="Asif Zulfiqar - Software Engineer" />
        <meta
          property="og:description"
          content="Explore the world of web development with Asif Zulfiqar, a Software Engineer skilled in HTML, CSS, JavaScript, Tailwind CSS, Reactjs, Nextjs, Node.js, Express, MongoDB, WordPress, Git/GitHub and Typescript. Discover visually stunning and interactive web solutions in my portfolio."
        />
        <meta property="og:url" content="https://www.asifzulfiqar.pro" />
        <meta
          property="og:image"
          content="https://asifzulfiqar.vercel.app/assets/images/asif.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Asif Zulfiqar - Software Engineer"
        />
        <meta
          name="twitter:description"
          content="Explore the world of web development with Asif Zulfiqar, a Software Engineer skilled in HTML, CSS, JavaScript, Tailwind CSS, Reactjs, Nextjs, Node.js, Express, MongoDB, WordPress, Git/GitHub and Typescript. Discover visually stunning and interactive web solutions in my portfolio."
        />
        <meta
          name="twitter:image"
          content="https://asifzulfiqar.vercel.app/assets/images/asif.png"
        />
        <meta name="twitter:url" content="https://www.asifzulfiqar.pro" />
      </head>
      <body
        className={`${geist.className} antialiased min-h-screen bg-bgColor flex flex-col`}
      >
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
