const Hero = () => {
  return (
    <>
      <section className="w-full min-h-screen flex-col justify-center items-center gap-2.5 inline-flex bg-hero bg-cover bg-right-10 md:bg-center">
        <div className="h-[324px] md:h-[442px] w-[328px] md:w-2/3 flex-col justify-start items-start gap-16 inline-flex">
          <div className="flex-col justify-start items-start gap-6 flex">
            <div className="text-neutral-800 text-2xl md:text-5xl font-bold font-['Noto Sans JP'] leading-9 md:leading-[72px] tracking-widest">
              テクノロジーを通じて、
              <br />
              夢や目標を実現できる
              <br />
              環境を提供します
            </div>
            <div className="text-zinc-800 text-base md:text-xl font-medium font-['Noto Sans JP'] leading-normal md:leading-[30px] tracking-wide">
              IT教育、システム開発から
              <br className="md:hidden" />
              企業を支援する
              <br />
              テクノロジーカンパニーです。
            </div>
          </div>
          <div className="w-60 md:w-80 h-14 md:h-[78px] px-8 md:px-12 py-4 md:py-6 bg-lime-300 rounded-full justify-center items-center inline-flex">
            <div className="grow shrink basis-0 text-center text-neutral-800 text-base md:text-xl font-bold font-['Noto Sans JP'] leading-normal md:leading-[30px] tracking-wide">
              事業内容を見る
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Hero;
