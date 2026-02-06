import React, { useState } from "react";

const jsQuestions = [
  {
    question: "Which of the following is NOT a JavaScript data type?",
    options: ["String", "Boolean", "Float", "Undefined"],
    answer: "Float",
  },
  {
    question: "Which keyword declares a variable that cannot be reassigned?",
    options: ["var", "let", "const", "static"],
    answer: "const",
  },
];

const Quiz = () => {
  const [currQues, setCurrQues] = useState(0);
  const [selectedAns, setSelectedAns] = useState("");
  const [wrongCount, setWrongCount] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleNextBtn = () => {
    if (!selectedAns) return;

    if (selectedAns !== jsQuestions[currQues].answer) {
      setWrongCount((prev) => prev + 1);
    }

    if (currQues === jsQuestions.length - 1) {
      setShowResult(true);
      return;
    }

    setCurrQues((prev) => prev + 1);
    setSelectedAns("");
  };

  return (
    <main className=" p-8">
      
      <div className="w-full max-w-md bg-gray-200 rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4">QUIZEE</h2>

        <p className="font-semibold mb-2">
          Question {currQues + 1} of {jsQuestions.length}
        </p>

        <p className="mb-4">{jsQuestions[currQues].question}</p>

        <form className="space-y-3">
          {jsQuestions[currQues].options.map((opt, i) => (
            <label
              key={i}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="radio"
                name="option"
                value={opt}
                checked={selectedAns === opt}
                onChange={() => setSelectedAns(opt)}
              />
              <span>{opt}</span>
            </label>
          ))}
        </form>

        <button
          onClick={handleNextBtn}
          disabled={!selectedAns}
          className="mt-6 px-4 bg-blue-600 text-white py-2 rounded-lg disabled:opacity-50"
        >
          {currQues === jsQuestions.length - 1 ? "Finish" : "Next"}
        </button>
      </div>

      {showResult && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <h3 className="text-xl font-bold mb-2">Quiz Completed </h3>
            <p className="mb-4">
              Wrong Answers:{" "}
              <span className="font-bold text-red-600">{wrongCount}</span> /{" "}
              {jsQuestions.length}
            </p>

            <button
              onClick={() => window.location.reload()}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg"
            >
              Restart Quiz
            </button>
          </div>
        </div>
      )}
    </main>
  );
};

export default Quiz;