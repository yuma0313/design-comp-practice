import Image from "next/image";
import logo from "../../public/logo.png";

const Footer = () => {
  return (
    <>
      <footer className="w-full pt-20 pb-6 bg-neutral-800 flex-col justify-start items-center gap-2.5 inline-flex">
        <div className="h-[307px] flex-col justify-start items-center gap-10 flex">
          <div className="self-stretch justify-between items-start inline-flex">
            <div className="w-[425px] flex-col justify-start items-start gap-2 inline-flex">
              <Image src={logo} alt="logo" width={64} height={62} />
              <div className="text-white text-xl font-bold font-['Noto Sans JP'] leading-[30px] tracking-wide">
                株式会社var
              </div>
              <address className="not-italic text-zinc-100 text-sm font-medium font-['Noto Sans JP'] leading-[21px] tracking-wide">
                〒 891-0145
                <br />
                鹿児島県鹿児島市錦江台3-21-22
              </address>
              <div className="justify-start items-start gap-2 inline-flex">
                <a
                  href="https://twitter.com/RaretechO"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-500 text-sm font-medium font-['Inter'] underline leading-[21px] tracking-wide"
                >
                  Twitter
                </a>
                <a
                  href="https://zenn.dev/var"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-500 text-sm font-medium font-['Inter'] underline leading-[21px] tracking-wide"
                >
                  Zenn
                </a>
              </div>
            </div>
            <nav className="flex-col justify-start items-end gap-6 inline-flex">
              <div className="justify-center items-start gap-10 inline-flex">
                <div className="flex-col justify-center items-start gap-2 inline-flex">
                  <div className="text-zinc-100 text-base font-bold font-['Noto Sans JP'] leading-normal tracking-wide">
                    サービス
                  </div>
                  <a
                    href="#"
                    className="text-stone-500 text-sm font-bold font-['Inter'] leading-[21px] tracking-wide"
                  >
                    ITスクール RareTECH
                  </a>
                  <a
                    href="#"
                    className="text-stone-500 text-sm font-bold font-['Inter'] leading-[21px] tracking-wide"
                  >
                    インフラ学習サービス エンベーダー
                  </a>
                  <a
                    href="#"
                    className="text-stone-500 text-sm font-bold font-['Inter'] leading-[21px] tracking-wide"
                  >
                    システム・アプリケーション開発
                  </a>
                  <a
                    href="#"
                    className="text-stone-500 text-sm font-bold font-['Inter'] leading-[21px] tracking-wide"
                  >
                    Web制作
                  </a>
                </div>
                <div className="flex-col justify-center items-start gap-2 inline-flex">
                  <div className="text-zinc-100 text-base font-bold font-['Noto Sans JP'] leading-normal tracking-wide">
                    企業情報
                  </div>
                  <a
                    href="#"
                    className="text-stone-500 text-sm font-bold font-['Inter'] leading-[21px] tracking-wide"
                  >
                    ミッション
                  </a>
                  <a
                    href="#"
                    className="text-stone-500 text-sm font-bold font-['Inter'] leading-[21px] tracking-wide"
                  >
                    ビジョン
                  </a>
                  <a
                    href="#"
                    className="text-stone-500 text-sm font-bold font-['Inter'] leading-[21px] tracking-wide"
                  >
                    バリュー
                  </a>
                  <a
                    href="#"
                    className="text-stone-500 text-sm font-bold font-['Inter'] leading-[21px] tracking-wide"
                  >
                    役員一覧
                  </a>
                  <a
                    href="#"
                    className="text-stone-500 text-sm font-bold font-['Inter'] leading-[21px] tracking-wide"
                  >
                    会社概要
                  </a>
                </div>
                <div className="flex-col justify-center items-start gap-2 inline-flex">
                  <div className="text-zinc-100 text-base font-bold font-['Noto Sans JP'] leading-normal tracking-wide">
                    採用情報
                  </div>
                  <a
                    href="#"
                    className="text-stone-500 text-sm font-bold font-['Inter'] leading-[21px] tracking-wide"
                  >
                    代表メッセージ
                  </a>
                  <a
                    href="#"
                    className="text-stone-500 text-sm font-bold font-['Inter'] leading-[21px] tracking-wide"
                  >
                    募集要項
                  </a>
                </div>
                <div className="flex-col justify-center items-start gap-2 inline-flex">
                  <div className="text-zinc-100 text-base font-bold font-['Noto Sans JP'] leading-normal tracking-wide">
                    お知らせ
                  </div>
                  <a
                    href="#"
                    className="text-zinc-100 text-base font-bold font-['Noto Sans JP'] leading-normal tracking-wide"
                  >
                    サステナビリティ
                  </a>
                  <a
                    href="#"
                    className="text-zinc-100 text-base font-bold font-['Noto Sans JP'] leading-normal tracking-wide"
                  >
                    プライバシーポリシー
                  </a>
                </div>
              </div>
              <div className="justify-start items-start gap-2 inline-flex">
                <button className="w-60 px-8 py-4 bg-lime-300 rounded-full flex justify-center items-center">
                  <span className="grow shrink basis-0 text-center text-neutral-800 text-base font-bold font-['Noto Sans JP'] leading-normal tracking-wide">
                    お問い合わせ
                  </span>
                </button>
                <button className="w-60 px-8 py-4 bg-white rounded-full flex justify-center items-center">
                  <span className="grow shrink basis-0 text-center text-neutral-800 text-base font-bold font-['Noto Sans JP'] leading-normal tracking-wide">
                    資料ダウンロード
                  </span>
                </button>
              </div>
            </nav>
          </div>
          <div className="text-stone-500 text-xs font-bold font-['Inter'] leading-[18px] tracking-wide">
            ©︎ 2023 var Inc.
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
