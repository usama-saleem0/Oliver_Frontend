import React, { useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';

const socket: Socket = io('http://localhost:5000');  

interface ChatProps {
  rc_id: any;
  pp:any
  callback_chat:any
}

 

const Chat: React.FC <ChatProps>= ({rc_id,pp,callback_chat}) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<any[]>([]);

  const [senderId,setsenderid] = useState<string| null>(""); 
  const [receiverId,setrecieverid] = useState<string | null>("");
  const[show,setshow]=useState(pp)
  
  const handle_chat=()=>{
setshow(false)
callback_chat(false)
  }
 

//   useEffect(() => {
//     console.log("SOCKET")
//     // socket.on('chat_message', (msg: string) => {
//     //   setMessages((prevMessages) => [...prevMessages, msg]);
//     //   console.log(messages,"MEssages")
//     // });


//     socket.emit("get_previous_messages", {
//         sender: "sender234324324",
//         receiver: "reciver123123123",
//       });




//     return () => {
//       socket.off('chat_message');
//     };
//   }, []);

//   const sendMessage = () => {
//     if (message.trim()) {
//       socket.emit('chat_message', message);
//       console.log(message)
//       setMessage('');
//     }
//   };

const storedUserData = localStorage.getItem("userData");
const userData = storedUserData ? JSON.parse(storedUserData) : null;

useEffect(() => {
  console.log(rc_id,"PROPS RCID",senderId)
    // Listen for previous_messages event from the server
    socket.on('previous_messages', (prevMessages: any[]) => {
      setMessages(prevMessages); // Update messages with previous messages

      if (userData && userData.id) {
        console.log(userData.id,"ID")

        setsenderid(userData.id)
      }
      

    });

    console.log(messages,"SOCKEt")

    // Fetch previous messages when senderId or receiverId change
    socket.emit('get_previous_messages', {
      sender: senderId,
      receiver: rc_id,
    });

    return () => {
      socket.off('previous_messages'); // Clean up event listener
    };
  }, [senderId, receiverId]);

const sendMessage = async () => {
    if (message !== '') {
      const messageData = {
        Sender_Id: senderId,
        Reciever_Id: rc_id,
        message: message,
      };
      // console.log(messageData);
        socket.emit('chat_message', messageData);
      setMessage('');


    //   
    var a = 4
    for(var i=0; i<a;i++)
    {

        console.log(i,"I")
      socket.on('previous_messages', (prevMessages: any[]) => {
            setMessages(prevMessages); // Update messages with previous messages
          });
      
          console.log(messages,"MESSAGES SOCKET")
      
          // Fetch previous messages when senderId or receiverId change
          socket.emit('get_previous_messages', {
            sender: senderId,
            receiver: rc_id,
          });
      
      
      
          
      
          return () => {
            socket.off('previous_messages'); // Clean up event listener
          };
    }

    // 
 

    // 
    }
  };




  return (
    <>
    {
      pp &&
    <section className="Dashboard more-box-chat">
    <div className="main-Dashboard">
      <div className="chat-btn">
        <button onClick={handle_chat}> CLOSE CHAT</button>
      </div>
    
      <div className="chat-box">
    
        <div className="chat-box-head">
           <div className="chat-box-head-dp">
           
           </div>
    
           <span className="chat-name">
            <h2>Christiana Adams</h2>
            <p>online</p>
           </span>
        </div>
    
        
        {/* <div className="chat-box-body">
 
         {messages.map((msg, index) => (
                <li key={index} style={{
                  padding: '10px',
                  margin: '5px 0',
                  borderRadius: '10px',
                  maxWidth: '60%',
                  wordWrap: 'break-word',
                  alignSelf: msg.Sender_Id === senderId ? 'flex-end' : 'flex-start',
                  backgroundColor: msg.Sender_Id === senderId ? 'red' : 'yellow',
                  textAlign: msg.Sender_Id === senderId ? 'right' : 'left',
                  marginLeft: msg.Sender_Id === senderId? 'auto' : '0',
                  marginRight: msg.Sender_Id === senderId? '0' : 'auto'
                }}>
                  {msg.message}
                </li>
              ))}
          
          <div className="chat-box-body-input">
            <input type="text" placeholder="Write Your Message Here"
            
            value={message}
        onChange={(e) => setMessage(e.target.value)}
         


            />
    
            <button onClick={sendMessage}><svg xmlns="http://www.w3.org/2000/svg" width="26" height="25" viewBox="0 0 26 25" fill="none">
      <g clip-path="url(#clip0_144_2215)">
        <path d="M26.0001 1.0683C25.9161 1.56717 25.8245 2.06488 25.7497 2.5651C25.3973 4.9215 25.0491 7.27851 24.7001 9.63538C24.371 11.8581 24.0432 14.081 23.7136 16.3036C23.4823 17.8636 23.2536 19.4241 23.014 20.9828C22.9232 21.5733 22.4585 21.8605 21.9003 21.6697C18.1504 20.3878 14.4025 19.1 10.654 17.814C10.6463 17.8113 10.6397 17.8053 10.6003 17.7806C14.2336 13.3899 17.8637 9.00307 21.4938 4.61623C21.4783 4.60051 21.4627 4.58473 21.4471 4.56901C21.2773 4.71327 21.1069 4.85692 20.9377 5.00193C16.4553 8.84635 11.9723 12.6903 7.49309 16.5385C7.3641 16.6493 7.2588 16.6574 7.10702 16.605C4.95045 15.8606 2.79266 15.1197 0.633309 14.3833C0.268747 14.259 0.0320839 14.0309 0.00277235 13.6409C-0.026607 13.2493 0.179659 12.9926 0.519795 12.8146C6.8962 9.47744 13.2711 6.1374 19.6462 2.79797C21.3018 1.93075 22.9571 1.06293 24.6133 0.196867C25.2846 -0.154197 25.6387 -0.0470878 26.0001 0.609924C26.0001 0.762694 26.0001 0.915532 26.0001 1.0683Z" fill="black"/>
        <path d="M9.50875 19.1464C10.9644 19.6453 12.4074 20.14 13.8659 20.6398C13.8344 20.6961 13.815 20.741 13.7868 20.7794C12.857 22.0499 11.9282 23.3212 10.9949 24.5891C10.6622 25.0411 10.1265 25.1406 9.77242 24.785C9.62572 24.6377 9.49878 24.3933 9.49613 24.1913C9.47462 22.5386 9.48459 20.8856 9.48561 19.2326C9.48568 19.2165 9.49396 19.2003 9.50875 19.1464Z" fill="black"/>
      </g>
      <defs>
        <clipPath id="clip0_144_2215">
          <rect width="26" height="25" fill="white"/>
        </clipPath>
      </defs>
    </svg></button>
          </div>
        </div> */}



<div style={{ maxHeight: '400px', overflowY: 'auto', marginBottom: '20px', display: 'flex', flexDirection: 'column' ,    padding: '30px'}}>
<ul style={{ listStyleType: 'none', padding: '0', display: 'flex', flexDirection: 'column' }} className='tt-ul-box'>
              {messages.map((msg, index) => {
                const isSender = msg.Sender_Id != rc_id;
                return (
                  <li key={index} style={{
                    padding: '10px',
                    margin: '5px 0',
                    borderRadius: '10px',
                    maxWidth: '60%',
                    wordWrap: 'break-word',
                    alignSelf: isSender ? 'flex-end' : 'flex-start',
                    backgroundColor: isSender ? '#DCF8C6' : '#E5E5EA',
                    textAlign: isSender ? 'right' : 'left',
                    marginLeft: isSender ? 'auto' : '0',
                    marginRight: isSender ? '0' : 'auto'
                  }}>
                    {msg.message}
                  </li>
                );
              })}
</ul>

            <div className="chat-box-body-input">
            <input type="text" placeholder="Write Your Message Here"
            
            value={message}
        onChange={(e) => setMessage(e.target.value)}
         


            />
    
            <button onClick={sendMessage}><svg xmlns="http://www.w3.org/2000/svg" width="26" height="25" viewBox="0 0 26 25" fill="none">
      <g clip-path="url(#clip0_144_2215)">
        <path d="M26.0001 1.0683C25.9161 1.56717 25.8245 2.06488 25.7497 2.5651C25.3973 4.9215 25.0491 7.27851 24.7001 9.63538C24.371 11.8581 24.0432 14.081 23.7136 16.3036C23.4823 17.8636 23.2536 19.4241 23.014 20.9828C22.9232 21.5733 22.4585 21.8605 21.9003 21.6697C18.1504 20.3878 14.4025 19.1 10.654 17.814C10.6463 17.8113 10.6397 17.8053 10.6003 17.7806C14.2336 13.3899 17.8637 9.00307 21.4938 4.61623C21.4783 4.60051 21.4627 4.58473 21.4471 4.56901C21.2773 4.71327 21.1069 4.85692 20.9377 5.00193C16.4553 8.84635 11.9723 12.6903 7.49309 16.5385C7.3641 16.6493 7.2588 16.6574 7.10702 16.605C4.95045 15.8606 2.79266 15.1197 0.633309 14.3833C0.268747 14.259 0.0320839 14.0309 0.00277235 13.6409C-0.026607 13.2493 0.179659 12.9926 0.519795 12.8146C6.8962 9.47744 13.2711 6.1374 19.6462 2.79797C21.3018 1.93075 22.9571 1.06293 24.6133 0.196867C25.2846 -0.154197 25.6387 -0.0470878 26.0001 0.609924C26.0001 0.762694 26.0001 0.915532 26.0001 1.0683Z" fill="black"/>
        <path d="M9.50875 19.1464C10.9644 19.6453 12.4074 20.14 13.8659 20.6398C13.8344 20.6961 13.815 20.741 13.7868 20.7794C12.857 22.0499 11.9282 23.3212 10.9949 24.5891C10.6622 25.0411 10.1265 25.1406 9.77242 24.785C9.62572 24.6377 9.49878 24.3933 9.49613 24.1913C9.47462 22.5386 9.48459 20.8856 9.48561 19.2326C9.48568 19.2165 9.49396 19.2003 9.50875 19.1464Z" fill="black"/>
      </g>
      <defs>
        <clipPath id="clip0_144_2215">
          <rect width="26" height="25" fill="white"/>
        </clipPath>
      </defs>
    </svg></button>
          </div>
</div>


      </div>
    </div>
    </section>
    }
        </>
  );
};

export default Chat;



// import React, { useEffect, useState } from 'react';
// import { io, Socket } from 'socket.io-client';

// const socket: Socket = io('http://localhost:5000');

// interface ChatProps {
//   rc_id: any;
// }

// const Chat: React.FC<ChatProps> = ({ rc_id }) => {
//   const [message, setMessage] = useState('');
//   const [messages, setMessages] = useState<any[]>([]);
//   const [senderId, setSenderId] = useState<string | null>(null);

//   const storedUserData = localStorage.getItem('userData');
//   const userData = storedUserData ? JSON.parse(storedUserData) : null;

//   useEffect(() => {
//     console.log(rc_id,senderId,"PROPS CHAT")
//     if (userData && userData.id) {
//       setSenderId(userData.id);
//     }

//     socket.on('previous_messages', (prevMessages: any[]) => {
//       setMessages(prevMessages);
//     });

//     socket.emit('get_previous_messages', {
//       sender: userData ? userData.id : '',
//       receiver: rc_id,
//     });

//     return () => {
//       socket.off('previous_messages');
//     };
//   }, [rc_id, userData]);

//   const sendMessage = () => {
//     if (message.trim()) {
//       const messageData = {
//         Sender_Id: senderId,
//         Reciever_Id: rc_id,
//         message: message,
//       };

//       socket.emit('chat_message', messageData);
//       setMessage('');
//     }
//   };

//   return (
//     <section style={{ padding: '20px' }}>
//       <div style={{ maxWidth: '600px', margin: '0 auto', border: '1px solid #ccc', borderRadius: '10px', padding: '10px' }}>
//         <div style={{ marginBottom: '10px', textAlign: 'center' }}>
//           <button style={{ padding: '10px 20px', border: 'none', borderRadius: '5px', background: '#007bff', color: '#fff', cursor: 'pointer' }}>Schedule Meeting</button>
//         </div>

//         <div>
//           <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
//             <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: '#ddd', marginRight: '10px' }}></div>
//             <div>
//               <h2 style={{ margin: '0' }}>Christiana Adams</h2>
//               <p style={{ margin: '0', color: 'green' }}>online</p>
//             </div>
//           </div>

//           <div style={{ maxHeight: '400px', overflowY: 'auto', marginBottom: '20px' }}>
//             <ul style={{ listStyleType: 'none', padding: '0' }}>
//               {messages.map((msg, index) => (
//                 <li key={index} style={{
//                   padding: '10px',
//                   margin: '5px 0',
//                   borderRadius: '10px',
//                   maxWidth: '60%',
//                   wordWrap: 'break-word',
//                   alignSelf: msg.Reciever_Id === rc_id ? 'flex-end' : 'flex-start',
//                   backgroundColor: msg.Reciever_Id === rc_id ? '#DCF8C6' : '#E5E5EA',
//                   textAlign: msg.Reciever_Id === rc_id ? 'right' : 'left',
//                   marginLeft: msg.Reciever_Id === rc_id ? 'auto' : '0',
//                   marginRight: msg.Reciever_Id === rc_id ? '0' : 'auto'
//                 }}>
//                   {msg.message}
//                 </li>
//               ))}
//             </ul>
//           </div>
//           <div style={{ display: 'flex', alignItems: 'center' }}>
//             <input
//               type="text"
//               placeholder="Write Your Message Here"
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               style={{
//                 flexGrow: 1,
//                 padding: '10px',
//                 borderRadius: '10px',
//                 border: '1px solid #ccc'
//               }}
//             />
//             <button onClick={sendMessage} style={{ marginLeft: '10px', backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="26"
//                 height="25"
//                 viewBox="0 0 26 25"
//                 fill="none"
//               >
//                 <g clipPath="url(#clip0_144_2215)">
//                   <path
//                     d="M26.0001 1.0683C25.9161 1.56717 25.8245 2.06488 25.7497 2.5651C25.3973 4.9215 25.0491 7.27851 24.7001 9.63538C24.371 11.8581 24.0432 14.081 23.7136 16.3036C23.4823 17.8636 23.2536 19.4241 23.014 20.9828C22.9232 21.5733 22.4585 21.8605 21.9003 21.6697C18.1504 20.3878 14.4025 19.1 10.654 17.814C10.6463 17.8113 10.6397 17.8053 10.6003 17.7806C14.2336 13.3899 17.8637 9.00307 21.4938 4.61623C21.4783 4.60051 21.4627 4.58473 21.4471 4.56901C21.2773 4.71327 21.1069 4.85692 20.9377 5.00193C16.4553 8.84635 11.9723 12.6903 7.49309 16.5385C7.3641 16.6493 7.2588 16.6574 7.10702 16.605C4.95045 15.8606 2.79266 15.1197 0.633309 14.3833C0.268747 14.259 0.0320839 14.0309 0.00277235 13.6409C-0.026607 13.2493 0.179659 12.9926 0.519795 12.8146C6.8962 9.47744 13.2711 6.1374 19.6462 2.79797C21.3018 1.93075 22.9571 1.06293 24.6133 0.196867C25.2846 -0.154197 25.6387 -0.0470878 26.0001 0.609924C26.0001 0.762694 26.0001 0.915532 26.0001 1.0683Z"
//                     fill="black"
//                   />
//                   <path
//                     d="M9.50875 19.1464C10.9644 19.6453 12.4074 20.14 13.8659 20.6398C13.8344 20.6961 13.815 20.741 13.7868 20.7794C12.857 22.0499 11.9282 23.3212 10.9949 24.5891C10.6622 25.0411 10.1265 25.1406 9.77242 24.785C9.62572 24.6377 9.49878 24.3933 9.49613 24.1913C9.47462 22.5386 9.48459 20.8856 9.48561 19.2326C9.48568 19.2165 9.49396 19.2003 9.50875 19.1464Z"
//                     fill="black"
//                   />
//                 </g>
//                 <defs>
//                   <clipPath id="clip0_144_2215">
//                     <rect width="26" height="25" fill="white" />
//                   </clipPath>
//                 </defs>
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Chat;












// import React, { useEffect, useState } from 'react';
// import { io, Socket } from 'socket.io-client';

// const socket: Socket = io('http://localhost:5000');

// interface ChatProps {
//   rc_id: any;
// }

// const Chat: React.FC<ChatProps> = ({ rc_id }) => {
//   const [message, setMessage] = useState('');
//   const [messages, setMessages] = useState<any[]>([]);
//   const [senderId, setSenderId] = useState<string | null>(null);

//   const storedUserData = localStorage.getItem('userData');
//   const userData = storedUserData ? JSON.parse(storedUserData) : null;

//   useEffect(() => {
//     if (userData && userData.id) {
//       setSenderId(userData.id);
//     }

//     socket.on('previous_messages', (prevMessages: any[]) => {
//       setMessages(prevMessages);
//     });

//     socket.emit('get_previous_messages', {
//       sender: userData ? userData.id : '',
//       receiver: rc_id,
//     });

//     return () => {
//       socket.off('previous_messages');
//     };
//   }, [rc_id, userData]);

//   useEffect(() => {
//     console.log('Current user (senderId):', senderId);
//     console.log('Receiver ID (rc_id):', rc_id);
//     console.log('Messages:', messages);
//   }, [senderId, rc_id, messages]);

//   const sendMessage = () => {
//     if (message.trim()) {
//       const messageData = {
//         Sender_Id: senderId,
//         Reciever_Id: rc_id,
//         message: message,
//       };

//       socket.emit('chat_message', messageData);
//       setMessage('');
//     }
//   };

//   return (
//     <section style={{ padding: '20px' }}>
//       <div style={{ maxWidth: '600px', margin: '0 auto', border: '1px solid #ccc', borderRadius: '10px', padding: '10px' }}>
//         <div style={{ marginBottom: '10px', textAlign: 'center' }}>
//           <button style={{ padding: '10px 20px', border: 'none', borderRadius: '5px', background: '#007bff', color: '#fff', cursor: 'pointer' }}>Schedule Meeting</button>
//         </div>

//         <div>
//           <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
//             <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: '#ddd', marginRight: '10px' }}></div>
//             <div>
//               <h2 style={{ margin: '0' }}>Christiana Adams</h2>
//               <p style={{ margin: '0', color: 'green' }}>online</p>
//             </div>
//           </div>

//           <div style={{ maxHeight: '400px', overflowY: 'auto', marginBottom: '20px', display: 'flex', flexDirection: 'column' }}>
//             <ul style={{ listStyleType: 'none', padding: '0', display: 'flex', flexDirection: 'column' }}>
//               {messages.map((msg, index) => {
//                 const isSender = msg.Sender_Id != rc_id;
//                 return (
//                   <li key={index} style={{
//                     padding: '10px',
//                     margin: '5px 0',
//                     borderRadius: '10px',
//                     maxWidth: '60%',
//                     wordWrap: 'break-word',
//                     alignSelf: isSender ? 'flex-end' : 'flex-start',
//                     backgroundColor: isSender ? 'red' : 'yellow',
//                     textAlign: isSender ? 'right' : 'left',
//                     marginLeft: isSender ? 'auto' : '0',
//                     marginRight: isSender ? '0' : 'auto'
//                   }}>
//                     {msg.message}
//                   </li>
//                 );
//               })}
//             </ul>
//           </div>
//           <div style={{ display: 'flex', alignItems: 'center' }}>
//             <input
//               type="text"
//               placeholder="Write Your Message Here"
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               style={{
//                 flexGrow: 1,
//                 padding: '10px',
//                 borderRadius: '10px',
//                 border: '1px solid #ccc'
//               }}
//             />
//             <button onClick={sendMessage} style={{ marginLeft: '10px', backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="26"
//                 height="25"
//                 viewBox="0 0 26 25"
//                 fill="none"
//               >
//                 <g clipPath="url(#clip0_144_2215)">
//                   <path
//                     d="M26.0001 1.0683C25.9161 1.56717 25.8245 2.06488 25.7497 2.5651C25.3973 4.9215 25.0491 7.27851 24.7001 9.63538C24.371 11.8581 24.0432 14.081 23.7136 16.3036C23.4823 17.8636 23.2536 19.4241 23.014 20.9828C22.9232 21.5733 22.4585 21.8605 21.9003 21.6697C18.1504 20.3878 14.4025 19.1 10.654 17.814C10.6463 17.8113 10.6397 17.8053 10.6003 17.7806C14.2336 13.3899 17.8637 9.00307 21.4938 4.61623C21.4783 4.60051 21.4627 4.58473 21.4471 4.56901C21.2773 4.71327 21.1069 4.85692 20.9377 5.00193C16.4553 8.84635 11.9723 12.6903 7.49309 16.5385C7.3641 16.6493 7.2588 16.6574 7.10702 16.605C4.95045 15.8606 2.79266 15.1197 0.633309 14.3833C0.268747 14.259 0.0320839 14.0309 0.00277235 13.6409C-0.026607 13.2493 0.179659 12.9926 0.519795 12.8146C6.8962 9.47744 13.2711 6.1374 19.6462 2.79797C21.3018 1.93075 22.9571 1.06293 24.6133 0.196867C25.2846 -0.154197 25.6387 -0.0470878 26.0001 0.609924C26.0001 0.762694 26.0001 0.915532 26.0001 1.0683Z"
//                     fill="black"
//                   />
//                   <path
//                     d="M9.50875 19.1464C10.9644 19.6453 12.4074 20.14 13.8659 20.6398C13.8344 20.6961 13.815 20.741 13.7868 20.7794C12.857 22.0499 11.9282 23.3212 10.9949 24.5891C10.6622 25.0411 10.1265 25.1406 9.77242 24.785C9.62572 24.6377 9.49878 24.3933 9.49613 24.1913C9.47462 22.5386 9.48459 20.8856 9.48561 19.2326C9.48568 19.2165 9.49396 19.2003 9.50875 19.1464Z"
//                     fill="black"
//                   />
//                 </g>
//                 <defs>
//                   <clipPath id="clip0_144_2215">
//                     <rect width="26" height="25" fill="white" />
//                   </clipPath>
//                 </defs>
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Chat;
