/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html','./src/**/*.{html,jsx}',
  'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    container:{
      padding:{
        // default:'15px',
      },
      screens:{
        sm:'640px',
        md:'768px',
        lg:'960px',
        xl:'1200px',
      },
    },
    extend: {
      fontFamily:{
        // custom:['Roboto Mono', 'monospace']
      },
    },
  },
  plugins: [('flowbite/plugin')],
}


