'use client';

import { Tab, Tabs } from '@heroui/react';
import { RiArrowDownSFill } from 'react-icons/ri';
import { useState } from 'react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import useMarketHook from '@/hooks/useMarketHook';


export default function TimeFrameTabs({setTimeTab}) {
  const {
    visibleTimeFrames,
    hiddenTimeFrames,
    timeTab,
    isOpen,
    setIsOpen,
    handleTimeFrameChange,
  } = useMarketHook();

  return (
    <Tabs
      selectedKey={timeTab}
      onSelectionChange={setTimeTab}
      aria-label="time"
      radius="none"
      color="none"
      size="lg"
      variant="underlined"
    >
      {visibleTimeFrames.map((frame) => (
        <Tab key={frame} title={<span>{frame}</span>} />
      ))}
      <Tab
        title={
          <div>
            <DropdownMenu isOpen={isOpen} onOpenChange={setIsOpen}>
              <div className="text" onMouseOut={() => setIsOpen(false)} onMouseEnter={() => setIsOpen(true)}>
                <DropdownMenuTrigger>
                  <span className="text">
                    <RiArrowDownSFill className="text-gray-500" size={20} />
                  </span>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-80 p-3">
                  <DropdownMenuLabel>Select interval</DropdownMenuLabel>
                  <div className="grid grid-cols-3 gap-1 text-center">
                    {hiddenTimeFrames.map((frame) => (
                      <DropdownMenuItem
                        className="cursor-pointer border bg-gray-700 text-center"
                        onClick={() => handleTimeFrameChange(frame)}
                        key={frame}
                      >
                        <span className="flex h-full w-full items-center justify-center">{frame}</span>
                      </DropdownMenuItem>
                    ))}
                  </div>
                </DropdownMenuContent>
              </div>
            </DropdownMenu>
          </div>
        }
      />
    </Tabs>
  );
}
