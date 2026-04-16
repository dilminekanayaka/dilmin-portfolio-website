function Banner({
  title,
  image,
  subtitle,
  compact = false,
  className = "",
  hideContentOnMobile = false,
}) {
  const heightClass = compact ? "h-[90px] sm:h-[100px]" : "h-[120px] sm:h-[150px]";

  return (
    <section className={`relative overflow-hidden border border-[#dfe3ea] bg-black ${heightClass} ${className}`.trim()}>
      <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-85" />
      <div className="absolute inset-0 bg-black/42" />
      <div className={`relative flex h-full flex-col justify-center ${compact ? "px-4 sm:px-6" : "px-5 sm:px-8"}`}>
        <div className={hideContentOnMobile ? "hidden sm:block" : "block"}>
          <h1 className={`${compact ? "text-[23px] sm:text-[29px]" : "text-[22px] sm:text-[40px]"} font-medium tracking-[-0.03em] text-white`}>
            {title}
          </h1>
          {subtitle ? (
            <p className={`${compact ? "mt-[3px] text-[12px] sm:text-[14px]" : "mt-[5px] text-[13px] sm:text-[17px]"} text-white/80`}>
              {subtitle}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export default Banner;
