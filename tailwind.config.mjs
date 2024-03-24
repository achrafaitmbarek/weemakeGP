/** @type {import('tailwindcss').Config} */

export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			backgroundImage: theme => ({
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-linear': 'linear-gradient(90deg, rgba(112, 179, 193, 0.20) 0%, rgba(22, 183, 141, 0.20) 27%, rgba(137, 97, 253, 0.20) 61%, rgba(204, 164, 59, 0.20) 100%)',
				'gradient-linear-2': 'linear-gradient(to right, #8961FD, #8866FA, #72ACC6, #70B3C1)',
				'gradient-linear-3': 'linear-gradient(to right, rgba(137, 97, 253, 0.07), rgba(137, 97, 253, 0.07) 33%, rgba(112, 179, 193, 0.07) 66%, rgba(112, 179, 193, 0.07))',
				'gradient-linearContact':'linear-gradient(to right, #16B78D33, #CCA43B33)',
			  })
		},
	},
	plugins: [],
}
