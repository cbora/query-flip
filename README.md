# QueryFlip

<div align="center">

![QueryFlip Logo](assets/logo.png)

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

**Stop switching search engines. Let QueryFlip do it for you.**

</div>

## 🚀 Overview

QueryFlip is a Chrome extension that automatically routes your searches to the optimal search engine based on your query type:
- **Short queries** (1-3 words) → Google
- **Complex queries** (4+ words) → ChatGPT

No more manual switching between search engines. QueryFlip intelligently chooses the best tool for your search.

## ✨ Features

- 🔄 Automatic query routing based on complexity
- ⚡ Lightning-fast performance
- 🔒 Privacy-focused (no data collection)
- 🎯 Simple, intuitive functionality

## 🛠️ Installation

1. Download from the Chrome Web Store (coming soon)
2. Clone this repository and load as unpacked extension:
   ```bash
   git clone https://github.com/yourusername/queryflip.git
   ```
   - Open Chrome
   - Go to `chrome://extensions/`
   - Enable Developer Mode
   - Click "Load unpacked"
   - Select the QueryFlip directory

## 🔧 How It Works

1. You enter a search query in your browser
2. QueryFlip counts the words in your query
3. Based on the count:
   - 1-3 words: Redirects to Google
   - 4+ words: Redirects to ChatGPT

## 🔐 Permissions

QueryFlip requires minimal permissions:
- `tabs`: Required for URL redirection
- No data collection
- No external API calls

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.

## 👥 Maintainers

- [@chrisbora](https://github.com/chrisbora)

## 🌟 Support

Give a ⭐️ if this project helped you!

---

<div align="center">
Built with ❤️ by Chris Bora
</div>