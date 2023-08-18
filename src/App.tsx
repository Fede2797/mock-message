import { useState } from "react";

const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]

function App() {

  const [message, setMessage] = useState("");
  const [mockedMessage, setMockedMessage] = useState("");

  const mockify = () => {
    let mocked = message.split("")
                      .map( letter => {
                        if (!vowels.includes(letter)) return letter;

                        if (letter === letter.toUpperCase()) return "I"
                        
                        return "i"
                      })
    setMockedMessage(mocked.join(""))
    // setMockedMessage()
  }

  return (
    <main className="w-screen h-screen flex justify-center items-center bg-slate-800 text-white">
      <div className="min-w-[80%] flex flex-col gap-6 items-center justify-center text-center">
        <h1 className="mb-5 text-center text-5xl">Ñiñiñi</h1>
        <input 
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          type="text" 
          id="mock_message" 
          className="max-w-[800px] w-full mx-auto bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-xl" 
          placeholder="Ingresa el mensaje" 
          required 
        />
        <button 
          onClick={mockify}
          type="button" 
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >Ñiñi</button>
        <p className="text-xl">{mockedMessage}</p>
      </div>
    </main>
  )
}

export default App
