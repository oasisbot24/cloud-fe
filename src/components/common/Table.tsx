
interface TableData {
  row: string[];
  data: string[][];
}


export default function Table({ row , data}: TableData) {
  return (
      <table className="border-collapse rounded-[10px] overflow-hidden text-white  w-full h-20 text-center ">
        <thead className="bg-[#373B5C]  ">
          <tr>
            {
              row.map((item,index)=> <th key={item}>{item}</th>)
            }
          </tr>
        </thead>
        <tbody className="bg-white text-[#373B5C] font-semibold">
          {
            data?.map((item,index)=>
            <tr key={index}>
              {item?.map((contents,contentsIndex)=><td key={contentsIndex}>{contents}</td>)}
            </tr>)
          }
          
        </tbody>
      </table>

   

  );


}