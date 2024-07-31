# MedAccess Documentation
The MedAccess App is a web application that allows users to find hospitals near their location, create hospital entries, export hospital data, and share it with others. It provides user authentication using Firebase and supports markdown syntax for content creation. The app is built with Nextjs, TypeScript, Firebase and 80% of the stylings was done with Tailwind CSS.

## Table Of Content
 - Introduction
 - Prerequisites
 - Installations
 - Configurations
 - Dependencies
 - Firebase Setup
 - Authentication
 - Hospital Data Management
 - Export & Sharing
 - Testing 
 - Deployment
 - Conclusion

## Introduction

The MedAccess App is designed to help users easily find hospitals in their vicinity and access important information about each hospital. It provides a user-friendly interface for searching hospitals, creating hospital entries, and exporting hospital data. The app also supports user authentication to ensure secure access to the features.

## Prerequisites

Before getting started with the Hospital Finder App, ensure that you have the following prerequisites:
- Node.js and npm (Node Package Manager) installed on your machine.
- A Firebase project with Firebase Authentication and Firebase Firestore enabled.

## Installations

To install and set up the Hospital Finder App, follow these steps:
1.Navigate to the project directory:`cd Altschool Capstone Project`
2.Install the project dependencies:`npm install`
Then run the one of the commands to see the output on your development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Dependencies

To view all the dependencies in the project visit the `package.json` file

##Firebase Setup
To set up Firebase for the Hospital Finder App, follow these steps:
1.Create a Firebase project at [[](https://console.firebase.google.com.)
2.Enable Firebase Authentication and Firestore in the Firebase project settings.
3.Obtain the Firebase configuration values (apiKey, authDomain, projectId, etc.) from the Firebase project settings.

## Authentication
The Hospital Finder App uses Firebase Authentication for user authentication. It provides the following features:
- Registration: Users can register with their email and password.
- Login: Registered users can log in to access the app.
- Logout: Logged-in users can log out from the app.

## Hospital Data Management
##Export & Sharing
##Testing

The MedAccess App includes unit tests and component tests to ensure the quality and reliability of the code. The tests cover critical components and functionalities of the app.

To run the tests, use the following command:
```bash
  npm test
```

## Deployment

To deploy the Hospital Finder App to a production environment, follow these steps:
1.Build the production-ready app using the following command:
```bash
  npm run build
```
## Conclusion

The MedAccess App is a comprehensive solution for finding hospitals, managing hospital data, exporting data, and sharing it with others. The detailed documentation provided here gives you an overview of the project structure, dependencies, Firebase setup, authentication, hospital data management, export and sharing features, testing, and deployment.

To configure the MedAccess App, you need to set up the Firebase project and provide the necessary configuration values.
1.Create a Firebase project and enable Firebase Authentication and Firestore.
2.Obtain the Firebase configuration values (apiKey, authDomain, projectId, etc.).



## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

