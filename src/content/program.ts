export const programData = {
  title: "結果を出すための「4つの強力な武器」",
  subtitle: "抽象論はいりません。明日使える「具体的」な武器だけを、圧倒的なボリュームとクオリティで提供します。",
  weapons: [
    {
      id: 1,
      name: "毎月2本のセミナー完全無料",
      icon: "seminar",
      description: "新人管理者の研修教材としても最適。全講座が見放題。",
      details: {
        schedule: [
          {
            day: "毎月第2水曜 20:00-21:00",
            type: "採用セミナー",
            themes: [
              "SNSの基本関係",
              "採用におけるSNS活用",
              "SNSマーケティング基礎",
              "SNS集客の実践",
              "SNS運用のコツ"
            ]
          },
          {
            day: "毎月第4水曜 20:00-21:00",
            type: "営業セミナー",
            themes: [
              "ケアマネ営業の基本",
              "切り返しトーク20選",
              "USPの作り方・考え方",
              "フォロー営業",
              "営業KPI設計"
            ]
          }
        ],
        features: [
          "全てアーカイブ録画、24時間以内視聴可能",
          "質疑応答30分付き",
          "実践ワークシート配布"
        ],
        externalValue: 120000,
        externalDescription: "外部なら月10,000円相当×12ヶ月=120,000円 → 会員無料"
      }
    },
    {
      id: 2,
      name: "50本以上のe-learning見放題",
      icon: "elearning",
      description: "教育の質を30本超の『動画』で標準化。繰り返し教える時間を削減し、管理者は本来の業務に集中できます。5つのカテゴリ・体系的に学べる動画。セミナー・交流会のアーカイブを合わせて現在50本以上！",
      details: {
        categories: [
          {
            name: "経営戦略",
            count: 10,
            topics: ["黒字化", "稼働率UP", "損益分岐点", "資金繰り"]
          },
          {
            name: "採用・定着",
            count: 12,
            topics: ["Indeed攻略", "面接術", "離職防止", "1on1面談"]
          },
          {
            name: "営業・集客",
            count: 12,
            topics: ["ケアマネ営業", "USPの作り方・考え方", "営業の標準化"]
          },
          {
            name: "スタッフ教育",
            count: 8,
            topics: ["新人教育", "医療安全"]
          },
          {
            name: "制度・報酬",
            count: 8,
            topics: ["報酬改定"]
          }
        ],
        archive: {
          count: 48,
          description: "過去セミナーアーカイブ48本（2年分）も即視聴可能"
        },
        features: [
          "スマホ・タブレット対応",
          "倍速再生",
          "キーワード検索機能付き"
        ],
        externalValue: 198000,
        externalDescription: "1本3,000円×50本=150,000円 → 会員見放題"
      }
    },
    {
      id: 3,
      name: "チラシテンプレート配布",
      icon: "tools",
      description: "営業活動に必要なチラシテンプレートを配布。ゼロから作る時間を、利用者様のための時間に変えましょう。即日運用可能。",
      details: {
        tools: [
          {
            category: "営業用チラシ",
            count: 5,
            examples: ["自己紹介", "事例紹介"]
          },
          {
            category: "営業用チラシ",
            count: 6,
            examples: ["コラムテンプレート"]
          },
          {
            category: "その他営業資料",
            count: 6,
            examples: ["パンフレット", "コラム"]
          }
        ],
        formats: ["PDF", "印刷データ"],
        externalValue: 98000,
        externalDescription: "営業活動に必要なチラシテンプレート一式"
      }
    },
    {
      id: 4,
      name: "月1交流会＋コミュニティ",
      icon: "community",
      description: "月1回のZoom勉強会・交流会。綺麗な成功談だけでなく、生々しい現場の悩みや「ここだけの話」が飛び交います。",
      details: {
        schedule: {
          day: "全国の経営者とつながる機会",
          duration: "月1回60分",
          benefits: [
            "じょん本人からの直接アドバイス",
            "同じ悩みを持つ経営者との情報交換",
            "成功事例の共有と実践的な学び",
            "孤独な経営から解放される"
          ]
        },
        flow: [
          {
            time: "20分",
            activity: "じょんのミニ講義"
          },
          {
            time: "40分",
            activity: "グループディスカッション"
          },
          {
            time: "20分",
            activity: "全体共有"
          },
          {
            time: "10分",
            activity: "フリー交流"
          }
        ],
        features: [
          "全国の経営者とつながる",
          "孤独解消",
          "成功事例の共有"
        ],
        community: {
          platforms: ["Facebookページ", "公式LINE"],
          features: ["質問箱へ投函すれば回答が返ります", "情報交換"]
        },
        externalValue: 60000,
        externalDescription: "60,000円/年相当"
      }
    }
  ]
};



