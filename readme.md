# Node.js Google OAuth2 SSO Example

This is a simple Node.js application that demonstrates how to implement Single Sign-On (SSO) using Google OAuth2. Users can log in using their Google accounts, and their profile information is displayed upon successful authentication.

## Features

- Google OAuth2 authentication.
- User profile display.
- Basic session management.

## Prerequisites

- Node.js
- A Google Developer account to create OAuth2 credentials

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/VanshWadhwa/SSO-OAuth2-NodeJs.git
cd SSO-OAuth2-NodeJs.git
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root directory of the project. Add your Google OAuth2 credentials and session secret.

**`.env`:**
```env
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
SESSION_SECRET=your-session-secret
PORT=3000
```

You can get your `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET` from the [Google Developer Console](https://console.developers.google.com/).

### 4. Run the Application

Start the application using Node.js:

```bash
npm start
```

The application will be available at `http://localhost:3000`.

### 5. Testing the Application

1. **Visit** `http://localhost:3000` in your browser.
2. **Click on the "Login with Google" button** to authenticate with your Google account.
3. **After successful authentication**, you will be redirected to the profile page displaying your Google account information.

### 6. Logout

To log out, click on the "Logout" link in the navigation bar. This will end your session and redirect you back to the home page.

## File Structure

- **`index.js`**: Main application file. Configures Passport.js, handles authentication, and sets up routes.
- **`public/index.html`**: Home page with a link to authenticate with Google.
- **`public/profile.html`**: Profile page that displays user information after login.
- **`.env`**: Environment variables for Google OAuth2 credentials and session secret.
- **`.gitignore`**: Specifies files and directories to be ignored by Git.

## Additional Information

- **Passport.js**: Used for authentication and managing user sessions.
- **Google OAuth2**: Provides the authentication mechanism using Google accounts.
