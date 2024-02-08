# BridgeChat

Welcome to the BridgeChat, a full-stack application that leverages messaging functionality with real-time translation support. This project is built using Typescript, Next.js, Stripe, Server Components, Server Actions, Shadcn, Firebase, Zustand, NextAuth, Zod, and Tailwind CSS. Whether you want to chat with users around the world or enable seamless communication in multiple languages, this app has you covered.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Configuration](#configuration)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Demo

![Demo](images/landingPage/demo.gif)

## Features

1. **Real-time Translation:** Break language barriers with automatic real-time translation of messages, enabling users to communicate effortlessly in different languages.

2. **User Authentication:** Leverages NextAuth for secure and easy user authentication, allowing users to create accounts, log in, and access personalized messaging features.

3. **Payment Integration:** Integrated Stripe for seamless payment processing, enabling users to make transactions within the app with confidence.

4. **Server Components and Actions:** Optimized server-side rendering and enhance the app's performance using Next.js Server Components and Server Actions.

5. **Shadcn Integration:** Uses Shadcn component, for ensuring a clean, smooth and rich user experience.

6. **Real-time Messaging:** Utilizes Firebase to enable real-time messaging capabilities, allowing users to send and receive messages instantly.

7. **State Management with Zustand:** Manages application state efficiently using Zustand, providing a robust and scalable solution for handling complex state logic.

8. **Form Validation with Zod:** Ensures data integrity and validate user inputs with Zod, a powerful TypeScript-first schema declaration and validation library.

9. **Responsive Design with Tailwind CSS:** Created a visually appealing and responsive user interface using Tailwind CSS, making the app accessible on various devices.


## Prerequisites

Before running the application, make sure you have the following installed:

- Node.js
- npm or yarn
- Firebase account for real-time messaging with Blaze plan enabled
- Stripe account for payment integration

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/SamHeuer/BridgeChat.git
   cd BridgeChat
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

Visit [http://localhost:3000](http://localhost:3000) in your browser to see the website.
   
## Configuration

Create a `.env` file in the root directory and add the required environment variables for Firebase and Stripe.

   ```env
   GOOGLE_CLIENT_ID = your_google_client_id
   GOOGLE_CLIENT_SECRET = your_google_client_secret
   NEXTAUTH_SECRET = your_nextauth_secret
   FIREBASE_PROJECT_ID = your_firebase_project_id
   FIREBASE_CLIENT_EMAIL = your_firebase_client_email
   FIREBASE_PRIVATE_KEY = your_firebase_private_key
   STRIPE_SECRET_KEY = your_stripe_secret_key
   ```


## Usage

To use the BridgeChat App, follow the steps outlined in the [Getting Started](#getting-started) section. Explore the real-time translation, messaging, with a subscription based payment feature to experience the full capabilities of the application.

## Contributing

If you'd like to contribute to the project, please follow the standard GitHub flow: fork the repository, create a branch, make your changes, and submit a pull request.

## License

This project is licensed under the MIT License - see the `LICENSE` file for details.

---

Happy chatting on our BridgeChat! 👋🏻
