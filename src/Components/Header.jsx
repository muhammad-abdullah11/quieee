import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Quiz from '../assets/Quiz.png';

export default function Header() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);

  const subjectsByCategory = {
    gcse: ['Maths', 'English', 'History', 'Geography'],
    alevels: ['Mathematics', 'Further Maths', 'Physics', 'Chemistry'],
    arts: ['Art History', 'Music Theory', 'Drama', 'Literature'],
    languages: ['French', 'Spanish', 'German', 'Mandarin'],
    maths: ['Algebra', 'Geometry', 'Calculus', 'Statistics'],
    science: ['Biology', 'Chemistry', 'Physics', 'Environmental Science'],
    social: ['Psychology', 'Sociology', 'Economics', 'Politics'],
  };

  return (
    <header className="w-full bg-white shadow-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">

    
        <img
        onClick={()=>window.location.href="/"}
        src="../../public/icon.jpg" alt="Quiz Logo" className="h-40 object-contain" />

    <div className=' flex gap-3.5'>
        <div
          className="relative hidden md:block"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => {
            setOpen(false);
            setActiveCategory(null);
          }}
        >
          <button className="flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium hover:bg-gray-100">
            Categories
            <FontAwesomeIcon icon={faChevronDown} className="text-xs" />
          </button>

          {open && (
            <div className="absolute left-0 top-8 z-50 mt-2 flex w-[300px] overflow-hidden rounded-lg border bg-white shadow-lg">
              <div className="w-1/2 border-r">
                <div className="bg-gray-100 px-3 py-2 text-sm font-semibold">
                  Categories
                </div>
                {Object.keys(subjectsByCategory).map((category) => (
                  <div
                    key={category}
                    onMouseEnter={() => setActiveCategory(category)}
                    className={`cursor-pointer px-3 py-2 capitalize transition ${
                      activeCategory === category
                        ? 'bg-blue-100 text-blue-700'
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    {category}
                  </div>
                ))}
              </div>

              <div className="w-1/2">
                <div className="bg-gray-100 px-3 py-2 text-sm font-semibold">
                  Subjects
                </div>
                {activeCategory ? (
                  <ul className="space-y-1 px-3 py-2 text-sm">
                    {subjectsByCategory[activeCategory].map((subject) => (
                      <li
                        key={subject}
                        className="cursor-pointer rounded px-2 py-1 hover:bg-gray-100"
                      >
                        {subject}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="px-3 py-6 text-center text-sm text-gray-400">
                    Select a category
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        <div className="hidden md:block relative">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search quizzes..."
            className="w-52 rounded-lg border bg-gray-50 py-2 pl-4 pr-10 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />
          <FontAwesomeIcon
            icon={faSearch}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
        </div>

        <button 
        onClick={()=>window.location.href="/quiz"}
        className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700">
          Start QUIZ
        </button>
</div>
      </div>

          {/* //mobile search bar in new line */}
           <div className="relative md:hidden px-4 py-2 ">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search quizzes..."
            className="w-52 rounded-lg border bg-gray-50 py-2 pl-4 pr-10 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />
          <FontAwesomeIcon
            icon={faSearch}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
        </div>


    </header>
  );
}