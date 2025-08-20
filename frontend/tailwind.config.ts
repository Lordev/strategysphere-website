import type { Config } from 'tailwindcss';

const config = {
	darkMode: ['class'],
	content: [
		'./app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/**/*.{js,ts,jsx,tsx,mdx}',
	],
	prefix: '',
	theme: {
		screens: {
			'2xs': '360px',
			xs: '480px',
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px',
			'3xl': '1800px',
			'4xl': '2000px',

			// IF CHANGES: ALSO CHANGE UseScreenBreakPoints.tsx
		},
		container: {
			center: true,
			padding: '1rem',

			screens: {
				'2xs': '360px',
				xs: '480px',
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
				'2xl': '1536px',
				'3xl': '1800px',
			},
		},

		extend: {
			backgroundImage: {
				'hero-buildings': "url('/images/hero-left.jpg')",
				'hero-side': "url('/images/office-lowq.jpg')",
				footer: "url('/images/skyline-1600w.jpg')",
				'office-buildings':
					"radial-gradient( var(--background),  var(--background), var(--background)), url('/building-orange.jpg')",
				counseling: "url('/meetings.jpg')",
				earth: "url('/earth-left.png')",
				abstract: "url('/abstract-pattern.png')",
				'team-banner': "url('/images/banner-employee.jpg')",
				'contact-me-banner': "url('/images/banner-contact-us.jpg')",
				'about-us-banner': "url('/images/banner-about-us.jpg')",
				'airport-terminal': "url('/airport-terminal.png')",
				'suit-office': "url('/suit-office.png')",
				'business-meeting-grayed':
					"url('/business-meeting-grayed.png')",
				'background-menu': "url('/background-menu-dark.png')",
				'offices-contact': "url('/images/offices-contact.jpg')",
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'var(--background)',
				foreground: 'var(--foreground)',
				primary: {
					DEFAULT: 'var(--primary)',
					foreground: 'var(--primary-foreground)',
				},
				secondary: {
					DEFAULT: 'var(--secondary)',
					foreground: 'var(--secondary-foreground)',
				},

				tertiary: {
					DEFAULT: 'var(--tertiary)',
				},

				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				muted: {
					DEFAULT: 'var(--muted)',
					foreground: 'hsl(var(--muted-foreground))',
				},
				accent: {
					DEFAULT: 'var(--accent)',
					foreground: 'hsl(var(--accent-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				card: {
					DEFAULT: 'var(--card)',
					foreground: 'hsl(var(--card-foreground))',
				},
			},

			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				'zoom-top-right': {
					from: {
						backgroundPosition: '0% 0%',
						transform: 'scale(1)',
					},
					to: {
						backgroundPosition: '10% 10%',
						transform: 'scale(1.15)',
					},
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'zoom-top-right': 'zoom-top-right 15s',
			},
			margin: {
				sm: '5rem',
				lg: '10rem',
			},
		},
	},
	plugins: [
		require('postcss-nesting'), // Enable CSS nesting
		require('tailwindcss'),
		require('tailwindcss-animate'),
		require('tailwind-gradient-mask-image'),
		require('autoprefixer'),
		require('postcss-import'),
		require('daisyui'),
		// Other plugins...
	],
} satisfies Config;

export default config;
