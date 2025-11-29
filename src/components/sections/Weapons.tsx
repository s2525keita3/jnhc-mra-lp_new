// React / Library imports
import { useState, useMemo, useCallback } from 'react';
import { PlayCircle, Download, ShieldCheck, FileText, Users, CheckCircle, Layers } from 'lucide-react';
import { programData } from '@/content';

export const Weapons = () => {
  const [activeTab, setActiveTab] = useState<'seminar' | 'elearning' | 'tools' | 'community'>('seminar');

  const content = useMemo(() => {
    const weapons = programData.weapons;
    return {
      seminar: weapons[0].details.schedule.flatMap(s => s.themes.map(theme => ({ title: theme, type: s.type }))),
      elearning: weapons[1].details.categories.flatMap(cat => 
        cat.topics.map(topic => ({ title: topic, type: cat.name }))
      ),
      tools: weapons[2].details.tools.flatMap(tool => 
        tool.examples.map(example => ({ title: example, type: tool.category }))
      ),
      community: [
        { title: "月1回オンライン交流会", type: "交流会" },
        { title: "じょんのミニ講義", type: "講義" },
        { title: "グループディスカッション", type: "ディスカッション" },
        { title: "成功事例の共有", type: "共有" },
        { title: "会員専用コミュニティ（Facebookページ、公式LINE）", type: "コミュニティ" },
      ]
    };
  }, []);

  const handleTabChange = useCallback((tab: 'seminar' | 'elearning' | 'tools' | 'community') => {
    setActiveTab(tab);
  }, []);

  return (
    <section className="py-24 bg-bg-cream">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-20 animate-fade-up">
          <span className="text-baum-500 font-bold tracking-widest text-sm uppercase bg-bg-orange-light px-3 py-1 rounded-full">Premium Resources</span>
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary mt-6 leading-tight">
            {programData.title}
          </h2>
          <p className="text-text-tertiary mt-6 text-lg max-w-2xl mx-auto">
            {programData.subtitle}
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
                        <h3 className="font-bold text-2xl">01. 毎月2本のセミナー完全無料</h3>
                        <p className="text-white/90 text-sm">採用セミナー（第2水曜）、営業セミナー（第4水曜）。全てアーカイブ視聴可。</p>
                    </div>
                </div>
            </div>
            
            <div className="p-6 md:p-8 bg-white">
                {/* Tabs */}
                <div className="flex flex-wrap gap-2 mb-6 border-b border-slate-100 pb-4">
                    <button onClick={() => handleTabChange('seminar')} className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${activeTab === 'seminar' ? 'gradient-cta text-white shadow-cta' : 'bg-slate-100 text-text-tertiary hover:bg-slate-200'}`}>
                        📅 セミナー
                    </button>
                    <button onClick={() => handleTabChange('elearning')} className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${activeTab === 'elearning' ? 'gradient-cta text-white shadow-cta' : 'bg-slate-100 text-text-tertiary hover:bg-slate-200'}`}>
                        🎓 e-learning
                    </button>
                    <button onClick={() => handleTabChange('tools')} className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${activeTab === 'tools' ? 'gradient-cta text-white shadow-cta' : 'bg-slate-100 text-text-tertiary hover:bg-slate-200'}`}>
                        🧰 ツールBOX
                    </button>
                    <button onClick={() => handleTabChange('community')} className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${activeTab === 'community' ? 'gradient-cta text-white shadow-cta' : 'bg-slate-100 text-text-tertiary hover:bg-slate-200'}`}>
                        👥 交流会
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
                <h3 className="font-bold text-xl text-text-primary">02. 50本以上のe-learning見放題</h3>
            </div>
            <p className="text-sm text-text-tertiary mb-6 leading-relaxed">
                {programData.weapons[1].description}
            </p>
            <div className="space-y-3 mt-auto">
                {programData.weapons[1].details.categories.map((category, i) => (
                    <div key={i} className="flex items-center p-3 bg-bg-orange-light rounded-lg border border-baum-100">
                        <div className="w-8 h-8 bg-baum-100 text-baum-600 rounded flex items-center justify-center font-bold text-[10px] mr-3 shrink-0">
                            <Layers size={16} />
                        </div>
                        <div>
                            <p className="text-sm font-bold text-text-secondary">{category.name} ({category.count}本)</p>
                            <p className="text-xs text-text-tertiary">{category.topics.join('、')}</p>
                        </div>
                    </div>
                ))}
            </div>
          </div>

          {/* Weapon 3: Community */}
          <div className="bg-white rounded-xl p-8 shadow-card border border-baum-100 hover-lift transition group h-full flex flex-col animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-baum-100 rounded-xl flex items-center justify-center text-baum-500 group-hover:scale-110 transition duration-300">
                    <FileText size={24} />
                </div>
                <h3 className="font-bold text-xl text-text-primary">03. 即効ツールBOX 30種</h3>
            </div>
            <p className="text-sm text-text-tertiary mb-6 leading-relaxed">
                {programData.weapons[2].description}
            </p>
            
            <div className="bg-bg-orange-light rounded-xl p-4 border border-baum-100 mt-auto">
                <p className="text-xs font-bold text-text-tertiary mb-3 uppercase tracking-wider">ツール例</p>
                <div className="space-y-4">
                    {programData.weapons[2].details.tools.map((toolCategory, i) => (
                        <div key={i} className="flex gap-3">
                            <div className="w-6 h-6 rounded-full bg-baum-200 flex items-center justify-center text-[10px] font-bold text-baum-700 shrink-0">T</div>
                            <div className="bg-white p-3 rounded-r-xl rounded-bl-xl shadow-sm text-xs text-text-secondary border border-baum-100">
                                <span className="font-bold text-baum-500 block mb-1">【{toolCategory.category}】</span>
                                {toolCategory.examples.length > 0 ? toolCategory.examples.join('、') : '各種テンプレート'}
                            </div>
                        </div>
                    ))}
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
                            <Users size={40} />
                        </div>
                    </div>
                    <div className="text-center md:text-left flex-grow">
                        <div className="inline-block bg-baum-100 text-baum-600 text-xs font-bold px-3 py-1 rounded-full mb-3">
                            コスパ最強の理由
                        </div>
                        <h3 className="font-bold text-2xl text-text-primary mb-2">04. 月1交流会＋コミュニティ</h3>
                        <p className="text-text-tertiary font-medium leading-relaxed">
                            月1回のオンライン交流会（60分）。<span className="bg-bg-orange-light px-1 font-bold text-text-primary">全国の経営者とつながる</span>、孤独解消、成功事例の共有。<br className="hidden md:block"/>
                            会員専用コミュニティ（Facebookページ、公式LINE）で24時間質問投稿OK。<br className="hidden md:block"/>
                            綺麗な成功談だけでなく、生々しい現場の悩みや「ここだけの話」が飛び交います。
                        </p>
                    </div>
                    <div className="shrink-0 bg-bg-orange-light p-4 rounded-xl border border-baum-100 text-center min-w-[200px]">
                        <p className="text-xs text-baum-600 font-bold mb-2">月1回の交流会</p>
                        <ul className="text-left space-y-1 text-[10px] text-text-secondary">
                            <li className="flex items-start">
                                <span className="text-baum-500 mr-1">✓</span>
                                <span>じょん本人からの直接アドバイス</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-baum-500 mr-1">✓</span>
                                <span>経営者同士の情報交換</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-baum-500 mr-1">✓</span>
                                <span>成功事例の共有</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-baum-500 mr-1">✓</span>
                                <span>孤独解消</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

