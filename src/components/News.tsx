const News = () => {
  return (
    <>
      <section className="w-full h-auto py-20 bg-zinc-800 justify-center items-start gap-2.5 flex">
        <div className="w-[328px] md:w-[1280px] flex-col items-center flex">
          <div className="flex-col items-center flex">
            <div className="text-white text-[40px] font-bold font-['Inter'] leading-[60px] tracking-wider">
              News
            </div>
            <h2 className="text-lime-300 text-base font-bold font-['Noto Sans JP'] leading-normal tracking-wide">
              お知らせ
            </h2>
          </div>
          <div className="py-16 md:py-20">
            <div className="flex-col md:flex-row items-center md:items-start gap-10 md:gap-6 pb-10 flex">
              <article className="flex-1 items-center md:items-start gap-6">
                <div className="flex-col items-start gap-2 md:gap-4 flex">
                  <div className="w-[328px] md:w-[410.67px] h-[185px] md:h-[231px] flex-col items-end gap-4 flex bg-news1 bg-center bg-cover rounded-2xl">
                    <div className="px-[9px] mt-4 mr-4 py-1 bg-neutral-800 rounded-full items-start gap-2.5">
                      <h3 className="text-white text-sm font-medium font-['Noto Sans JP'] leading-[21px] tracking-wide">
                        その他
                      </h3>
                    </div>
                  </div>
                  <div className="flex-col items-start gap-1 flex">
                    <p className=" text-white text-sm font-bold font-['Noto Sans JP'] leading-[21px] tracking-wide">
                      2023.08.17
                    </p>
                    <p className="text-white text-xl font-bold font-['Noto Sans JP'] leading-[30px] tracking-wide">
                      ホームページをリニューアルしました。
                    </p>
                  </div>
                </div>
              </article>
              <article className="flex-1 items-start gap-6">
                <div className="flex-col items-start gap-2 md:gap-4 flex">
                  <div className="w-[328px] md:w-[410.67px] h-[185px] md:h-[231px] flex-col items-end gap-4 flex bg-news2 bg-center bg-cover rounded-2xl">
                    <div className="px-[9px] mt-4 mr-4 py-1 bg-indigo-500 rounded-full items-start gap-2.5 flex">
                      <h3 className="text-white text-sm font-medium font-['Noto Sans JP'] leading-[21px] tracking-wide">
                        RareTECH
                      </h3>
                    </div>
                  </div>
                  <div className="flex-col items-start gap-1 flex">
                    <p className=" text-white text-sm font-bold font-['Noto Sans JP'] leading-[21px] tracking-wide">
                      2023.03.01
                    </p>
                    <p className=" text-white text-xl font-bold font-['Noto Sans JP'] leading-[30px] tracking-wide">
                      ITスクールRareTECHより、SES・人材企業様向け研修プランをリリースしました。
                    </p>
                  </div>
                </div>
              </article>
              <article className="flex-1 items-start gap-6">
                <div className="flex-col items-start gap-2 md:gap-4 flex">
                  <div className="w-[328px] md:w-[410.67px] h-[185px] md:h-[231px] flex-col items-end gap-4 flex bg-news3 bg-center bg-cover rounded-2xl">
                    <div className="px-[9px] mt-4 mr-4 py-1 bg-sky-400 rounded-full items-start gap-2.5 flex">
                      <h3 className="text-white text-sm font-medium font-['Noto Sans JP'] leading-[21px] tracking-wide">
                        エンベーダー
                      </h3>
                    </div>
                  </div>
                  <div className="flex-col items-start gap-1 flex">
                    <p className="text-white text-sm font-bold font-['Noto Sans JP'] leading-[21px] tracking-wide">
                      2022.10.05
                    </p>
                    <p className="text-white text-xl font-bold font-['Noto Sans JP'] leading-[30px] tracking-wide">
                      エンベーダーの利用人数が5000名を突破しました。
                    </p>
                  </div>
                </div>
              </article>
            </div>
            <div className="flex-col md:flex-row items-center md:items-start gap-10 md:gap-6 flex">
              <article className="flex-1 items-center md:items-start gap-6 flex">
                <div className="flex-col items-start gap-2 md:gap-4 flex">
                  <div className="w-[328px] md:w-[410.67px] h-[185px] md:h-[231px] flex-col items-end gap-4 flex bg-news4 bg-center bg-cover rounded-2xl">
                    <div className="px-[9px] mt-4 mr-4 py-1 bg-orange-400 rounded-full items-start gap-2.5 flex">
                      <h3 className="text-white text-sm font-medium font-['Noto Sans JP'] leading-[21px] tracking-wide">
                        システム・アプリケーション開発
                      </h3>
                    </div>
                  </div>
                  <div className="flex-col items-start gap-1 flex">
                    <p className=" text-white text-sm font-bold font-['Noto Sans JP'] leading-[21px] tracking-wide">
                      2022.09.11
                    </p>
                    <p className="text-white text-xl font-bold font-['Noto Sans JP'] leading-[30px] tracking-wide">
                      システム・アプリケーション開発の受託開発事業を開始しました。
                    </p>
                  </div>
                </div>
              </article>
              <article className="flex-1 items-start gap-6">
                <div className="flex-col items-start gap-2 md:gap-4 flex">
                  <div className="w-[328px] md:w-[410.67px] h-[185px] md:h-[231px] flex-col items-end gap-4 flex bg-news5 bg-center bg-cover rounded-2xl">
                    <div className="px-[9px] mt-4 mr-4 py-1 bg-purple-500 rounded-full items-start gap-2.5 flex">
                      <h3 className="text-white text-sm font-medium font-['Noto Sans JP'] leading-[21px] tracking-wide">
                        Web制作
                      </h3>
                    </div>
                  </div>
                  <div className="flex-col items-start gap-1 flex">
                    <p className=" text-white text-sm font-bold font-['Noto Sans JP'] leading-[21px] tracking-wide">
                      2023.05.16
                    </p>
                    <p className=" text-white text-xl font-bold font-['Noto Sans JP'] leading-[30px] tracking-wide">
                      Web制作の受託開発事業を開始しました。
                    </p>
                  </div>
                </div>
              </article>
              <article className="flex-1 items-start gap-6">
                <div className="flex-col items-start gap-2 md:gap-4 flex">
                  <div className="w-[328px] md:w-[410.67px] h-[185px] md:h-[231px] flex-col items-end gap-4 flex bg-news6 bg-center bg-cover rounded-2xl">
                    <div className="px-[9px] mt-4 mr-4 py-1 bg-indigo-500 rounded-full items-start gap-2.5 flex">
                      <h3 className="text-white text-sm font-medium font-['Noto Sans JP'] leading-[21px] tracking-wide">
                        RareTECH
                      </h3>
                    </div>
                  </div>
                  <div className="flex-col items-start gap-1 flex">
                    <p className="text-white text-sm font-bold font-['Noto Sans JP'] leading-[21px] tracking-wide">
                      2022.01.30
                    </p>
                    <p className="text-white text-xl font-bold font-['Noto Sans JP'] leading-[30px] tracking-wide">
                      ITスクールRareTECHの受講生が300名を突破しました。
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
          <a className="w-60 px-8 py-4 bg-lime-300 rounded-full flex justify-center items-center">
            <span className="text-center text-neutral-800 text-base font-bold font-['Noto_Sans_JP'] leading-normal tracking-wide">
              一覧を見る
            </span>
          </a>
        </div>
      </section>
    </>
  );
};

export default News;
