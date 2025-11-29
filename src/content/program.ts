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
              "MSW攻略",
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
      description: "教育の質を『動画』で標準化。繰り返し教える時間を削減し、管理者は本来の業務に集中できます。5つのカテゴリ・体系的に学べる動画ライブラリ",
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
            topics: ["ケアマネ営業", "MSW攻略", "デジタル営業"]
          },
          {
            name: "スタッフ教育",
            count: 8,
            topics: ["新人教育", "医療安全", "多職種連携"]
          },
          {
            name: "制度・報酬",
            count: 8,
            topics: ["報酬改定", "加算算定", "指示書の読み方"]
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
      name: "即効ツールBOX 30種",
      icon: "tools",
      description: "成果実証済みの『完成品』を使うのが最短ルート。ゼロから作る時間を、利用者様のための時間に変えましょう。Excel/Word/Canvaで提供、即日運用可能。",
      details: {
        tools: [
          {
            category: "経営管理ツール",
            count: 5,
            examples: ["稼働率シミュレーター", "月次レポート自動生成"]
          },
          {
            category: "採用・定着ツール",
            count: 6,
            examples: ["面接チェックシート", "求人票テンプレート"]
          },
          {
            category: "営業・集客ツール",
            count: 6,
            examples: ["トークスクリプト", "パンフレットテンプレート"]
          },
          {
            category: "リスク管理ツール",
            count: 4,
            examples: ["クレーム対応フロー", "インシデント報告書"]
          },
          {
            category: "その他実務ツール",
            count: 9,
            examples: []
          }
        ],
        formats: ["Excel", "Word", "Canva"],
        externalValue: 98000,
        externalDescription: "実務で使えるテンプレート群"
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
          features: ["24時間質問投稿OK", "情報交換"]
        },
        externalValue: 60000,
        externalDescription: "60,000円/年相当"
      }
    }
  ]
};



