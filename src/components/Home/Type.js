import React from "react";
import Typewriter from "typewriter-effect";
 
function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Desenvolvedor de Software",
          "Freelancer",
          "Engenheiro de Software",
          "Aberto para empresas",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}
 
export default Type;