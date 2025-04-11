# GitHubFinder

A modern, responsive web application that allows users to search for GitHub profiles easily and efficiently. View user details, repositories, and other GitHub information in a clean, intuitive interface.



## ✨ Features

- **User Search**: Find GitHub users by their username with real-time search functionality
- **Infinite Scrolling**: Load more users automatically as you scroll down
- **Responsive Design**: Optimized for all devices (desktop, tablet, mobile)
- **Dark/Light Mode**: Toggle between dark and light themes for comfortable viewing
- **User Details**: View comprehensive GitHub user information including:
  - Profile picture and name
  - Bio and location
  - Follower count
  - Repository count
  - Direct link to GitHub profile
- **Gradient UI**: Beautiful gradient backgrounds for enhanced visual appeal

## 🛠️ Technologies Used

- **React**: For building the user interface
- **React Router**: For page navigation
- **GitHub API**: For fetching user data
- **Context API**: For state management (theme toggling, etc.)
- **CSS3**: For styling with responsive design
- **Intersection Observer API**: For implementing infinite scrolling

## 🚀 Installation

Follow these steps to run the project locally:

```bash
# Clone the repository
git clone https://github.com/vkprogrammer-001/GitHubFinder.git

# Navigate to the project directory
cd GitHubFinder

# Install dependencies
npm install

# Start the development server
npm start
```

The application will open in your default browser at `http://localhost:3000`.

## 🔍 Usage

1. **Home Page**: View the landing page with information about the application
2. **Search**: Click the "SEARCH" button or navigate to the search page
3. **Find Users**: Type a username in the search bar to find GitHub users
4. **View Details**: Each user card displays key information about the GitHub user
5. **Toggle Theme**: Switch between dark and light modes using the theme toggle button
6. **Infinite Scroll**: Scroll down to load more search results automatically

## 📂 Project Structure

```
src/
├── api/             # API integration with GitHub
├── components/      # React components (UserCard, SearchBar, etc.)
├── context/         # React Context for state management
├── pages/           # Page components (HomePage, SearchResultsPage)
├── styles/          # CSS stylesheets
└── ...
```

## 🧩 Key Components

- **UserList**: Displays search results with infinite scrolling
- **UserCard**: Shows user information in a clean card format
- **SearchBar**: Handles user input with debounced search
- **ThemeToggle**: Switches between dark and light themes
- **HeroSection**: Main landing page content

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👏 Acknowledgments

- [GitHub API](https://docs.github.com/en/rest) for providing the data
- All contributors who helped improve this project

---

Made with ❤️ by [vkprogrammer-001](https://github.com/vkprogrammer-001)
