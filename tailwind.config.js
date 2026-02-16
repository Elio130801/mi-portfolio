/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        // Definimos el giro 3D en el eje Y
        'spin-y': {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(360deg)' },
        }
      },
      animation: {
        // Duración: 6 segundos, lineal (velocidad constante), infinita
        'spin-slow-3d': 'spin-y 6s linear infinite',
      },
    },
  },
  plugins: [],
}