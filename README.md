# 🎓 Apex International School & Academy — Pakistan

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Responsive Design](https://img.shields.io/badge/Design-Fully%20Responsive-brightgreen?style=for-the-badge)](#)
[![Campuses](https://img.shields.io/badge/Campuses-ISB%20%7C%20LHR%20%7C%20KHI-00A86B?style=for-the-badge)](#)

> A premier, modern, and interactive web portal for **Apex International School & Academy**, Pakistan's leading academic institution delivering **Cambridge Assessment International Education (CAIE)**, **FBISE Matriculation & FSc (Pre-Medical / Pre-Engineering)**, and **International Baccalaureate (IB World School)** curriculums across Islamabad, Lahore, and Karachi.

---

## 🌟 Table of Contents

- [Project Overview](#-project-overview)
- [Key Features](#-key-features)
- [Campuses & Academics](#-campuses--academics)
- [UI / UX Design Highlights](#-ui--ux-design-highlights)
- [Project Structure](#-project-structure)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Customization & Configuration](#-customization--configuration)
- [Performance & SEO](#-performance--seo)
- [Contributing & License](#-contributing--license)

---

## 🏫 Project Overview

The **Apex International School & Academy** web application is built with a high-end, bespoke aesthetic tailored for premier educational institutions in Pakistan. It combines a rich emerald-teal and dark forest color palette with smooth micro-interactions, tab switchers, scroll-triggered animations, interactive admission workflows, and accessible layouts.

### 📍 Flagship Campuses Represented
- **Islamabad Main Campus**: Plot 14-B, Sector H-8/4, Islamabad
- **Lahore Executive Campus**: Sector J, Phase 5 DHA, Lahore
- **Karachi Coastal Campus**: Block 4, Clifton, Karachi

---

## ✨ Key Features

- **💫 Custom Preloader Animation**: Smooth brand logo pulse ring, animated progress indicator, and seamless DOM cleanup.
- **🧭 Dynamic Sticky Header & Mobile Drawer**: Adaptive navbar with backdrop blur, quick call helpline (`051 111-APEX`), and a sliding drawer for mobile devices.
- **📝 Dual Admission Application Forms**:
  - Hero Section quick application card with campus/program dropdown selectors.
  - Interactive popup modal triggered anywhere across the page.
- **📊 Scroll-Triggered Animated Statistics**: `IntersectionObserver`-powered counter animating key metrics (350+ Certified Faculty, 98% A*/A rate, 15k+ Global Alumni, 3 Flagship Campuses).
- **🔄 Interactive Academics Switcher**: Real-time tab switcher dynamically updating curriculum descriptions, certifications, and high-resolution visuals for Cambridge, FBISE, and IB programs.
- **🎞️ Dual Infinite Marquee Tickers**: Smooth continuous marquee highlighting academic certifications, Olympiad accolades, and flagship campus locations.
- **🏛️ Campus Life & Infrastructure Gallery**: Hover-card portfolio showcasing STEM Robotics Hubs, Digital Libraries, Science Labs, and Morning Assembly grounds.
- **🗺️ 4-Step Admission Roadmap**: Clear visual workflow from online submission, aptitude assessment, and fee processing to student orientation.
- **💬 Community Testimonials & 4.9★ Rating Card**: Real alumni and parent reviews from Oxford, Cambridge, Harvard, LUMS, NUST, and King Edward Medical University candidates.
- **📰 News & Achievements Blog**: Magazine-style featured highlights and stacked news articles for campus achievements and Cambridge distinction holders.
- **📬 Newsletter Subscription & Toast Alerts**: Built-in interactive submission handling with a modern floating toast notification.
- **⬆️ Smooth Back-To-Top**: Auto-appearing smooth scroll utility button.

---

## 📚 Campuses & Academics

| Academic Program | Affiliation / Accreditation | Target Focus |
| :--- | :--- | :--- |
| **Cambridge O & A Levels** | British Council CAIE | Analytical thinking, global scholarships, Ivy League & Oxford placements |
| **FBISE Matric & FSc** | Federal Board Islamabad | Pre-Medical (MDCAT/NUMS) & Pre-Engineering (ECAT/NET) top board positions |
| **IB World School** | International Baccalaureate (PYP / MYP) | Inquiry-based holistic learning, STEM innovation, and global citizenship |
| **Early Years & Primary** | Foundation Stage | Character building, foundational literacy, and cognitive development |

---

## 🎨 UI / UX Design Highlights

- **Color Palette Tokens**:
  - Primary Green: `#00A86B`
  - Emerald Forest Dark: `#071E16` / `#0B281F`
  - Mint Accent: `#25D366`
  - Surface Neutral: `#F8FAFC`
- **Typography**: Google Font `Plus Jakarta Sans` for clean, contemporary readability.
- **Iconography**: FontAwesome 6 Pro-grade web icons.
- **Glassmorphism**: Subtle `backdrop-filter: blur(12px)` navigation bar and modal dialogues.

---

## 📁 Project Structure

```bash
Apex-International-School/
│
├── index.html              # Main single-page web portal markup & semantic structure
│
├── css/
│   └── style.css           # Core stylesheet (CSS variables, layout, grid, responsive queries, animations)
│
├── js/
│   └── main.js            # Interactive logic (Preloader, stats counter, tab switcher, modals, toast alerts)
│
├── images/                 # Optimized campus, laboratory, classroom, and alumni imagery
│   ├── pakistan_school_classroom.jpg
│   ├── pakistan_science_lab.jpg
│   ├── pakistan_school_library.jpg
│   ├── pakistan_intl_stem.jpg
│   ├── pakistan_intl_alumni.jpg
│   ├── pakistan_morning_assembly.jpg
│   └── pakistan_graduation_parents.jpg
│
└── README.md               # Project documentation & reference manual
```

---

## 💻 Tech Stack

- **HTML5**: Semantic tags (`<header>`, `<nav>`, `<section>`, `<article>`, `<aside>`, `<footer>`), ARIA attributes, and SEO meta tags.
- **CSS3**: Custom properties (CSS variables), Flexbox, CSS Grid, clamp() responsive typography, and keyframe animations.
- **JavaScript (ES6+)**: Vanilla JavaScript, `IntersectionObserver API`, DOM event delegation, modal managers, and timeout managers.
- **External CDN Assets**:
  - [Google Fonts — Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans)
  - [Font Awesome 6.5.1](https://cdnjs.com/libraries/font-awesome)

---

## 🚀 Getting Started

### Prerequisites
You only need a modern web browser (Google Chrome, Microsoft Edge, Mozilla Firefox, Safari, or Brave).

### 1. Clone the Repository
```bash
git clone https://github.com/lubna-debug/Apex-International-School.git
cd Apex-International-School
```

### 2. Run Locally

#### Option A: Direct Open
Simply double-click `index.html` or drag it into any web browser.

#### Option B: VS Code Live Server
1. Open the folder in Visual Studio Code.
2. Install the **Live Server** extension.
3. Click **"Go Live"** in the bottom status bar or right-click `index.html` and select **"Open with Live Server"**.

#### Option C: Python Local Server
```bash
# Python 3
python -m http.server 3000
```
Open your browser at `http://localhost:3000`.

#### Option D: Node.js `serve` / `http-server`
```bash
npx serve .
```

---

## ⚙️ Customization & Configuration

### Changing Theme Colors
Edit the root CSS variables in [css/style.css](file:///d:/EEST/first%20module%20project/Apex-International-School/css/style.css):

```css
:root {
  --primary-color: #00a86b;       /* Primary Accent */
  --primary-dark: #071e16;        /* Deep Background Forest */
  --primary-card: #0b281f;        /* Card Teal Background */
  --font-family: 'Plus Jakarta Sans', sans-serif;
}
```

### Updating Academic Programs
Update the `academicData` object in [js/main.js](file:///d:/EEST/first%20module%20project/Apex-International-School/js/main.js):

```javascript
const academicData = {
  cambridge: {
    tag: 'BRITISH COUNCIL CAIE',
    title: 'Cambridge O & A Levels',
    desc: 'Your custom description...',
    img: 'images/your_image.jpg',
    features: ['Feature 1', 'Feature 2']
  },
  // Add new programs or update existing ones
};
```

---

## ⚡ Performance & SEO

- **Search Engine Optimization**: Complete with meta description, keywords tag, canonical title hierarchy, and Open Graph tags.
- **Fast First Contentful Paint (FCP)**: Optimized asset weights, asynchronous FontAwesome loading, pre-connected Google Font CDNs.
- **Zero Framework Overhead**: 100% vanilla JavaScript and native CSS ensuring instantaneous render times without virtual DOM bottlenecks.

---

## 📄 License & Attribution

Distributed under the **MIT License**. See `LICENSE` for more information.

Designed with ❤️ for **Apex International School & Academy Pakistan** (Islamabad • Lahore • Karachi).
