import ShowMore from "../ui/ShowMore";
import { HiOutlineArrowRight } from "react-icons/hi";

export default function Work() {
  const work = [
    {
      name: "YatriGhar – Nepal Comfort",
      icon: "./assets/yatrighar.png",
      description: "Full-Stack Hotel Booking Platform.",
      repo: "https://github.com/bijaya-dev07/YatriGhar",
      visit: "https://yatrighar.vercel.app",
    },
    {
      name: "Meubel House",
      icon: "./assets/Meubelhouse.png",
      description: "Furniture E-Commerce Platform.",
      repo: "https://github.com/bijaya-dev07/MeubelHouse",
      visit: "https://meubel-house-iota.vercel.app",
    },
    {
      name: "Lama AI",
      icon: "./assets/lamaai.png",
      description: "AI-Powered Full-Stack Web Application.",
      repo: "http://github.com/bijaya-dev07/LamaAI",
      visit: "https://lama-ai-five.vercel.app/",
    },
    {
      name: "Vertex",
      icon: "./assets/ver.png",
      description: "Launch products. Get votes. Grow.",
      repo: "https://github.com/bijaya-dev07/Vertex",
      visit: "https://github.com/bijaya-dev07/Vertex",
    },
  ];
  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-medium text-gray-600">
        My portfolio
      </h4>
      <h2 className="text-center text-5xl font-bold text-[#21AEC0]">
        My latest work
      </h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 text-gray-700 leading-relaxed">
        Welcome to my web development portfolio! Explore a collection of
        projects showcasing my expertise in front-end development.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 my-10">
        {work.map((w) => (
          <div key={w.name} className="brutalist-card-container rounded-sm">
            <div className="brutalist-card rounded-sm">
              <div className="brutalist-card__header">
                <div className="brutalist-card__icon">
                  <div
                    style={{
                      width: 20,
                      height: 20,
                      backgroundColor: "#000",
                      display: "block",
                    }}
                  />
                </div>
                <div className="brutalist-card__alert">{w.name}</div>
              </div>
              <div
                className="brutalist-card__media"
                style={{ backgroundImage: `url(${w.icon})` }}
              ></div>

              <div className="brutalist-card__message">{w.description}</div>
              <div className="brutalist-card__actions">
                <a
                  className="brutalist-card__button brutalist-card__button--mark"
                  href={w.repo || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Details
                </a>
                <a
                  className="brutalist-card__button brutalist-card__button--read"
                  href={w.visit || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center my-20">
        <ShowMore icon={<HiOutlineArrowRight />}>See more</ShowMore>
      </div>

      <style>{`
            .brutalist-card {
                width: 100%;
                min-height: 300px;
                border: 2px solid #21AEC0;
                background-color: #fff;
                padding: 1rem;
                box-shadow: 10px 10px 0 #21AEC0;
                font-family: inherit;
            }

            .brutalist-card__header {
                display: flex;
                align-items: center;
                gap: 1rem;
                margin-bottom: 1rem;
                border-bottom: 2px solid #21AEC0;
                padding-bottom: 0.75rem;
            }

            .brutalist-card__icon {
                flex-shrink: 0;
                display: flex;
                align-items: center;
                justify-content: center;
               background-color: #000;
               padding: 0.35rem;
               border: 1px solid #000;
            }

            .brutalist-card__icon img { filter: brightness(10) invert(1); }

            .brutalist-card__media {
                width: 100%;
                height: 260px;
                background-size: cover;
                background-position: left center;
                background-repeat: no-repeat;
                border: 2px solid #21AEC0;
                margin: 0.5rem 0;
            }

            .brutalist-card__alert {
                font-weight: 900;
                color: #21AEC0;
                font-size: 1rem;
                text-transform: uppercase;
            }

            .brutalist-card__message {
                margin-top: 0.75rem;
                color: #1f2937;
                font-size: 0.95rem;
                line-height: 1.4;
                border-bottom: 2px solid #21AEC0/20;
                padding-bottom: 0.75rem;
                font-weight: 600;
            }

            .brutalist-card__actions {
                margin-top: 1rem;
                display: flex;
                gap: 2rem;
            }

            .brutalist-card__button {
                display: inline-flex;
                flex: 1 1 0;
                padding: 0.6rem;
                text-align: center;
                font-size: 0.95rem;
                font-weight: 700;
                text-transform: uppercase;
                border: 2px solid #000;
                border-radius: 4px;
                background-color: #fff;
                color: #000;
                position: relative;
                transition: all 0.2s ease;
                box-shadow: 5px 5px 0 #000;
                overflow: hidden;
                text-decoration: none;
                margin: 0;
                align-items: center;
                justify-content: center;
            }

            .brutalist-card__button--read { background-color: #000; color: #fff; }

            .brutalist-card__button::before {
                content: "";
                position: absolute;
                top: 0;
                left: -100%;
                width: 100%;
                height: 100%;
                background: linear-gradient(120deg, transparent, rgba(255,255,255,0.3), transparent);
                transition: all 0.6s;
            }

            .brutalist-card__button:hover::before { left: 100%; }

            .brutalist-card__button:hover { transform: translate(-2px, -2px); box-shadow: 7px 7px 0 #21AEC0; }

            .brutalist-card__button--mark:hover { background-color: #21AEC0; border-color: #21AEC0; color: #fff; box-shadow: 7px 7px 0 #21AEC0; }

            .brutalist-card__button--read:hover { background-color: #fff; border-color: #21AEC0; color: #21AEC0; box-shadow: 7px 7px 0 #21AEC0; }

            .brutalist-card__button:active { transform: translate(5px,5px); box-shadow: none; }

            @media (min-width: 640px) {
                .brutalist-card { padding: 1.25rem; }
            }

            /* Mobile-only tweaks (do not change desktop appearance) */
            @media (max-width: 639px) {
                .brutalist-card { padding: 0.75rem; min-height: auto; }
                .brutalist-card__media { height: 160px; background-position: left top; }
                .brutalist-card__header { gap: 0.5rem; padding-bottom: 0.5rem; }
                .brutalist-card__alert { font-size: 0.95rem; }
                .brutalist-card__message { font-size: 0.9rem; padding-bottom: 0.5rem; }
                .brutalist-card__actions { flex-direction: column; gap: 0.5rem; margin-top: 1rem; }
                .brutalist-card__button { width: 100%; }
                .brutalist-card__button + .brutalist-card__button { margin-top: 0.5rem; }
            }
            `}</style>
    </div>
  );
}
