import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faFacebook,
  faInstagram,
  faTiktok
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  const socials = [
    {
      icon: faEnvelope,
      url: "mailto: tyelectrique@gmail.com",
    },
    {
      icon: faFacebook,
      url: "https://www.facebook.com/tyelectrique/",
    },
    {
      icon: faLinkedin,
      url: "https://www.linkedin.com/in/manuel-julio-casanova-reyes-606585266/",
    },
    {
      icon: faInstagram,
      url: "https://www.instagram.com/tyelectrique/",
    },
    {
      icon: faTiktok,
      url: "https://stackoverflow.com/users/22500321/manuel-julio-casanova-reyes",
    },
  ];

  return (
    <footer className="flex justify-center items-center bottom-0 w-full h-28 bg-black bg-opacity-90">
      <nav className=" w-full h-full flex justify-evenly items-center">
        {socials.map((s, i) => (
          <a
            key={i}
            href={s.url}
            // className={` w-10 h-10 md:w-16 md:h-16 transition-transform duration-300 ease-in-out hover:transform hover:scale-105 text-yellow-300 ${
            //   i > 2 ? "hover:text-black" : "hover:text-gray-400"
            // }`}
            className={` w-10 h-10 md:w-16 md:h-16 transition-transform duration-300 ease-in-out hover:transform hover:scale-105 text-gray-300 hover:text-yellow-400`}
          >
            <FontAwesomeIcon
              icon={s.icon}
              style={{ width: "4em", height: "4em" }}
            />
          </a>
        ))}
      </nav>
    </footer>
  );
}
