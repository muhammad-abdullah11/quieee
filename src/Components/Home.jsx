import React, { useState, useRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple, faGooglePlay } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const imageUrls = [
    "https://plus.unsplash.com/premium_photo-1664047472774-12d0a7796c60?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGVhY2hpbmd8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVhY2hpbmd8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1605711285791-0219e80e43a3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHRlYWNoaW5nfGVufDB8fDB8fHww",
    "https://plus.unsplash.com/premium_photo-1677567996070-68fa4181775a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGVhcm5pbmd8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kaW5nfGVufDB8fDB8fHww",
    "https://plus.unsplash.com/premium_photo-1720287601920-ee8c503af775?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29kaW5nfGVufDB8fDB8fHww",
    "https://plus.unsplash.com/premium_photo-1683120966127-14162cdd0935?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D",
  ];

  const sections = [
    {
      id: 1,
      title: "Every class, every test, one ultimate study app",
      description:
        "Create your own flashcards or find sets made by teachers, students and experts. Study them anytime, anywhere with our free app",
      buttons: [
        {
          icon: "faApple",
          smallText: "Download on the",
          mainText: "App Store",
          bgColor: "black",
          textColor: "white",
        },
        {
          icon: "faGooglePlay",
          smallText: "Get it on",
          mainText: "Google Play",
          bgColor: "black",
          textColor: "white",
        },
      ],
      image:
        "https://images.prismic.io/quizlet-web/ZuNiTbVsGrYSvUQH_EN-GB1Flashcards.png?auto=format,compress",
      reverse: false,
    },
    {
      id: 2,
      title: "Make studying class material quick and easy",
      description:
        "Turn your slides, videos and notes into flashcard sets, practice tests and study guides.",
      ctaText: "try it out",
      image:
        "https://images.prismic.io/quizlet-web/ZuNiXrVsGrYSvUQJ_EN-GB1MagicNotes.png?auto=format,compress",
      reverse: true,
    },
    {
      id: 3,
      title: "Make studying class material quick and easy",
      description:
        "Turn your slides, videos and notes into flashcard sets, practice tests and study guides.",
      ctaText: "try it out",
      image:
        "https://images.prismic.io/quizlet-web/ZuNicbVsGrYSvUQK_EN-GB3Learn.png?auto=format,compress",
      reverse: false,
    },
    {
      id: 4,
      title: "TEACHERS\nEmpower Your Students",
      description:
        "Help every student to learn anything with confidence. With free flashcard sets and in-class games like Quizlet Live, you can create a more engaged classroom instantly.",
      image:
        "https://images.prismic.io/quizlet-web/ZpFqjB5LeNNTxHvk_teacher-image-LOH.png?auto=format,compress",
      reverse: false,
      bgColor: "#DBDFFF",
      height: "500px",
    },
  ];

  const flashcards = [
    {
      id: 1,
      title: "Lamda - Bird",
      terms: 5,
      author: "sophiabwl",
      avatar: "🦉",
    },
    {
      id: 2,
      title: "HAMLET - DEATH AND GRIEF QUOTES",
      terms: 12,
      author: "elliemaecooper",
      avatar: "👩‍🎓",
    },
    {
      id: 3,
      title: "M17.6 - Propeller Maintenance",
      terms: 14,
      author: "ashkatelea",
      avatar: "🛠️",
    },
    {
      id: 4,
      title: "Carding Mill Valley fieldwork",
      terms: 28,
      author: "DanielSimms1",
      avatar: "📍",
    },
    {
      id: 5,
      title: "Qu'est-ce que tu feras à l'avenir?",
      terms: 23,
      author: "hwaltersclassics",
      avatar: "📘",
    },
    {
      id: 6,
      title: "Taylor Latin to GCSE 2 -- Chapters 7-9",
      terms: 151,
      author: "bjcallaghan",
      avatar: "📖",
    },
    {
      id: 7,
      title: "Introduction to Algebra",
      terms: 20,
      author: "mathguru",
      avatar: "➗",
    },
    {
      id: 8,
      title: "Human Anatomy Basics",
      terms: 32,
      author: "medstudent",
      avatar: "🫀",
    },
    {
      id: 9,
      title: "French Vocabulary: Food",
      terms: 15,
      author: "francophile",
      avatar: "🥖",
    },
    {
      id: 10,
      title: "World War II Timeline",
      terms: 40,
      author: "historybuff",
      avatar: "🌍",
    },
    {
      id: 11,
      title: "Periodic Table Elements",
      terms: 118,
      author: "chemgeek",
      avatar: "⚗️",
    },
    {
      id: 12,
      title: "Shakespeare Sonnets",
      terms: 14,
      author: "poetrylover",
      avatar: "✒️",
    },
    {
      id: 13,
      title: "Basic Spanish Phrases",
      terms: 25,
      author: "spanishguru",
      avatar: "🇪🇸",
    },
    {
      id: 14,
      title: "Computer Science Fundamentals",
      terms: 30,
      author: "codemaster",
      avatar: "💻",
    },
    {
      id: 15,
      title: "Greek Mythology Gods",
      terms: 18,
      author: "mythfan",
      avatar: "⚡",
    },
    {
      id: 16,
      title: "Biology Cell Structures",
      terms: 22,
      author: "bioenthusiast",
      avatar: "🧬",
    },
    {
      id: 17,
      title: "Shakespeare Plays Overview",
      terms: 20,
      author: "dramaking",
      avatar: "🎭",
    },
    {
      id: 18,
      title: "Physics: Newton's Laws",
      terms: 12,
      author: "newtonfan",
      avatar: "🪐",
    },
    {
      id: 19,
      title: "US Presidents & Terms",
      terms: 46,
      author: "historynerd",
      avatar: "🇺🇸",
    },
    {
      id: 20,
      title: "Common Italian Verbs",
      terms: 27,
      author: "italophile",
      avatar: "🍝",
    },
    {
      id: 21,
      title: "Music Theory Basics",
      terms: 15,
      author: "musician",
      avatar: "🎵",
    },
    {
      id: 22,
      title: "Astronomy: Planets",
      terms: 8,
      author: "stargazer",
      avatar: "🪐",
    },
    {
      id: 23,
      title: "Environmental Science Terms",
      terms: 35,
      author: "ecofriendly",
      avatar: "🌱",
    },
    {
      id: 24,
      title: "English Grammar Rules",
      terms: 18,
      author: "grammarpro",
      avatar: "📚",
    },
    {
      id: 25,
      title: "Calculus Derivatives",
      terms: 22,
      author: "calcgeek",
      avatar: "∫",
    },
    {
      id: 26,
      title: "Ancient Rome Facts",
      terms: 30,
      author: "historyfanatic",
      avatar: "🏛️",
    },
    {
      id: 27,
      title: "Japanese Kanji Basics",
      terms: 20,
      author: "nihonlover",
      avatar: "🈶",
    },
    {
      id: 28,
      title: "Geography: Capitals",
      terms: 50,
      author: "mapmaster",
      avatar: "🗺️",
    },
    {
      id: 29,
      title: "Chemistry: Organic Compounds",
      terms: 25,
      author: "chemwhiz",
      avatar: "🧪",
    },
    {
      id: 30,
      title: "World Literature Highlights",
      terms: 40,
      author: "litlover",
      avatar: "📖",
    },
  ];

  const [currPage, setCurrPage] = useState(1);
  const cardPerPage = 6;
  const maxPages = Math.floor(flashcards.length / cardPerPage);
  const currFlashCard = flashcards.slice(
    currPage * cardPerPage - cardPerPage,
    currPage * cardPerPage,
  );

  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <main className="py-8">
      <h2 className="font-extrabold text-3xl md:text-5xl py-6 text-center">How do you want to study?</h2>
      <p className="active:bg-purple-400 rounded text-lg md:text-xl py-4 mx-4 text-center">
        Master whatever you are learning with Quizee interactive flashcards,
        practice tests and study activities.
      </p>
      <div className="p-6 md:p-8 space-y-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold">
          Explore Our Latest Blogs
        </h2>

        <p className="text-zinc-600 text-sm md:text-base max-w-2xl mx-auto">
          Discover insightful articles, coding tutorials, and in-depth guides
          designed to help you grow your development skills.
        </p>

        <button
          onClick={() => window.location.href = "/blogs"}
          className="px-5 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 active:scale-95 transition-all duration-200 shadow-sm">
          Read Blogs
        </button>
      </div>
      <div className="relative w-full px-4 sm:px-7 py-6">
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100 transition z-10"
        >
          <FontAwesomeIcon icon={faArrowLeft} className="text-xl" />
        </button>

        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100 transition z-10"
        >
          <FontAwesomeIcon icon={faArrowRight} className="text-xl" />
        </button>

        <div
          ref={carouselRef}
          className="flex space-x-4 sm:space-x-6 overflow-hidden scroll-smooth no-scrollbar"
        >
          {imageUrls.map((url, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[250px] sm:w-[300px] h-[350px] sm:h-[400px] rounded-xl overflow-hidden shadow-md hover:shadow-xl transform hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              <img
                src={url}
                alt={`Image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <section className="bg-blue-200 rounded-sm mx-auto p-4 sm:p-6 lg:p-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currFlashCard.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-xl shadow-md p-5 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between"
            >
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold mb-2">
                  {card.title}
                </h2>
                <span className="text-sm sm:text-base text-gray-500">
                  {card.terms} terms
                </span>
              </div>
              <div className="flex items-center mt-4">
                <span className="mr-3 text-2xl">{card.avatar}</span>
                <span className="text-sm sm:text-base text-gray-700">
                  {card.author}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center sm:justify-between mt-8 gap-4 sm:gap-0 w-full max-w-md mx-auto">
          <button
            onClick={() => setCurrPage((prev) => (prev > 1 ? prev - 1 : prev))}
            className="p-2 bg-white rounded-full shadow hover:bg-gray-100 transition"
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>

          <h3 className="font-bold font-mono text-lg sm:text-xl">
            {currPage} / {maxPages}
          </h3>

          <button
            onClick={() =>
              setCurrPage((prev) => (prev < maxPages ? prev + 1 : prev))
            }
            className="p-2 bg-white rounded-full shadow hover:bg-gray-100 transition"
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </section>

      {sections.map((section) => (
        <div
          key={section.id}
          className={`
      flex flex-col md:flex-row 
      items-center 
      p-6 md:p-9 
      ${section.reverse ? "md:flex-row-reverse" : ""}
      ${section.bgColor ? "" : ""}
    `}
          style={{ backgroundColor: section.bgColor, height: section.height }}
        >
          <div className="w-full md:w-1/2 px-0 md:px-6 text-center md:text-start">
            <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl">
              {section.title}
            </h1>
            <p className="text-base sm:text-lg md:text-lg py-4 sm:py-6">
              {section.description}
            </p>

            {section.ctaText && (
              <h2 className="text-lg font-semibold mt-2">{section.ctaText}</h2>
            )}

            {section.buttons &&
              section.buttons.map((btn, idx) =>
                btn.icon ? (
                  <div
                    key={idx}
                    className={`flex items-center justify-center md:justify-start space-x-2 bg-${btn.bgColor} text-${btn.textColor} rounded-lg px-4 py-2 mt-2 md:mt-4`}
                  >
                    <FontAwesomeIcon
                      icon={btn.icon === "faApple" ? faApple : faGooglePlay}
                      className="text-xl sm:text-2xl md:text-3xl"
                    />
                    <span className="text-left">
                      <p className="text-[10px] sm:text-xs">{btn.smallText}</p>
                      <h4 className="font-bold text-sm sm:text-base md:text-lg">
                        {btn.mainText}
                      </h4>
                    </span>
                  </div>
                ) : (
                  <a
                    key={idx}
                    className={`block font-bold mt-2 sm:mt-3 text-${btn.textColor || "black"}`}
                    href={btn.link}
                  >
                    {btn.text}
                  </a>
                ),
              )}
          </div>

          {section.image && (
            <div className="w-full md:w-1/2 mt-6 md:mt-0 flex justify-center">
              <img
                src={section.image}
                className="w-full max-w-sm md:max-w-md lg:max-w-lg object-contain"
              />
            </div>
          )}
        </div>
      ))}
    </main>
  );
}
