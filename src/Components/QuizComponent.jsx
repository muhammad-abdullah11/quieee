import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom';

const quizData = [
  {
    topic: "HTML",
    img: "https://images.unsplash.com/photo-1632882765546-1ee75f53becb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aHRtbHxlbnwwfHwwfHx8MA%3D%3D",
    mcqs: [
      { question: "What does HTML stand for?", options: ["Hyper Text Markup Language", "High Text Machine Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language"], answer: "Hyper Text Markup Language" },
      { question: "Which tag defines a paragraph?", options: ["<p>", "<div>", "<span>", "<h>"], answer: "<p>" },
      { question: "Which attribute loads an image?", options: ["src", "href", "alt", "link"], answer: "src" },
      { question: "Which tag creates line break?", options: ["<br>", "<hr>", "<lb>", "<break>"], answer: "<br>" },
      { question: "Which tag is unordered list?", options: ["<ul>", "<ol>", "<li>", "<list>"], answer: "<ul>" },
      { question: "Which is semantic?", options: ["<div>", "<span>", "<section>", "<b>"], answer: "<section>" },
      { question: "Which tag creates link?", options: ["<a>", "<link>", "<href>", "<url>"], answer: "<a>" },
      { question: "Which opens link new tab?", options: ["target='_blank'", "open", "tab", "new"], answer: "target='_blank'" },
      { question: "Which tag shows image?", options: ["<img>", "<image>", "<pic>", "<src>"], answer: "<img>" },
      { question: "HTML is?", options: ["Markup", "Programming", "Styling", "Database"], answer: "Markup" }
    ]
  },
  {
    topic: "CSS",
    img: "https://images.unsplash.com/photo-1505685296765-3a2736de412f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y3NzfGVufDB8fDB8fHww",
    mcqs: [
      { question: "What does CSS stand for?", options: ["Cascading Style Sheets", "Creative Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"], answer: "Cascading Style Sheets" },
      { question: "Which property sets color?", options: ["color", "font-color", "text-color", "bg"], answer: "color" },
      { question: "Which unit is relative?", options: ["px", "em", "cm", "mm"], answer: "em" },
      { question: "Which controls inner spacing?", options: ["padding", "margin", "gap", "border"], answer: "padding" },
      { question: "Which hides element?", options: ["none", "hidden", "block", "inline"], answer: "none" },
      { question: "Class selector symbol?", options: [".", "#", "*", "&"], answer: "." },
      { question: "Which sets bg color?", options: ["background-color", "color", "bg", "fill"], answer: "background-color" },
      { question: "Flexbox is?", options: ["1D layout", "2D layout", "Table", "Float"], answer: "1D layout" },
      { question: "Font size property?", options: ["font-size", "text-size", "size", "font"], answer: "font-size" },
      { question: "CSS is used for?", options: ["Styling", "Logic", "Backend", "DB"], answer: "Styling" }
    ]
  },
  {
    topic: "JavaScript",
    img: "https://images.unsplash.com/photo-1667372393086-9d4001d51cf1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8amF2YXNjcmlwdHxlbnwwfHwwfHx8MA%3D%3D",
    mcqs: [
      { question: "Which declares constant?", options: ["var", "let", "const", "static"], answer: "const" },
      { question: "JSON to object?", options: ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "JSON.object()"], answer: "JSON.parse()" },
      { question: "Strict equality?", options: ["==", "=", "===", "!="], answer: "===" },
      { question: "Delay function?", options: ["setTimeout", "setInterval", "delay", "wait"], answer: "setTimeout" },
      { question: "Non primitive?", options: ["Object", "String", "Number", "Boolean"], answer: "Object" },
      { question: "Add to array end?", options: ["push()", "pop()", "shift()", "unshift()"], answer: "push()" },
      { question: "Define function?", options: ["function", "def", "fn", "method"], answer: "function" },
      { question: "Runs once at least?", options: ["do...while", "for", "while", "foreach"], answer: "do...while" },
      { question: "Check type?", options: ["typeof", "instanceof", "check", "type"], answer: "typeof" },
      { question: "Map array?", options: ["map()", "forEach()", "filter()", "reduce()"], answer: "map()" }
    ]
  },
  {
    topic: "Python",
    img: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=600",
    mcqs: [
      { question: "Python is?", options: ["Interpreted", "Compiled", "Markup", "Low-level"], answer: "Interpreted" },
      { question: "Define function?", options: ["def", "fn", "function", "define"], answer: "def" },
      { question: "Immutable type?", options: ["tuple", "list", "dict", "set"], answer: "tuple" },
      { question: "Comment symbol?", options: ["#", "//", "/*", "--"], answer: "#" },
      { question: "Loop exists?", options: ["for", "while", "both", "none"], answer: "both" },
      { question: "Add list item?", options: ["append()", "push()", "add()", "insert()"], answer: "append()" },
      { question: "Handle errors?", options: ["try", "catch", "error", "handle"], answer: "try" },
      { question: "File extension?", options: [".py", ".js", ".java", ".php"], answer: ".py" },
      { question: "Supports OOP?", options: ["Yes", "No", "Partial", "None"], answer: "Yes" },
      { question: "Print output?", options: ["print()", "echo()", "log()", "write()"], answer: "print()" }
    ]
  },
  {
    topic: "Java",
    img: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=600",
    mcqs: [
      { question: "Java is?", options: ["Platform independent", "OS dependent", "Script", "Markup"], answer: "Platform independent" },
      { question: "Create object?", options: ["new", "make", "create", "object"], answer: "new" },
      { question: "Entry method?", options: ["main()", "start()", "run()", "init()"], answer: "main()" },
      { question: "Uses JVM?", options: ["Yes", "No", "Partial", "None"], answer: "Yes" },
      { question: "Non primitive?", options: ["String", "int", "boolean", "char"], answer: "String" },
      { question: "Inheritance keyword?", options: ["extends", "implements", "inherits", "super"], answer: "extends" },
      { question: "Exception handling?", options: ["try-catch", "error", "throw", "handle"], answer: "try-catch" },
      { question: "File extension?", options: [".java", ".js", ".class", ".jar"], answer: ".java" },
      { question: "Access modifier widest?", options: ["public", "private", "protected", "default"], answer: "public" },
      { question: "Java supports OOP?", options: ["Yes", "No", "Partial", "None"], answer: "Yes" }
    ]
  },
  {
    topic: "C",
    img: "https://images.unsplash.com/photo-1649482258237-8c1976c42c7d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YyUyMHByb2dyYW1taW5nfGVufDB8fDB8fHww",
    mcqs: [
      { question: "C is?", options: ["Procedural", "OOP", "Functional", "Markup"], answer: "Procedural" },
      { question: "Entry function?", options: ["main()", "start()", "run()", "init()"], answer: "main()" },
      { question: "Header file?", options: ["stdio.h", "conio.h", "math.h", "all"], answer: "all" },
      { question: "Comment symbol?", options: ["//", "#", "<!--", "--"], answer: "//" },
      { question: "Pointer symbol?", options: ["*", "&", "%", "#"], answer: "*" },
      { question: "File extension?", options: [".c", ".cpp", ".java", ".py"], answer: ".c" },
      { question: "C supports OOP?", options: ["No", "Yes", "Partial", "Depends"], answer: "No" },
      { question: "Which stores address?", options: ["Pointer", "Array", "Variable", "Struct"], answer: "Pointer" },
      { question: "Which is loop?", options: ["for", "while", "do-while", "all"], answer: "all" },
      { question: "C is fast?", options: ["Yes", "No", "Average", "Slow"], answer: "Yes" }
    ]
  },
  {
    topic: "PHP",
    img: "https://images.unsplash.com/photo-1599507593499-a3f7d7d97667?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGhwfGVufDB8fDB8fHww",
    mcqs: [
      { question: "PHP is?", options: ["Server-side", "Client-side", "Markup", "Styling"], answer: "Server-side" },
      { question: "PHP variable symbol?", options: ["$", "#", "@", "&"], answer: "$" },
      { question: "File extension?", options: [".php", ".js", ".html", ".py"], answer: ".php" },
      { question: "Echo is used for?", options: ["Output", "Input", "Loop", "Condition"], answer: "Output" },
      { question: "PHP runs on?", options: ["Server", "Browser", "Client", "OS"], answer: "Server" },
      { question: "Array function?", options: ["count()", "size()", "length()", "total()"], answer: "count()" },
      { question: "Superglobal?", options: ["$_POST", "$var", "$this", "$data"], answer: "$_POST" },
      { question: "Conditional keyword?", options: ["if", "when", "check", "case"], answer: "if" },
      { question: "Loop exists?", options: ["for", "while", "foreach", "all"], answer: "all" },
      { question: "PHP supports OOP?", options: ["Yes", "No", "Partial", "None"], answer: "Yes" }
    ]
  },
  {
    topic: "TypeScript",
    img: "https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?w=600",
    mcqs: [
      { question: "TypeScript is superset of?", options: ["JavaScript", "Python", "Java", "C++"], answer: "JavaScript" },
      { question: "Compiled to?", options: ["JavaScript", "Java", "C#", "Python"], answer: "JavaScript" },
      { question: "Adds?", options: ["Types", "Logic", "UI", "Database"], answer: "Types" },
      { question: "Type keyword?", options: ["type", "interface", "class", "struct"], answer: "type" },
      { question: "Compiler?", options: ["tsc", "npm", "node", "babel"], answer: "tsc" },
      { question: "Valid type?", options: ["number", "int", "float", "double"], answer: "number" },
      { question: "Error detection?", options: ["Compile-time", "Runtime", "None", "Both"], answer: "Compile-time" },
      { question: "File extension?", options: [".ts", ".js", ".tsx", ".jsx"], answer: ".ts" },
      { question: "Supports OOP?", options: ["Yes", "No", "Partial", "None"], answer: "Yes" },
      { question: "Used with React?", options: ["Yes", "No", "Rare", "Never"], answer: "Yes" }
    ]
  }
];


const QuizComponent = () => {

  const [searchParams] = useSearchParams();
  const [topic] = useState(searchParams.get("topic"))
  const [topics] = useState(quizData.find((q) => q.topic == topic))
  const [Questions] = useState(quizData.find((q) => q.topic == topic).mcqs)
  const [currQues, setCurrQues] = useState(0);
  const [selectedAns, setSelectedAns] = useState("");
  const [wrongCount, setWrongCount] = useState(0);
  const [wrongQuestions, setWrongQuestions] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const handleNextBtn = () => {
    if (!selectedAns) return;

    if (selectedAns !== Questions[currQues].answer) {
      const wrongQuestion = { index: Questions[currQues], userAnswer: selectedAns };
      setWrongQuestions((prev) => [...prev, wrongQuestion])
      setWrongCount((prev) => prev + 1);
    }

    if (currQues === Questions.length - 1) {
      setShowResult(true);
      return;
    }

    setCurrQues((prev) => prev + 1);
    setSelectedAns("");
  };

  return (
    <main className="w-full bg-gradient-to-br from-slate-100 to-slate-200 md:p-10 flex justify-center py-2">
      <div className="w-full max-w-3xl bg-white rounded-3xl shadow-xl overflow-hidden">
        <div className="p-6 md:p-8">
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-800">
            QUIZEE
          </h1>
          <h2 className="mt-2 text-lg font-medium text-slate-600 border-b pb-3">
            {topic}
          </h2>
        </div>

        <img
          src={topics.img}
          alt={topic}
          className="w-full h-56 object-cover mx-2 rounded-lg"
        />

        <div className="p-6 md:p-8">
          <p className="text-sm font-medium text-slate-500 mb-1">
            Question {currQues + 1} of {Questions.length}
          </p>

          <p className="text-lg font-semibold text-slate-800 mb-6">
            {Questions[currQues].question}
          </p>

          <form className="space-y-4">
            {Questions[currQues].options.map((opt, i) => (
              <label
                key={i}
                className={`flex items-center gap-3 rounded-xl border p-4 cursor-pointer transition-all
              ${selectedAns === opt
                    ? "border-blue-600 bg-blue-50"
                    : "border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                  }`}
              >
                <input
                  type="radio"
                  name="option"
                  value={opt}
                  checked={selectedAns === opt}
                  onChange={() => setSelectedAns(opt)}
                  className="accent-blue-600"
                />
                <span className="text-slate-700">{opt}</span>
              </label>
            ))}
          </form>

          <div className="flex justify-end mt-8">
            <button
              onClick={handleNextBtn}
              disabled={!selectedAns}
              className="px-6 py-2.5 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed transition"
            >
              {currQues === Questions.length - 1 ? "Finish Quiz" : "Next Question"}
            </button>
          </div>
        </div>
      </div>

      {showResult && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden">
            <div className="p-6 border-b text-center shrink-0">
              <h3 className="text-2xl font-bold text-slate-800 mb-2">
                Quiz Completed
              </h3>
              <p className="text-slate-600">
                You got <span className="font-bold text-red-600">{wrongCount}</span> wrong out of {Questions.length}
              </p>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-8 bg-slate-50">
              {wrongQuestions.length > 0 ? (
                <>
                  <h4 className="text-xl font-semibold text-slate-700 mb-4">Review Wrong Answers:</h4>
                  {wrongQuestions.map((item, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                      <p className="font-medium text-slate-800 mb-4">
                        <span className="font-bold text-slate-400 mr-2">Q{Questions.indexOf(item.index) + 1}.</span>
                        {item.index.question}
                      </p>

                      <div className="space-y-2">
                        {item.index.options.map((opt, i) => {
                          const isUserAnswer = item.userAnswer === opt;
                          const isCorrectAnswer = item.index.answer === opt;

                          let borderClass = "border-slate-200";
                          let bgClass = "bg-white";
                          let textClass = "text-slate-600";
                          let icon = null;

                          if (isCorrectAnswer) {
                            borderClass = "border-green-500";
                            bgClass = "bg-green-50";
                            textClass = "text-green-700 font-medium";
                            icon = <span className="text-green-600 ml-auto">✓</span>;
                          } else if (isUserAnswer) {
                            borderClass = "border-red-500";
                            bgClass = "bg-red-50";
                            textClass = "text-red-700 font-medium";
                            icon = <span className="text-red-600 ml-auto">✗</span>;
                          }

                          return (
                            <div
                              key={i}
                              className={`flex items-center gap-3 p-3 rounded-lg border ${borderClass} ${bgClass} ${textClass}`}
                            >
                              <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0
                                ${isCorrectAnswer ? "border-green-500 bg-green-500" :
                                  isUserAnswer ? "border-red-500 bg-red-500" : "border-slate-300"}`}
                              >
                                {(isCorrectAnswer || isUserAnswer) && <div className="w-1.5 h-1.5 bg-white rounded-full" />}
                              </div>
                              <span>{opt}</span>
                              {icon}
                            </div>
                          );
                        })}
                      </div>

                      <div className="mt-3 text-sm flex gap-4">
                        <span className="text-red-600">Your Answer: {item.userAnswer}</span>
                        <span className="text-green-600 font-medium">Correct Answer: {item.index.answer}</span>
                      </div>
                    </div>
                  ))}
                </>
              ) : (
                <div className="text-center py-10">
                  <p className="text-2xl text-green-600 font-bold mb-2">Perfect Score! 🎉</p>
                  <p className="text-slate-500">You answered all questions correctly.</p>
                </div>
              )}
            </div>

            <div className="p-6 border-t bg-white shrink-0">
              <button
                onClick={() => window.location.reload()}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition shadow-lg hover:shadow-blue-200"
              >
                Restart Quiz
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default QuizComponent;
