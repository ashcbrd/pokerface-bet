/* eslint-disable @next/next/no-img-element */
import { termsOfService } from "@/data/terms-of-service";
import Logo from "./logo";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { privacyPolicy } from "@/data/privacy";
import { cookiesPolicy } from "@/data/cookies";

const Footer = () => {
  return (
    <footer className="!px-20 laptop:px-0 relative py-10 footer-background border-t after:content-[''] after:absolute after:bg-black/80 after:top-0 after:left-0 after:w-full after:h-full after:z-0">
      <div className="flex flex-col tablet:flex-row gap-y-10 relative z-10 max-w-6xl mx-auto justify-between items-center">
        <div className="w-max flex flex-col items-center tablet:items-start gap-y-8">
          <Logo />
          <ul className="space-y-4">
            <li>
              <Dialog>
                <DialogTrigger className="font-semibold text-lg flex items-center gap-x-2 cursor-pointer">
                  <img src="/right-arrow.png" className="w-4" /> Terms
                </DialogTrigger>
                <DialogContent className="h-[90%] bg-white overflow-y-scroll">
                  <DialogHeader>
                    <DialogTitle className="text-black text-start font-bold text-2xl mb-10">
                      TERMS OF SERVICE
                    </DialogTitle>
                    <DialogDescription>
                      {termsOfService.map((item, index) => (
                        <div
                          key={index}
                          className="text-black text-start h-max"
                        >
                          <h4 className="font-semibold">
                            {index + 1}. {item.title}
                          </h4>
                          {item.content.length && (
                            <ul className="space-y-6 mt-4 mb-10">
                              {item.content.map((item, index) => (
                                <li key={index}>{item}</li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </li>
            <li>
              <Dialog>
                <DialogTrigger className="font-semibold text-lg flex items-center gap-x-2 cursor-pointer">
                  <img src="/right-arrow.png" className="w-4" /> Privacy
                </DialogTrigger>
                <DialogContent className="h-[90%] bg-white overflow-y-scroll">
                  <DialogHeader>
                    <DialogTitle className="text-black text-start font-bold text-2xl mb-10">
                      PRIVACY POLICY
                    </DialogTitle>
                    <DialogDescription>
                      {privacyPolicy.slice(0, 9).map((item, index) => (
                        <div
                          key={index}
                          className="text-black text-start h-max"
                        >
                          <h4 className="font-semibold">
                            {index + 1}. {item.title}
                          </h4>
                          {item.content.length && (
                            <ul className="space-y-6 mt-4 mb-10">
                              {item.content.map((item, index) => (
                                <li key={index}>{item}</li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                      <table className="my-10 text-black text-start">
                        <tr className="border border-black">
                          <td className="p-4 border-r border-black">
                            When you register for a Poker Face Account
                          </td>
                          <td className="p-4">
                            Contact Data Identity Data Financial Data
                            Photographs
                          </td>
                          <td className="p-4 border-l border-black">
                            We process this:
                            <br />
                            <br />
                            • to create and manage your account with us
                            <br />
                            • to communicate with you about your account
                            <br />
                            <br />
                            We rely on performance of a contract as the lawful
                            basis for collecting and using your personal
                            information.
                          </td>
                        </tr>
                        <tr className="border border-black">
                          <td className="p-4 border-r border-black">
                            When we communicate with you about the management of
                            your TG.Casino Account
                          </td>
                          <td className="p-4">
                            Contact Data Identity Data Financial Data
                            Transaction Data Technical Data Profile Data
                            Marketing & Communications Data
                          </td>
                          <td className="p-4 border-l border-black">
                            We process this:
                            <br />
                            <br />• to provide you with the best customised
                            service <br />
                            • to deal with queries and complaints
                            <br />
                            <br />
                            We rely on performance of a contract as the lawful
                            basis for collecting and using your personal
                            information to manage your account. We rely on our
                            legitimate interest of promoting our products and
                            services.
                          </td>
                        </tr>
                        <tr className="border border-black">
                          <td className="p-4 border-r border-black">
                            When developing our understanding of our customers
                            to improve our services and website.
                          </td>
                          <td className="p-4">
                            Contact Data Identity Data Transaction Data
                            Technical Data Profile Data Usage Data Marketing &
                            Communications Data
                          </td>
                          <td className="p-4 border-l border-black">
                            We process this:
                            <br />
                            <br />
                            • to understand the behaviors and demographics of
                            our customers
                            <br />
                            • to understand our customers needs and interests
                            <br />
                            <br />
                            We rely on our legitimate interest of improving our
                            business and services
                          </td>
                        </tr>
                        <tr className="border border-black">
                          <td className="p-4 border-r border-black">
                            When conducting marketing activity and determining
                            what products, services and offers may be relevant
                            to you
                          </td>
                          <td className="p-4">
                            Contact Data Identity Data Transaction Data
                            Technical Data Profile Data Usage Data Marketing &
                            Communications Data
                          </td>
                          <td className="p-4 border-l border-black">
                            We rely on our legitimate interests of marketing our
                            business, services and products To the extent that
                            we may have obtained your consent that is only
                            consent to receive electronic marketing
                            communications it does not change the legitimate
                            interests basis we are relying on to conduct our
                            marketing activity
                          </td>
                        </tr>
                        <tr className="border border-black">
                          <td className="p-4 border-r border-black">
                            Conducting our regulatory and compliance obligations
                          </td>
                          <td className="p-4">
                            Contact Data Identity Data Financial Data
                            Transaction Data Technical Data Profile Data Usage
                            Data
                          </td>
                          <td className="p-4 border-l border-black">
                            We rely on our obligation to comply with a legal
                            obligation to share information such as with
                            regulators, insurers, or government agencies. This
                            includes conducting anti-money laundering, KYC,
                            anti-fraud checks we may be required to conduct
                            under applicable laws
                          </td>
                        </tr>
                      </table>
                      {privacyPolicy.slice(9, 14).map((item, index) => (
                        <div
                          key={index}
                          className="text-black text-start h-max"
                        >
                          <h4 className="font-semibold">
                            {index + 10}. {item.title}
                          </h4>
                          {item.content.length && (
                            <ul className="space-y-6 mt-4 mb-10">
                              {item.content.map((item, index) => (
                                <li key={index}>{item}</li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </li>
            <li>
              <Dialog>
                <DialogTrigger className="font-semibold text-lg flex items-center gap-x-2 cursor-pointer">
                  <img src="/right-arrow.png" className="w-4" /> Cookies
                </DialogTrigger>
                <DialogContent className="h-[90%] bg-white overflow-y-scroll">
                  <DialogHeader>
                    <DialogTitle className="text-black text-start font-bold text-2xl mb-10">
                      COOKIES
                    </DialogTitle>
                    <DialogDescription>
                      {cookiesPolicy.map((item, index) => (
                        <div
                          key={index}
                          className="text-black text-start h-max"
                        >
                          <h4 className="font-semibold">
                            {index + 1}. {item.title}
                          </h4>
                          {item.content.length && (
                            <ul className="space-y-6 mt-4 mb-10">
                              {item.content.map((item, index) => (
                                <li key={index}>{item}</li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
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
                className={`${
                  index === 4 ? "w-12 tablet:w-16" : "w-8 tablet:w-12"
                }`}
                src={`/social-${index + 1}.${
                  index === 4 || index === 2 ? "png" : "svg"
                }`}
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
