const Cta = () => {
  return (
    <>
      <section className="w-full bg-contact bg-cover bg-top md:bg-center justify-center flex">
        <div className="w-full py-[120px] bg-black bg-opacity-50 justify-center flex">
          <div className="w-[328px] md:w-[1280px] flex-col gap-16 md:gap-20 flex">
            <h2 className="text-center text-white text-xl md:text-[40px] font-bold font-['Noto Sans JP'] leading-[30px] md:leading-[60px] tracking-wide">
              業界・規模問わず多くの企業様に
              <br className="md:hidden" />
              ご利用いただいております。
              <br />
              まずはお気軽にご相談ください。
            </h2>
            <div className="flex flex-col md:flex-row">
              <div className="grow shrink basis-0 px-6 py-10 md:px-16 md:py-10 bg-zinc-800 rounded-tl-2xl rounded-tr-2xl md:rounded-bl-2xl md:rounded-tr-none  flex-col gap-10 flex">
                <div className="relative flex-col gap-6 flex">
                  <div className="flex absolute right-0">
                    <p className="text-stone-500 text-4xl md:text-[40px] font-bold font-['Inter'] leading-10 tracking-wider">
                      CONTACT
                    </p>
                  </div>
                  <h3 className="text-white text-2xl font-bold font-['Noto Sans JP'] leading-9 tracking-wide z-10">
                    お問い合わせ
                  </h3>
                  <p className="text-zinc-100 text-base font-medium font-['Noto Sans JP'] leading-normal tracking-wide">
                    IT全般についてのご相談をお受けしております。
                    <br />
                    カウンセリング、見積もり作成ともに無料でご対応いたしますので、お気軽にご相談ください。
                  </p>
                </div>
                <a className="w-60 px-8 py-4 bg-lime-300 rounded-full flex justify-center items-center">
                  <span className="text-center text-neutral-800 text-base font-bold font-['Noto Sans JP'] leading-normal tracking-wide">
                    お問い合わせ
                  </span>
                </a>
              </div>
              <div className="grow shrink basis-0 px-6 py-10 md:px-16 md:py-10 bg-stone-500 md:bg-neutral-400 rounded-bl-2xl rounded-br-2xl md:rounded-tr-2xl md:rounded-bl-none flex-col gap-10 flex">
                <div className="relative flex-col gap-6 flex">
                  <div className="flex absolute right-0">
                    <p className="text-neutral-400 md:text-stone-300 text-4xl md:text-[40px] font-bold font-['Inter'] leading-10 tracking-wider">
                      DOCUMENT
                    </p>
                  </div>
                  <h3 className="text-white text-2xl font-bold font-['Noto Sans JP'] leading-9 tracking-wide z-10">
                    資料ダウンロード
                  </h3>
                  <p className="text-zinc-100 text-base font-medium font-['Noto Sans JP'] leading-normal tracking-wide">
                    会社案内、法人エンジニア研修に関するPDF資料をご用意しております。
                    <br />
                    一覧ページよりお受け取りください。
                  </p>
                </div>
                <a className="w-60 px-8 py-4 bg-white rounded-full flex justify-center items-center">
                  <span className="text-center text-neutral-800 text-base font-bold font-['Noto Sans JP'] leading-normal tracking-wide">
                    資料ダウンロード
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cta;
