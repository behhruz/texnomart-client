import React from "react";


const About = () => {
  return (
    <div className=" flex justify-evenly bg-[#a5a3a311] w-[94%] rounded-[20px] items-center mx-auto my-[150px] h-[500px] py-[100px] releative">
      <div>
        <img className="w-[500px] left-[280px]" src="https://texnomart.uz/_nuxt/img/phone-min.d3c6b0c.png" alt="" />
      </div>
      <div className="flex flex-col gap-[30px] w-[300px]">
        <h1 className="text-[34px] font-bold">Иловани юкланг</h1>
        <p className="text-[18px] font-bold">
          Ҳаридларни уйдан чиқмаган ҳолда мобил илова орқали амалга оширинг!
        </p>
        <div className="flex gap-[30px] w-[500px]">
          <img
            className="w-[100px]"
            src="https://texnomart.uz/_nuxt/img/app-qr-code-2x.6c90f4e.png"
            alt=""
          />
          <p className="text-[18px]">Камерани йўналтиринг ва  <p className="font-medium">Texnomart</p> иловасини бепул юкланг
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="bg-[white] w-[40%] h-[40px] text-center flex justify-center items-center rounded-md">
            <img
              className="w-[100px] h-[40px] rounded-[10px]"
              src="https://cdn.worldvectorlogo.com/logos/google-play-4.svg"
              alt=""
            />
          </div>

          <div className="bg-[white] w-[40%] h-[40px] text-center flex justify-center items-center rounded-md">
            <img
              className="w-[100px] h-[30px] rounded-[10px]"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPD-tHkzhBK9uTMkN_W0yxIybYau4BNV-QpA&s"
              alt=""
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;