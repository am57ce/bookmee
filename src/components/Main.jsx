import React from "react";
import img1 from "../images/img1.png";
import img2 from "../images/img2.png";
import img3 from "../images/img3.png";
import img4 from "../images/img4.png";
import img5 from "../images/img5.png";
import img6 from "../images/img6.png";

export const Main = () => {
  const vehicles = [
    {
      title: "Saloon Car",
      description:
        "Ford Mondeo, VW Passat or similar. These can accommodate up to 3 passengers plus 3 standard suitcases (23kg max), or 4 passengers plus hand luggage.",
      imageSrc: "../images/img1.png",
    },
    {
      title: "Executive Car",
      description:
        "E Class Mercedes or similar. These can accommodate up to 3 passengers plus 3 standard suitcases (23kg max), or 4 passengers plus hand luggage.",
      imageSrc: "../images/img2.png",
    },
    {
      title: "Estate Car",
      description:
        "Volvo Estate, VW Passat or similar. These can accommodate up to 4 passengers plus 4 standard suitcases (23kg max).",
      imageSrc: "../images/img3.png",
    },
    {
      title: "People Carrier",
      description:
        "VW Sharan, Ford Galaxy or similar. These can accommodate up to 5 passengers plus 5 standard suitcases (23kg max), or 6 passengers plus hand luggage.",
      imageSrc: "../images/img4.png",
    },
    {
      title: "Executive People Carrier",
      description:
        "Mercedes Viano or similar. These can accommodate up to 5 passengers plus 5 standard suitcases (23kg max), or 6 passengers plus hand luggage.",
      imageSrc: "../images/img5.png",
    },
    {
      title: "8 Seater Minibus",
      description:
        "VW Transporter or similar. These can accommodate 8 passengers plus up to 8 standard suitcases (23kg max).",
      imageSrc: "../images/img6.png",
    },
  ];

  return (
    <div className="bg-blue-900 text-white p-8">
      <div className="mb-6 w-[1043px] h-[416px] top-[2235] left-[118px]">
        <h2 className="text-xl font-bold mb-4 text-center leading-[48px]">
          TAXI TRANSFERS <span>TO AND FROM ALL UK AIRPORTS</span>
        </h2>
        <p className="mb-6 font-poppins font-light size-[18px] leading-[27px] text-justify">
          We specialize in taxi transfers to and from all UK airports for both
          individuals and groups, with an emphasis on a courteous and thoroughly
          professional personal service at affordable prices. 24 hours a day, 7
          days a week. To obtain an online quote or make your booking please
          select the 'Type of Journey' you require then enter your quote form
          details into our quick quote form above. If you don't have the post
          code please select the 'Type of Journey' then click on the Manual
          quote button and fill in as many details as possible we will get back
          to you as soon as possible.
        </p>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-3 text-center">SERVICES</h3>
        <p className="mb-6">
          A Meet and Greet service can be arranged when booking whereby the
          driver will be in arrivals with the passengers name board clearly
          visible on their phone or tablet screen.
        </p>
        <p className="mb-6">
          Computer Flight Monitoring is also part of our standard services if
          your flight is early or subject to delays we will track your flight's
          progress and send your driver at the new expected time of arrival.
        </p>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-3 text-center">
          POPULAR LOCATIONS
        </h3>
        <p className="mb-6">
          We cover the whole of the UK, including many popular locations such
          as:
          <br />
          Aberdeen, Belfast-City, Belfast-International, Birmingham, Blackpool,
          Bournemouth, Bristol, Cardiff, Coventry, East-Midlands, Edinburgh,
          Exeter, Gatwick, Glasgow, Heathrow, Humberside, Inverness,
          Leeds-Bradford, Liverpool, London-City, Luton, Manchester, Newcastle,
          Newquay, Norwich, Plymouth, Prestwick, Sheffield, Southampton,
          Southend, Stansted, Teesside, and Many more....
        </p>
      </div>
      <h2 className="text-2xl font-bold mb-6 text-center">
        OUR EXTENSIVE FLEET
      </h2>
      <p className="mb-6 ">
        We provide access to a large fleet of vehicle sizes and types.
        Regardless of your party size, luggage, or special requirements, we can
        usually provide the perfect vehicle.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-1 text-left gap-6  justify-center items-center w-[962px] h-[1359] top-[3479] left-[144px]">
        {vehicles.map((vehicle, index) => (
          <div
            key={index}
            className=" pr-4  p-4 rounded-lg  flex items-center w-[922px] h-[142px] top-[4457px] left-[164px]"
          >
            <div className="w-[232px] top-[4457] left-[164px] h-[142px]">
              <img src={img1} alt={vehicle.title} className="" />
            </div>
            <div className="h-[135px] top-[4461px] left-[440px] w-[646px]">
              <h3 className=" font-poppins text-[22px] font-bold leading-[33px] text-justify text-[#FEB601]">
                {vehicle.title}
              </h3>
              <p className="font-poppins text-[20px] font-light leading-[30px] text-justify mb-2 ">
                {vehicle.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
