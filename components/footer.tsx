/* eslint-disable @next/next/no-img-element */
import Logo from "./logo";

const Footer = () => {
  return (
    <footer className="!px-20 laptop:px-0 relative py-10 footer-background border-t after:content-[''] after:absolute after:bg-black/80 after:top-0 after:left-0 after:w-full after:h-full after:z-0">
      <div className="flex flex-col tablet:flex-row gap-y-10 relative z-10 max-w-6xl mx-auto justify-between items-center">
        <div className="w-max flex flex-col items-center tablet:items-start gap-y-8">
          <Logo />
          <ul className="space-y-4">
            <li className="font-semibold text-lg flex items-center gap-x-2 cursor-pointer">
              <img src="/right-arrow.png" className="w-4" /> Terms
            </li>
            <li className="font-semibold text-lg flex items-center gap-x-2 cursor-pointer">
              <img src="/right-arrow.png" className="w-4" /> Privacy
            </li>
            <li className="font-semibold text-lg flex items-center gap-x-2 cursor-pointer">
              <img src="/right-arrow.png" className="w-4" /> Cookies
            </li>
          </ul>
        </div>
        <div className="space-y-4 w-[400px]">
          <h5 className="font-semibold text-primary-200 text-xl laptop:text-3xl text-center tablet:text-start">
            Community
          </h5>
          <p className="font-[200] text-md laptop:text-xl text-center tablet:text-start">
            For more information please follow our social medias below.
          </p>
          <div />
          <div className="flex w-full items-center gap-x-4 justify-evenly tablet:justify-start">
            {Array.from({ length: 5 }).map((_, index) => (
              <img
                key={index}
                className="w-8 tablet:w-12"
                src={`/social-${index + 1}.svg`}
                alt=""
              />
            ))}
          </div>
          <p className="text-sm tablet:text-base font-[200]">
            © Copyright 2024. PokerFace. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
