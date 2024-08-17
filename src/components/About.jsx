import React from "react";

const About = () => {
  return (
    <div className="flex justify-evenly bg-[#a5a3a311] w-[] rounded-[20px] items-center m-[200px] h-[460px] py-[100px] releative">
      <div>
        <img className="w-[500px] left-[280px]" src="./src/assets/phone.png" alt="" />
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

        <div className="flex items-center">
          <img
            className="w-[100px] h-[40px] rounded-[10px]"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYgPFWztylOcZkI6ve9jidJayWW0IwbHCG7g&s"
            alt=""
          />

          <img
            className="w-[100px]"
            src="./src/assets/img.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;