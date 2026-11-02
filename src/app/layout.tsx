import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "بوابة واجهات LLM المجانية — الإصدار الخامس الموحد",
  description: "المرجع الموحد لـ 22 مزوداً و296 نموذج LLM مجاني متصل",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
