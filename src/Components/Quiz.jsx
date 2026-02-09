import React, { useState } from "react";
import QuizComponent from "./QuizComponent";

const topics = [
  "HTML",
  "CSS",
  "JavaScript",
  "Python",
  "Java",
  "C",
  "PHP",
  "TypeScript",
];

const Quiz = () => {
  const [topic, setTopic] = useState("");

  return (
    <main className="py-2 flex flex-col bg-gray-100 ">
      <button
        onClick={() => window.location.href = "/"}
        className="w-20 mx-5 py-2.5 mb-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 active:scale-95 transition-all duration-200 shadow-sm">
        Home
      </button>

      <div className="w-full p-6">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Choose a Topic
        </h2>

        <section className="space-y-4">
          <img
            src="https://images.unsplash.com/photo-1599508704512-2f19efd1e35f?w=600"
            alt="quiz"
            className="rounded-lg h-40 w-full object-cover"
          />

          <div className="grid grid-cols-2 gap-3">
            {topics.map((t, i) => (
              <label
                key={i}
                className={`flex items-center gap-2 p-2 border rounded-lg cursor-pointer transition
                    ${topic === t
                    ? "border-blue-600 bg-blue-50"
                    : "border-gray-300 hover:bg-gray-100"
                  }`}
              >
                <input
                  type="radio"
                  name="topic"
                  value={t}
                  checked={topic === t}
                  onChange={() => setTopic(t)}
                  className="accent-blue-600"
                />
                <span className="font-medium">{t}</span>
              </label>
            ))}
          </div>

          <button
            disabled={!topic}
            onClick={() => { window.location.href = `/quiz/play?topic=${topic}` }}
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Start Quiz
          </button>
        </section>

      </div>
    </main>
  );
};

export default Quiz;