export default function Home() {
  return (
    <div className="bg-[#252B42] w-[1440px] h-[1232px] relative">
      <div className="w-[1322px] h-[91px] relative flex ml-10 ">
        <div className="w-[187px] h-[58px] absolute top-[17px] left-[136px] ">
          <h3 className="w-[152px] h-[32px] text-white text-[24px]">
            BrandName
          </h3>
        </div>
        <div className="w-[815px] h-[58px] absolute top-[16px] left-[364px] ">
          <div className="w-[275px] h-[24px] space-x-[21px] absolute top-[17px] text-white font-montserrat text-[14px] font-bold gap-[21px]">
            <span>Home</span>
            <span>Product</span>
            <span>Pricing</span>
            <span>Contact</span>
          </div>
          <div className="text-white absolute top-[3px] left-[626px] w-[189px] h-[52px] gap-[45px] ">
            <button className="w-[41px] h-[22px] text-[14px] pr-4">
              Login
            </button>
            <button className="bg-[#23A6F0] w-[110px] h-[52px] rounded-[5px] text-[14px] pt-[15px] pb-[15px] pr-[25px] pl-[25px] gap-[15px]">
              JOIN US
            </button>
          </div>
        </div>
      </div>

      <div className="w-[1046px] h-[1028px] absolute top-[104px] left-[197px] pt-[80px] pb-[80px] gap-[80px] ">
        <div className="grid place-items-center text-center w-[699px] h-[496px] pt-[40px] pb-[40px] m-40 mt-5 gap-[40px] ">
          <div className="w-[77px] h-[24px] text-[#23A6F0] ">
            <h5 className="text-[16px] ">Welcome</h5>
          </div>
          <div className="w-[542px] h-[160px] ">
            <h1 className="text-white text-[58px] ">
              Selling On the Internet like a Pro{" "}
            </h1>
          </div>
          <div className="w-[536px] h-[60px]">
            <h4 className="text-[20px] text-white">
              We know how large objects will act, but things on a small scale
              just do not act that way.
            </h4>
          </div>

          <div className="w-[365px] h-[52px] gap-[10px] flex justify-between ">
            <button
              className="text-[14px] w-[193px] h-[52px] rounded-[5px] pt-[15px] pb-[15px] pr-[40px] pl-[40px] 
             bg-[#23A6F0] text-white"
            >
              Get Quote Now
            </button>
            <button
              className="w-[162px] h-[52px] rounded-[5px] border-[1px] pt-[15px] pb-[15px] pr-[40px] 
            pl-[40px] text-[#23A6F0] text-[14px] "
            >
              Learn More
            </button>
          </div>
        </div>
        <div className="w-[1046px] h-[292px] gap-[30px] flex">
          <div className="w-[328px] h-[292px] bg-white pt-[35px] pb-[35px] pr-[40px] pl-[40px] gap-[20px]">
            <div className="bg-[#FFDCD1] w-[70px] h-[76px] pt-[22px] pb-[22px] pr-[19px] pl-[19px] gap-[10px] rounded-[10px]"></div>
            <div className="w-[135px] h-[24px] text-[16px] text-[#252B42] pt-[10px] font-bold">
              <h3>training Courses</h3>
            </div>
            <div className="text-[#E74040] pt-4"> _________ </div>
            <div className="w-[222px] h-[60px] text-[14px] text-[#737373] pt-5">
              <p>
                The gradual accumulation of information about atomic and
                small-scale behaviour...
              </p>
            </div>
          </div>

          <div>
            <div className="w-[328px] h-[292px] bg-white pt-[35px] pb-[35px] pr-[40px] pl-[40px] gap-[20px]">
              <div className="bg-[#B9EAAB] w-[70px] h-[76px] pt-[22px] pb-[22px] pr-[19px] pl-[19px] gap-[10px] rounded-[10px]"></div>
              <div className="w-[168px] h-[24px] text-[16px] text-[#252B42] pt-[10px] font-bold">
                <h3>2,769 online courses</h3>
              </div>
              <div className="text-[#E74040] pt-4"> _________ </div>
              <div className="w-[222px] h-[60px] text-[14px] text-[#737373] pt-5">
                <p>
                  The gradual accumulation of information about atomic and
                  small-scale behaviour...
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="w-[328px] h-[292px] bg-[#23A6F0] pt-[35px] pb-[35px] pr-[40px] pl-[40px] gap-[20px] text-white">
              <div className="bg-[#FFDCD1] w-[70px] h-[76px] pt-[22px] pb-[22px] pr-[19px] pl-[19px] gap-[10px] rounded-[10px]"></div>
              <div className="w-[135px] h-[24px] text-[16px] text-[#252B42] pt-[10px] font-bold">
                <h3>training Courses</h3>
              </div>
              <div className="pt-4"> _________ </div>
              <div className="w-[222px] h-[60px] text-[14px] pt-5">
                <p>
                  The gradual accumulation of information about atomic and
                  small-scale behaviour...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
