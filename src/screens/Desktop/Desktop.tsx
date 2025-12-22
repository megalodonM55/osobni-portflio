import {
  ArrowLeft,
  InstagramIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  YoutubeIcon,
} from "lucide-react";
import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

const navigationItems = [
  { label: "O mě", href: "#about" },
  { label: "Projekty", href: "#projects" },
  { label: "Kontakt", href: "#contact" },
];

const projectsData = [
  {
    title: "Unity projekt",
    description:
      "V rámci závěrečné práce v IT Step jsem vytvořil 2D hru Warrior Simulator. Jedná se o klasickou plošinovku, do které jsem implementoval pokročilejší vizuální prvky, jako je parallax efekt pozadí, dynamické 2D osvětlení a plynulé animace...",
    image: "/2dprojectbuild-screenshot-2025-12-06---20-50-02-39-1.png",
  },
  {
    title: "Youtube videa",
    description:
      "Tvorbě videí se věnuji jak ve volném čase, tak v rámci školních projektů. Moje práce zahrnuje kompletní proces od přípravy scénáře a konceptu přes samotné natáčení až po náročnou postprodukci. Právě v postprodukci se zaměřuji na precizní střih podle scénáře...",
    image: "/nahledovka-1.png",
  },
  {
    title: "Rozvrh pro meetingovku",
    description:
      "V rámci 3 denního školního projektu ve spolupráci s Fablab Brno a AT&T jsme měli za úkol vyřešit problém s bookováním meetingových místností. Měli jsme k dispozici E-ink display, arduino uno a jednoduchou elektroniku. Na tomto projektu jsme...",
    image: "/pxl-20251221-093513844-1.png",
  },
];

const contactInfo = [
  {
    icon: MailIcon,
    text: "Email: davidvojtila554@gmail.com",
    image: "/image-5.png",
  },
  {
    icon: PhoneIcon,
    text: "T číslo: 732 257 419",
    image: "/image-6.png",
  },
  {
    icon: MapPinIcon,
    text: "Bydliště: Holasice",
  },
  {
    icon: InstagramIcon,
    text: "Instagram",
    href: "https://www.instagram.com/vojtila_d/",
    image: "/image-7.png",
  },
  {
    icon: YoutubeIcon,
    text: "Youtube",
    href: "https://www.youtube.com/@davidvojtila9044",
    image: "/image-8.png",
  },
];

export const Desktop = (): JSX.Element => {
  const [isUnityModalOpen, setIsUnityModalOpen] = useState(false);
  const [isYoutubeModalOpen, setIsYoutubeModalOpen] = useState(false);

  return (
    <div className="relative w-full min-h-screen bg-[#c0d1d8] overflow-hidden">
      <header className="w-full h-[67px] bg-[#1d2e35] flex items-center justify-end px-8 gap-12">
        {navigationItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="[font-family:'Public_Sans',Helvetica] font-normal text-[#fffcf9] text-xl text-center tracking-[0] leading-[normal] hover:opacity-80 transition-opacity"
          >
            {item.label}
          </a>
        ))}
      </header>

      <section className="w-full min-h-[1025px] bg-[#8dabb9] flex items-center justify-center py-20">
        <Card className="w-[724px] bg-[#fffcf9] shadow-[2px_5px_4px_#00000040] border-0">
          <CardContent className="p-0">
            <div className="flex flex-col md:flex-row">
              <div className="flex-1 p-10">
                <h1 className="[font-family:'Public_Sans',Helvetica] font-bold text-black text-5xl tracking-[0] leading-[normal] mb-8">
                  David
                  <br />
                  Vojtila
                </h1>

                <div className="[font-family:'Public_Sans',Helvetica] text-black text-xl tracking-[0] leading-[normal] mb-12">
                  <span className="font-semibold">
                    Student &amp; Creative Tech Enthusiast
                    <br />
                  </span>
                  <span className="font-normal">
                    Od 3D modelování až po kódování a video produkci.
                  </span>
                </div>

                <Button className="bg-[#458fc4] hover:bg-[#3a7aaa] text-[#fffcf9] rounded-[20px] px-12 py-6 h-[47px] [font-family:'Public_Sans',Helvetica] font-semibold text-xl">
                  Kontakt
                </Button>
              </div>

              <div className="flex-shrink-0">
                <img
                  className="w-[345px] h-[458px] object-cover"
                  alt="David Vojtila"
                  src="/pxl-20251214-121016743--1--1.png"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section id="about" className="w-full py-20 px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col md:flex-row gap-8 mb-20">
            <div className="flex-1">
              <h2 className="[font-family:'Open_Sans',Helvetica] font-semibold text-black text-4xl tracking-[0] leading-[normal] mb-6">
                O mě
              </h2>
              <p className="[font-family:'Open_Sans',Helvetica] font-normal text-black text-xl tracking-[0] leading-[31px]">
                Student na Eko Gymnáziu v Brně. Baví mě moderní technologie a
                programování. Ve volném čase se věnuji 3D modelování a tisku,
                programování, stříhání videí a elektrotechnice. Rád se vzdělávám
                o nových technolgiích a dění ve světě.
              </p>
            </div>
            <div className="flex-shrink-0">
              <img
                className="w-[315px] h-[323px]"
                alt="About illustration"
                src="/image-9.png"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 mb-20">
            <div className="flex-shrink-0">
              <img
                className="w-[169px] h-[188px] object-cover"
                alt="School logo"
                src="/image-3.png"
              />
            </div>
            <div className="flex-1">
              <h2 className="[font-family:'Open_Sans',Helvetica] font-semibold text-black text-4xl text-center tracking-[0] leading-[normal] mb-6">
                Škola
              </h2>
              <p className="[font-family:'Open_Sans',Helvetica] font-normal text-black text-xl tracking-[0] leading-[31px]">
                Jsem ve druhém ročníku vyššího stupně na všeobecném Eko
                Gymnáziu. Na škole se snažím účastnit většiny projektů spojených
                s technologiemi. Naposledy jsme měli projekt ve spolupráci s
                Fablabem a firmou AT&amp;T. Momentálně jsem součástí Projektu My
                Machine který je v průběhu.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <h2 className="[font-family:'Open_Sans',Helvetica] font-semibold text-black text-4xl tracking-[0] leading-[normal] mb-6">
                Dovednosti
              </h2>
              <p className="[font-family:'Open_Sans',Helvetica] font-normal text-black text-xl tracking-[0] leading-[31px]">
                3D &amp; Design: Onshape, Figma, GIMP
                <br />
                Video &amp; Vývoj: DaVinci Resolve, Unity (základy)
                <br />
                Kód: Python, HTML &amp; CSS
                <br />
                Hardware: Pájení a práce s elektronikou
              </p>
            </div>
            <div className="flex-shrink-0">
              <img
                className="w-[272px] h-[316px]"
                alt="Programming illustration"
                src="/programing-1.png"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="w-full py-20 px-8">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="[font-family:'Open_Sans',Helvetica] font-bold text-black text-[40px] text-center tracking-[0] leading-[normal] mb-12">
            Projekty
          </h2>

          <div className="flex flex-col gap-6">
            {projectsData.map((project, index) => (
              <Card
                key={index}
                className="bg-[#fffcf9] shadow-[2px_5px_4px_#00000040] border-0"
              >
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <img
                        className="w-[273px] h-[158px] object-cover"
                        alt={project.title}
                        src={project.image}
                      />
                    </div>

                    <div className="flex-1">
                      <h3 className="[font-family:'Public_Sans',Helvetica] font-bold text-black text-[32px] tracking-[0] leading-[normal] mb-4">
                        {project.title}
                      </h3>
                      <p className="[font-family:'Public_Sans',Helvetica] font-normal text-black text-xl tracking-[0] leading-7">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex-shrink-0 flex items-center">
                      <Button
                        variant="outline"
                        className="rounded-[15px] border-black h-[47px] px-4 hover:bg-gray-100"
                        onClick={() => {
                          if (index === 0) {
                            setIsUnityModalOpen(true);
                          } else if (index === 1) {
                            setIsYoutubeModalOpen(true);
                          }
                        }}
                      >
                        <span className="[font-family:'Public_Sans',Helvetica] font-semibold text-black text-xl mr-2">
                          Více
                        </span>
                        <img
                          className="w-[22px] h-[22px] object-cover"
                          alt="Arrow"
                          src="/image-4-2.png"
                        />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="w-full py-20 px-8">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="[font-family:'Inter',Helvetica] font-normal text-black text-[40px] text-center tracking-[0] leading-[normal] mb-12">
            Kontakt
          </h2>

          <Card className="bg-[#fffcf9] border-0 max-w-[601px] mx-auto">
            <CardContent className="p-12">
              <div className="flex flex-col gap-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-4">
                    {info.image ? (
                      <img
                        className="w-[29px] h-[29px] object-cover flex-shrink-0"
                        alt="Icon"
                        src={info.image}
                      />
                    ) : (
                      <info.icon className="w-[29px] h-[29px] flex-shrink-0" />
                    )}
                    <p className="[font-family:'Inter',Helvetica] font-normal text-black text-2xl tracking-[0] leading-[normal]">
                      {info.href ? (
                        <a
                          href={info.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-black hover:underline"
                        >
                          {info.text}
                        </a>
                      ) : (
                        info.text
                      )}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="w-full h-12 bg-[#1d2e35] flex items-center justify-between px-8">
        <div className="[font-family:'Inter',Helvetica] font-normal text-[#fffcf9] text-xl tracking-[0] leading-[normal]">
          David Vojtila
        </div>
        <div className="[font-family:'Inter',Helvetica] font-normal text-[#fffcf9] text-xl tracking-[0] leading-[normal]">
          Všechna práva vyhrazena ©
        </div>
      </footer>

      {isUnityModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
          onClick={() => setIsUnityModalOpen(false)}
        >
          <div
            className="bg-[#fffcf9] max-w-6xl w-full max-h-[90vh] overflow-y-auto rounded-lg border-4 border-[#458fc4] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-12">
              <Button
                variant="outline"
                className="absolute bottom-8 right-8 rounded-[15px] border-black h-[47px] px-6 hover:bg-gray-100"
                onClick={() => setIsUnityModalOpen(false)}
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                <span className="[font-family:'Public_Sans',Helvetica] font-semibold text-black text-xl">
                  Zpět
                </span>
              </Button>

              <h1 className="[font-family:'Public_Sans',Helvetica] font-bold text-black text-5xl tracking-[0] leading-[normal] mb-8">
                Unity projekt
              </h1>

              <div className="flex flex-col md:flex-row gap-8 mb-8">
                <div className="flex-1">
                  <p className="[font-family:'Public_Sans',Helvetica] font-normal text-black text-xl tracking-[0] leading-[31px] mb-6">
                    V rámci závěrečné práce v IT Step jsem vytvořil 2D hru
                    Warrior Simulator. Jedná se o klasickou plošinovku, do které
                    jsem implementoval pokročilejší vizuální prvky, jako je
                    parallax efekt pozadí, dynamické 2D osvětlení a plynulé
                    animace postav. Cílem hráče je překonat nástrahy levelů,
                    vyhnout se pastem a bezpečně se dostat až na konec. Pro
                    vizuální stránku hry jsem využil assety z Unity Store.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <img
                    className="w-full md:w-[400px] h-auto object-cover rounded"
                    alt="Unity game screenshot"
                    src="/herojump.png"
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-8 mb-8">
                <div className="flex-shrink-0">
                  <img
                    className="w-full md:w-[400px] h-auto object-cover rounded"
                    alt="Unity game screenshot 2"
                    src="/heroattack.png"
                  />
                </div>
                <div className="flex-1">
                  <p className="[font-family:'Public_Sans',Helvetica] font-normal text-black text-xl tracking-[0] leading-[31px] mb-6">
                    Koncept plošinovky jsem zvolil kvůli jednoduchosti a
                    širokému zájmu. Při programování jsem využíval zkušeností z
                    předchozích hodin a tutoriálů na youtube.
                  </p>
                  <p className="[font-family:'Public_Sans',Helvetica] font-normal text-black text-xl tracking-[0] leading-[31px] mb-6">
                    Hra má své mouchy jako absence pause menu, nízký počet
                    levelů nebo chybějící PVE combat. Tvorbou jsem strávil pouze
                    3 dny, z toho důvodu si myslím že jednoduchost hrz je
                    odpovídající.
                  </p>
                  <div className="[font-family:'Public_Sans',Helvetica] font-normal text-black text-xl tracking-[0] leading-[31px]">
                    <p className="font-semibold mb-2">Link na stažení:</p>
                    <a
                      href="https://drive.google.com/drive/folders/1XgBCd4aw40VyeMgYBzCOxfs6Z6JPJyt0?usp=drive_link"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#458fc4] hover:underline break-all"
                    >
                      https://drive.google.com/drive/folders/1XgBCd4aw40VyeMgYBzCOxfs6Z6JPJyt0?usp=drive_link
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {isYoutubeModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
          onClick={() => setIsYoutubeModalOpen(false)}
        >
          <div
            className="bg-[#fffcf9] max-w-6xl w-full max-h-[90vh] overflow-y-auto rounded-lg border-4 border-[#458fc4] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-12">
              <Button
                variant="outline"
                className="absolute bottom-8 right-8 rounded-[15px] border-black h-[47px] px-6 hover:bg-gray-100"
                onClick={() => setIsYoutubeModalOpen(false)}
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                <span className="[font-family:'Public_Sans',Helvetica] font-semibold text-black text-xl">
                  Zpět
                </span>
              </Button>

              <h1 className="[font-family:'Public_Sans',Helvetica] font-bold text-black text-5xl tracking-[0] leading-[normal] mb-8">
                Youtube videa
              </h1>

              <div className="flex flex-col md:flex-row gap-8 mb-8">
                <div className="flex-1">
                  <p className="[font-family:'Public_Sans',Helvetica] font-normal text-black text-xl tracking-[0] leading-[31px] mb-6">
                    Tvorbě videí se věnuji jak ve volném čase, tak v rámci
                    školních projektů. Moje práce zahrnuje kompletní proces od
                    přípravy scénáře a konceptu přes samotné natáčení až po
                    náročnou postprodukci. Právě v postprodukci se zaměřuji na
                    precizní střih podle scénáře, barevné korekce a aplikaci
                    efektů.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <iframe
                    className="w-full md:w-[400px] h-auto aspect-video rounded"
                    src="https://www.youtube.com/embed/klfK3QELy_Y?si=w9xSBmrC66ZMpOwG"
                    title="YouTube video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-8 mb-8">
                <div className="flex-shrink-0">
                  <iframe
                    className="w-full md:w-[400px] h-auto aspect-video rounded"
                    src="https://www.youtube.com/embed/_Eo9BhgH9nc?si=xeFGAcpziQ7BeLU6"
                    title="YouTube video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="flex-1">
                  <p className="[font-family:'Public_Sans',Helvetica] font-normal text-black text-xl tracking-[0] leading-[31px] mb-6">
                    K tvorbě videí využívám DJI mini 3 pro a Google Pixel 9 pro.
                    Také je důležitý DaVinci resolve díky kterému jsem schopný
                    poskládat video a provést potřebné úpravy (VFX, SFX,
                    colorgrading).
                  </p>
                  <p className="[font-family:'Public_Sans',Helvetica] font-normal text-black text-xl tracking-[0] leading-[31px] mb-6">
                    Svou tvorbou se snažím brát seriózně, kvůli pravidlům
                    youtube a budoucí vzzužití některých videí.
                  </p>
                  <div className="[font-family:'Public_Sans',Helvetica] font-normal text-black text-xl tracking-[0] leading-[31px]">
                    <p className="font-semibold mb-2">Link na YT kanál:</p>
                    <a
                      href="https://www.youtube.com/channel/UCmm2Wv2SSAH8VI-GE8Myogg"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#458fc4] hover:underline break-all"
                    >
                      https://www.youtube.com/channel/UCmm2Wv2SSAH8VI-GE8Myogg
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
