import React, { useState, useEffect } from 'react';
import { 
  CheckCircle, 
  ChevronDown, 
  Star, 
  Users, 
  TrendingUp, 
  Clock, 
  PlayCircle, 
  FileText, 
  MessageCircle, 
  ShieldCheck, 
  ArrowRight,
  Menu,
  X,
  Wallet,
  PieChart,
  BarChart3,
  Briefcase,
  Lightbulb,
  Target,
  Download,
  Zap,
  Layers,
  CreditCard,
  Lock,
  HelpCircle
} from 'lucide-react';

// --- Components ---

const STRIPE_CHECKOUT_URL =
  import.meta.env.VITE_STRIPE_CHECKOUT_URL ||
  'https://buy.stripe.com/test_example_checkout_link';

const ProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(Number(scroll));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-[60] bg-slate-200">
      <div 
        className="h-full gradient-cta transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress * 100}%` }}
      />
    </div>
  );
};

// リッチで統一されたCTAボタンコンポーネント（バウムブルームデザイン）
const RichCtaButton = ({ text, subtext, onClick, href, className }: { text: string, subtext?: string, onClick?: () => void, href?: string, className?: string }) => {
  const baseClasses = "relative group overflow-hidden rounded-[50px] shadow-cta hover:shadow-cta-hover transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0";
  const gradientClasses = "gradient-cta";
  const isExternalLink = href?.startsWith('http');
  
  const content = (
    <>
      <div className="absolute inset-0 bg-white/20 group-hover:bg-white/30 transition-opacity" />
      
      <div className="relative flex flex-col items-center justify-center px-8 py-4 md:py-5">
        <span className="font-bold text-white text-base md:text-lg tracking-wide flex items-center">
          {text} <ArrowRight className="ml-2 w-5 h-5" />
        </span>
        {subtext && (
          <span className="text-[10px] md:text-xs text-white/90 font-semibold mt-0.5 uppercase tracking-wider">
            {subtext}
          </span>
        )}
      </div>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={isExternalLink ? '_blank' : undefined}
        rel={isExternalLink ? 'noreferrer noopener' : undefined}
        className={`${baseClasses} ${gradientClasses} ${className} block text-center`}
      >
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={`${baseClasses} ${gradientClasses} ${className} w-full`}>
      {content}
    </button>
  );
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <div className="text-sm md:text-base font-bold leading-tight text-text-primary transition-colors">
          一般社団法人<br className="md:hidden" /> 全国訪問看護経営研究協会
        </div>
        <div className="hidden md:block">
            <RichCtaButton text="会員申し込み" href={STRIPE_CHECKOUT_URL} className="!px-6 !py-2 text-sm" />
        </div>
        <a
          href={STRIPE_CHECKOUT_URL}
          target="_blank"
          rel="noreferrer noopener"
          className="md:hidden gradient-cta text-white font-bold py-2 px-4 rounded-[50px] text-sm shadow-cta"
        >
            申し込み
        </a>
      </div>
    </header>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 gradient-bg text-text-primary overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-baum-500 opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-baum-400 opacity-10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8 animate-fade-up">
          <div className="inline-block bg-bg-orange-light border border-baum-200 backdrop-blur-sm text-baum-600 text-xs md:text-sm font-bold px-4 py-1.5 rounded-full">
             訪問看護管理者・経営者専用コミュニティ
          </div>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            「感覚」の経営から、<br />
            <span className="gradient-text decoration-4 underline-offset-8 border-b-4 border-baum-500">「根拠」ある経営へ。</span>
          </h1>
          <p className="text-lg text-text-tertiary font-medium leading-relaxed">
            現役経営者の実践知 × AI活用 × 財務の仕組み。<br className="hidden md:block"/>
            「稼げ、人が育ち、選ばれるステーション」を最短距離で創る。
          </p>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-xl p-4 border border-baum-100 text-center shadow-card hover-lift">
              <div className="text-3xl font-bold text-baum-500">87<span className="text-lg">%</span></div>
              <div className="text-xs text-text-tertiary">会員継続率</div>
            </div>
            <div className="bg-white rounded-xl p-4 border border-baum-100 text-center shadow-card hover-lift">
              <div className="text-3xl font-bold text-baum-500">328<span className="text-lg">社</span></div>
              <div className="text-xs text-text-tertiary">参加事業所数</div>
            </div>
          </div>
          
          <div className="pt-4 max-w-xs md:max-w-none mx-auto md:mx-0">
            <RichCtaButton text="今すぐ詳細を見る" subtext="月額1万円で経営が変わる" href="#apply" />
          </div>
        </div>
        
        <div className="hidden md:block relative animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <div className="absolute -inset-4 bg-baum-400 rounded-2xl blur-xl opacity-20"></div>
          <img 
            src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Dashboard and Team" 
            className="relative rounded-2xl shadow-lg border-4 border-white object-cover h-96 w-full"
          />
        </div>
      </div>
    </section>
  );
};

const Problem = () => {
  return (
    <section className="py-20 bg-bg-cream">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-2xl md:text-4xl font-bold text-text-primary mb-4">
            現場と数字の板挟みで、<br />
            <span className="text-baum-500 bg-bg-orange-light px-2">孤独な決断</span>をしていませんか？
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-card p-8 border-l-8 border-slate-300 hover-lift animate-fade-up">
            <div className="flex items-center mb-6">
              <span className="bg-slate-200 text-slate-600 text-sm font-bold px-3 py-1 rounded-full">BEFORE</span>
              <span className="ml-3 text-2xl">😰</span>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start">
                <X className="text-red-500 mr-3 flex-shrink-0" />
                <span className="text-text-secondary"><strong>どんぶり勘定：</strong>とりあえず黒字だが、将来の投資資金が残らない。</span>
              </li>
              <li className="flex items-start">
                <X className="text-red-500 mr-3 flex-shrink-0" />
                <span className="text-text-secondary"><strong>採用の失敗：</strong>高額な紹介会社頼み。良い人ほどすぐ辞めてしまう。</span>
              </li>
              <li className="flex items-start">
                <X className="text-red-500 mr-3 flex-shrink-0" />
                <span className="text-text-secondary"><strong>管理者の疲弊：</strong>No.2が育たず、自分だけが現場と事務に追われている。</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white rounded-xl shadow-card-hover p-8 border-l-8 border-baum-500 relative overflow-hidden hover-lift animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Star size={100} className="text-baum-400" fill="currentColor" />
            </div>
            <div className="flex items-center mb-6 relative z-10">
              <span className="gradient-cta text-white text-sm font-bold px-3 py-1 rounded-full">AFTER</span>
              <span className="ml-3 text-2xl">😎</span>
            </div>
            <ul className="space-y-4 relative z-10">
              <li className="flex items-start">
                <CheckCircle className="text-green-500 mr-3 flex-shrink-0" />
                <span className="text-text-secondary"><strong>盤石な財務：</strong>根拠ある数字で、設備投資や昇給を即断できる。</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-green-500 mr-3 flex-shrink-0" />
                <span className="text-text-secondary"><strong>採用力向上：</strong>「ここで働きたい」と言われる採用フローが完成。</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-green-500 mr-3 flex-shrink-0" />
                <span className="text-text-secondary"><strong>組織の自走：</strong>評価制度とマニュアルで、スタッフが勝手に育つ。</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- ROI Section Components ---

const RoiCard = ({ number, title, amount, desc }: { number: string, title: string, amount: string, desc: string }) => (
    <div className="bg-white border border-baum-100 rounded-xl p-6 shadow-card hover:border-baum-300 hover-lift transition duration-300 relative overflow-hidden group h-full">
        <div className="absolute -right-4 -top-6 text-[8rem] font-black text-baum-100 opacity-30 group-hover:opacity-50 transition select-none leading-none pointer-events-none">{number}</div>
        <div className="relative z-10">
            <h4 className="text-sm font-bold text-text-secondary mb-1">{title}</h4>
            <div className="text-3xl font-bold text-baum-500 mb-4">{amount}</div>
            <p className="text-text-tertiary text-xs font-medium leading-relaxed">{desc}</p>
        </div>
    </div>
);

const TimelineItem = ({ step, label, amount, total, isLeft }: { step: string, label: string, amount: string, total: string, isLeft: boolean }) => (
    <div className={`relative flex flex-col md:flex-row items-center md:items-stretch group w-full ${isLeft ? 'md:flex-row-reverse' : ''}`}>
        
        {/* Spacer for desktop layout balance */}
        <div className="hidden md:block w-1/2"></div>

        {/* Center Line & Dot */}
        <div className="absolute left-6 md:left-1/2 w-0.5 h-full bg-baum-200 transform md:-translate-x-1/2 -z-10"></div>
        <div className="absolute left-6 md:left-1/2 w-8 h-8 bg-white rounded-full border-2 border-baum-500 shadow-[0_0_10px_rgba(255,107,0,0.6)] transform -translate-x-1/2 top-8 z-10 group-hover:scale-110 transition duration-300">
        </div>
        
        {/* Content Box */}
        <div className={`w-[calc(100%-60px)] ml-14 md:ml-0 md:w-[calc(50%-40px)] ${isLeft ? 'md:mr-10' : 'md:ml-10'} bg-white border border-baum-200 backdrop-blur-sm p-4 rounded-xl hover:border-baum-400 hover-lift transition duration-300 shadow-card`}>
            <div className="flex justify-end mb-1">
                <span className="text-text-tertiary text-[10px] uppercase tracking-wider font-bold">累計回収額</span>
            </div>
            <div className="flex justify-between items-end">
                <div>
                    <h4 className="font-bold text-text-primary text-sm mb-1">{label}</h4>
                    <p className="text-baum-500 text-sm font-bold flex items-center"><TrendingUp size={14} className="mr-1"/> {amount}</p>
                </div>
                <div className="text-right">
                    <p className="text-xl md:text-2xl font-bold text-baum-500 leading-none">{total}</p>
                </div>
            </div>
        </div>
    </div>
);

const RoiSection = () => {
  return (
    <section className="py-24 bg-bg-cream text-text-primary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-baum-400 rounded-full blur-[100px] opacity-30"></div>
         <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-baum-300 rounded-full blur-[100px] opacity-20"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        
        {/* Header Area */}
        <div className="text-center mb-16 animate-fade-up">
            <div className="inline-block px-3 py-1 border border-baum-500 rounded-full text-baum-500 text-xs font-bold mb-4 tracking-widest uppercase">
                High ROI & Cost Performance
            </div>
           <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
             受講料とROI（投資対効果）
           </h2>
           <p className="text-lg md:text-xl text-text-tertiary leading-relaxed mb-8">
             かけた費用に対して回収できるのか？<br/>
             経営者・社長の時給は<span className="text-text-primary font-bold underline decoration-baum-500 decoration-4 underline-offset-4 mx-2">1万円以上</span>だと思ってください
           </p>
           
           {/* Immediate Value Box */}
           <div className="inline-flex items-center justify-center bg-white border border-baum-200 rounded-xl p-6 shadow-card backdrop-blur-sm max-w-2xl w-full">
              <Wallet className="text-baum-500 mr-4 h-10 w-10 shrink-0" />
              <div className="text-left">
                  <p className="text-sm text-baum-600 font-bold mb-1">BREAK EVEN POINT</p>
                  <p className="text-lg md:text-xl font-medium text-text-primary">
                    利用者<span className="text-baum-500 font-bold text-2xl mx-1">1名</span>獲得で
                    <span className="text-baum-500 font-bold text-2xl mx-1">4ヶ月分</span>の費用回収が可能
                  </p>
              </div>
           </div>
        </div>

        {/* 5 Recovery Methods Grid */}
        <div className="mb-24">
            <h3 className="text-xl font-bold mb-8 text-center flex items-center justify-center text-text-primary">
                <PieChart className="mr-2 text-baum-500" size={24}/>
                <span className="text-text-primary text-2xl mr-2 font-bold">5</span> つの投資回収方法
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                 <RoiCard 
                    number="01" 
                    title="テンプレート価値" 
                    amount="10万円" 
                    desc="実務で使えるテンプレート群" 
                />
                <RoiCard 
                    number="02" 
                    title="融資額最大化" 
                    amount="100万円" 
                    desc="融資額を100万円以上増額" 
                />
                <RoiCard 
                    number="03" 
                    title="営業利益" 
                    amount="30万円" 
                    desc="黒字化達成で営業利益から回収"
                />
                <RoiCard 
                    number="04" 
                    title="新規顧客獲得" 
                    amount="30万円" 
                    desc="新規利用者獲得で達成" 
                />
                <RoiCard 
                    number="05" 
                    title="採用コスト削減＋紹介" 
                    amount="200万円" 
                    desc="人材紹介会社への手数料削減＆信頼できる士業紹介" 
                />
            </div>
        </div>

        {/* Timeline */}
        <div className="relative">
             <div className="text-center mb-12">
                 <h3 className="text-2xl font-bold text-text-primary flex justify-center items-center">
                    <BarChart3 className="mr-3 text-baum-500"/>
                    投資回収タイムライン
                 </h3>
             </div>
             
             <div className="space-y-4 md:space-y-0 relative max-w-4xl mx-auto pb-12">
                <TimelineItem 
                    step="STEP 01" 
                    label="テンプレート価値" 
                    amount="10万円" 
                    total="10万円"
                    isLeft={true}
                />
                <TimelineItem 
                    step="STEP 02" 
                    label="融資額最大化" 
                    amount="+100万円" 
                    total="110万円"
                    isLeft={false}
                />
                <TimelineItem 
                    step="STEP 03" 
                    label="営業利益" 
                    amount="+30万円" 
                    total="140万円"
                    isLeft={true}
                />
                <TimelineItem 
                    step="STEP 04" 
                    label="新規顧客獲得" 
                    amount="+30万円" 
                    total="170万円"
                    isLeft={false}
                />
                 <TimelineItem 
                    step="STEP 05" 
                    label="採用コスト削減＋信頼業者紹介" 
                    amount="+200万円" 
                    total="370万円"
                    isLeft={true}
                />
             </div>

             {/* Final Result */}
             <div className="mt-8 text-center relative z-20">
                <div className="inline-block relative group cursor-default">
                    <div className="absolute -inset-1 gradient-cta rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative bg-white rounded-xl px-8 md:px-16 py-8 border border-baum-200 shadow-card-hover">
                        <p className="text-text-tertiary text-xs md:text-sm mb-2 font-bold uppercase tracking-[0.2em]">投資効果の試算</p>
                        <div className="text-sm text-text-light mb-4">累計回収額</div>
                        <div className="text-5xl md:text-7xl font-bold gradient-text mb-6 tracking-tighter">
                            370<span className="text-3xl md:text-4xl text-text-primary ml-2">万円</span>
                        </div>
                        <div className="w-full h-px bg-gradient-to-r from-transparent via-baum-200 to-transparent mb-5"></div>
                        <p className="text-text-primary font-bold text-lg md:text-xl">
                           受講料(年額)の<span className="text-baum-500 text-3xl font-bold mx-2 border-b-2 border-baum-500">約30倍</span>のリターン
                        </p>
                    </div>
                </div>
             </div>
        </div>

      </div>
    </section>
  );
};

const Weapons = () => {
  const [activeTab, setActiveTab] = useState<'finance' | 'sales' | 'recruit' | 'ai'>('finance');

  const content = {
    finance: [
      { title: "PL（損益計算書）徹底説明", type: "基礎" },
      { title: "BS (貸借対照表) 解説", type: "基礎" },
      { title: "CF キャッシュフロー計算書 解説", type: "基礎" },
      { title: "財務の基本と経営における重要性", type: "実務" },
      { title: "資金調達と運転資金の考え方", type: "実務" },
      { title: "月次決算と利益管理の実務", type: "実務" },
      { title: "収益構造と財務指標の連動", type: "実務" },
      { title: "キャッシュフローと成長のバランス", type: "応用" },
      { title: "資金調達と金融機関との関係構築", type: "応用" },
    ],
    sales: [
      { title: "なぜ今、訪問看護に営業が必要なのか？", type: "戦略" },
      { title: "訪問看護のターゲットと接点の作り方", type: "戦略" },
      { title: "営業ツール・チラシ・資料の設計方法", type: "実践" },
      { title: "関係構築と信頼獲得のための営業トーク", type: "実践" },
      { title: "営業KPIと継続活動の仕組化", type: "管理" },
      { title: "紹介が増え続けるステーションの営業文化", type: "文化" },
    ],
    recruit: [
      { title: "差がつく求人票の作り方", type: "集客" },
      { title: "スタッフを巻き込む採用文化のつくり方", type: "文化" },
      { title: "1応募1採用に近づけるために“伝えること”", type: "面接" },
      { title: "仕事説明会資料の整備とギャップのすり合わせ", type: "面接" },
      { title: "面接時の確認ポイント・質問の設計", type: "選考" },
      { title: "採用決定から入職までのオンボーディング設計", type: "定着" },
      { title: "お仕事説明会資料の重要性と作成法", type: "実践" },
    ],
    ai: [
      { title: "ChatGPTとは何か？", type: "入門" },
      { title: "記録・会議でのChatGPT実践活用", type: "実践" },
      { title: "GPTsの設計・共有・育成術", type: "応用" },
      { title: "SNS・広報・営業活動への応用", type: "応用" },
      { title: "セキュリティと導入体制", type: "管理" },
      { title: "1on1ミーティング：効果的な対話術", type: "管理" },
      { title: "稼働率設定の重要性とチームマネジメント", type: "管理" },
    ]
  };

  return (
    <section className="py-24 bg-bg-cream">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-20 animate-fade-up">
          <span className="text-baum-500 font-bold tracking-widest text-sm uppercase bg-bg-orange-light px-3 py-1 rounded-full">Premium Resources</span>
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary mt-6 leading-tight">
            結果を出すための<br className="md:hidden"/><span className="gradient-text">「4つの強力な武器」</span>
          </h2>
          <p className="text-text-tertiary mt-6 text-lg max-w-2xl mx-auto">
            抽象論はいりません。明日使える「具体的」な武器だけを、<br className="hidden md:block"/>
            圧倒的なボリュームとクオリティで提供します。
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* Weapon 1: e-Learning (Full detail) */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-card border border-baum-100 overflow-hidden hover-lift animate-fade-up">
            <div className="p-8 md:p-10 gradient-cta text-white">
                <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-white border border-white/30">
                        <PlayCircle size={28} />
                    </div>
                    <div>
                        <h3 className="font-bold text-2xl">01. 実践eラーニング見放題</h3>
                        <p className="text-white/90 text-sm">新人管理者の研修教材としても最適。全講座が見放題。</p>
                    </div>
                </div>
            </div>
            
            <div className="p-6 md:p-8 bg-white">
                {/* Tabs */}
                <div className="flex flex-wrap gap-2 mb-6 border-b border-slate-100 pb-4">
                    <button onClick={() => setActiveTab('finance')} className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${activeTab === 'finance' ? 'gradient-cta text-white shadow-cta' : 'bg-slate-100 text-text-tertiary hover:bg-slate-200'}`}>
                        💰 財務・資金
                    </button>
                    <button onClick={() => setActiveTab('sales')} className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${activeTab === 'sales' ? 'gradient-cta text-white shadow-cta' : 'bg-slate-100 text-text-tertiary hover:bg-slate-200'}`}>
                        📢 営業・集客
                    </button>
                    <button onClick={() => setActiveTab('recruit')} className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${activeTab === 'recruit' ? 'gradient-cta text-white shadow-cta' : 'bg-slate-100 text-text-tertiary hover:bg-slate-200'}`}>
                        🤝 採用・定着
                    </button>
                    <button onClick={() => setActiveTab('ai')} className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${activeTab === 'ai' ? 'gradient-cta text-white shadow-cta' : 'bg-slate-100 text-text-tertiary hover:bg-slate-200'}`}>
                        🤖 AI・管理
                    </button>
                </div>

                {/* Content List */}
                <div className="grid md:grid-cols-2 gap-3 max-h-[400px] overflow-y-auto custom-scrollbar pr-2">
                    {content[activeTab].map((item, i) => (
                        <div key={i} className="flex items-start p-3 rounded-lg hover:bg-bg-orange-light transition group border border-transparent hover:border-baum-200 cursor-default">
                            <PlayCircle size={16} className="text-baum-500 mt-1 mr-3 shrink-0 group-hover:scale-110 transition" />
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="text-[10px] font-bold bg-slate-100 text-text-tertiary px-1.5 py-0.5 rounded border border-slate-200">{item.type}</span>
                                </div>
                                <p className="text-sm font-bold text-text-secondary group-hover:text-baum-600 transition">{item.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
          </div>

          {/* Weapon 2: Templates */}
          <div className="bg-white rounded-xl p-8 shadow-card border border-baum-100 hover-lift transition group h-full flex flex-col animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-baum-100 rounded-xl flex items-center justify-center text-baum-500 group-hover:scale-110 transition duration-300">
                    <Download size={24} />
                </div>
                <h3 className="font-bold text-xl text-text-primary">02. 実務テンプレDL放題</h3>
            </div>
            <p className="text-sm text-text-tertiary mb-6 leading-relaxed">
                ゼロから作る時間は無駄です。成果実証済みの資料をダウンロードし、自社用に書き換えるだけで即日運用可能。
            </p>
            <div className="space-y-3 mt-auto">
                <div className="flex items-center p-3 bg-bg-orange-light rounded-lg border border-baum-100">
                    <div className="w-8 h-8 bg-baum-100 text-baum-600 rounded flex items-center justify-center font-bold text-[10px] mr-3 shrink-0">
                        <ShieldCheck size={16} />
                    </div>
                    <div>
                        <p className="text-sm font-bold text-text-secondary">監査対策の書類テンプレート</p>
                        <p className="text-xs text-text-tertiary">運営指導を乗り切る必須資料</p>
                    </div>
                </div>
                <div className="flex items-center p-3 bg-bg-orange-light rounded-lg border border-baum-100">
                    <div className="w-8 h-8 bg-baum-100 text-baum-600 rounded flex items-center justify-center font-bold text-[10px] mr-3 shrink-0">
                        <FileText size={16} />
                    </div>
                    <div>
                        <p className="text-sm font-bold text-text-secondary">営業用チラシ</p>
                        <p className="text-xs text-text-tertiary">ケアマネに響く構成済みデザイン</p>
                    </div>
                </div>
                <div className="flex items-center p-3 bg-bg-orange-light rounded-lg border border-baum-100">
                    <div className="w-8 h-8 bg-baum-100 text-baum-600 rounded flex items-center justify-center font-bold text-[10px] mr-3 shrink-0">
                        <Users size={16} />
                    </div>
                    <div>
                        <p className="text-sm font-bold text-text-secondary">職場説明会スライド</p>
                        <p className="text-xs text-text-tertiary">採用率を劇的に上げるスライド一式</p>
                    </div>
                </div>
                <div className="flex items-center p-3 bg-bg-orange-light rounded-lg border border-baum-100">
                    <div className="w-8 h-8 bg-baum-100 text-baum-600 rounded flex items-center justify-center font-bold text-[10px] mr-3 shrink-0">
                        <CheckCircle size={16} />
                    </div>
                    <div>
                        <p className="text-sm font-bold text-text-secondary">面接評価制度シート</p>
                        <p className="text-xs text-text-tertiary">属人化を防ぐ公平な評価基準</p>
                    </div>
                </div>
            </div>
          </div>

          {/* Weapon 3: Community */}
          <div className="bg-white rounded-xl p-8 shadow-card border border-baum-100 hover-lift transition group h-full flex flex-col animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-baum-100 rounded-xl flex items-center justify-center text-baum-500 group-hover:scale-110 transition duration-300">
                    <Users size={24} />
                </div>
                <h3 className="font-bold text-xl text-text-primary">03. コミュニティ＆相談</h3>
            </div>
            <p className="text-sm text-text-tertiary mb-6 leading-relaxed">
                月1回のZoom勉強会・交流会。綺麗な成功談だけでなく、生々しい現場の悩みや「ここだけの話」が飛び交います。
            </p>
            
            <div className="bg-bg-orange-light rounded-xl p-4 border border-baum-100 mt-auto">
                <p className="text-xs font-bold text-text-tertiary mb-3 uppercase tracking-wider">HOT DISCUSSION</p>
                <div className="space-y-4">
                    <div className="flex gap-3">
                        <div className="w-6 h-6 rounded-full bg-baum-200 flex items-center justify-center text-[10px] font-bold text-baum-700 shrink-0">Q</div>
                        <div className="bg-white p-3 rounded-r-xl rounded-bl-xl shadow-sm text-xs text-text-secondary border border-baum-100">
                            <span className="font-bold text-baum-500 block mb-1">【収益アップ】</span>
                            知っているだけで月数万円変わる！加算算定の裏ワザとは？
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <div className="w-6 h-6 rounded-full bg-baum-200 flex items-center justify-center text-[10px] font-bold text-baum-700 shrink-0">Q</div>
                        <div className="bg-white p-3 rounded-r-xl rounded-bl-xl shadow-sm text-xs text-text-secondary border border-baum-100">
                            <span className="font-bold text-baum-500 block mb-1">【営業戦略】</span>
                            居宅に行っても会えない。「会えないケアマネ」への具体的なアプローチ手法。
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <div className="w-6 h-6 rounded-full bg-baum-200 flex items-center justify-center text-[10px] font-bold text-baum-700 shrink-0">Q</div>
                        <div className="bg-white p-3 rounded-r-xl rounded-bl-xl shadow-sm text-xs text-text-secondary border border-baum-100">
                            <span className="font-bold text-baum-500 block mb-1">【採用コスト】</span>
                            人材紹介会社を使わずに、コストを抑えて「良い人材」だけを獲る方法。
                        </div>
                    </div>
                </div>
            </div>
          </div>

          {/* Weapon 4: Account Sharing (Highlighted) */}
          <div className="lg:col-span-2 gradient-cta rounded-xl p-1 shadow-cta-hover transform hover:-translate-y-1 transition duration-300 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <div className="bg-white rounded-[20px] p-8 h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-baum-100 rounded-full -mr-16 -mt-16 opacity-50 z-0"></div>
                <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                    <div className="shrink-0">
                        <div className="w-20 h-20 bg-bg-orange-light rounded-full flex items-center justify-center text-baum-500 shadow-inner">
                            <Layers size={40} />
                        </div>
                    </div>
                    <div className="text-center md:text-left flex-grow">
                        <div className="inline-block bg-baum-100 text-baum-600 text-xs font-bold px-3 py-1 rounded-full mb-3">
                            コスパ最強の理由
                        </div>
                        <h3 className="font-bold text-2xl text-text-primary mb-2">04. アカウント共有OK</h3>
                        <p className="text-text-tertiary font-medium leading-relaxed">
                            1ステーション1アカウント契約のため、<span className="bg-bg-orange-light px-1 font-bold text-text-primary">スタッフ全員でログイン情報を共有可能</span>です。<br className="hidden md:block"/>
                            管理者だけでなく、リーダー候補や事務スタッフの「社内研修ツール」として活用すれば、<br className="hidden md:block"/>
                            教育コストは実質タダ同然になります。
                        </p>
                    </div>
                    <div className="shrink-0 bg-bg-orange-light p-4 rounded-xl border border-baum-100 text-center min-w-[160px]">
                        <p className="text-xs text-text-tertiary font-bold mb-1">2店舗目以降</p>
                        <p className="text-2xl font-bold text-text-primary">5,000<span className="text-sm font-normal ml-1">円/月</span></p>
                        <p className="text-[10px] text-text-light mt-1">※1店舗目は10,000円</p>
                    </div>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-3xl font-bold text-text-primary mb-4">
            参加者のリアルな声
          </h2>
          <p className="text-text-tertiary">フェーズの異なる経営者が、それぞれの課題を解決しています</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* User 1 */}
          <div className="bg-white rounded-xl p-6 shadow-card border-t-4 border-baum-500 hover-lift animate-fade-up">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="font-bold text-lg text-text-primary">T.K. 様</p>
                <p className="text-xs font-bold text-baum-600 bg-bg-orange-light inline-block px-2 py-1 rounded mt-1">開業前 6ヶ月</p>
              </div>
              <div className="flex text-baum-400">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
            </div>
            <p className="text-sm text-text-secondary leading-relaxed">
              「初めての開業で何から手をつければいいか不安でしたが、<strong>『開業ロードマップ』と『融資資料テンプレ』</strong>のおかげで、スムーズに資金調達できました。最初から正しい型を知れたのは大きいです。」
            </p>
          </div>

          {/* User 2 */}
          <div className="bg-white rounded-xl p-6 shadow-card border-t-4 border-baum-400 hover-lift animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="font-bold text-lg text-text-primary">S.M. 様</p>
                <p className="text-xs font-bold text-baum-500 bg-bg-orange-light inline-block px-2 py-1 rounded mt-1">開業 4ヶ月目</p>
              </div>
              <div className="flex text-baum-400">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
            </div>
            <p className="text-sm text-text-secondary leading-relaxed">
              「現場が忙しくなり事務作業が崩壊しかけていました。動画で学んだ<strong>『生成AIによる記録業務効率化』</strong>を導入し、スタッフの残業が激減。もっと早く知りたかったです。」
            </p>
          </div>

          {/* User 3 */}
          <div className="bg-white rounded-xl p-6 shadow-card border-t-4 border-baum-600 hover-lift animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="font-bold text-lg text-text-primary">K.S. 様</p>
                <p className="text-xs font-bold text-baum-600 bg-bg-orange-light inline-block px-2 py-1 rounded mt-1">開業 2年目</p>
              </div>
              <div className="flex text-baum-400">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
            </div>
            <p className="text-sm text-text-secondary leading-relaxed">
              「売上は上がっても人が定着せず悩んでいました。コミュニティで<strong>『評価制度の運用』</strong>について相談し、納得感のある給与体系に変更。離職が止まり、組織として強くなりました。」
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Profile = () => {
  return (
    <section className="py-20 bg-bg-cream">
      <div className="max-w-5xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow-card border border-baum-100 overflow-hidden flex flex-col md:flex-row hover-lift animate-fade-up">
          <div className="md:w-1/3 relative bg-slate-100">
             {/* Vertical Rectangle Photo */}
             <div className="h-full w-full relative min-h-[400px]">
                <img 
                  src="/teacher_john.JPG" 
                  alt="代表理事 渋谷慶太" 
                  className="w-full h-full object-cover absolute inset-0"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6 text-white md:hidden">
                    <p className="text-xs opacity-80">代表理事</p>
                    <p className="text-xl font-bold">渋谷 慶太</p>
                </div>
             </div>
          </div>
          
          <div className="md:w-2/3 p-8 md:p-12">
            <div className="hidden md:block mb-6">
               <p className="text-baum-500 font-bold tracking-wider text-sm">REPRESENTATIVE</p>
               <h2 className="text-3xl font-bold text-text-primary">渋谷 慶太 <span className="text-lg font-normal text-text-tertiary ml-2">Keita Shibuya</span></h2>
               <p className="text-sm text-text-tertiary">一般社団法人 全国訪問看護経営研究協会 代表理事</p>
            </div>

            <div className="prose prose-slate text-text-secondary leading-relaxed">
              <p className="font-bold text-text-primary text-lg mb-4">
                「綺麗事抜きで、現場で使える武器を。」
              </p>
              <p className="mb-4">
                多くのコンサルタントが教科書的な理論を語る中、私は「今の現場」で通用する生きたノウハウにこだわります。
              </p>
              <p className="mb-4">
                採用難の時代に常勤スタッフ50名を抱え、月間3,500件の訪問を回し続ける「組織作りの極意」。SNS総フォロワー11万人を熱狂させ、広告費ゼロで人とお金を集める「マーケティングの正解」。
              </p>
              <p>
                これらは全て、私が自身の事業で血を流しながら検証し、全国50社以上の支援先で再現性を確認した「事実」です。失敗しない経営の型を、あなたに継承します。
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-baum-100">
               <div className="text-center">
                  <div className="text-2xl font-bold text-text-primary">50<span className="text-sm font-normal">社+</span></div>
                  <div className="text-xs text-text-tertiary">支援実績</div>
               </div>
               <div className="text-center border-l border-baum-100">
                  <div className="text-2xl font-bold text-text-primary">11<span className="text-sm font-normal">万+</span></div>
                  <div className="text-xs text-text-tertiary">SNSフォロワー</div>
               </div>
               <div className="text-center border-l border-baum-100">
                  <div className="text-2xl font-bold text-text-primary">5<span className="text-sm font-normal">億</span></div>
                  <div className="text-xs text-text-tertiary">年商規模</div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  return (
    <section id="apply" className="py-20 gradient-bg relative">
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        
        {/* Rich Design Card */}
        <div className="bg-white rounded-xl shadow-card-hover overflow-hidden border-4 border-baum-500 relative hover-lift animate-fade-up">
          
          {/* Badge */}
          <div className="absolute top-0 right-0 gradient-cta text-white font-bold text-xs px-6 py-2 rounded-bl-xl shadow-cta z-20 tracking-widest uppercase">
            Official Membership
          </div>

          <div className="grid md:grid-cols-5 h-full">
            {/* Left: Info */}
            <div className="md:col-span-3 p-8 md:p-10 flex flex-col justify-center">
              <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-2">有料会員プラン</h2>
              <p className="text-text-tertiary text-sm mb-6">経営の悩みを解決する全ての機能へアクセス</p>
              
              <ul className="space-y-3 mb-8">
                {[
                  "eラーニング動画 全講座見放題",
                  "実務テンプレート・資料DLし放題",
                  "月1回の会員限定Zoom勉強会",
                  "会員限定コミュニティ参加権",
                  "アカウント共有OK (スタッフ教育に最適)"
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-text-secondary text-sm font-medium">
                    <CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={18} />
                    {item}
                  </li>
                ))}
              </ul>
              
              {/* Bonuses - Updated */}
              <div className="bg-bg-orange-light p-5 rounded-xl border border-baum-100">
                <p className="text-baum-500 font-bold text-sm mb-3 flex items-center">
                  <span className="mr-1">🎁</span> 今だけの入会特典
                </p>
                <div className="space-y-2">
                    <div className="flex items-center text-xs text-text-secondary">
                        <span className="bg-baum-400 text-[10px] font-bold px-1.5 rounded mr-2 text-white">PDF</span>
                        AI活用スタートガイド
                    </div>
                    <div className="flex items-center text-xs text-text-secondary">
                        <span className="bg-green-500 text-[10px] font-bold px-1.5 rounded mr-2 text-white">Excel</span>
                        収支表テンプレート
                    </div>
                    <div className="flex items-center text-xs text-text-secondary">
                        <span className="bg-baum-500 text-[10px] font-bold px-1.5 rounded mr-2 text-white">PPT</span>
                        職場説明会資料テンプレート
                    </div>
                </div>
              </div>
            </div>

            {/* Right: Price & CTA */}
            <div className="md:col-span-2 bg-bg-cream p-8 md:p-10 flex flex-col justify-center items-center border-t md:border-t-0 md:border-l border-baum-100">
              <p className="text-text-tertiary text-xs font-bold mb-2">月額会費 (税別)</p>
              <div className="flex items-end text-text-primary mb-1">
                <span className="text-5xl md:text-6xl font-bold tracking-tighter">10,000</span>
                <span className="text-xl font-bold mb-3 ml-1">円</span>
              </div>
              <p className="text-xs text-text-light mb-6 line-through">通常コンサル 30万円〜</p>
              
              <RichCtaButton 
                text="今すぐ申し込む" 
                subtext="Stripe決済ページへ移動します"
                href={STRIPE_CHECKOUT_URL}
                className="w-full"
              />
              
              {/* Payment & Legal Note */}
              <div className="mt-6 text-[10px] text-text-tertiary text-center space-y-2">
                 <p className="flex items-center justify-center gap-1">
                    <CreditCard size={12} /> クレジットカード自動決済
                 </p>
                 <p className="flex items-center justify-center gap-1">
                    <Lock size={12} /> SSL暗号化通信で安全
                 </p>
                 <div className="border-t border-baum-100 pt-2 mt-2 text-left leading-relaxed text-text-light">
                    <p>※ ご登録のクレジットカードより毎月自動引き落としとなります。</p>
                    <p>※ 成果を実感していただくため、<strong>最低6ヶ月間</strong>のご継続をお願いしております。7ヶ月目以降は会員サイトよりいつでも解約可能です。</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const LegalDocuments = () => {
    return (
        <section className="bg-bg-cream py-12 text-text-tertiary text-xs border-t border-baum-100">
            <div className="max-w-4xl mx-auto px-4 space-y-4">
                <h3 className="font-bold text-slate-400 mb-4 text-center">重要事項・法的表記</h3>
                
                <details className="group bg-white rounded-xl border border-baum-100" id="tokushoho">
                    <summary className="p-3 font-bold cursor-pointer flex justify-between items-center hover:bg-bg-orange-light">
                        特定商取引法に基づく表記
                        <span className="text-slate-400 group-open:rotate-180 transition">▼</span>
                    </summary>
                    <div className="p-4 border-t border-slate-200 space-y-2 leading-relaxed">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
                            <div className="font-bold bg-slate-50 p-1">販売業者</div>
                            <div className="md:col-span-3 p-1">一般社団法人 全国訪問看護経営研究協会</div>
                            <div className="font-bold bg-slate-50 p-1">運営統括責任者</div>
                            <div className="md:col-span-3 p-1">渋谷 慶太</div>
                            <div className="font-bold bg-slate-50 p-1">所在地</div>
                            <div className="md:col-span-3 p-1">〒XXX-XXXX [住所記載箇所]</div>
                            <div className="font-bold bg-slate-50 p-1">電話番号</div>
                            <div className="md:col-span-3 p-1">03-XXXX-XXXX（受付時間：平日10:00-18:00）</div>
                            <div className="font-bold bg-slate-50 p-1">メールアドレス</div>
                            <div className="md:col-span-3 p-1">support@example.com</div>
                            <div className="font-bold bg-slate-50 p-1">販売価格</div>
                            <div className="md:col-span-3 p-1">月額10,000円（税別）</div>
                            <div className="font-bold bg-slate-50 p-1">商品代金以外の必要料金</div>
                            <div className="md:col-span-3 p-1">消費税、インターネット接続にかかる通信回線等の諸費用</div>
                            <div className="font-bold bg-slate-50 p-1">お支払い方法</div>
                            <div className="md:col-span-3 p-1">クレジットカード決済（Stripe）</div>
                            <div className="font-bold bg-slate-50 p-1">お支払い時期</div>
                            <div className="md:col-span-3 p-1">初回お申し込み時、および翌月以降毎月同日に自動決済</div>
                            <div className="font-bold bg-slate-50 p-1">商品の引き渡し時期</div>
                            <div className="md:col-span-3 p-1">決済完了後、直ちにご利用いただけます。</div>
                            <div className="font-bold bg-slate-50 p-1">返品・交換・キャンセル</div>
                            <div className="md:col-span-3 p-1">デジタルコンテンツの性質上、返品・返金はお受けしておりません。解約をご希望の場合は、最低契約期間（6ヶ月）満了後、会員ページよりお手続きください。次回決済日の前日までに手続きを完了することで、次月の請求は発生しません。</div>
                        </div>
                    </div>
                </details>

                <details className="group bg-white rounded-xl border border-baum-100" id="terms">
                    <summary className="p-3 font-bold cursor-pointer flex justify-between items-center hover:bg-bg-orange-light">
                        利用規約
                        <span className="text-text-tertiary group-open:rotate-180 transition">▼</span>
                    </summary>
                    <div className="p-4 border-t border-baum-100 h-64 overflow-y-auto leading-relaxed scrollbar-thin">
                        <p className="mb-2 font-bold">第1条（適用）</p>
                        <p className="mb-2">本規約は、一般社団法人 全国訪問看護経営研究協会（以下「当協会」）が提供する有料会員サービス（以下「本サービス」）の利用条件を定めるものです。</p>
                        <p className="mb-2 font-bold">第2条（会員登録）</p>
                        <p className="mb-2">利用者は、本規約に同意の上、当協会所定の方法で入会を申し込み、当協会がこれを承認した時点で会員となります。</p>
                        <p className="mb-2 font-bold">第3条（利用料金および支払い）</p>
                        <p className="mb-2">会員は、月額10,000円（税別）の利用料金を支払うものとします。支払いはクレジットカードによる自動決済のみとします。</p>
                        <p className="mb-2 font-bold">第4条（契約期間および解約）</p>
                        <p className="mb-2">本サービスの最低契約期間は6ヶ月間とします。6ヶ月未満での中途解約は原則として認められません。7ヶ月目以降は、次回決済日の前日までに所定の手続きを行うことで解約が可能です。</p>
                        <p className="mb-2 font-bold">第5条（禁止事項）</p>
                        <p className="mb-2">会員は、本サービスのコンテンツを第三者に譲渡・貸与・転売・公衆送信してはなりません。ただし、同一法人内のスタッフ間での共有はこの限りではありません。</p>
                        <p className="mb-2 font-bold">第6条（免責事項）</p>
                        <p className="mb-2">当協会は、本サービスの利用により会員に生じた損害について、当協会の故意または重過失による場合を除き、一切の責任を負いません。</p>
                        <p className="mt-4 text-slate-400">※ 全文は入会申し込み時の最終画面でもご確認いただけます。</p>
                    </div>
                </details>

                <details className="group bg-white rounded-xl border border-baum-100" id="privacy">
                    <summary className="p-3 font-bold cursor-pointer flex justify-between items-center hover:bg-bg-orange-light">
                        プライバシーポリシー
                        <span className="text-text-tertiary group-open:rotate-180 transition">▼</span>
                    </summary>
                    <div className="p-4 border-t border-baum-100 space-y-2 leading-relaxed">
                         <p>当協会は、以下のとおり個人情報保護方針を定め、個人情報保護の仕組みを構築し、全従業員に個人情報保護の重要性の認識と取組みを徹底させることにより、個人情報の保護を推進致します。</p>
                         <p className="font-bold mt-2">1. 個人情報の管理</p>
                         <p>当協会は、お客さまの個人情報を正確かつ最新の状態に保ち、個人情報への不正アクセス・紛失・破損・改ざん・漏洩などを防止するため、セキュリティシステムの維持・管理体制の整備・社員教育の徹底等の必要な措置を講じ、安全対策を実施し個人情報の厳重な管理を行ないます。</p>
                         <p className="font-bold mt-2">2. 個人情報の利用目的</p>
                         <p>お客さまからお預かりした個人情報は、当協会からのご連絡や業務のご案内、ご質問に対する回答として、電子メールや資料のご送付に利用いたします。</p>
                         <p className="font-bold mt-2">3. 個人情報の第三者への開示・提供の禁止</p>
                         <p>当協会は、お客さまよりお預かりした個人情報を適切に管理し、次のいずれかに該当する場合を除き、個人情報を第三者に開示いたしません。</p>
                         <ul className="list-disc list-inside pl-4">
                            <li>お客さまの同意がある場合</li>
                            <li>法令に基づき開示することが必要である場合</li>
                            <li>決済代行会社（Stripe等）への必要最低限の情報提供</li>
                         </ul>
                    </div>
                </details>
            </div>
        </section>
    )
}

const Footer = () => (
  <footer className="bg-text-primary text-text-light py-10 text-center text-xs">
    <div className="max-w-6xl mx-auto px-4">
      <p className="font-bold text-white mb-4 text-sm">一般社団法人 全国訪問看護経営研究協会</p>
      <div className="flex justify-center gap-4 mb-6">
        <a href="#terms" className="hover:text-white transition">利用規約</a>
        <a href="#privacy" className="hover:text-white transition">プライバシーポリシー</a>
        <a href="#tokushoho" className="hover:text-white transition">特定商取引法に基づく表記</a>
      </div>
      <p>&copy; 2024 National Visiting Nursing Management Research Association.</p>
    </div>
  </footer>
);

const StickyCta = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past the Hero section (approx 600px)
      setIsVisible(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed bottom-0 left-0 right-0 bg-white border-t-4 border-baum-500 shadow-[0_-5px_20px_rgba(0,0,0,0.1)] z-40 transition-transform duration-300 ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}>
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="hidden md:block">
          <p className="text-sm font-bold text-text-primary">月額1万円で経営が変わる</p>
          <p className="text-xs text-text-tertiary">アカウント共有OK / 最低6ヶ月</p>
        </div>
        <div className="flex-1 md:flex-none md:w-64">
            <RichCtaButton text="今すぐ申し込む" href={STRIPE_CHECKOUT_URL} className="!py-3 text-sm" />
        </div>
      </div>
    </div>
  );
};

// --- Main App ---

function App() {
  return (
    <div className="min-h-screen bg-white text-text-primary font-sans selection:bg-baum-500 selection:text-white">
      <ProgressBar />
      <Header />
      
      <main>
        <Hero />
        <Problem />
        <RoiSection /> {/* Detailed ROI Section */}
        <Weapons />
        <Testimonials />
        <Profile />
        <Pricing />
        
        {/* FAQ Section */}
        <section className="py-16 bg-white">
            <div className="max-w-3xl mx-auto px-4 text-center">
                <h2 className="text-2xl font-bold text-text-primary mb-12 flex justify-center items-center animate-fade-up">
                    <HelpCircle className="mr-3 text-baum-500"/> よくある質問
                </h2>
                <div className="space-y-4 text-left">
                    <details className="group p-5 bg-bg-orange-light rounded-xl border border-baum-100 cursor-pointer transition-all hover:shadow-card animate-fade-up">
                        <summary className="font-bold text-text-primary list-none flex justify-between items-center text-lg">
                            まだ開業前ですが入会できますか？
                            <span className="transition group-open:rotate-180 text-text-tertiary">▼</span>
                        </summary>
                        <p className="text-sm text-text-secondary mt-4 pt-4 border-t border-baum-100 leading-relaxed">
                            はい、むしろ最適です。開業準備中の「事業計画」や「融資対策」のコンテンツも充実しており、失敗しないスタートダッシュが切れます。実際に開業前から入会され、スムーズに立ち上げられた方が多数いらっしゃいます。
                        </p>
                    </details>
                    
                    <details className="group p-5 bg-bg-orange-light rounded-xl border border-baum-100 cursor-pointer transition-all hover:shadow-card animate-fade-up" style={{ animationDelay: '0.1s' }}>
                        <summary className="font-bold text-text-primary list-none flex justify-between items-center text-lg">
                            ITやパソコンが苦手でも大丈夫ですか？
                            <span className="transition group-open:rotate-180 text-text-tertiary">▼</span>
                        </summary>
                        <p className="text-sm text-text-secondary mt-4 pt-4 border-t border-baum-100 leading-relaxed">
                            全く問題ありません。eラーニング動画では、ツールの導入方法から実際の画面操作まで、初心者の方にも分かりやすく解説しています。「パソコンが苦手」という50代・60代の経営者様も、動画を見ながら実践され成果を出されています。
                        </p>
                    </details>

                    <details className="group p-5 bg-bg-orange-light rounded-xl border border-baum-100 cursor-pointer transition-all hover:shadow-card animate-fade-up" style={{ animationDelay: '0.2s' }}>
                        <summary className="font-bold text-text-primary list-none flex justify-between items-center text-lg">
                            6ヶ月契約は必須ですか？
                            <span className="transition group-open:rotate-180 text-text-tertiary">▼</span>
                        </summary>
                        <p className="text-sm text-text-secondary mt-4 pt-4 border-t border-baum-100 leading-relaxed">
                            はい。経営改善には「学習→実践→改善」のPDCAサイクルを一通り回す期間が必要なため、最低6ヶ月のご継続をお願いしております。短期的なノウハウだけでなく、長く続く経営基盤を作っていただくためです。7ヶ月目以降はいつでも解約可能です。
                        </p>
                    </details>

                    <details className="group p-5 bg-bg-orange-light rounded-xl border border-baum-100 cursor-pointer transition-all hover:shadow-card animate-fade-up" style={{ animationDelay: '0.3s' }}>
                        <summary className="font-bold text-text-primary list-none flex justify-between items-center text-lg">
                            他のコンサルティングとの違いは何ですか？
                            <span className="transition group-open:rotate-180 text-text-tertiary">▼</span>
                        </summary>
                        <p className="text-sm text-text-secondary mt-4 pt-4 border-t border-baum-100 leading-relaxed">
                            「圧倒的なコストパフォーマンス」と「現役経営者のリアルな実践知」です。一般的なコンサルタントは月額数十万円かかりますが、当協会は月額1万円で全てのコンテンツを利用できます。また、机上の空論ではなく、代表自身が実際に成果を出している手法のみを提供している点が大きな違いです。
                        </p>
                    </details>

                    <details className="group p-5 bg-bg-orange-light rounded-xl border border-baum-100 cursor-pointer transition-all hover:shadow-card animate-fade-up" style={{ animationDelay: '0.4s' }}>
                        <summary className="font-bold text-text-primary list-none flex justify-between items-center text-lg">
                            忙しくて時間が取れなくても活用できますか？
                            <span className="transition group-open:rotate-180 text-text-tertiary">▼</span>
                        </summary>
                        <p className="text-sm text-text-secondary mt-4 pt-4 border-t border-baum-100 leading-relaxed">
                            はい。動画は1本5〜15分程度で、通勤中や隙間時間にスマホで視聴可能です。また、テンプレートを活用することで、資料作成や制度設計にかかる時間を大幅に短縮できます。「忙しい状態を抜け出すため」の仕組み化こそが、本プログラムの目的です。
                        </p>
                    </details>

                     <details className="group p-5 bg-bg-orange-light rounded-xl border border-baum-100 cursor-pointer transition-all hover:shadow-card animate-fade-up" style={{ animationDelay: '0.5s' }}>
                        <summary className="font-bold text-text-primary list-none flex justify-between items-center text-lg">
                            領収書は発行されますか？
                            <span className="transition group-open:rotate-180 text-text-tertiary">▼</span>
                        </summary>
                        <p className="text-sm text-text-secondary mt-4 pt-4 border-t border-baum-100 leading-relaxed">
                            はい。決済システム（Stripe）より、毎月の決済完了時にご登録のメールアドレスへ領収書が自動送付されます。経費精算にお使いいただけます。
                        </p>
                    </details>

                    <details className="group p-5 bg-bg-orange-light rounded-xl border border-baum-100 cursor-pointer transition-all hover:shadow-card animate-fade-up" style={{ animationDelay: '0.6s' }}>
                        <summary className="font-bold text-text-primary list-none flex justify-between items-center text-lg">
                            退会（解約）は簡単にできますか？
                            <span className="transition group-open:rotate-180 text-text-tertiary">▼</span>
                        </summary>
                        <p className="text-sm text-text-secondary mt-4 pt-4 border-t border-baum-100 leading-relaxed">
                            はい。最低契約期間（6ヶ月）経過後は、会員専用サイトのマイページより24時間いつでも解約手続きが可能です。電話での引き止め等は一切ございませんのでご安心ください。
                        </p>
                    </details>
                </div>
            </div>
        </section>
      </main>

      <LegalDocuments />
      <Footer />
      <StickyCta />
    </div>
  );
}

export default App;