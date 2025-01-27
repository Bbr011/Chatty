# Real-Time Chat Application

## Overview
This project is a real-time chat application built to facilitate seamless communication between users. It includes user authentication, instant messaging capabilities, and a user-friendly interface. The application was developed collaboratively, with all team members contributing to both frontend and backend components to gain a holistic understanding of web application development.

## Features
- **User Authentication**: Secure login and registration for users.
- **Real-Time Messaging**: Instant message exchange powered by Socket.IO.
- **Search Functionality**: Easily search for conversations by user or keyword.
- **User-Friendly Interface**: A clean and intuitive design for easy navigation.
- **Conversation Management**: Start and manage conversations effortlessly.
- **Session Handling**: Proper login and logout functionality.

## Technologies Used
### Frontend:
- **React and DaisyUI**: For building the user interface.
- **Zustand**: Lightweight state management for handling application state.
- **React-Icons**: Iconography for better user experience.
- **React-Hot-Toast**: Notifications and alerts for user actions.

### Backend:
- **Node.js**: JavaScript runtime for the server.
- **Express**: Web framework for handling API requests and routing.
- **Socket.IO**: Real-time communication between the client and server.

### Database:
- **MongoDB**: NoSQL database for storing user data and conversation histories.

## Project Structure
```
project-directory/
├── frontend_section/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── Tabs/
│   │   ├── plugins/
│   │   ├── zustand/
│   │   ├── utils/
├── backend_section/
│   ├── functions/
│   ├── models/
|   ├── Mware/
│   ├── routes/
│   ├── socket/
│   ├── tools/
├── public/
├── package.json
etc...
```

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Bbr011/Chatty.git
   ```
2. Navigate to the project directory and install dependencies for both frontend and backend:
   ```bash
   cd frontend_section
   npm install
   cd ../backend_section
   npm install
   ```
3. Start the development servers:
   - Frontend: `npm run dev` (default: http://localhost:5173)
   - Backend: `npm run index` (default: http://localhost:5000)

## Usage
1. Launch both the frontend and backend servers.
2. Open the frontend URL in your browser.
3. Register or log in with valid credentials.
4. Start a conversation and send messages in real time.

## Challenges and Lessons Learned
- **Challenges**: Setting up Socket.IO for real-time messaging, managing state across components, and implementing a secure authentication system.
- **Lessons Learned**: Effective team collaboration, debugging WebSocket configurations, and ensuring scalability in application architecture.

## Future Improvements
- Enhance UI/UX design for a more modern look.
- Implement typing indicators and read receipts.
- Add group chat functionality.
- Improve the search algorithm for more accurate results.

## Contributors
- **Hamza Khadraoui** - Full-Stack Developer
- **Youssef Nassib** - Full-Stack Developer

