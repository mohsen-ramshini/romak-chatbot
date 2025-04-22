import * as React from "react"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js"
import { Line } from "react-chartjs-2"
import { Separator } from "@/components/ui/separator"
import { Card } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"
import { ArrowDown, ArrowUp } from "lucide-react"
import { cn } from "@/lib/utils"

// ثبت ماژول‌ها برای chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

// داده‌های چندماده‌ای برای نمودار
const chartDataMap: Record<string, any> = {
  آهن: {
    label: "قیمت آهن (هزار تومان)",
    data: [150, 160, 155, 170, 165, 180],
    color: "rgb(75, 192, 192)"
  },
  قیر: {
    label: "قیمت قیر (هزار تومان)",
    data: [120, 125, 130, 128, 135, 140],
    color: "rgb(255, 99, 132)"
  },
  نفت: {
    label: "قیمت نفت (هزار تومان)",
    data: [80, 85, 90, 95, 100, 110],
    color: "rgb(54, 162, 235)"
  }
}

// نوع داده insight
export interface Insight {
  id: number
  title: string
  value: string
  description: string
  date: string
}

// داده‌های تستی insight
export const insights: Insight[] = Array.from({ length: 10 }, (_, i) => ({
  id: i,
  title: `شاخص شماره ${i + 1}`,
  value: `${(Math.random() * 100).toFixed(2)}٪`,
  description: `توضیحی درباره شاخص شماره ${i + 1}`,
  date: "1403/01/15"
}))

// کارت شیک شده
interface InsightCardProps {
  insight: Insight
}

const InsightCard = ({ insight }: InsightCardProps) => {
  const isPositive = parseFloat(insight.value) >= 50

  return (
    <Card className="p-4 sm:p-5 md:p-6 border border-muted shadow-md rounded-2xl hover:shadow-lg transition-shadow duration-300">
      <div className="flex flex-col gap-3 h-full">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0">
          <h3 className="text-base sm:text-lg font-semibold text-primary">{insight.title}</h3>
          <span
            className={cn(
              "text-sm sm:text-base font-medium flex items-center gap-1",
              isPositive ? "text-green-600" : "text-red-500"
            )}
          >
            {isPositive ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />}
            {insight.value}
          </span>
        </div>
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
          {insight.description}
        </p>
        <div className="text-xs sm:text-sm text-muted-foreground mt-auto text-right">
          {insight.date}
        </div>
      </div>
    </Card>
  )
}


// کامپوننت اصلی Insights
export function Insights() {
  const [selectedMaterial, setSelectedMaterial] = React.useState("آهن")

  const selectedData = chartDataMap[selectedMaterial]

  const chartData = {
    labels: ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور"],
    datasets: [
      {
        label: selectedData.label,
        data: selectedData.data,
        borderColor: selectedData.color,
        backgroundColor: selectedData.color.replace("rgb", "rgba").replace(")", ", 0.2)")
      }
    ]
  }

  return (
    <div className="p-6 ">
      <h1 className="text-2xl font-semibold mb-4">Insights</h1>
      <Separator />

      {/* فیلتر انتخابی ماده */}
      <div className="mb-4">
        <Select value={selectedMaterial} onValueChange={setSelectedMaterial}>
          <SelectTrigger className="w-full sm:w-[200px]">
            <SelectValue placeholder="انتخاب ماده" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="آهن">آهن</SelectItem>
            <SelectItem value="قیر">قیر</SelectItem>
            <SelectItem value="نفت">نفت</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* نمودار قیمت */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-4">{selectedData.label} در زمان</h2>
        <div className="w-full h-80 sm:h-[400px]">
          <Line data={chartData} options={{ responsive: true }} />
        </div>
      </div>

      {/* لیست کارت‌ها */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 max-h-[400px] pr-2 scrollbar-thin scrollbar-thumb-muted-foreground">
        {insights.map((insight) => (
          <InsightCard key={insight.id} insight={insight} />
        ))}
      </div>
    </div>
  )
}
