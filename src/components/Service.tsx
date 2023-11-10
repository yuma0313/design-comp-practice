const Service = () => {
  return (
    <>
      <section className="w-full h-auto py-20 bg-neutral-800 flex-col justify-start items-center inline-flex">
        <div className="flex-col justify-start items-start gap-20 flex">
          <div className="self-stretch h-[172px] flex-col justify-start items-center gap-10 flex">
            <div className="flex-col justify-start items-center flex">
              <div className="text-white text-[40px] font-bold font-['Inter'] leading-[60px] tracking-wider">
                Service
              </div>
              <div className="text-lime-300 text-base font-bold font-['Noto Sans JP'] leading-normal tracking-wide">
                事業内容
              </div>
            </div>
            <div className="w-[328px] md:w-[640px] text-zinc-100 text-base font-medium font-['Noto Sans JP'] leading-normal tracking-wide">
              ITエンジニア教育事業・受託開発事業をはじめとし、テクノロジーを活用した各種サービスを
              <br />
              提供しております。
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-10 flex">
            <div className="justify-start items-start gap-4 inline-flex">
              <div className="w-2 self-stretch bg-lime-300" />
              <div className="flex-col justify-start items-start inline-flex">
                <div className="text-white text-[32px] font-bold font-['Inter'] leading-[48px] tracking-wider">
                  Education
                </div>
                <div className="text-white text-sm font-bold font-['Noto Sans JP'] leading-[21px] tracking-wide">
                  ITエンジニア教育事業
                </div>
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-16 flex">
              <div className="flex flex-col md:flex-row w-[328px] md:w-[960px] justify-start items-start gap-10 md:gap-16">
                <div className="bg-raretech w-[328px] md:w-[400px] h-[185px] md:h-[225px] rounded-2xl bg-cover bg-center" />
                <div className="flex flex-col grow shrink basis-0 justify-start items-start gap-10">
                  <div className="flex flex-col self-stretch h-[168px] justify-start items-start gap-6">
                    <div className="text-white text-2xl font-bold font-['Noto_Sans_JP'] leading-9 tracking-wide">
                      ITスクール
                      <br />
                      RareTECH
                    </div>
                    <div className="order-3 md:order-3 self-stretch text-zinc-100 text-base font-medium font-['Noto_Sans_JP'] leading-normal tracking-wide">
                      希少型エンジニアを育成するITスクールです。プログラミングに限らず、ネットワークやLinuxまで、徹底して基礎に拘るカリキュラムです。
                    </div>
                  </div>
                  <div className="w-60 px-8 py-4 bg-lime-300 rounded-full flex justify-center items-center">
                    <div className="text-center text-neutral-800 text-base font-bold font-['Noto_Sans_JP'] leading-normal tracking-wide">
                      詳しく見る
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row-reverse w-[328px] md:w-[960px] justify-start items-start gap-10 md:gap-16">
              <div className="bg-envader w-[328px] md:w-[400px] h-[185px] md:h-[225px] rounded-2xl bg-cover bg-center" />
              <div className="flex flex-col grow shrink basis-0 justify-start items-start gap-10">
                <div className="flex flex-col self-stretch h-[168px] justify-start items-start gap-6">
                  <div className="text-white text-2xl font-bold font-['Noto_Sans_JP'] leading-9 tracking-wide">
                    インフラ学習サービス
                    <br />
                    エンベーダー
                  </div>
                  <div className="self-stretch text-zinc-100 text-base font-medium font-['Noto_Sans_JP'] leading-normal tracking-wide">
                    日本初の環境構築型のインフラ学習サービスです。Linux、データベース、サイバーセキュリティ等の学習が可能です。
                  </div>
                </div>
                <div className="w-60 px-8 py-4 bg-lime-300 rounded-full flex justify-center items-center">
                  <div className="text-center text-neutral-800 text-base font-bold font-['Noto_Sans_JP'] leading-normal tracking-wide">
                    詳しく見る
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-10 flex">
            <div className="justify-start items-start gap-4 inline-flex">
              <div className="w-2 self-stretch bg-lime-300" />
              <div className="flex-col justify-start items-start inline-flex">
                <div className="text-white text-[32px] font-bold font-['Inter'] leading-[48px] tracking-wider">
                  Development
                </div>
                <div className="text-white text-sm font-bold font-['Noto Sans JP'] leading-[21px] tracking-wide">
                  受託開発事業
                </div>
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-16 flex">
              <div className="flex flex-col md:flex-row w-[328px] md:w-[960px] justify-start items-start gap-10 md:gap-16">
                <div className="bg-devImage1 w-[328px] md:w-[400px] h-[185px] md:h-[225px] rounded-2xl bg-cover bg-center" />
                <div className="flex flex-col grow shrink basis-0 justify-start items-start gap-10">
                  <div className="flex flex-col self-stretch h-[168px] justify-start items-start gap-6">
                    <div className="text-white text-2xl font-bold font-['Noto_Sans_JP'] leading-9 tracking-wide">
                      システム・アプリケーション開発
                    </div>
                    <div className="order-3 md:order-3 self-stretch text-zinc-100 text-base font-medium font-['Noto_Sans_JP'] leading-normal tracking-wide">
                      要件定義から実装、運用まで、フルスクラッチにてアプリケーションを開発します。クラウドネイティブ開発をメインとしております。
                    </div>
                  </div>
                  <div className="w-60 px-8 py-4 bg-lime-300 rounded-full flex justify-center items-center">
                    <div className="text-center text-neutral-800 text-base font-bold font-['Noto_Sans_JP'] leading-normal tracking-wide">
                      詳しく見る
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row-reverse w-[328px] md:w-[960px] justify-start items-start gap-10 md:gap-16">
              <div className="bg-devImage2 w-[328px] md:w-[400px] h-[185px] md:h-[225px] rounded-2xl bg-cover bg-center" />
              <div className="flex flex-col grow shrink basis-0 justify-start items-start gap-10">
                <div className="flex flex-col self-stretch h-[168px] justify-start items-start gap-6">
                  <div className="text-white text-2xl font-bold font-['Noto_Sans_JP'] leading-9 tracking-wide">
                    Web制作
                  </div>
                  <div className="self-stretch text-zinc-100 text-base font-medium font-['Noto_Sans_JP'] leading-normal tracking-wide">
                    会社HPやサービスLPなど幅広いジャンルのWebサイトを制作いたします。ノーコードを利用するため、素早い納品が可能です。
                  </div>
                </div>
                <div className="w-60 px-8 py-4 bg-lime-300 rounded-full flex justify-center items-center">
                  <div className="text-center text-neutral-800 text-base font-bold font-['Noto_Sans_JP'] leading-normal tracking-wide">
                    詳しく見る
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
