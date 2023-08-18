import { useState } from "react";

const vowels = ["a", "e", "o", "u", "A", "E", "O", "U"]
const accent_vowels = ["á", "é", "í", "ó", "ú", "Á", "É", "Í", "Ó", "Ú"]

function App() {

  const [message, setMessage] = useState("");
  const [mockedMessage, setMockedMessage] = useState("");
  const [showCopied, setShowCopied] = useState(false);

  let timeoutId: number;

  const showMessage = () => {
    clearTimeout(timeoutId);
    setShowCopied(true);
    timeoutId = setTimeout(() => {
      setShowCopied(false);
    }, 2000);
  };

  const mockify = () => {
    let mocked = message.split("")
      .map( letter => {
        if (!vowels.includes(letter) && !accent_vowels.includes(letter)) return letter;

        if ( vowels.includes(letter) ) {
          if (letter === letter.toUpperCase()) {
            return "I"
          }
          return "i"
        }

        if ( accent_vowels.includes(letter) ) {
          if (letter === letter.toUpperCase()) {
            return "Í"
          }
          return "í"
        }

      })
    setMessage("");
    setMockedMessage(mocked.join(""))
  }

  const submitForm = ( e: React.FormEvent<HTMLFormElement> ) => {
    e.preventDefault()
    mockify()
  }

  const copyButtonVisible = () => { return (mockedMessage !== "") };

  const handleCopy = () => {
    navigator.clipboard.writeText(mockedMessage);
    showMessage();
  }

  return (
    <main className="w-screen h-screen flex justify-center items-center bg-slate-800 text-white">
      <div className="w-full flex flex-col gap-6 items-center justify-center text-center">
        <h1 className="mb-5 text-center text-5xl">Ñiñiñi</h1>
        <form 
          className="w-[80%] flex flex-col gap-6 items-center justify-center" 
          action=""
          onSubmit={submitForm}
        >
          <input 
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            type="text" 
            id="mock_message"
            autoComplete="off"
            placeholder="Ingresa el mensaje" 
            className="max-w-[800px] w-full mx-auto bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-xl" 
            required 
          />
          <button 
            onClick={mockify}
            type="button" 
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Ñiñi
          </button>
        </form>
        <div className="flex gap-4 items-center justify-center">
          <p className="max-w-[800px] text-xl">{mockedMessage}</p>
          <div className="relative">
            <button 
              onClick={handleCopy}
              type="button" 
              className={`text-white text-lg bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 ${ copyButtonVisible() ? "block" : "hidden" }`}
            >
              Copiar texto
            </button>
            <span className={`absolute bg-slate-700 p-1 w-[100px] left-[22px] mt-2 border border-slate-900 ${ showCopied ? "block" : "hidden" }`}>
              Copiado 👍
            </span>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
