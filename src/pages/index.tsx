import { useLanyard, type Types } from "use-lanyard";
import { SiGithub, SiX } from "react-icons/si";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { DISCORD_ID, lanyardData, NAME } from "../util";

import type { GetStaticProps, NextPage } from "next";
import { GitHub, Twitter } from "../container/socials";

interface Props {
	lanyard: Types.Presence;
}

const Index: NextPage<Props> = (props) => {
	const { data: lanyard } = useLanyard(DISCORD_ID, {
		initialData: props.lanyard,
	});

	return (
		<div className="space-y-4">
			<div className="flex items-center space-x-3">
				<GitHub>
					<SiGithub className="w-7 h-7" />
					<span className="sr-only">GitHub Profile</span>
				</GitHub>

				<Twitter>
					<SiX className="w-7 h-7" />
					<span className="sr-only">Twitter Profile</span>
				</Twitter>

				{lanyard && (
					<p className="inline-flex items-center space-x-2">
						<a
							target="_blank"
							href={`https://google.com/maps/search/${lanyard.kv.location}`}
							rel="noreferrer"
							className="flex items-center px-2 pr-3 text-neutral-600 dark:text-white no-underline bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-800 rounded-full transition-colors dark:text-opacity-50"
						>
							<span>
								<HiOutlineLocationMarker className="inline dark:text-white" />
								&nbsp;
							</span>

							<span className="-mb-0.5">
								{lanyard.kv.location}
								&nbsp;
							</span>

							<span className="block -mb-0.5 ml-1 w-[6px] h-[6px] bg-gray-600 dark:bg-white rounded-full animate-pulse" />
						</a>
					</p>
				)}
			</div>

			<h1 className="text-3xl font-bold sm:text-4xl md:text-6xl">
				Hey, I'm <span className="text-blue-700 dark:text-white">{NAME}</span>{" "}
				👋
			</h1>

			<div className="space-y-4 text-lg leading-relaxed">
				<p>
					Senior Full-Stack AI Software Engineer with{" "}
					<strong>6+ years of experience</strong> building scalable applications
					and AI-powered solutions. I specialize in modern web technologies,
					microservices architecture, and cloud infrastructure.
				</p>

				<p>
					Throughout my career, I've worked with companies across the US and
					LATAM, from early-stage startups to established enterprises. Currently
					running{" "}
					<a
						href="https://bobadilla.tech"
						target="_blank"
						rel="noopener noreferrer"
						className="text-blue-600 dark:text-blue-400 hover:underline font-semibold"
					>
						Bobadilla Tech
					</a>
					, where I provide consulting and engineering services, and building{" "}
					<a
						href="https://compilestrength.com"
						target="_blank"
						rel="noopener noreferrer"
						className="text-blue-600 dark:text-blue-400 hover:underline"
					>
						CompileStrength
					</a>
					, an AI-powered fitness platform.
				</p>

				<p>
					<strong>Open to new opportunities</strong> — whether it's full-time
					positions, contract work, or consulting engagements. Check out my{" "}
					<a
						href="/cv"
						className="text-blue-600 dark:text-blue-400 hover:underline font-semibold"
					>
						CV
					</a>{" "}
					for a detailed overview of my experience and projects.
				</p>

				<p className="flex flex-wrap gap-3 pt-2">
					<a
						href="https://www.linkedin.com/in/ultirequiem/"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium"
					>
						LinkedIn
					</a>
					<a
						href="mailto:eliaz@bobadilla.tech"
						className="inline-flex items-center gap-2 px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors font-medium"
					>
						Email
					</a>
					<a
						href="https://x.com/UltiRequiem"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-2 px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors font-medium"
					>
						Twitter
					</a>
				</p>
			</div>
		</div>
	);
};

export const getStaticProps: GetStaticProps<Props> = async () => {
	return {
		props: { lanyard: await lanyardData() },
		revalidate: 120,
	};
};

export default Index;
