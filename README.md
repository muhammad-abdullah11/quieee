# Quizee

<div align="center">
  <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&auto=format&fit=crop&q=60" alt="Quizee Banner" width="100%" height="300" style="object-fit: cover; border-radius: 10px;">
  <br/>
  <h2>Master Your Studies with Quizee</h2>
  <p>An interactive learning platform featuring flashcards, quizzes, and educational blogs.</p>
</div>

---

## 📖 About The Project

**Quizee** is a comprehensive modern web application designed to help learners master various subjects. Beyond just flashcards, it offers a robust platform for reading educational content and testing knowledge through interactive quizzes. Built with performance and user experience in mind, it provides a seamless learning journey.

### ✨ Key Features

-   **Interactive Flashcards**: Visual learning with beautifully designed flashcards.
-   **Knowledge Blogs**: Read in-depth articles on various topics, featuring **syntax highlighting** for code snippets, author profiles, and engagement metrics.
-   **Quiz Mode**: Test your knowledge with interactive quizzes (`/quiz`).
-   **Responsive Design**: A fully responsive experience optimized for desktop, tablet, and mobile devices.
-   **Modern UI/UX**: clean interface with smooth transitions and intuitive navigation.

## 🛠️ Technology Stack

-   **Framework**: [React](https://reactjs.org/) (v19)
-   **Build Tool**: [Vite](https://vitejs.dev/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/) (v4)
-   **Routing**: [React Router](https://reactrouter.com/) (v7)
-   **Icons**: [FontAwesome](https://fontawesome.com/)
-   **Utils**: `react-syntax-highlighter` for code display, `qrcode.react`

## 🚀 Getting Started

Follow these steps to set up the project locally.

### Prerequisites

-   **Node.js** (v18 or higher recommended)
-   **npm** or **yarn**

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/yourusername/quizee.git
    cd quizee
    ```

2.  **Install dependencies**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Start the development server**
    ```bash
    npm run dev
    # or
    yarn dev
    ```

4.  **Open your browser**
    Navigate to `http://localhost:5173`.

## 📂 Project Structure

```
quizee/
├── public/                 # Static assets
├── src/
│   ├── assets/             # Images, icons, and data (blogs.json)
│   ├── Components/         # React Components
│   │   ├── Blog.jsx        # Individual blog post view with code highlighting
│   │   ├── Blogs.jsx       # List of all available blogs
│   │   ├── Footer.jsx      # Application footer
│   │   ├── Header.jsx      # Navigation bar
│   │   ├── Home.jsx        # Landing page
│   │   ├── Quiz.jsx        # Quiz entry/selection
│   │   └── QuizComponent.jsx # Core quiz logic and interface
│   ├── App.jsx             # Main routing configuration
│   ├── App.css             # Component-specific styles
│   ├── index.css           # Tailwind imports and global styles
│   └── main.jsx            # Entry point
├── .gitignore
├── index.html
├── package.json
└── vite.config.js
```

## 🔮 Future Improvements

-   [ ] **User Authentication**: Save progress, bookmarks, and quiz scores.
-   [ ] **Create Study Sets**: User-generated flashcards.
-   [ ] **Dark Mode**: System-wide dark theme support.
-   [ ] **Backend Integration**: Move from JSON data to a Database/CMS.

## 🤝 Contributing

Contributions are welcome!

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📄 License

Distributed under the MIT License.

---

<div align="center">
  <p>Built with ❤️ by the Quizee Team</p>
</div>
