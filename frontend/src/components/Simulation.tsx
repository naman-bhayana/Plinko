import { useEffect, useRef, useState } from "react"
import { BallManager } from "../game/classes/BallManager";
import { WIDTH } from "../game/constants";
import { pad } from "../game/padding";

export function Simulation() {
    const canvasRef = useRef<any>();
    let [outputs, setOutputs] = useState<{[key: number]: number[]}>(
        {
            0: [], 1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [],
            8: [], 9: [], 10: [], 11: [], 12: [], 13: [], 14: [], 15: [],
            16: [], 17: []
        }
    );
    const [showData, setShowData] = useState(false);
    const [isRunning, setIsRunning] = useState(true);

    async function simulate(ballManager: BallManager) {
        let i = 0;
        while (isRunning) {
            i++
            ballManager.addBall(pad(WIDTH / 2 + 20 * (Math.random() - 0.5)))
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
    }

    useEffect(() => {
        if (canvasRef.current && isRunning) {
            const ballManager = new BallManager(canvasRef.current as unknown as HTMLCanvasElement, (index: number, startX?: number) => {
                setOutputs((outputs: any) => {
                    return {
                        ...outputs,
                        [index]: [...outputs[index] as number[], startX]
                    }
                })
            })
            simulate(ballManager);

            return () => {
                ballManager.stop();
            }
        }

    }, [canvasRef, isRunning])

    const handleStopSimulation = () => {
        setIsRunning(false);
        setShowData(true);
    };

    return (
        <div className="flex flex-col lg:flex-row min-h-screen p-4 items-stretch">
            {/* Simulation Game FIRST (left on desktop) */}
            <div className="flex flex-col justify-center items-center lg:w-1/2 mb-6 lg:mb-0 h-full min-h-[70vh]">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Plinko Simulation</h2>
                <canvas 
                    ref={canvasRef}  
                    width="800" 
                    height="800"
                    className="w-full max-w-[350px] md:max-w-[500px] lg:max-w-[600px] xl:max-w-[700px] h-auto"
                    style={{ aspectRatio: '1/1' }}
                ></canvas>
                {!showData && (
                    <button 
                        className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg text-lg md:text-xl transition-colors mt-6"
                        onClick={handleStopSimulation}
                    >
                        Stop Simulation & Show Data
                    </button>
                )}
            </div>
            {/* Data Output SECOND (right on desktop) - Only show when simulation is stopped */}
            {showData && (
                <div className="flex flex-col justify-center items-center lg:w-1/2 mt-8 lg:mt-0 h-full min-h-[70vh]">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Simulation Data</h2>
                    <div className="bg-gray-800 p-4 rounded-lg w-full h-full max-h-[60vh] overflow-y-auto">
                        <pre className="text-xs md:text-sm text-gray-300">
                            {JSON.stringify(outputs, null, 2)}
                        </pre>
                    </div>
                </div>
            )}
        </div>
    )
}
