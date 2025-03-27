import useMarketHook from '@/hooks/useMarketHook';
import PredictionButton from './PredictionButton';
import { useState } from 'react';
// import { useTernaryDarkMode } from 'usehooks-ts';

const betData = [
  {
    name: 'NGX ASI',
    quantity: '2',
    value1: 4.7,
    value2: 1.3,
    value3: 15.3,
    value4: 2.5,
    value5: 4.8,
    value6: 6.7,
    profit: 12,
  },
  {
    name: 'NASDAQ',
    quantity: '1',
    value1: 2.1,
    value2: 5.1,
    value3: 8.2,
    value4: 4.6,
    value5: 1.5,
    value6: 7.3,
    profit: 27,
  },
  {
    name: 'DAX',
    quantity: '4',
    value1: 3.5,
    value2: 1.2,
    value3: 10.3,
    value4: 2.7,
    value5: 3.6,
    value6: 1.7,
    profit: 82,
  },
  {
    name: 'NGX ASI',
    quantity: '3',
    value1: 1.3,
    value2: 5.3,
    value3: 5.8,
    value4: 3.5,
    value5: 1.9,
    value6: 8.6,
    profit: 65,
  },
  {
    name: 'NASDAQ',
    quantity: '5',
    value1: 2.5,
    value2: 7.1,
    value3: 8.3,
    value4: 1.7,
    value5: 5.2,
    value6: 3.2,
    profit: 51,
  },
];
const tableData = [
  {
    id: 1,
    exchange: 'NGX ASI',
    rank: 2,
    threeWay: { 1: 4.7, X: 1.3, 2: 15.3 },
    overUnder: { goals: 2.5, over: 4.8, under: 6.7 },
    score: '12+',
  },
  {
    id: 2,
    exchange: 'NASDAQ',
    rank: 1,
    threeWay: { 1: 2.1, X: 5.1, 2: 8.2 },
    overUnder: { goals: 4.6, over: 1.5, under: 7.3 },
    score: '27+',
  },
  {
    id: 3,
    exchange: 'DAX',
    rank: 4,
    threeWay: { 1: 3.5, X: 1.2, 2: 10.3 },
    overUnder: { goals: 2.7, over: 3.6, under: 1.7 },
    score: '82+',
  },
  {
    id: 4,
    exchange: 'NGX ASI',
    rank: 3,
    threeWay: { 1: 1.3, X: 5.3, 2: 5.8 },
    overUnder: { goals: 3.5, over: 1.9, under: 8.6 },
    score: '65+',
  },
  {
    id: 5,
    exchange: 'NASDAQ',
    rank: 5,
    threeWay: { 1: 2.5, X: 7.1, 2: 8.3 },
    overUnder: { goals: 1.7, over: 5.2, under: 3.2 },
    score: '51+',
  },
];
const ExchangeMarketPrediction = () => {
 // const { handleSelectedExchange } = useMarketHook();
 const [activeButtons, setActiveButtons] = useState([]);

//  with no store
 const handleClick = (rowId, section, key) => {
   const buttonId = {rowId, section, key};
   const isActive = activeButtons.some((btn) => btn.rowId === rowId && btn.section === section && btn.key === key);
   if(isActive){
     setActiveButtons((prev) => prev.filter((btn) => !(btn.rowId === rowId && btn.section === section && btn.key === key)));
   }else{
     setActiveButtons([...activeButtons, buttonId]);
   };
 };

 const isActive = (rowId, section, key) => {
   return activeButtons.some((btn) => btn.rowId === rowId && btn.section === section && btn.key === key);
 };

// with store
const { selectedOdds, addOdd, removeOdd } = useOddsStore();

const handleClick = (rowId, section, key) => {
  const newOdd = { rowId, section, key };

  if (selectedOdds.some((item) => JSON.stringify(item) === JSON.stringify(newOdd))) {
    removeOdd(newOdd); // Remove if already active
  } else {
    addOdd(newOdd); // Add if not active
  }
};

const isActive = (rowId, section, key) =>
  selectedOdds.some(
    (item) => item.rowId === rowId && item.section === section && item.key === key
  );

  return (
    // <div className={`mt-5 w-full border-2 rounded-lg px-5 py-5 dark:border-default-200`}>
    //   <div className="text">
    //     <div className="text">
    //       <div className="text-center grid grid-cols-12 gap-1">
    //         <div className="text col-span-2"></div>
    //         <div className="text col-span-1"></div>
    //         <div className="text col-span-4">3 Way</div>
    //         <div className="text col-span-4">Over/Under</div>
    //         <div className="text col-span-1"></div>
    //       </div>
    //       <div className="text-center mt-2 grid grid-cols-12 gap-1">
    //         <div className="text-start col-span-2">Exchange</div>
    //         <div className="text col-span-1"></div>
    //         <div className="dark:text-gray-400 grid bg-gray-200 dark:bg-gray-600 grid-cols-3 col-span-4">
    //           <div className="text">1</div>
    //           <div className="text">X</div>
    //           <div className="text">2</div>
    //         </div>
    //         <div className="dark:text-gray-400 grid bg-gray-200 dark:bg-gray-600 grid-cols-3 col-span-4">
    //           <div className="text">Goals</div>
    //           <div className="text">Over</div>
    //           <div className="text">Under</div>
    //         </div>
    //         <div className="text col-span-1"></div>
    //       </div>
    //       <div className="text mt-3">
    //         {tableData.map((row, index) => (
    //           <div key={index} className="text-center grid grid-cols-12">
    //             <div className="text-start col-span-2 my-1">{row?.exchange}</div>
    //             <div className="text col-span-1 my-1">{row?.rank}</div>
    //             {Object.entries(row.threeWay).map(([key, value]) => (
    //                 <div key={key} className="text-gray-400 grid grid-cols-3 col-span-4 px-[1px]">
    //                 <PredictionButton onClick={() =>handleSelectedExchange(value)} text={value} className={'rounded-tl-lg rounded-bl-lg my-1'} />
    //                 <PredictionButton onClick={() =>handleSelectedExchange(value)} text={value} className={'my-1'} />
    //                 <PredictionButton onClick={() =>handleSelectedExchange(value)} text={value} className={'rounded-tr-lg my-1 rounded-br-lg'} />
    //               </div>
    //             ))}
    //             {Object.entries(row.overUnder).map(([key, value]) => (
    //               <div key={key} className="text-gray-400 grid grid-cols-3 col-span-4 px-[1px]">
    //                 <PredictionButton
    //                   onClick={() => handleSelectedExchange(value)}
    //                   text={value}
    //                   className={'rounded-tl-lg my-1 rounded-bl-lg'}
    //                 />
    //                 <PredictionButton onClick={() => handleSelectedExchange(value)} text={value} className={'my-1'} />
    //                 <PredictionButton
    //                   onClick={() => handleSelectedExchange(value)}
    //                   text={value}
    //                   className={'rounded-tr-lg my-1 rounded-br-lg'}
    //                 />
    //               </div>
    //             ))}
    //             <div className="text col-span-1">{row.score}+</div>
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="p-4 bg-gray-900 text-white">
      <table className="w-full">
        <thead>
          <tr>
            <th className="p-2">Exchange</th>
            <th className="p-2"></th>
            <th className="p-2">1</th>
            <th className="p-2">X</th>
            <th className="p-2">2</th>
            <th className="p-2">Goals</th>
            <th className="p-2">Over</th>
            <th className="p-2">Under</th>
            <th className="p-2"></th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row) => (
            <tr  key={row.id}>
              <td className="p-2">{row.exchange}</td>
              <td className="p-2">{row.rank}</td>
              {Object.entries(row.threeWay).map(([key, value]) => (
                <td key={key} className="">
                  <PredictionButton
                    onClick={() => handleClick(row.id, "threeWay", key)}
                    className={` ${key === '1'? "rounded-tl-lg my-1 rounded-bl-lg" : key === 'X'? "rounded-tr-lg my-1 rounded-br-lg" : ""} ${
                      isActive(row.id, "threeWay", key)
                        ? "bg-green-300 text-black"
                        : "text-white"
                    }`}
                    text={value}
                  />
                </td>
              ))}
              {Object.entries(row.overUnder).map(([key, value]) => (
                <td key={key} className="m-0">
                  <PredictionButton
                    onClick={() => handleClick(row.id, "overUnder", key)}
                    className={` ${key === 'goals'? "rounded-tl-lg my-1 rounded-bl-lg" : key === 'under'? "rounded-tr-lg my-1 rounded-br-lg" : ""} ${
                      isActive(row.id, "overUnder", key)
                        ? "bg-green-300 text-black"
                        : "text-white"
                    }`}
                    text={value}
                  />
                </td>
              ))}
              <td className="p-2">{row.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExchangeMarketPrediction;
