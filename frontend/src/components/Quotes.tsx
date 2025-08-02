import { useNavigate } from "react-router-dom";
import { Button } from "./ui/Button";

export const Quotes = () => {
  const navigate = useNavigate();
  return (
    <div className="flex mx-16 flex-col justify-center pb-10 ">
      <h1 className="text-6xl font-bold">Play Plinko, Earn More!</h1>
      <h3 className="mt-4 text-xl mb-4 text-gray-300">
        Drop a ball from the top of our triangular pin pyramid and watch it bounce 
        through the pegs to land on a multiplier! Inspired by the classic Japanese 
        Pachinko game, Plinko offers exciting gameplay with customizable risk levels 
        and multipliers. Test your luck and strategy in this engaging game!
      </h3>
      <Button className="hover:bg-green-600" onClick={() => navigate("/game")}>
        Play Plinko
      </Button>
    </div>
  );
};
