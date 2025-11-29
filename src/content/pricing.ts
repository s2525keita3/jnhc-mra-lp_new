export const pricingData = {
  planName: "スタンダード会員",
  monthlyPrice: 10000,
  monthlyPriceWithTax: 11000,
  yearlyPrice: 100000,
  yearlyPriceWithTax: 110000,
  features: [
    "毎月開催！実践型セミナー（月2回・無料）",
    "50種以上のe-learning見放題",
    "即効ツールBOX 30種 DLし放題",
    "月1回オンライン交流会",
    "認定講師・ジョンからのアドバイス",
    "会員専用コミュニティ（Facebookページ、公式LINE）"
  ],
  valueStack: {
    totalValue: 836000,
    monthlyPrice: 10000,
    items: [
      {
        name: "毎月セミナー2本",
        value: 120000,
        period: "年"
      },
      {
        name: "e-learning 50本＋アーカイブ48本",
        value: 198000,
        period: ""
      },
      {
        name: "即効ツール30種",
        value: 98000,
        period: ""
      },
      {
        name: "月1交流会",
        value: 60000,
        period: "年"
      },
      {
        name: "認定講師・ジョンからのアドバイス",
        value: 360000,
        period: "年"
      },
      {
        name: "会員コミュニティ",
        value: 0,
        period: "プライスレス"
      }
    ]
  },
  bonuses: [
    {
      type: "PDF",
      name: "AI活用スタートガイド"
    },
    {
      type: "Excel",
      name: "収支表テンプレート"
    },
    {
      type: "PPT",
      name: "職場説明会資料テンプレート"
    }
  ],
  specialOffers: [
    {
      name: "初月50%OFF",
      description: "7日間限定",
      price: 5000
    },
    {
      name: "30日間返金保証",
      description: "理由不問・全額返金"
    },
    {
      name: "過去アーカイブ48本・即視聴権",
      description: "入会即日から視聴可能"
    }
  ],
  comparison: {
    competitor: {
      name: "他協会",
      annualFee: 10000,
      seminarFee: 5000,
      seminarsPerYear: 10,
      totalHiddenCost: 60000
    },
    ourAssociation: {
      name: "当協会",
      monthlyFee: 10000,
      seminarsIncluded: true,
      totalCost: 120000
    }
  }
};



