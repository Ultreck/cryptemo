import { TrendingUp } from 'lucide-react';
import { Label, LabelList, PolarRadiusAxis, RadialBar, RadialBarChart } from 'recharts';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import {
  // ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { useTheme } from 'next-themes';
const chartData = [
  { 
    month: 'january', 
    desktop: 1260, 
    mobile: 570, 
    ipad: 1000, 
    desktopPercentage: '44.5%', 
    mobilePercentage: '20.1%', 
    ipadPercentage: '35.3%' ,
    desktopLabel: "Desktop: 44.5%",
    mobileLabel: "Mobile: 20.1%",
    ipadLabel: "Ipad: 35.3%",
  },
];

const chartConfig = {
  desktop: {
    label: 'Desktop',
    color: 'hsl(var(--chart-1))',
  },
  mobile: {
    label: 'Mobile',
    color: 'hsl(var(--chart-2))',
  },
  ipad: {
    label: 'iPad',
    color: 'hsl(var(--chart-3))',
  },
};

const ChartRadian = () => {
  const { resolvedTheme: theme } = useTheme();
console.log(theme);

    const totalVisitors = chartData[0].desktop + chartData[0].mobile + chartData[0].ipad;
    console.log(totalVisitors);
  return (
    <Card className="flex flex-col border-0 shadow-none">
    <CardContent className={`flex flex-1 items-center pb-0 ${theme === "dark"? "bg-[#18181B]" : ""}`}>
      <ChartContainer config={chartConfig} className="mx-auto aspect-square bg-transparent w-full">
        <RadialBarChart data={chartData} endAngle={360} barGap={8} innerRadius={80} outerRadius={150} barSize={30}>
          <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
          <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}></PolarRadiusAxis>
          <RadialBar
            dataKey="desktop"
            stackId="a"
            cornerRadius={5}
            fill="var(--color-desktop)"
            className="stroke-transparent stroke-2"
          >
            <LabelList
              dataKey="desktopPercentage"
              position="outside"
              fill="var(--color-desktop)"
              fontSize={12}
              fontWeight="bold"
              offset={10}
            />
          </RadialBar>
          <RadialBar
            dataKey="mobile"
            fill="var(--color-mobile)"
            stackId="a"
            cornerRadius={5}
            className="stroke-transparent stroke-2"
          >
            <LabelList
              dataKey="mobilePercentage"
              position="outside"
              fill="var(--color-mobile)"
              fontSize={12}
              fontWeight="bold"
              offset={10}
            />
          </RadialBar>
          <RadialBar
            dataKey="ipad"
            fill="var(--color-ipad)"
            stackId="a"
            cornerRadius={5}
            className="stroke-transparent stroke-2"
          >
            <LabelList
              dataKey="ipadPercentage"
              position="outside"
              fill="var(--color-ipad)"
              fontSize={12}
              fontWeight="bold"
              offset={10}
            />
          </RadialBar>
           <LabelList dataKey="ipadPercentage" position="insideEnd" fill="#ffffff" fontSize={12} />
        </RadialBarChart>
      </ChartContainer>
    </CardContent>
  </Card>
  )
}

export default ChartRadian