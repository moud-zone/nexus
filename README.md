# Nexus Creative Agency - Premium Landing Page

Welcome to the **Nexus** premium landing page project.
This project was built focusing on modern aesthetics, buttery smooth performance, and clean, readable code.

## ✏️ Client Details Used

- **Client Name:** Nexus
- **Business Type:** Digital Creative Agency
- **Preferred Colors:** Premium Dark Theme (Deep Onyx `#050505`, Charcoal `#121212`) paired with Signature Gold (`#d4af37`).
- **Main CTA Goal:** "Start a Project" (Contact)
- **Language:** English

## 🛠️ Tech Stack & Philosophy

- **HTML5 & Vanilla CSS**: Keeping it incredibly lightweight with no bulky CSS frameworks.
- **IntersectionObserver API**: For performant, jank-free scroll entrance animations.
- **CSS Variables (Custom Properties)**: Ensuring effortless theming and color adjustments.
- **Vite Setup**: Fast local development server and optimized build output.

## 📂 Project Structure

- `index.html`: Main HTML file. All component sections are clearly labeled with comments.
- `style.css`: Contains CSS variables, smooth scroll settings, and styles separated section by section.
- `main.js`: Houses the logic for IntersectionObserver (animations) and the sticky header effect.

## 🎨 How to Edit the Design

To edit the colors, fonts, or container sizes, open `style.css` and modify the `:root` variables at the top of the file:

```css
:root {
   --bg-color: #050505;
   --surface-color: #121212;
   --accent-color: #d4af37; /* Change this to update the primary brand color instantly */
   --font-sans: "Outfit", sans-serif;
   --font-serif: "Playfair Display", serif;
}
```

## 🚀 How to Run & Deploy

Since this relies on standard web technologies, you have two options:

**1. Run Locally without dependencies:**
Simply double-click `index.html` in your browser.

**2. Develop with Vite (recommended):**

1. Run `npm install`
2. Run `npm run dev` to start a local hot-reloading server.
3. Run `npm run build` to generate an optimized production bundle in the `/dist` folder.

**3. Deploying to Vercel/Netlify:**

1. Upload this entire folder to a GitHub repository.
2. Link the repository to your Vercel or Netlify account.
3. Use `npm run build` as your Build Command, and `dist` as your Publish Directory.
4. Enjoy your blazing fast live site!
