@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@600&display=swap');

body, html {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  font-family: 'Orbitron', sans-serif;
  background: linear-gradient(145deg, #0f2027, #203a43, #2c5364);
  overflow: hidden;
}

canvas#background-canvas {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
}

.container {
  position: relative;
  z-index: 1;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.title {
  font-size: 2.8rem;
  text-align: center;
  color: white;
  margin-bottom: 40px;
}

.cursor {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: white;
  border-radius: 50%;
  animation: blink 0.8s infinite;
  vertical-align: middle;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

.button-group {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 320px;
}

.glass-button {
  padding: 15px;
  font-size: 1.4rem;
  color: white;
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 25px;
  backdrop-filter: blur(10px);
  cursor: pointer;
  transition: all 0.3s ease;
}

.glass-button:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: scale(1.05);
}
