# Gather

**Gather** is your ultimate platform for social gatherings. Discover, create, and attend events seamlessly. Explore a vibrant community, create memorable events, and effortlessly book tickets. Join the social revolution with Gather.

## Table of Contents

- [Live Demo](#live-demo)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [License](#license)

## Live Demo

Check out the live application here: [Gather](https://gather-events.vercel.app/)

## Installation

To get a local copy up and running, follow these steps:

1. **Clone the repository**:

```bash
git clone https://github.com/dewani-rohit/next-event-platform.git
cd next-event-platform
```

2. **Install dependencies**:

```bash
npm install
```

3. **Set up environment variables**: Create a `.env` file in the root directory and add the following variables:

```bash
#NEXT
NEXT_PUBLIC_SERVER_URL=

#CLERK
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_CLERK_WEBHOOK_SECRET=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

#MONGODB
MONGODB_URI=

#UPLOADTHING
UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=

#STRIPE
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
```

4. **Run the development server**:

```bash
npm run dev
```

The app will be available at `http://localhost:3000`.

## Usage

- Start the development server with `npm run dev`
- Build for production with `npm run build`
- Run ESLint checks with `npm run list`

## Features

Gather is packed with a variety of features to enhance your event management and user experience:

- **User management through Clerk**: Ensuring secure and efficient authentication for users, Clerk is integrated for seamless sign-ups, logins, and account management.

- **Comprehensive Event Management**:

  - **Create Events**: Users can effortlessly create new events, providing essential details such as title, date, location, and additional information.

  - **Read Events**: Users can easily explore all events, including detailed views with descriptions, schedules, and related information.

  - **Update Events**: Users have the ability to modify event details dynamically, ensuring that the most accurate information is always displayed.

  - **Delete Events**: Administrators can remove events from the system with ease, maintaining a curated and up-to-date platform.

- **Related Events**: The system smartly connects and displays related events on the event details page, offering users more options and enhancing engagement.

- **Search nad Filter**: Empower users with a robust search and filter system, allowing them to quickly find events that match their preferences.

- **Dynamic Event Categories**: Easily add new categories of events, ensuring the platform remains adaptable and continues to meet the evolving needs of the community.

- **Stripe Integration for Payments**: Provide a smooth and secure payment process using Stripe, allowing users to easily purchase tickets and manage their event transactions.

## Technologies Used

- **Next.js**
- **TypeScript**
- **TailwindCSS**
- **MongoDB and Mongoose**
- **Stripe**
- **Clerk**
- **Zod**
- **React Hook Form**
- **Shadcn UI**
- **Uploadthing**

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
