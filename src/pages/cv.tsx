import type { NextPage } from "next";
import { motion } from "framer-motion";
import {
	FiMail,
	FiPhone,
	FiGlobe,
	FiGithub,
	FiDownload,
	FiBriefcase,
	FiAward,
	FiCode,
} from "react-icons/fi";
import { SiYoutube, SiLinkedin } from "react-icons/si";

const CVPage: NextPage = () => {
	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: { staggerChildren: 0.1 },
		},
	};

	const item = {
		hidden: { opacity: 0, y: 20 },
		show: { opacity: 1, y: 0 },
	};

	const stats = [
		{ label: "Years Experience", value: "6+", icon: FiBriefcase },
		{ label: "Open Source Downloads", value: "1M+", icon: FiDownload },
		{ label: "Open Source Projects", value: "100+", icon: FiCode },
		{ label: "HackerRank Percentile", value: "0.2%", icon: FiAward },
	];

	return (
		<motion.div
			variants={container}
			initial="hidden"
			animate="show"
			className="space-y-16"
		>
			{/* Hero Header with Gradient */}
			<motion.div
				variants={item}
				className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 p-12 md:p-16 text-white shadow-2xl"
			>
				<div className="relative z-10 space-y-6">
					<motion.h1
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2 }}
						className="text-5xl md:text-7xl font-black tracking-tight"
					>
						Eliaz Bobadilla
					</motion.h1>

					<motion.p
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.3 }}
						className="text-2xl md:text-3xl font-light opacity-95"
					>
						Senior Full-Stack AI Engineer
					</motion.p>

					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.4 }}
						className="flex flex-col gap-3 pt-4"
					>
						<div className="flex flex-wrap gap-4">
							<ContactBadge
								href="mailto:eliaz@bobadilla.tech"
								icon={FiMail}
								text="eliaz@bobadilla.tech"
							/>
							<ContactBadge
								href="tel:+51923531893"
								icon={FiPhone}
								text="+51 923 531 893"
							/>
						</div>
						<div className="flex flex-wrap gap-4">
							<ContactBadge
								href="https://github.com/ultirequiem"
								icon={FiGithub}
								text="ultirequiem"
								external
							/>
							<ContactBadge
								href="https://youtube.com/@ultirequiem"
								icon={SiYoutube}
								text="@ultirequiem"
								external
							/>
							<ContactBadge
								href="https://www.linkedin.com/in/ultirequiem/"
								icon={SiLinkedin}
								text="ultirequiem"
								external
							/>
						</div>
					</motion.div>
				</div>

				{/* Animated background blobs */}
				<motion.div
					animate={{
						scale: [1, 1.2, 1],
						rotate: [0, 90, 0],
					}}
					transition={{ duration: 20, repeat: Infinity }}
					className="absolute -top-20 -right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"
				/>
				<motion.div
					animate={{
						scale: [1, 1.3, 1],
						rotate: [0, -90, 0],
					}}
					transition={{ duration: 15, repeat: Infinity }}
					className="absolute -bottom-20 -left-20 w-80 h-80 bg-pink-300/10 rounded-full blur-3xl"
				/>
			</motion.div>

			{/* Stats Grid */}
			<motion.div
				variants={item}
				className="grid grid-cols-2 md:grid-cols-4 gap-4"
			>
				{stats.map((stat) => (
					<StatCard key={stat.label} {...stat} />
				))}
			</motion.div>

			{/* About Me */}
			<motion.section variants={item} className="space-y-4">
				<SectionTitle>About Me</SectionTitle>
				<div className="p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 border border-blue-200 dark:border-blue-800">
					<p className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">
						Senior Full-Stack AI Software Engineer with{" "}
						<strong className="text-blue-600 dark:text-blue-400">
							6+ years
						</strong>{" "}
						of experience building scalable applications and AI-powered
						solutions. End-to-end builder who has shipped full platforms like{" "}
						<a
							href="https://compilestrength.com"
							target="_blank"
							rel="noopener noreferrer"
							className="text-blue-600 dark:text-blue-400 hover:underline"
						>
							CompileStrength
						</a>{" "}
						and owns{" "}
						<a
							href="https://bobadilla.tech"
							target="_blank"
							rel="noopener noreferrer"
							className="text-blue-600 dark:text-blue-400 hover:underline"
						>
							Bobadilla Tech
						</a>
						, a top LATAM engineering agency. Expertise in modern web
						technologies, microservices architecture, and cloud infrastructure.
						Active open-source contributor with{" "}
						<strong className="text-purple-600 dark:text-purple-400">
							1M+ combined downloads
						</strong>{" "}
						across npm, PyPI, and crates.io.
					</p>
				</div>
			</motion.section>

			{/* Experience */}
			<motion.section variants={item} className="space-y-6">
				<SectionTitle icon={FiBriefcase}>Experience</SectionTitle>
				<div className="space-y-6">
					<ExperienceCard
						title="Senior Full-Stack AI Software Engineer"
						company="Mappa"
						location="Delaware, US (Remote)"
						period="2025"
						achievements={[
							"Designed and deployed scalable backend services with NestJS and Hono, handling high-traffic workloads",
							"Built AI-powered solutions including chatbots with Mastra and speech recognition with Deepgram",
							"Created core enterprise applications for hiring workflows and talent management",
							"Managed infrastructure and CI/CD pipelines with Vercel, Railway, Sentry, and PostHog",
						]}
					/>
					<ExperienceCard
						title="Full-Stack Mobile Software Developer"
						company="Belity"
						location="Lima, Peru"
						period="2025"
						achievements={[
							"Migrated Laravel monolith to microservice architecture using Cloud Run",
							"Developed new functionalities using Flutter, GetX, and Material Design",
							"Built web version using Next.js to expand accessibility",
						]}
					/>
					<ExperienceCard
						title="LLM Engineer & AI Prompt Specialist"
						company="Outlier"
						location="San Francisco (Remote)"
						period="2023 - 2024"
						achievements={[
							"Created custom prompts to surface and correct errors in LLMs, improving model accuracy and performance",
							"Taught models to implement projects from scratch with various technologies",
							"Ensured good practices were used, focusing on end-user satisfaction and code quality",
						]}
					/>
					<ExperienceCard
						title="Full-Stack Software Developer"
						company="Snyder Tech"
						location="Pennsylvania (Remote)"
						period="2022"
						achievements={[
							"Achieved seamless phone authentication for internal apps using Laravel and Twilio",
							"Built reusable React components for client and internal projects, improving development efficiency",
							"Improved website reliability by writing comprehensive end-to-end tests using Cypress",
							"Provided customer support and troubleshooting, ensuring high client satisfaction",
							"Streamlined deployment processes by porting Bash scripts to Deno",
						]}
					/>
					<ExperienceCard
						title="Full-Stack Software Developer"
						company="Shareweave"
						location="Pennsylvania (Remote)"
						period="2022"
						achievements={[
							"Developed and maintained an open-source SDK for third-party developers in TypeScript",
							"Increased community adoption and user retention by managing community and providing technical support",
							"Facilitated seamless interaction with Bundlr Network, Supabase, and GUN DB by building robust backend APIs",
						]}
					/>
					<ExperienceCard
						title="Full-Stack Software Developer"
						company="Verigeo"
						location="Lima (Remote)"
						period="2021"
						achievements={[
							"Migrated a geolocation application to a more scalable stack using React, Node.js, Hapi.js, and MongoDB",
							"Implemented configurable dynamic layouts accessible to end-users through a configuration panel",
							"Created and modified backend endpoints to enhance application functionality",
							"Developed a mobile application with Flutter to track a courier in real-time",
						]}
					/>
				</div>
			</motion.section>

			{/* Skills */}
			<motion.section variants={item} className="space-y-6">
				<SectionTitle>Tech Stack</SectionTitle>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					<SkillGroup
						title="Backend"
						skills={[
							"Node.js",
							"Python",
							"Go",
							"NestJS",
							"FastAPI",
							"Django",
							"Express",
						]}
						color="blue"
					/>
					<SkillGroup
						title="Frontend"
						skills={[
							"React",
							"Next.js",
							"TypeScript",
							"TailwindCSS",
							"Flutter",
						]}
						color="purple"
					/>
					<SkillGroup
						title="Cloud & DevOps"
						skills={["AWS", "GCP", "Docker", "CI/CD", "PostgreSQL", "Redis"]}
						color="pink"
					/>
				</div>
			</motion.section>

			{/* Featured Platforms */}
			<motion.section variants={item} className="space-y-6">
				<SectionTitle>Featured Platforms</SectionTitle>
				<div className="grid md:grid-cols-2 gap-6">
					<ProjectCard
						name="Bobadilla Tech"
						url="bobadilla.tech"
						description="Top LATAM engineering agency. MVP development in days, not months."
						gradient="from-indigo-500 to-purple-600"
					/>
					<ProjectCard
						name="CompileStrength"
						url="compilestrength.com"
						description="AI-powered training programs built on exercise science and periodization."
						gradient="from-red-500 to-pink-600"
					/>
				</div>
			</motion.section>

			{/* Open Source Projects */}
			<motion.section variants={item} className="space-y-6">
				<SectionTitle>Open Source Projects</SectionTitle>
				<div className="grid md:grid-cols-2 gap-6">
					<ProjectCard
						name="Sergif"
						url="sergif.ultirequiem.xyz"
						description="Record and share GIFs with friends. Video encoding and streaming."
						gradient="from-orange-400 to-red-500"
					/>
					<ProjectCard
						name="Kimera.js"
						url="kimera.js.org"
						description="Minimal JavaScript/TypeScript runtime written in Go."
						gradient="from-cyan-400 to-blue-500"
					/>
					<ProjectCard
						name="The Jokes API"
						url="joke.deno.dev"
						description="Free API with 500k+ monthly requests. Built with Deno."
						gradient="from-green-400 to-emerald-500"
					/>
				</div>
			</motion.section>

			{/* Open Source */}
			<motion.section variants={item} className="space-y-6">
				<SectionTitle>Open Source Impact</SectionTitle>
				<div className="grid md:grid-cols-2 gap-4">
					<ImpactCard
						ecosystem="JavaScript/TypeScript"
						downloads="500k+"
						projects="50+"
					/>
					<ImpactCard ecosystem="Python" downloads="200k+" projects="15+" />
					<ImpactCard ecosystem="Go" downloads="200k+" projects="15+" />
					<ImpactCard ecosystem="Rust" downloads="20k+" projects="7+" />
				</div>
				<p className="text-center text-gray-600 dark:text-gray-400">
					Contributed to:{" "}
					<strong>Deno, Node.js, Vercel, NumPy, Rust, MDN</strong>
				</p>
			</motion.section>

			{/* Education */}
			<motion.section variants={item} className="space-y-4">
				<SectionTitle>Education & Recognition</SectionTitle>
				<div className="p-6 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-gray-700">
					<h3 className="text-xl font-bold mb-2">
						Universidad Nacional de Ingeniería
					</h3>
					<p className="text-gray-600 dark:text-gray-400 mb-4">
						BS in Computer Science
					</p>
					<div className="space-y-2 text-sm">
						<div className="flex items-center gap-2">
							<FiAward className="text-yellow-500" />
							<span className="font-semibold">
								Top 0.2% of Python programmers in Peru (HackerRank, 2021)
							</span>
						</div>
						<p>Full Stack JavaScript Developer (Platzi, 2021)</p>
						<p>Go Backend Developer (Platzi, 2021)</p>
						<p>Python Backend Developer (Platzi, 2020)</p>
					</div>
				</div>
			</motion.section>
		</motion.div>
	);
};

const ContactBadge = ({
	href,
	icon: Icon,
	text,
	external,
}: {
	href: string;
	icon: React.ElementType;
	text: string;
	external?: boolean;
}) => (
	<a
		href={href}
		{...(external && { target: "_blank", rel: "noopener noreferrer" })}
		className="flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-full backdrop-blur-sm transition-all hover:scale-105"
	>
		<Icon className="w-4 h-4" />
		<span className="text-sm font-medium">{text}</span>
	</a>
);

const StatCard = ({
	label,
	value,
	icon: Icon,
}: {
	label: string;
	value: string;
	icon: React.ElementType;
}) => (
	<motion.div
		whileHover={{ scale: 1.05 }}
		className="p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 text-center"
	>
		<Icon className="w-8 h-8 mx-auto mb-2 text-blue-600 dark:text-blue-400" />
		<p className="text-3xl font-bold text-gray-900 dark:text-white">{value}</p>
		<p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{label}</p>
	</motion.div>
);

const SectionTitle = ({
	children,
	icon: Icon,
}: {
	children: React.ReactNode;
	icon?: React.ElementType;
}) => (
	<h2 className="text-3xl font-bold flex items-center gap-3">
		{Icon && <Icon className="text-blue-600 dark:text-blue-400" />}
		<span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
			{children}
		</span>
	</h2>
);

const ExperienceCard = ({
	title,
	company,
	location,
	period,
	achievements,
}: {
	title: string;
	company: string;
	location: string;
	period: string;
	achievements: string[];
}) => (
	<motion.div
		whileHover={{ scale: 1.02 }}
		className="p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all"
	>
		<h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
		<p className="text-blue-600 dark:text-blue-400 font-semibold">{company}</p>
		<p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
			{location} • {period}
		</p>
		<ul className="space-y-2">
			{achievements.map((achievement) => (
				<li
					key={achievement}
					className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300"
				>
					<span className="text-blue-500 mt-1">▸</span>
					<span>{achievement}</span>
				</li>
			))}
		</ul>
	</motion.div>
);

const SkillGroup = ({
	title,
	skills,
	color,
}: {
	title: string;
	skills: string[];
	color: string;
}) => {
	const colorMap = {
		blue: "from-blue-500 to-cyan-500",
		purple: "from-purple-500 to-pink-500",
		pink: "from-pink-500 to-rose-500",
	};

	return (
		<div className="p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
			<h3
				className={`text-lg font-bold mb-4 bg-gradient-to-r ${colorMap[color as keyof typeof colorMap]} bg-clip-text text-transparent`}
			>
				{title}
			</h3>
			<div className="flex flex-wrap gap-2">
				{skills.map((skill) => (
					<span
						key={skill}
						className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 rounded-full"
					>
						{skill}
					</span>
				))}
			</div>
		</div>
	);
};

const ProjectCard = ({
	name,
	url,
	description,
	gradient,
}: {
	name: string;
	url: string;
	description: string;
	gradient: string;
}) => (
	<motion.a
		href={`https://${url}`}
		target="_blank"
		rel="noopener noreferrer"
		whileHover={{ scale: 1.05, rotate: 1 }}
		className={`block p-6 rounded-2xl bg-gradient-to-br ${gradient} text-white shadow-lg hover:shadow-2xl transition-all`}
	>
		<h3 className="text-2xl font-bold mb-2">{name}</h3>
		<p className="text-sm opacity-90 mb-3">{description}</p>
		<p className="text-xs opacity-75">{url}</p>
	</motion.a>
);

const ImpactCard = ({
	ecosystem,
	downloads,
	projects,
}: {
	ecosystem: string;
	downloads: string;
	projects: string;
}) => (
	<div className="p-4 rounded-xl bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700">
		<h4 className="font-bold text-lg mb-2">{ecosystem}</h4>
		<div className="flex gap-4 text-sm">
			<div>
				<p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
					{downloads}
				</p>
				<p className="text-gray-600 dark:text-gray-400">Downloads</p>
			</div>
			<div>
				<p className="text-2xl font-bold text-purple-600 dark:text-purple-400">
					{projects}
				</p>
				<p className="text-gray-600 dark:text-gray-400">Projects</p>
			</div>
		</div>
	</div>
);

export default CVPage;
