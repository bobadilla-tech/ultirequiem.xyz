import type { NextPage } from "next";
import { motion } from "framer-motion";
import {
	FiPhone,
	FiDownload,
	FiBriefcase,
	FiAward,
	FiCode,
	FiBookOpen,
} from "react-icons/fi";
import { SiGmail, SiGithub, SiLinkedin, SiYoutube, SiX } from "react-icons/si";

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
				className="relative overflow-hidden rounded-3xl bg-linear-to-br from-blue-600 via-purple-600 to-pink-600 p-12 md:p-16 text-white shadow-2xl"
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
						Software Engineer · AI Builder · Indie Founder
					</motion.p>

					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.4 }}
						className="flex flex-wrap items-center gap-3 pt-4"
					>
						<ContactBadge
							href="mailto:eliaz@bobadilla.tech"
							icon={SiGmail}
							label="Gmail"
							hoverColor="hover:bg-red-500/80"
						/>
						<ContactBadge
							href="tel:+51923531893"
							icon={FiPhone}
							label="Phone"
							hoverColor="hover:bg-white/30"
						/>
						<ContactBadge
							href="https://github.com/ultirequiem"
							icon={SiGithub}
							label="GitHub"
							hoverColor="hover:bg-gray-700/80"
							external
						/>
						<ContactBadge
							href="https://www.linkedin.com/in/ultirequiem/"
							icon={SiLinkedin}
							label="LinkedIn"
							hoverColor="hover:bg-blue-600/80"
							external
						/>
						<ContactBadge
							href="https://x.com/ultirequiem"
							icon={SiX}
							label="X / Twitter"
							hoverColor="hover:bg-black/60"
							external
						/>
						<ContactBadge
							href="https://youtube.com/@ultirequiem"
							icon={SiYoutube}
							label="YouTube"
							hoverColor="hover:bg-red-600/80"
							external
						/>
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
				className="grid grid-cols-3 gap-4"
			>
				{stats.map((stat) => (
					<StatCard key={stat.label} {...stat} />
				))}
			</motion.div>

			{/* About Me */}
			<motion.section variants={item} className="space-y-4">
				<SectionTitle>About Me</SectionTitle>
				<div className="p-8 rounded-2xl bg-linear-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 border border-blue-200 dark:border-blue-800 space-y-4">
					<p className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">
						I&apos;m Eliaz, a Senior Fullstack Engineer with deep backend and
						AI expertise, focused on scalable systems, performance,
						reliability, and applied AI. I currently work at{" "}
						<strong className="text-blue-600 dark:text-blue-400">
							Ticket Fairy
						</strong>
						, a US ticketing company backed by{" "}
						<strong className="text-purple-600 dark:text-purple-400">
							Y Combinator
						</strong>
						, where I work across product engineering, AI development, and
						system modernization. From debugging revenue-impacting issues and
						shipping client-facing features to leading AI agent development and
						helping migrate large legacy systems safely at scale.
					</p>
					<p className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">
						While most of my work has been hands-on as an individual
						contributor, I frequently lead technical initiatives, mentor
						engineers, collaborate directly with clients and cross-functional
						teams, and help shape technical direction when navigating complex
						trade-offs.
					</p>
					<p className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">
						Alongside industry work, I&apos;ve built and launched products as
						an indie founder, taking ideas from zero to real users and revenue.
						I also teach programming and game development in my local Peruvian
						community, helping kids and teens get started with coding and
						develop confidence through technology.
					</p>
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
				<div className="grid md:grid-cols-3 gap-6">
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
					<ProjectCard
						name="Requiems API"
						url="requiems.xyz"
						description="Production multi-tenant SaaS API platform. Go backend, Rails dashboard, Cloudflare Workers edge gateway."
						gradient="from-violet-500 to-fuchsia-600"
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
				<p className="text-center text-sm text-gray-500 dark:text-gray-400">
					Contributed to:{" "}
					<span className="font-medium text-gray-700 dark:text-gray-300">
						Deno, Node.js, Vercel, NumPy, Rust, MDN
					</span>
				</p>
			</motion.section>

			{/* Education */}
			<motion.section variants={item} className="space-y-4">
				<SectionTitle>Education & Recognition</SectionTitle>
				<div className="grid md:grid-cols-2 gap-6">
					{/* Education Card */}
					<div className="relative overflow-hidden p-6 rounded-2xl bg-linear-to-br from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 border border-blue-200 dark:border-blue-800">
						<div className="absolute left-0 top-0 bottom-0 w-1 bg-linear-to-b from-blue-500 to-purple-600 rounded-l-2xl" />
						<div className="pl-3">
							<FiBookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400 mb-3" />
							<h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
								Universidad Nacional de Ingeniería
							</h3>
							<p className="text-blue-600 dark:text-blue-400 font-medium text-sm mb-2">
								BS in Computer Science
							</p>
							<p className="text-xs text-gray-500 dark:text-gray-400">
								Lima, Peru
							</p>
						</div>
					</div>

					{/* Recognition Card */}
					<div className="p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
						<div className="flex items-center gap-2 mb-4">
							<FiAward className="w-5 h-5 text-yellow-500" />
							<h3 className="font-bold text-gray-900 dark:text-white">
								Certifications & Awards
							</h3>
						</div>

						{/* HackerRank gold highlight */}
						<div className="flex items-start gap-3 p-3 rounded-xl bg-yellow-50 dark:bg-yellow-950/30 border border-yellow-200 dark:border-yellow-800 mb-4">
							<FiAward className="w-4 h-4 text-yellow-500 mt-0.5 shrink-0" />
							<span className="text-sm font-semibold text-yellow-800 dark:text-yellow-300">
								Top 0.2% of Python programmers in Peru — HackerRank, 2021
							</span>
						</div>

						{/* Platzi certs as pills */}
						<div className="flex flex-wrap gap-2">
							<span className="px-3 py-1 rounded-full text-xs font-medium bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-400">
								Full Stack JS Developer · Platzi 2021
							</span>
							<span className="px-3 py-1 rounded-full text-xs font-medium bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-400">
								Go Backend Developer · Platzi 2021
							</span>
							<span className="px-3 py-1 rounded-full text-xs font-medium bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-400">
								Python Backend Developer · Platzi 2020
							</span>
						</div>
					</div>
				</div>
			</motion.section>
		</motion.div>
	);
};

const ContactBadge = ({
	href,
	icon: Icon,
	label,
	hoverColor,
	external,
}: {
	href: string;
	icon: React.ElementType;
	label: string;
	hoverColor: string;
	external?: boolean;
}) => (
	<motion.a
		href={href}
		{...(external && { target: "_blank", rel: "noopener noreferrer" })}
		whileHover={{ scale: 1.1 }}
		whileTap={{ scale: 0.95 }}
		title={label}
		className={`flex items-center justify-center w-11 h-11 rounded-2xl bg-white/20 backdrop-blur-sm transition-colors ${hoverColor}`}
	>
		<Icon className="w-5 h-5" />
	</motion.a>
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
		className="p-6 rounded-2xl bg-linear-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 text-center"
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
		className={`block p-6 rounded-2xl bg-linear-to-br ${gradient} text-white shadow-lg hover:shadow-2xl transition-all`}
	>
		<h3 className="text-2xl font-bold mb-2">{name}</h3>
		<p className="text-sm opacity-90 mb-3">{description}</p>
		<p className="text-xs opacity-75">{url}</p>
	</motion.a>
);

export default CVPage;
