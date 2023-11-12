const Hero = () => {
  return (
    <>
      <section className="w-full min-h-screen flex-col justify-center items-center gap-2.5 flex bg-hero bg-cover bg-right-10 md:bg-center">
        <div className="h-[324px] md:h-[442px] w-[328px] md:w-2/3 flex-col items-start gap-16 flex">
          <div className="flex-col items-start gap-6 flex">
            <h2 className="text-neutral-800 text-2xl md:text-5xl font-bold font-['Noto Sans JP'] leading-9 md:leading-[72px] tracking-widest">
              テクノロジーを通じて、
              <br />
              夢や目標を実現できる
              <br />
              環境を提供します
            </h2>
            <h3 className="text-zinc-800 text-base md:text-xl font-medium font-['Noto Sans JP'] leading-normal md:leading-[30px] tracking-wide">
              IT教育、システム開発から
              <br className="md:hidden" />
              企業を支援する
              <br />
              テクノロジーカンパニーです。
            </h3>
          </div>
          <a
            href="#service"
            className="w-60 md:w-80 px-8 md:px-12 py-4 md:py-6 bg-lime-300 rounded-full flex justify-center items-center"
          >
            <span className="text-center text-neutral-800 text-base md:text-xl font-bold font-['Noto Sans JP'] leading-normal md:leading-[30px] tracking-wide">
              事業内容を見る
            </span>
          </a>
        </div>
      </section>
    </>
  );
};
export default Hero;
