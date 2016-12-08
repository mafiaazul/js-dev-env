export default function getBaseUrl() {
<<<<<<< HEAD
    const inDevelopment = window.location.hostname === 'localhost';
=======
    const inDevelopment = (global.window && global.window.location.hostname === 'localhost');
>>>>>>> 866a39652ccfbf5a355b8f298735942556a109a4
    return inDevelopment ? 'http://localhost:3001/' : '/';
}