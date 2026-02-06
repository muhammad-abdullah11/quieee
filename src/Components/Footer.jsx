import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
  faGithub,
  faYoutube,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  const countries = [
    "United States",
    "Canada",
    "Brazil",
    "Mexico",
    "Argentina",
    "United Kingdom",
    "Germany",
    "France",
    "Italy",
    "Spain",
    "Russia",
    "China",
    "Japan",
    "India",
    "South Korea",
    "Australia",
    "New Zealand",
    "South Africa",
    "Egypt",
    "Nigeria",
    "Kenya",
    "Saudi Arabia",
    "Turkey",
    "Iran",
    "Pakistan",
    "Indonesia",
    "Philippines",
    "Thailand",
    "Vietnam",
    "Malaysia",
    "Singapore",
    "Bangladesh",
    "Ukraine",
    "Poland",
    "Netherlands",
    "Sweden",
    "Norway",
    "Denmark",
    "Switzerland",
    "Belgium",
  ];

  const footerSections = [
    {
      title: "About us",
      type: "list",
      items: ["About Quiz", "Career", "Advertise with Us"],
    },
    {
      title: "For Students",
      type: "list",
      items: [
        "Flash Cards",
        "Test",
        "Learn",
        "Solution",
        "Modern Learning Lab",
        "Quizlet Plus",
        "Pomodoro Timer",
      ],
    },
    {
      title: "For Teachers",
      type: "list",
      items: ["Live", "Blog", "Quizlet Plus for Teachers"],
    },
    {
      title: "Resources",
      type: "list",
      items: [
        "Help Centre",
        "Sign Up",
        "Honour Code",
        "Community Guidelines",
        "Terms",
        "Privacy",
        "Ad and Cookie Policy",
        "Interest-Based Advertising",
        "Quizlet for Schools",
        "Parents",
      ],
    },
    {
      title: "Language",
      type: "select",
      options: [
        "English",
        "اردو",
        "العربية",
        "中文",
        "Español",
        "Français",
        "Deutsch",
        "Русский",
        "日本語",
      ],
    },
  ];
  const socialLinks = [
    {
      name: "Facebook",
      icon: faFacebookF,
      href: "#",
      hover: "hover:text-blue-600",
    },
    {
      name: "Twitter",
      icon: faTwitter,
      href: "#",
      hover: "hover:text-blue-400",
    },
    {
      name: "Instagram",
      icon: faInstagram,
      href: "#",
      hover: "hover:text-pink-500",
    },
    {
      name: "YouTube",
      icon: faYoutube,
      href: "#",
      hover: "hover:text-red-600",
    },
    {
      name: "LinkedIn",
      icon: faLinkedinIn,
      href: "#",
      hover: "hover:text-blue-700",
    },
    {
      name: "GitHub",
      icon: faGithub,
      href: "#",
      hover: "hover:text-gray-700",
    },
    {
      name: "TikTok",
      icon: faTiktok,
      href: "#",
      hover: "hover:text-black",
    },
  ];
  return (
    <footer className="">
      <section className="bg-zinc-200 py-4 px-8 gap-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {footerSections.map((section) => (
          <div key={section.title}>
            <h2 className="font-bold text-xl font-serif">{section.title}</h2>
            {section.type === "list" && (
              <ul className="space-y-1">
                {section.items.map((item) => (
                  <li key={item} className="cursor-pointer hover:underline">
                    {item}
                  </li>
                ))}
              </ul>
            )}

            {section.type === "select" && (
              <select className="mt-2 w-full rounded border px-2 py-1">
                {section.options.map((lang) => (
                  <option key={lang}>{lang}</option>
                ))}
              </select>
            )}
          </div>
        ))}
      </section>

      <div className="bg-zinc-200 p-4 border-t">
        <h2 className="font-bold text-3xl font-mono mb-2 ">Countries</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {countries.map((country, index) => (
            <h4
              key={index}
              className="px-4 py-1 text-sm bg-gradient-to-b from-zinc-300 to-zinc-500 hover:text-blue-600 hover:font-medium rounded-lg"
            >
              {country}
            </h4>
          ))}
        </div>

        <section className=" flex flex-col md:flex-row justify-between items-center mt-4 border-t py-3 gap-2 px-4">
          <h2>© 2026 Quizee, Inc.</h2>
          <div className="bg-gray-200 py-4 flex justify-center space-x-4">
            {socialLinks.map(({ name, icon, href, hover }) => (
              <a
                key={name}
                href={href}
                aria-label={name}
                className={`text-black text-xl transition ${hover}`}
              >
                <FontAwesomeIcon icon={icon} />
              </a>
            ))}
          </div>
        </section>
      </div>
    </footer>
  );
}
