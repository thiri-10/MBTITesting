interface ResultCardProps {
    type: string | null;  // e.g., "INFJ"
    description: string | null;  // Description about the personality type
    strengths: string | null;  // Array of personality strengths
    weaknesses:string | null;  // Array of personality weaknesses
  }
  
  const ResultCard: React.FC<ResultCardProps> = ({ type, description, strengths, weaknesses }) => {


    return (
      <div className="max-w-lg  bg-pink-200 text-white rounded-lg shadow-lg p-8">
        <h2 className="text-4xl font-bold mb-4 text-center">{type}</h2>
        <p className="text-lg mb-6">{description}</p>
  
        {/* <div className="mb-6">
          <h3 className="text-2xl font-semibold mb-2">Strengths</h3>
          <ul className="list-disc list-inside space-y-1"> */}
            {/* {strengths.map((strength, index) => (
              <li key={index} className="text-sm">{strength}</li>
            ))} */}
            {/* {strengths}
          </ul>
        </div> */}
{/*   
        <div>
          <h3 className="text-2xl font-semibold mb-2">Weaknesses</h3>
          <ul className="list-disc list-inside space-y-1"> */}
            {/* {weaknesses.map((weakness, index) => (
              <li key={index} className="text-sm">{weakness}</li>
            ))} */}
            {/* {weaknesses}
          </ul>
        </div> */}
      </div>
    );
  };

  export default ResultCard;