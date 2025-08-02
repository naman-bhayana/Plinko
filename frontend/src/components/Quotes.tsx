import { useNavigate } from "react-router-dom";
import { Button } from "./ui/Button";

export const Quotes = () => {
  const navigate = useNavigate();
  return (
    <div className="flex mx-4 md:mx-8 lg:mx-16 flex-col justify-center pb-6 md:pb-10 px-4 md:px-0">
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center md:text-left">Play Plinko, Earn More!</h1>
      <h3 className="mt-4 text-base md:text-lg lg:text-xl mb-6 md:mb-4 text-gray-300 text-center md:text-left leading-relaxed">
        Drop a ball from the top of our triangular pin pyramid and watch it bounce 
        through the pegs to land on a multiplier! Inspired by the classic Japanese 
        Pachinko game, Plinko offers exciting gameplay with customizable risk levels 
        and multipliers. Test your luck and strategy in this engaging game!
      </h3>
      <Button className="hover:bg-green-600 w-full md:w-auto text-center" onClick={() => navigate("/game")}>
        Play Plinko
      </Button>
    </div>
  );
};
