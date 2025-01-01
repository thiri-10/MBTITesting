import { Card } from "@mui/material";
// import { span } from "framer-motion/client";



export default function MbtiDetail({ type, description, strengths, weaknesses }: {
    type: string | null,
    description: string | null,
    strengths: string | null,
    weaknesses: string | null
}) {
    const wordArray = type?.split('');
    console.log('wordArray', wordArray);

    const strengthList = strengths?.split(',');
    const weaknessList = weaknesses?.split(',');
    return (

        <div>

<Card className="w-[300px] md:w-[400px] mb-10  bg-gray-200 mt-10  h-[300px] shadow-lg ">
            <div className="text-center">
                <span className="text-blue-300 text-2xl ">a</span>
                <span className="text-blue-600 text-2xl">s</span>
                &nbsp;&nbsp;
                <span className="text-blue-300 text-2xl">a</span>
                <span className="text-blue-600 text-2xl">n</span>
                &nbsp;&nbsp;
                <span className="text-blue-300 text-2xl">{wordArray ? wordArray[0] : ''}</span>
                <span className="text-blue-600 text-2xl">{wordArray ? wordArray[1] : ''}</span>
                <span className="text-blue-300 text-2xl">{wordArray ? wordArray[2] : ''}</span>
                <span className="text-blue-600 text-2xl">{wordArray ? wordArray[3] : ''}</span>
                <span className="text-blue-600 text-2xl">.</span>
                <span className="text-blue-600 text-2xl">.</span>
                <span className="text-blue-600 text-2xl">.</span>
            </div>

            <div className="flex justify-around mt-4 gap-4">
            <div className="mb-6">
                <h3 className="text-2xl border rounded-sm bg-blue-200 text-black font-semibold mb-2">I AM</h3>
                <ul className="list-disc list-inside space-y-1">
                    {strengthList && strengthList.map((strength, index) => (
                        <li key={index} className="text-sm">{strength}</li>
                    ))}

                </ul>
            </div>

            <div className="mb-6">
                <h3 className="text-2xl border rounded-sm bg-blue-200 text-black font-semibold mb-2">BUT ALSO</h3>
                <ul className="list-disc list-inside space-y-1">
                    {weaknessList && weaknessList.map((strength, index) => (
                        <li key={index} className="text-sm">{strength}</li>
                    ))}

                </ul>
            </div>

            </div>
            




        </Card>
        </div>
       

    )
}