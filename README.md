# GitHub User Explorer

A dynamic web application that allows users to search for GitHub profiles and display key user details alongside their top public repositories using the GitHub REST API.

## 🚀 Features

* **Profile Search:** Search for any GitHub user by username.
* **User Information:** Displays profile avatar, name, bio, location, follower/following counts, and company.
* **Repository Showcase:** Fetches and displays top public repositories with stars, forks, and repository size.
* **Responsive Layout:** Built with a clean CSS grid and flexbox structure for desktop and mobile views.

## 🛠️ Built With

* **HTML5** - Page structure and semantic elements
* **CSS3** - Layout styling and responsive grid
* **JavaScript (ES6+)** - Asynchronous API handling (`async`/`await`), DOM manipulation, and modular code (`main.js`, `api.js`, `utils.js`)
* **Font Awesome** - UI iconography

## 📁 Project Structure

```text
├── index.html      # Main HTML interface
├── css/
│   └── style.css   # Main stylesheet
└── js/
    ├── api.js      # GitHub REST API fetch requests
    ├── utils.js    # Helper functions (loading states, formatting)
    └── main.js     # DOM event listeners and rendering logic
