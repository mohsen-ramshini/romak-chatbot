export type Insight = {
    id: string;
    title: string;
    value: string;
    description: string;
    date: string;
  };
  
  export const insights: Insight[] = [
    {
      id: "i1",
      title: "Total Messages",
      value: "1200",
      description: "Total number of messages sent in all sessions.",
      date: "2025-04-17",
    },
    {
      id: "i2",
      title: "Unread Messages",
      value: "200",
      description: "Number of unread messages across all sessions.",
      date: "2025-04-17",
    },
    {
      id: "i3",
      title: "Average Response Time",
      value: "5 min",
      description: "Average response time between user and AI.",
      date: "2025-04-17",
    },
    {
      id: "i4",
      title: "Most Active Session",
      value: "Session 1: پرس‌وجو درباره هوا",
      description: "Session with the highest number of messages.",
      date: "2025-04-17",
    },
  ];
  

  // نمونه داده برای قیمت آهن
export const ironPriceData = {
    labels: ['2025-04-01', '2025-04-02', '2025-04-03', '2025-04-04', '2025-04-05'],  // تاریخ‌ها
    datasets: [
      {
        label: 'Price of Iron',
        data: [500, 520, 550, 530, 560],  // قیمت‌ها
        borderColor: '#3498db',  // رنگ خط
        backgroundColor: 'rgba(52, 152, 219, 0.2)',  // رنگ پس‌زمینه
        fill: true,  // نمایش پر شدن ناحیه زیر خط
      },
    ],
  }
  