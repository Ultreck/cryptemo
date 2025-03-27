// 'use client';

import { Button } from '@/components/ui/button';
import ChartRadian from './ChartRadian';
import { useTheme } from 'next-themes';

const PredictionHomeCards = () => {
  const {resolvedTheme: theme} = useTheme();
  return (
    <div className="text">
      <div className={`grid border-2 p-5 grid-cols-2`}>
        <div className="mt-10">
          <div className="text">Will Accessbank surpass N20b rev in 2025 Q2 alone</div>
          <div className="text mt-10">
            <div className="text space-y-5">
              <div className="flex justify-between items-center w-full">
                <p className="text">Above N20b</p>
                <div className="text space-x-0.5">
                  <Button className={`w-24 rounded-bl-lg rounded-br-none rounded-tl-lg rounded-tr-none border-1 border-sky-500 bg-transparent ${theme === 'dark'? 'text-white' : 'text-black'} hover:bg-sky-500`}>
                    Yes
                  </Button>
                  <Button className={`w-24 rounded-bl-none rounded-br-lg rounded-tl-none rounded-tr-lg border-1 border-red-500 bg-transparent ${theme === 'dark'? 'text-white' : 'text-black'} hover:bg-red-500`}>
                    No
                  </Button>
                </div>
              </div>
              <div className="flex justify-between items-center w-full">
                <p className="text">Above N35b</p>
                <div className="text space-x-0.5">
                  <Button className={`w-24 rounded-bl-lg rounded-br-none rounded-tl-lg rounded-tr-none border-1 border-sky-500 bg-transparent ${theme === 'dark'? 'text-white' : 'text-black'} hover:bg-sky-500`}>
                    Yes
                  </Button>
                  <Button className={`w-24 rounded-bl-none rounded-br-lg rounded-tl-none rounded-tr-lg border-1 border-red-500 bg-transparent ${theme === 'dark'? 'text-white' : 'text-black'} hover:bg-red-500`}>
                    No
                  </Button>
                </div>
              </div>
              <div className="flex justify-between items-center w-full">
                <p className="text">Above N50b</p>
                <div className="text space-x-0.5">
                  <Button className={`w-24 rounded-bl-lg rounded-br-none rounded-tl-lg rounded-tr-none border-1 border-sky-500 bg-transparent ${theme === 'dark'? 'text-white' : 'text-black'} hover:bg-sky-500`}>
                    Yes
                  </Button>
                  <Button className={`w-24 rounded-bl-none rounded-br-lg rounded-tl-none rounded-tr-lg border-1 border-red-500 bg-transparent ${theme === 'dark'? 'text-white' : 'text-black'} hover:bg-red-500`}>
                    No
                  </Button>
                </div>
              </div>
            </div>
            <div className="text space-y-2"></div>
          </div>
        </div>
        <ChartRadian />
      </div>
    </div>
  );
};

export default PredictionHomeCards;
