# 📦 romak-chatbot

A modern, responsive, and accessible **Chatbot UI** built with Next.js, TailwindCSS, and Radix UI components. This project serves as a starter template or production-ready chatbot interface, optimized for DX and UX.

<video src="assets/demo.mp4" controls width="600"></video>

🔗 [Demo]()

---

## ✨ Features

- ⚡ **Next.js 15** – App Router, file-based routing  
- 🎨 **TailwindCSS 4** – Utility-first CSS framework  
- 🧩 **Radix UI Primitives** – Accessible components  
- 🪄 **Animated UI** – via `tw-animate-css`  
- 🧠 **React Hook Form + Zod** – For form validation  
- 🧬 **Jotai** – Atomic global state management  
- 📊 **Charts & Data** – `chart.js` + `react-chartjs-2`  
- 🗓️ **Date Picker** – `react-day-picker`  
- 🌗 **Dark Mode** – via `next-themes`  
- 🧰 **Resizable Panels** – via `react-resizable-panels`  
- 💡 **Tooltips, Popovers, Tabs, Avatars** – Radix suite  
- 🔥 **Toast Notifications** – using `sonner`  
- 🔧 **ESLint + TypeScript** – Developer-friendly  

---

## 📁 Folder Structure (Simplified)

/app
/chat → Chat UI components & pages
/components → Reusable UI elements
/hooks → Custom React hooks
/lib → Helpers & utilities
/styles → Tailwind + global styles
/types → TypeScript types

public/ → Static assets
tailwind.config.ts
postcss.config.js
tsconfig.json



---

## 🚀 Getting Started

```bash
# 1. Clone the repo
git clone https://github.com/mohsen-ramshini/romak-chatbot.git
cd romak-chatbot

# 2. Install dependencies
npm install

# 3. Run the dev server
npm run dev


Your chatbot UI will be running at http://localhost:3000

📦 Used Packages
✅ Dependencies
next@15.3.0

react@18.2.0

react-dom@18.2.0

tailwindcss@4.1.6

@hookform/resolvers

react-hook-form

zod

jotai

lucide-react

chart.js & react-chartjs-2

react-day-picker

react-icons

react-resizable-panels

next-themes

sonner

clsx, class-variance-authority, tailwind-merge

tw-animate-css

Radix UI packages:
@radix-ui/react-* (avatar, tooltip, popover, tabs, select, etc.)

🛠 DevDependencies
eslint + eslint-config-next

typescript

@types/node, @types/react, @types/react-dom

autoprefixer, postcss, @tailwindcss/postcss


📦 Deployment
This project is optimized for Vercel deployment.

To deploy:

Push your code to GitHub

Import the repo in Vercel

Set the build command: npm run build

Output directory: .next

🧾 License
Licensed under the MIT License.

🙌 Author
Made with ❤️ by Mohsen Ramshini

