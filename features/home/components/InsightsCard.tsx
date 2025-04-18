import * as React from "react"
import { Line } from "react-chartjs-2"
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js"
import { Separator } from "@/components/ui/separator"
import { Card } from "@/components/ui/card"
import { ironPriceData, insights, Insight } from "../data/insights" // فرض بر اینکه داده‌ها اینجا ذخیره می‌شوند

// برای استفاده از chart.js ابتدا باید این‌ها را در کامپوننت بارگذاری کنیم
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

interface InsightCardProps {
  insight: Insight
}

const InsightCard = ({ insight }: InsightCardProps) => {
  return (
    <Card className="p-4 mb-4 border border-muted">
      <div className="flex flex-col gap-2">
        <div className="text-lg font-semibold">{insight.title}</div>
        <div className="text-xl font-bold">{insight.value}</div>
        <div className="text-sm text-muted-foreground">{insight.description}</div>
        <div className="text-xs text-muted-foreground">{insight.date}</div>
      </div>
    </Card>
  )
}

export function Insights() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Insights</h1>
      <Separator />
      {/* نمودار قیمت آهن */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-4">Iron Price Over Time</h2>
        <Line data={ironPriceData} options={{ responsive: true }} />
      </div>
      {/* لیست کارت‌های Insight */}
      <div className="space-y-4 max-h-[400px] overflow-y-auto">
        {insights.map((insight) => (
          <InsightCard key={insight.id} insight={insight} /> // هر insight را به صورت جداگانه ارسال می‌کنیم
        ))}
      </div>
    </div>
  )
}
