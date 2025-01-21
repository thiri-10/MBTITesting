"use client";
import { useParams } from "next/navigation"
import { detail } from '../../utils/type';
 "postcss/lib/list";

export default function page(){

    const {mbtiType} = useParams();
    const [facts] = detail.filter(mbti=>mbti.mbtiType == mbtiType)
    console.log('facts',facts);

    const characteristic = facts.characteristic;
   

    return (
        <div className="absolute top-[15%] lg:top-[10%]">
            <div className="mx-4 md:mx-10 ">
                <h1 className="text-6xl text-purple-600">{facts.mbtiType} - <span className="text-lg ">{facts.name}</span></h1>
                <article className="leading-loose">
                    <p>{facts.overview}</p>
                    {characteristic && (
                        <>
                         <h3 className="font-bold text-purple-400">Characteristic</h3>
                         <ol className="ul number">{facts.characteristic?.split('.').map(character=><li>{character}</li>)}</ol>
                        </>
                    )}
                   

                    <h3 className="font-bold text-purple-600">Weakness</h3>
                    <p>{facts.weaknesses}</p>

                    <h3 className="font-bold text-purple-500">Strength</h3>
                    <p>{facts.strengths}</p>

                    <h3 className="font-bold text-purple-500">Career</h3>
                    <p>{facts.career}</p>

                    {
                        facts.relationship && <>
                         <h3 className="font-bold text-purple-500">Relationship</h3>
                         <ol>{facts.relationship?.split('.').map(relation=><li>{relation}</li>)}</ol>
                        </>
                    }
                   

                    {
                        facts.tip && <>
                        <h3 className="font-bold text-purple-500">Tips for you</h3>
                        <p>{facts.tip}</p>
                        </>
                    }
                    

                    {
                        facts.funfact && <>
                         <h3 className="font-bold text-purple-500">Fun Facts</h3>
                         <p>{facts.funfact}</p>
                        </>
                    }
                   
                </article>
            </div>

        </div>
    )
}