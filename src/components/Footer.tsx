import Image from "next/image";
import logo from "../../public/logo.png";

const Footer = () => {
  return (
    <>
      <footer className="w-full pt-20 pb-6 bg-neutral-800 flex-col items-center gap-2.5 flex">
        <div className="w-[328px] md:w-[1280px] flex-col items-center flex">
          <div className="w-full pb-10 items-start flex-col flex md:flex-row">
            <div className="w-full md:w-[425px] pb-10 md:pb-0 flex-col items-start gap-2 flex">
              <address className="flex-col gap-2 flex">
                <Image src={logo} alt="logo" width={64} height={62} />
                <p className="not-italic text-white text-xl font-bold font-['Noto Sans JP'] leading-[30px] tracking-wide">
                  株式会社var
                </p>
                <p className="not-italic text-zinc-100 text-sm font-medium font-['Noto Sans JP'] leading-[21px] tracking-wide">
                  〒 891-0145
                  <br />
                  鹿児島県鹿児島市錦江台3-21-22
                </p>
              </address>
              <div className="gap-2 flex">
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
            <div className="w-full flex-col md:items-end gap-6 flex">
              <div className="items-start gap-4 md:gap-10 flex-col flex md:flex-row">
                <nav className="flex-col items-start gap-2 flex">
                  <h2 className="text-zinc-100 text-base font-bold font-['Noto Sans JP'] leading-normal tracking-wide">
                    サービス
                  </h2>
                  <ul className="space-y-2">
                    <li>
                      <a className="text-stone-500 text-sm font-bold font-['Inter'] leading-[21px] tracking-wide">
                        ITスクール RareTECH
                      </a>
                    </li>
                    <li>
                      <a className="text-stone-500 text-sm font-bold font-['Inter'] leading-[21px] tracking-wide">
                        インフラ学習サービス エンベーダー
                      </a>
                    </li>
                    <li>
                      <a className="text-stone-500 text-sm font-bold font-['Inter'] leading-[21px] tracking-wide">
                        システム・アプリケーション開発
                      </a>
                    </li>
                    <li>
                      <a className="text-stone-500 text-sm font-bold font-['Inter'] leading-[21px] tracking-wide">
                        Web制作
                      </a>
                    </li>
                  </ul>
                </nav>
                <nav className="flex-col items-start gap-2 flex">
                  <ul className="space-y-2">
                    <h2 className="text-zinc-100 text-base font-bold font-['Noto Sans JP'] leading-normal tracking-wide">
                      企業情報
                    </h2>
                    <li>
                      <a className="text-stone-500 text-sm font-bold font-['Inter'] leading-[21px] tracking-wide">
                        ミッション
                      </a>
                    </li>
                    <li>
                      <a className="text-stone-500 text-sm font-bold font-['Inter'] leading-[21px] tracking-wide">
                        ビジョン
                      </a>
                    </li>
                    <li>
                      <a className="text-stone-500 text-sm font-bold font-['Inter'] leading-[21px] tracking-wide">
                        バリュー
                      </a>
                    </li>
                    <li>
                      <a className="text-stone-500 text-sm font-bold font-['Inter'] leading-[21px] tracking-wide">
                        役員一覧
                      </a>
                    </li>
                    <li>
                      <a className="text-stone-500 text-sm font-bold font-['Inter'] leading-[21px] tracking-wide">
                        会社概要
                      </a>
                    </li>
                  </ul>
                </nav>
                <nav className="flex-col items-start gap-2 flex">
                  <h2 className="text-zinc-100 text-base font-bold font-['Noto Sans JP'] leading-normal tracking-wide">
                    採用情報
                  </h2>
                  <ul className="space-y-2">
                    <li>
                      <a className="text-stone-500 text-sm font-bold font-['Inter'] leading-[21px] tracking-wide">
                        代表メッセージ
                      </a>
                    </li>
                    <li>
                      <a className="text-stone-500 text-sm font-bold font-['Inter'] leading-[21px] tracking-wide">
                        募集要項
                      </a>
                    </li>
                  </ul>
                </nav>
                <nav className="flex-col items-start gap-2 flex">
                  <h2 className="text-zinc-100 text-base font-bold font-['Noto Sans JP'] leading-normal tracking-wide">
                    お知らせ
                  </h2>
                  <ul className="space-y-2">
                    <li>
                      <a className="text-zinc-100 text-base font-bold font-['Noto Sans JP'] leading-normal tracking-wide">
                        サステナビリティ
                      </a>
                    </li>
                    <li>
                      <a className="text-zinc-100 text-base font-bold font-['Noto Sans JP'] leading-normal tracking-wide">
                        プライバシーポリシー
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="w-full justify-end gap-2 flex-col flex md:flex-row">
                <a className="w-full md:w-60 px-8 py-4 bg-lime-300 rounded-full flex items-center">
                  <span className="grow shrink basis-0 text-center text-neutral-800 text-base font-bold font-['Noto Sans JP'] leading-normal tracking-wide">
                    お問い合わせ
                  </span>
                </a>
                <a className="w-full md:w-60 px-8 py-4 bg-white rounded-full flex items-center">
                  <span className="grow shrink basis-0 text-center text-neutral-800 text-base font-bold font-['Noto Sans JP'] leading-normal tracking-wide">
                    資料ダウンロード
                  </span>
                </a>
              </div>
            </div>
          </div>
          <p className="text-stone-500 text-xs font-bold font-['Inter'] leading-[18px] tracking-wide">
            <small>©︎ 2023 var Inc.</small>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
