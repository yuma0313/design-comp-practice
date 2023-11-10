import Image from "next/image";
import logo from "../../public/logo.png";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="w-full fixed top-0 left-0 flex justify-center">
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
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="heroicons-mini/bars-3-bottom-right">
                  <path
                    id="Rectangle 4920 (Stroke)"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4 9.5C4 8.67157 4.67157 8 5.5 8H34.5C35.3284 8 36 8.67157 36 9.5C36 10.3284 35.3284 11 34.5 11H5.5C4.67157 11 4 10.3284 4 9.5ZM18 30.5C18 29.6716 18.6716 29 19.5 29H34.5C35.3284 29 36 29.6716 36 30.5C36 31.3284 35.3284 32 34.5 32H19.5C18.6716 32 18 31.3284 18 30.5Z"
                    fill="#212121"
                  />
                  <path
                    id="Rectangle 4921 (Stroke)"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4 20C4 19.1716 4.67157 18.5 5.5 18.5H34.5C35.3284 18.5 36 19.1716 36 20C36 20.8284 35.3284 21.5 34.5 21.5H5.5C4.67157 21.5 4 20.8284 4 20Z"
                    fill="#212121"
                  />
                </g>
              </svg>
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
                    {/* クローズアイコン */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                    >
                      <path
                        d="M12.5607 10.4393C11.9749 9.85355 11.0251 9.85355 10.4393 10.4393C9.85355 11.0251 9.85355 11.9749 10.4393 12.5607L17.8787 20L10.4393 27.4393C9.85355 28.0251 9.85355 28.9749 10.4393 29.5607C11.0251 30.1464 11.9749 30.1464 12.5607 29.5607L20 22.1213L27.4393 29.5607C28.0251 30.1464 28.9749 30.1464 29.5607 29.5607C30.1464 28.9749 30.1464 28.0251 29.5607 27.4393L22.1213 20L29.5607 12.5607C30.1464 11.9749 30.1464 11.0251 29.5607 10.4393C28.9749 9.85355 28.0251 9.85355 27.4393 10.4393L20 17.8787L12.5607 10.4393Z"
                        fill="#FDFDFD"
                      />
                    </svg>
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
