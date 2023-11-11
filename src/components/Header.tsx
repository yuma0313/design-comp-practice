import Image from "next/image";
import logo from "../../public/logo.png";
import { useState } from "react";
import { Bars3BottomRightIcon } from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/24/solid";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="w-full fixed top-0 left-0 flex justify-center z-20">
        <div className="w-[328px] md:w-[1280px] h-16 md:h-20 mx-5 my-4 md:mt-8 px-4 py-3 md:px-10 flex justify-between items-center bg-white rounded-2xl relative ">
          <div className="w-12 h-12 flex justify-center items-center">
            <Image src={logo} alt="logo" width={48} height={46.5} />
          </div>
          <div className="hidden md:flex items-center justify-center">
            <nav className="flex items-center gap-6">
              <div className="text-neutral-800 text-base font-bold font-['Noto Sans JP'] leading-normal tracking-wide">
                サービス
              </div>
              <div className="text-neutral-800 text-base font-bold font-['Noto Sans JP'] leading-normal tracking-wide">
                企業情報
              </div>
              <div className="text-neutral-800 text-base font-bold font-['Noto Sans JP'] leading-normal tracking-wide">
                採用情報
              </div>
              <div className="text-neutral-800 text-base font-bold font-['Noto Sans JP'] leading-normal tracking-wide">
                お知らせ
              </div>
            </nav>
            <div className="w-auto items-center justify-center gap-4 flex ml-10">
              <div className="h-[45px] px-6 py-3 bg-lime-300 rounded-full justify-center items-center flex">
                <div className="grow shrink basis-0 text-center text-neutral-800 text-sm font-bold font-['Noto Sans JP'] leading-[21px] tracking-wide">
                  お問い合わせ
                </div>
              </div>
              <div className="h-[45px] px-6 py-3 bg-white rounded-full border border-neutral-800 justify-center items-center flex">
                <div className="grow shrink basis-0 text-center text-neutral-800 text-sm font-bold font-['Noto Sans JP'] leading-[21px] tracking-wide">
                  資料ダウンロード
                </div>
              </div>
            </div>
          </div>
          <div className="md:hidden flex items-center justify-center">
            <button onClick={toggleMenu}>
              <Bars3BottomRightIcon className="w-10 h-10" />
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <>
          <div className="fixed inset-0 z-40 flex-grow">
            <div className="fixed inset-0" onClick={() => setIsMenuOpen(false)}>
              <div className="absolute inset-0 bg-gray-600 opacity-75"></div>
            </div>
            <div className="relative flex-1 flex flex-col w-full h-full bg-neutral-800">
              <div className="flex-1 h-0 overflow-y-auto px-8 py-6">
                <div className="flex items-center justify-between">
                  <Image src={logo} alt="logo" width={48} height={46.5} />
                  <button onClick={() => setIsMenuOpen(false)}>
                    <XMarkIcon className="w-10 h-10 text-white" />
                  </button>
                </div>
                <nav className="mt-10 flex-col justify-center items-start gap-6 flex">
                  <ul className="space-y-6">
                    <li>
                      <a
                        href="#"
                        className="text-white text-base font-bold font-['Noto Sans JP'] leading-normal tracking-wide"
                      >
                        サービス
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-white text-base font-bold font-['Noto Sans JP'] leading-normal tracking-wide"
                      >
                        企業情報
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-white text-base font-bold font-['Noto Sans JP'] leading-normal tracking-wide"
                      >
                        採用情報
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-white text-base font-bold font-['Noto Sans JP'] leading-normal tracking-wide"
                      >
                        お知らせ
                      </a>
                    </li>
                  </ul>
                  <div className="w-full mt-10 flex-col justify-center items-start gap-2 flex">
                    <div className="w-full px-6 py-3 bg-lime-300 rounded-full justify-center items-center inline-flex">
                      <div className="grow shrink basis-0 text-center text-neutral-800 text-sm font-bold font-['Noto Sans JP'] leading-[21px] tracking-wide">
                        お問い合わせ
                      </div>
                    </div>
                    <div className="w-full px-6 py-3 bg-white rounded-full border border-neutral-800 justify-center items-center inline-flex">
                      <div className="grow shrink basis-0 text-center text-neutral-800 text-sm font-bold font-['Noto Sans JP'] leading-[21px] tracking-wide">
                        資料ダウンロード
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Header;
