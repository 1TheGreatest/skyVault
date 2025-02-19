# SkyVault

SkyVault is a **storage management and file-sharing platform** that lets users effortlessly upload, organize, and share files. Built with **Next.js 15** and the **Appwrite Node SDK**, it utilizes advanced features for seamless file management.

## 🚀 Tech Stack

- ⚛ **React 19** – Latest version for enhanced UI performance.
- 🌐 **Next.js 15** – Cutting-edge SSR and API capabilities.
- 📂 **Appwrite** – Secure backend services for authentication and storage.
- 🎨 **TailwindCSS** – Utility-first styling for modern UI.
- 🏗 **ShadCN** – Elegant UI components.
- 🔷 **TypeScript** – Strongly typed language for robustness.

## 🔋 Features

- ✅ **User Authentication with Appwrite** – Sign up, log in, and log out securely.
- ✅ **File Uploads** – Supports multiple file types: documents, images, videos, and audio.
- ✅ **View & Manage Files** – Browse, preview, rename, and delete uploaded files.
- ✅ **Download Files** – Instantly download essential documents.
- ✅ **File Sharing** – Share uploaded files with others for easy collaboration.
- ✅ **Dashboard** – Overview of total/consumed storage, recent uploads, and file categorization.
- ✅ **Global Search** – Quickly find files and shared content.
- ✅ **Sorting Options** – Sort files by date, name, or size for efficient organization.
- ✅ **Modern Responsive Design** – Sleek, user-friendly interface optimized for all devices.
- ✅ **Advanced Features** – Harness the power of Next.js 15, React 19, and Appwrite for enhanced performance.

## 🤸 Quick Start

Follow these steps to set up the project locally.

### 📌 Prerequisites

Ensure the following are installed:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) (LTS recommended)
- [npm](https://www.npmjs.com/) (or [yarn](https://yarnpkg.com/)/[pnpm](https://pnpm.io/))

### 🚀 Clone the Repository

```sh
git clone https://github.com/1TheGreatest/skyVault.git
cd skyVault
```

### 📦 Install Dependencies

```sh
npm install
```

### 🛠 Set Up Environment Variables

Create a `.env.local` file in the root directory and add:

```sh
NEXT_PUBLIC_APPWRITE_ENDPOINT="https://cloud.appwrite.io/v1"
NEXT_PUBLIC_APPWRITE_PROJECT=""
NEXT_PUBLIC_APPWRITE_DATABASE=""
NEXT_PUBLIC_APPWRITE_USERS_COLLECTION=""
NEXT_PUBLIC_APPWRITE_FILES_COLLECTION=""
NEXT_PUBLIC_APPWRITE_BUCKET=""
NEXT_APPWRITE_KEY=""
```

Replace placeholders with your actual Appwrite credentials. You can obtain these by signing up and creating a project on the [Appwrite website](https://appwrite.io/).

### ▶ Running the Project

```sh
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## 🌍 Live Demo

Check out the live version: [SkyVault](https://sky-vault-six.vercel.app)

## Contact

Feel free to reach out to me via [email](mailto:sampomahdev@gmail.com) or connect with me on [LinkedIn](https://www.linkedin.com/in/solomon-ampomah-a67128141/).
