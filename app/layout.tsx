import type { Metadata } from "next";
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
    image: "https://asifzulfiqar.vercel.app/assets/images/asif.png",
  },
  linkedin: {
    profile: "https://www.linkedin.com/in/asifzulfiqar8/",
  },
  github: {
    profile: "https://github.com/asifzulfiqar8",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
