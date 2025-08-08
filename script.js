// < !DOCTYPE html >
//     <html lang="en">
//         <head>
//             <meta charset="UTF-8">
//                 <meta name="viewport" content="width=device-width, initial-scale=1.0">
//                     <title>Call Centre Productivity Timer</title>
//                     <style>
//                         body {
//                             font - family: Arial, sans-serif;
//                         background: #f4f6f8;
//                         display: flex;
//                         flex-direction: column;
//                         align-items: center;
//                         justify-content: center;
//                         height: 100vh;
//                         padding: 20px;
//     }

//                         .container {
//                             background: white;
//                         padding: 2rem;
//                         border-radius: 15px;
//                         box-shadow: 0 0 10px rgba(0,0,0,0.1);
//                         text-align: center;
//                         max-width: 400px;
//                         width: 100%;
//     }

//                         h1 {
//                             font - size: 24px;
//                         margin-bottom: 10px;
//     }

//                         #timer {
//                             font - size: 48px;
//                         margin: 20px 0;
//     }

//                         button {
//                             padding: 10px 20px;
//                         font-size: 16px;
//                         margin: 5px;
//                         border: none;
//                         border-radius: 8px;
//                         cursor: pointer;
//     }

//                         .start {
//                             background: #4caf50;
//                         color: white;
//     }

//                         .break {
//                             background: #2196f3;
//                         color: white;
//     }

//                         .reset {
//                             background: #f44336;
//                         color: white;
//     }

//                         .affiliate {
//                             margin - top: 20px;
//                         font-size: 14px;
//     }

//                         .affiliate a {
//                             color: #2196f3;
//                         text-decoration: none;
//     }
//                     </style>
//                 </head>
//                 <body>
//                     <div class="container">
//                         <h1>Call Centre Productivity Timer</h1>
//                         <div id="timer">25:00</div>
//                         <button class="start" onclick="startWork()">Start Work</button>
//                         <button class="break" onclick="startBreak()">Start Break</button>
//                         <button class="reset" onclick="resetTimer()">Reset</button>

//                         <div class="affiliate">
//                             <p>Recommended: <a href="https://amzn.to/3YourAffiliateLink" target="_blank">Top-rated Noise Cancelling Headset 🎧</a></p>
//                         </div>
//                     </div>

//                     <script>
//                         let time = 1500; // 25 minutes
//                         let timer;
//                         let isRunning = false;

//                         function updateDisplay() {
//       const minutes = Math.floor(time / 60);
//                         const seconds = time % 60;
//                         document.getElementById('timer').textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
//     }

//                         function startWork() {
//                             clearInterval(timer);
//                         time = 1500; // 25 min
//                         updateDisplay();
//                         timer = setInterval(countdown, 1000);
//     }

//                         function startBreak() {
//                             clearInterval(timer);
//                         time = 300; // 5 min
//                         updateDisplay();
//                         timer = setInterval(countdown, 1000);
//     }

//                         function resetTimer() {
//                             clearInterval(timer);
//                         time = 1500;
//                         updateDisplay();
//     }

//                         function countdown() {
//       if (time > 0) {
//                             time--;
//                         updateDisplay();
//       } else {
//                             clearInterval(timer);
//                         alert("Time's up!");
//       }
//     }

//                         updateDisplay(); // Init
//                     </script>
//                 </body>
//             </html>
