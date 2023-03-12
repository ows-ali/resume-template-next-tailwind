import Image from "next/image";
import React from "react";

export const HomeHero = () => {
  return (
    <section>
      {/* left start here */}

      <div className="p-5">
        <h1>I am a Full Stack developer</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima,
          sapiente. Vero sit qui doloremque ex ratione consequatur cumque
          quidem, tempore autem quos totam veniam dicta quaerat nesciunt
          voluptatibus pariatur exercitationem, ipsam hic? Obcaecati cumque
          provident facilis aliquid rem ducimus, molestiae repudiandae
          reiciendis ullam harum dolores magni? Et unde ratione quam.
        </p>

        {/* <button className="bg-gradient-to-b to-cyan-500 from-blue-500  py-2 px-4 rounded-lg">
          Profile-u
        </button>
        <button className="bg-gradient-to-b from-cyan-500 to-blue-500  py-2 px-4 rounded-lg">
          Profile-b
        </button> */}
        <button className="bg-gradient-to-r from-cyan-500 to-blue-500  py-2 px-4 rounded-lg">
          Profile
        </button>
      </div>
      {/* left ends here */}
      {/* right */}
      <div>
        {/* <Image src={} alt="my image" /> */}
        {/* <img /> */}
      </div>
      {/* right ends */}
    </section>
  );
};
