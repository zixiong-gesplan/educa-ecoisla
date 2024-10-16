import type { Metadata } from "next";
import { Inter, M_PLUS_Rounded_1c } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

import { Header } from "./sections/01-header";
import { Footer } from "./sections/09-footer";

const MPLUS1 = M_PLUS_Rounded_1c({
	weight: ["700", "900"],
	subsets: ["latin"],
	style: "normal",
});

export const metadata: Metadata = {
	title: "Educa Ecoisla",
	description: "Web para la divulgación del proyecto de Educa Ecoisla",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="es">
			<body className={MPLUS1.className}>
				<Header></Header>
				{children}
				<Footer></Footer>
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	);
}
