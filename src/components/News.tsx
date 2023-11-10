const News = () => {
  return (
    <>
      <section className="w-full h-auto py-20 bg-zinc-800 justify-center items-start gap-2.5 inline-flex">
        <div className="w-[328px] md:w-[1280px] flex-col justify-start items-center inline-flex">
          <div className="flex-col justify-start items-center flex">
            <div className="text-white text-[40px] font-bold font-['Inter'] leading-[60px] tracking-wider">
              News
            </div>
            <div className="text-lime-300 text-base font-bold font-['Noto Sans JP'] leading-normal tracking-wide">
              お知らせ
            </div>
          </div>
          <div className="py-16 md:py-20">
            <div className="flex-col md:flex-row justify-start items-center md:items-start gap-10 md:gap-6 pb-10 flex">
              <div className="flex-1 justify-start items-center md:items-start gap-6 inline-flex">
                <div className="flex-col justify-start items-start gap-2 md:gap-4 inline-flex">
                  <div className="w-[328px] md:w-[410.67px] h-[185px] md:h-[231px] flex-col justify-start items-end gap-4 flex bg-news1 bg-center bg-cover rounded-2xl">
                    <div className="px-[9px] mt-4 mr-4 py-1 bg-neutral-800 rounded-full justify-start items-start gap-2.5 inline-flex">
                      <div className="text-white text-sm font-medium font-['Noto Sans JP'] leading-[21px] tracking-wide">
                        その他
                      </div>
                    </div>
                  </div>
                  <div className="flex-col justify-start items-start gap-1 flex">
                    <div className="self-stretch text-white text-sm font-bold font-['Noto Sans JP'] leading-[21px] tracking-wide">
                      2023.08.17
                    </div>
                    <div className="text-white text-xl font-bold font-['Noto Sans JP'] leading-[30px] tracking-wide">
                      ホームページをリニューアルしました。
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 justify-start items-start gap-6 inline-flex">
                <div className="flex-col justify-start items-start gap-2 md:gap-4 inline-flex">
                  <div className="w-[328px] md:w-[410.67px] h-[185px] md:h-[231px] flex-col justify-start items-end gap-4 flex bg-news2 bg-center bg-cover rounded-2xl">
                    <div className="px-[9px] mt-4 mr-4 py-1 bg-indigo-500 rounded-full justify-start items-start gap-2.5 inline-flex">
                      <div className="text-white text-sm font-medium font-['Noto Sans JP'] leading-[21px] tracking-wide">
                        RareTECH
                      </div>
                    </div>
                  </div>
                  <div className="flex-col justify-start items-start gap-1 flex">
                    <div className="self-stretch text-white text-sm font-bold font-['Noto Sans JP'] leading-[21px] tracking-wide">
                      2023.03.01
                    </div>
                    <div className="self-stretch text-white text-xl font-bold font-['Noto Sans JP'] leading-[30px] tracking-wide">
                      ITスクールRareTECHより、SES・人材企業様向け研修プランをリリースしました。
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 justify-start items-start gap-6 inline-flex">
                <div className="flex-col justify-start items-start gap-2 md:gap-4 inline-flex">
                  <div className="w-[328px] md:w-[410.67px] h-[185px] md:h-[231px] flex-col justify-start items-end gap-4 flex bg-news3 bg-center bg-cover rounded-2xl">
                    <div className="px-[9px] mt-4 mr-4 py-1 bg-sky-400 rounded-full justify-start items-start gap-2.5 inline-flex">
                      <div className="text-white text-sm font-medium font-['Noto Sans JP'] leading-[21px] tracking-wide">
                        エンベーダー
                      </div>
                    </div>
                  </div>
                  <div className="flex-col justify-start items-start gap-1 flex">
                    <div className="text-white text-sm font-bold font-['Noto Sans JP'] leading-[21px] tracking-wide">
                      2022.10.05
                    </div>
                    <div className="text-white text-xl font-bold font-['Noto Sans JP'] leading-[30px] tracking-wide">
                      エンベーダーの利用人数が5000名を突破しました。
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-col md:flex-row justify-start items-center md:items-start gap-10 md:gap-6 flex">
              <div className="flex-1 justify-start items-center md:items-start gap-6 inline-flex">
                <div className="flex-col justify-start items-start gap-2 md:gap-4 inline-flex">
                  <div className="w-[328px] md:w-[410.67px] h-[185px] md:h-[231px] flex-col justify-start items-end gap-4 flex bg-news4 bg-center bg-cover rounded-2xl">
                    <div className="px-[9px] mt-4 mr-4 py-1 bg-orange-400 rounded-full justify-start items-start gap-2.5 inline-flex">
                      <div className="text-white text-sm font-medium font-['Noto Sans JP'] leading-[21px] tracking-wide">
                        システム・アプリケーション開発
                      </div>
                    </div>
                  </div>
                  <div className="flex-col justify-start items-start gap-1 flex">
                    <div className="self-stretch text-white text-sm font-bold font-['Noto Sans JP'] leading-[21px] tracking-wide">
                      2022.09.11
                    </div>
                    <div className="text-white text-xl font-bold font-['Noto Sans JP'] leading-[30px] tracking-wide">
                      システム・アプリケーション開発の受託開発事業を開始しました。
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 justify-start items-start gap-6 inline-flex">
                <div className="flex-col justify-start items-start gap-2 md:gap-4 inline-flex">
                  <div className="w-[328px] md:w-[410.67px] h-[185px] md:h-[231px] flex-col justify-start items-end gap-4 flex bg-news5 bg-center bg-cover rounded-2xl">
                    <div className="px-[9px] mt-4 mr-4 py-1 bg-purple-500 rounded-full justify-start items-start gap-2.5 inline-flex">
                      <div className="text-white text-sm font-medium font-['Noto Sans JP'] leading-[21px] tracking-wide">
                        Web制作
                      </div>
                    </div>
                  </div>
                  <div className="flex-col justify-start items-start gap-1 flex">
                    <div className="self-stretch text-white text-sm font-bold font-['Noto Sans JP'] leading-[21px] tracking-wide">
                      2023.05.16
                    </div>
                    <div className="self-stretch text-white text-xl font-bold font-['Noto Sans JP'] leading-[30px] tracking-wide">
                      Web制作の受託開発事業を開始しました。
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 justify-start items-start gap-6 inline-flex">
                <div className="flex-col justify-start items-start gap-2 md:gap-4 inline-flex">
                  <div className="w-[328px] md:w-[410.67px] h-[185px] md:h-[231px] flex-col justify-start items-end gap-4 flex bg-news6 bg-center bg-cover rounded-2xl">
                    <div className="px-[9px] mt-4 mr-4 py-1 bg-indigo-500 rounded-full justify-start items-start gap-2.5 inline-flex">
                      <div className="text-white text-sm font-medium font-['Noto Sans JP'] leading-[21px] tracking-wide">
                        RareTECH
                      </div>
                    </div>
                  </div>
                  <div className="flex-col justify-start items-start gap-1 flex">
                    <div className="text-white text-sm font-bold font-['Noto Sans JP'] leading-[21px] tracking-wide">
                      2022.01.30
                    </div>
                    <div className="text-white text-xl font-bold font-['Noto Sans JP'] leading-[30px] tracking-wide">
                      ITスクールRareTECHの受講生が300名を突破しました。
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-60 px-8 py-4 bg-lime-300 rounded-full justify-center items-center inline-flex">
            <div className="grow shrink basis-0 text-center text-neutral-800 text-base font-bold font-['Noto Sans JP'] leading-normal tracking-wide">
              一覧を見る
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default News;
