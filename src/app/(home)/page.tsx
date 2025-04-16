import Link from "next/link";

import { Button } from "@/components/ui/button";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { AuroraText } from "@/components/magicui/aurora-text";

export default function HomePage() {
	return (
		<main className="flex w-full flex-col items-center justify-center p-4 md:p-8">
			<section className="container mx-auto flex max-w-4xl flex-col items-center justify-center text-center py-30">
				<BoxReveal boxColor={"#5046e6"} duration={0.5}>
					<p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold">
						Build modern web applications faster with
					</p>
				</BoxReveal>
				<BoxReveal boxColor={"#5046e6"} duration={0.5}>
					<p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold">
						<AuroraText>Next.js + Neon Boilerplate</AuroraText>
					</p>
				</BoxReveal>

				<BoxReveal boxColor={"#5046e6"} duration={0.5}>
					<div className="mt-6 max-w-2xl text-sm sm:text-base">
						<p className="leading-relaxed">
							A production-ready starter kit that combines
							<span className="font-semibold text-[#5046e6]"> React19</span>,
							<span className="font-semibold text-[#5046e6]"> Next15</span>,
							<span className="font-semibold text-[#5046e6]"> TypeScript</span>,
							<span className="font-semibold text-[#5046e6]"> Tailwind CSS</span>,
							<span className="font-semibold text-[#5046e6]"> Auth.js</span>,
							<span className="font-semibold text-[#5046e6]"> Prisma</span>, and
							<span className="font-semibold text-[#5046e6]"> Neon</span>'s serverless PostgreSQL. <br />
							It’s 100% open source and highly customizable. <br />
						</p>
					</div>
				</BoxReveal>

				<BoxReveal boxColor={"#5046e6"} duration={0.5}>
					<div className="mt-8 flex gap-4">
						<Button asChild className="bg-[#5046e6] px-6 py-2 text-sm sm:text-base">
							<Link href="https://github.com/ywc0008/next.js-neon-boilerplate">Explore</Link>
						</Button>
					</div>
				</BoxReveal>
			</section>
		</main>
	);
}
