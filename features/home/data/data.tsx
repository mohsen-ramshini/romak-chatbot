export type Message = {
  id: string;
  sender: "user" | "ai";
  content: string;
  timestamp: string;
};

export type Session = {
  id: string;
  title: string;
  createdAt: string;
  messages: Message[];
};

export const sessions: Session[] = [
  {
    id: "s1",
    title: "پرس‌وجو درباره هوا",
    createdAt: "2025-04-17T09:00:00Z",
    messages: [
      {
        id: "m1",
        sender: "user",
        content: "سلام! می‌تونی بگی امروز هوا چطوره؟",
        timestamp: "2025-04-17T09:00:10Z"
      },
      {
        id: "m2",
        sender: "ai",
        content: "سلام! متاسفم، اما به اینترنت دسترسی ندارم که وضعیت آب‌وهوا رو بررسی کنم.",
        timestamp: "2025-04-17T09:00:15Z"
      }
    ]
  },
  {
    id: "s2",
    title: "دستور آشپزی",
    createdAt: "2025-04-16T15:30:00Z",
    messages: [
      {
        id: "m3",
        sender: "user",
        content: "یه دستور برای پاستا می‌خوام.",
        timestamp: "2025-04-16T15:30:05Z"
      },
      {
        id: "m4",
        sender: "ai",
        content: "حتماً! برای پاستای ساده نیاز داری به: پاستا، سیر، روغن زیتون، پنیر و ادویه.",
        timestamp: "2025-04-16T15:30:10Z"
      },
      {
        id: "m5",
        sender: "user",
        content: "چه مدت باید بپزه؟",
        timestamp: "2025-04-16T15:30:30Z"
      },
      {
        id: "m6",
        sender: "ai",
        content: "حدود ۸ تا ۱۰ دقیقه داخل آب جوش. مراقب باش که زیاد نرم نشه.",
        timestamp: "2025-04-16T15:30:40Z"
      }
    ]
  },
  {
    id: "s3",
    title: "مشاوره برنامه‌نویسی",
    createdAt: "2025-04-15T12:00:00Z",
    messages: [
      {
        id: "m7",
        sender: "user",
        content: "چطور می‌تونم یه TODO app با React بنویسم؟",
        timestamp: "2025-04-15T12:00:10Z"
      },
      {
        id: "m8",
        sender: "ai",
        content: "برای شروع یک پروژه React بساز، سپس از useState برای مدیریت لیست وظایف استفاده کن.",
        timestamp: "2025-04-15T12:00:20Z"
      },
      {
        id: "m9",
        sender: "user",
        content: "ممنون! اگه بخوام دیتا ذخیره بمونه چی؟",
        timestamp: "2025-04-15T12:00:40Z"
      },
      {
        id: "m10",
        sender: "ai",
        content: "میتونی از localStorage استفاده کنی یا یه بک‌اند ساده بنویسی.",
        timestamp: "2025-04-15T12:00:55Z"
      }
    ]
  },
  {
    id: "s4",
    title: "ترجمه متن",
    createdAt: "2025-04-14T18:20:00Z",
    messages: [
      {
        id: "m11",
        sender: "user",
        content: "می‌تونی اینو به انگلیسی ترجمه کنی؟ «من فردا به مسافرت می‌روم.»",
        timestamp: "2025-04-14T18:20:10Z"
      },
      {
        id: "m12",
        sender: "ai",
        content: "Sure! It means: \"I am going on a trip tomorrow.\"",
        timestamp: "2025-04-14T18:20:20Z"
      }
    ]
  },
  {
    id: "s5",
    title: "سوال در مورد خواب",
    createdAt: "2025-04-13T22:10:00Z",
    messages: [
      {
        id: "m13",
        sender: "user",
        content: "چرا بعضی وقتا آدم خواب نمی‌ره؟",
        timestamp: "2025-04-13T22:10:10Z"
      },
      {
        id: "m14",
        sender: "ai",
        content: "دلایل زیادی داره مثل استرس، استفاده زیاد از گوشی قبل خواب، یا کافئین.",
        timestamp: "2025-04-13T22:10:25Z"
      },
      {
        id: "m15",
        sender: "user",
        content: "راه‌حلش چیه؟",
        timestamp: "2025-04-13T22:10:40Z"
      },
      {
        id: "m16",
        sender: "ai",
        content: "سعی کن یک روتین خواب ثابت داشته باشی، قبل خواب کتاب بخونی و نور کم باشه.",
        timestamp: "2025-04-13T22:10:55Z"
      }
    ]
  }
];
