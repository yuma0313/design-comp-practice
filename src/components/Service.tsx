const Service = () => {
  return (
    <>
      <section
        id="service"
        className="w-full h-auto py-20 bg-neutral-800 flex-col items-center flex"
      >
        <div className="w-[328px] md:w-[960px] flex-col items-start gap-20 flex">
          <div className="w-full h-[172px] flex-col items-center gap-10 flex">
            <div className="flex-col items-center flex">
              <div className="text-white text-[40px] font-bold font-['Inter'] leading-[60px] tracking-wider">
                Service
              </div>
              <h2 className="text-lime-300 text-base font-bold font-['Noto Sans JP'] leading-normal tracking-wide">
                事業内容
              </h2>
            </div>
            <p className="w-[328px] md:w-[640px] text-zinc-100 text-base font-medium font-['Noto Sans JP'] leading-normal tracking-wide">
              ITエンジニア教育事業・受託開発事業をはじめとし、テクノロジーを活用した各種サービスを提供しております。
            </p>
          </div>
          <div className="flex-col items-start flex">
            <div className="items-start gap-4 flex">
              <div className="w-2 self-stretch bg-lime-300" />
              <div className="flex-col items-start flex">
                <div className="text-white text-[32px] font-bold font-['Inter'] leading-[48px] tracking-wider">
                  Education
                </div>
                <h3 className="text-white text-sm font-bold font-['Noto Sans JP'] leading-[21px] tracking-wide">
                  ITエンジニア教育事業
                </h3>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 pt-10">
              <div className="order-2 md:order-1 bg-raretech w-[328px] md:w-[400px] h-[185px] md:h-[225px] rounded-2xl bg-cover bg-center row-span-3" />
              <h4 className="order-1 md:order-2 pb-2 md:pb-6 text-white text-2xl font-bold font-['Noto_Sans_JP'] leading-9 tracking-wide">
                ITスクール
                <br />
                RareTECH
              </h4>
              <p className="order-3 pb-6 pt-2 md:pb-10 md:pt-0 text-zinc-100 text-base font-medium font-['Noto_Sans_JP'] leading-normal tracking-wide">
                希少型エンジニアを育成するITスクールです。プログラミングに限らず、ネットワークやLinuxまで、徹底して基礎に拘るカリキュラムです。
              </p>
              <a className="order-4 w-60 px-8 py-4 bg-lime-300 rounded-full flex justify-center items-center">
                <span className="text-center text-neutral-800 text-base font-bold font-['Noto_Sans_JP'] leading-normal tracking-wide">
                  詳しく見る
                </span>
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 pt-10 md:pt-16">
              <div className="order-2 bg-envader w-[328px] md:w-[400px] h-[185px] md:h-[225px] justify-self-end rounded-2xl bg-cover bg-center row-span-3" />
              <h4 className="order-1 pb-2 md:pb-6 text-white text-2xl font-bold font-['Noto_Sans_JP'] leading-9 tracking-wide">
                インフラ学習サービス
                <br />
                エンベーダー
              </h4>
              <p className="order-3 pb-6 pt-2 md:pb-10 md:pt-0 text-zinc-100 text-base font-medium font-['Noto_Sans_JP'] leading-normal tracking-wide">
                日本初の環境構築型のインフラ学習サービスです。Linux、データベース、サイバーセキュリティ等の学習が可能です。
              </p>
              <a className="order-4 w-60 px-8 py-4 bg-lime-300 rounded-full flex justify-center items-center">
                <span className="text-center text-neutral-800 text-base font-bold font-['Noto_Sans_JP'] leading-normal tracking-wide">
                  詳しく見る
                </span>
              </a>
            </div>
          </div>
          <div className="flex-col items-start flex">
            <div className="items-start gap-4 flex">
              <div className="w-2 self-stretch bg-lime-300" />
              <div className="flex-col items-start flex">
                <div className="text-white text-[32px] font-bold font-['Inter'] leading-[48px] tracking-wider">
                  Development
                </div>
                <h3 className="text-white text-sm font-bold font-['Noto Sans JP'] leading-[21px] tracking-wide">
                  受託開発事業
                </h3>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 pt-10">
              <div className="order-2 md:order-1 bg-devImage1 w-[328px] md:w-[400px] h-[185px] md:h-[225px] rounded-2xl bg-cover bg-center row-span-3" />
              <h4 className="order-1 md:order-2 pb-2 md:pb-6 text-white text-2xl font-bold font-['Noto_Sans_JP'] leading-9 tracking-wide">
                システム・アプリケーション開発
              </h4>
              <p className="order-3 pb-6 pt-2 md:pb-10 md:pt-0 text-zinc-100 text-base font-medium font-['Noto_Sans_JP'] leading-normal tracking-wide">
                要件定義から実装、運用まで、フルスクラッチにてアプリケーションを開発します。クラウドネイティブ開発をメインとしております。
              </p>
              <a className="order-4 w-60 px-8 py-4 bg-lime-300 rounded-full flex justify-center items-center">
                <span className="text-center text-neutral-800 text-base font-bold font-['Noto_Sans_JP'] leading-normal tracking-wide">
                  詳しく見る
                </span>
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 pt-10 md:pt-16">
              <div className="order-2 bg-devImage2 w-[328px] md:w-[400px] h-[185px] md:h-[225px] justify-self-end rounded-2xl bg-cover bg-center row-span-3" />
              <h4 className="order-1 pb-2 md:pb-6 text-white text-2xl font-bold font-['Noto_Sans_JP'] leading-9 tracking-wide">
                Web制作
              </h4>
              <p className="order-3 pb-6 pt-2 md:pb-10 md:pt-0 text-zinc-100 text-base font-medium font-['Noto_Sans_JP'] leading-normal tracking-wide">
                会社HPやサービスLPなど幅広いジャンルのWebサイトを制作いたします。ノーコードを利用するため、素早い納品が可能です。
              </p>
              <a className="order-4 w-60 px-8 py-4 bg-lime-300 rounded-full flex justify-center items-center">
                <span className="text-center text-neutral-800 text-base font-bold font-['Noto_Sans_JP'] leading-normal tracking-wide">
                  詳しく見る
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
