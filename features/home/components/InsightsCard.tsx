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

// ثبت ماژول‌ها برای chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

// داده تستی برای نمودار
export const ironPriceData = {
  labels: ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور"],
  datasets: [
    {
      label: "قیمت آهن (هزار تومان)",
      data: [150, 160, 155, 170, 165, 180],
      borderColor: "rgb(75, 192, 192)",
      backgroundColor: "rgba(75, 192, 192, 0.2)"
    }
  ]
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

// کامپوننت کارت
interface InsightCardProps {
  insight: Insight
}

const InsightCard = ({ insight }: InsightCardProps) => {
  return (
    <Card className="p-4 border border-muted">
      <div className="flex flex-col gap-2">
        <div className="text-lg font-semibold">{insight.title}</div>
        <div className="text-xl font-bold">{insight.value}</div>
        <div className="text-sm text-muted-foreground">{insight.description}</div>
        <div className="text-xs text-muted-foreground">{insight.date}</div>
      </div>
    </Card>
  )
}

// کامپوننت اصلی Insights
export function Insights() {
  return (
    <div className="p-6 overflow-auto">
      <h1 className="text-2xl font-semibold mb-4">Insights</h1>
      <Separator />

      {/* نمودار قیمت آهن */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-4">قیمت آهن در زمان</h2>
        <Line data={ironPriceData} options={{ responsive: true }} />
      </div>

      {/* لیست کارت‌ها با اسکرول عمودی */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-h-[400px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-muted-foreground">
        {insights.map((insight) => (
          <InsightCard key={insight.id} insight={insight} />
        ))}
      </div>
    </div>
  )
}
