 import { ChatEngine } from 'react-chat-engine';
 import ChatFeed from './components/ChatFeed';
 import LoginForm from './components/LoginForm';
 import './App.css';

 const App = () => {
    if (!localStorage.getItem('username')) return <LoginForm />;
     return (
         <ChatEngine
            height='100vh'
            projectID='18757818-861c-445d-b69e-54221aa8728f'
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />} 
            onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}         
         />
     )
 };

 export default App;