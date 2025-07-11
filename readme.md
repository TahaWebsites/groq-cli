# 🧠 Groq CLI

**Groq CLI** is a blazing-fast, AI-powered terminal chatbot that connects to the [Groq API](https://console.groq.com/) using open-weight models like **Gemma 2**, **LLaMA 3**, and others.

Built for developers, terminal junkies, and anyone who wants the power of AI right in their command line.

---

## 🚀 Features

- ✅ Real-time terminal chat with Groq's fastest LLMs  
- ✅ Supports Markdown formatting in output  
- ✅ Spinner animation while waiting for responses  
- ✅ Auto-persistent chat context (up to token limit)  
- ✅ Slash commands (`/clear`, `/exit`, `/retry`, etc.)  
- ✅ Token-safe context window handling  
- ✅ Easy to extend and open-source  

---

## 📦 Installation

Install globally via `npm`:

```bash
npm install -g ai59
```

After installing, run:

```bash
ai
```

Or run it instantly with:

```bash
npx ai59
```

You'll be prompted to chat with the AI.

## Slash Commands
Command	Description  
/exit	Exit the CLI  
/clear	Clears the terminal screen  
/help	Lists all available commands 

## Project Structure

groq-cli/  
├── index.js        
├── ai.js            
├── .env            
├── package.json  
└── README.md  

## Supported Models
1. llama3-8b-8192
2. llama3-70b-8192
3. gemma-2b-it
4. gemma-9b-it

## Development

```bash
git clone https://github.com/TahaWebsites/groq-cli
cd groq-cli
npm install
node index.js
```

## License
ISC © Mohammed Masooduddin Siddiqui

## Contribute
Pull requests and ideas are welcome!
Issues and feature requests?  
 Open one at https://github.com/TahaWebsites/groq-cli/issues
