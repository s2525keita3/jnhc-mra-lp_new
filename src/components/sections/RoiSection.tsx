// React / Library imports
import { useMemo } from 'react';
import { Wallet } from 'lucide-react';
import { roiData } from '@/content';

export const RoiSection = () => {
  const { comparison, roiCalculation } = useMemo(() => roiData, []);

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
                ROI & Cost Comparison
            </div>
           <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
             セミナー月2回参加するだけで元が取れる
           </h2>
           <p className="text-lg md:text-xl text-text-tertiary leading-relaxed mb-8">
             {comparison.title}
           </p>
           
           {/* Comparison Box */}
           <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
             <div className="bg-white border-2 border-slate-300 rounded-xl p-6 shadow-card">
               <h3 className="text-lg font-bold text-text-primary mb-4">{comparison.competitor.name}</h3>
               <div className="space-y-2 text-left">
                 <p className="text-sm text-text-secondary">セミナー: {comparison.competitor.seminarFee.toLocaleString()}円×{comparison.competitor.seminarsPerYear}回</p>
                 {comparison.competitor.elearningFee && comparison.competitor.elearningCount && (
                   <p className="text-sm text-text-secondary">e-learning: {comparison.competitor.elearningFee.toLocaleString()}円×{comparison.competitor.elearningCount}本</p>
                 )}
                 <p className="text-sm text-text-secondary">チラシテンプレート作成等</p>
                 <div className="pt-4 border-t border-slate-200">
                   <p className="text-xs text-text-tertiary mb-1">年間総額（試算）</p>
                   <p className="text-2xl font-bold text-red-500">約{comparison.competitor.totalCost.toLocaleString()}円</p>
                 </div>
               </div>
             </div>
             <div className="bg-white border-2 border-baum-500 rounded-xl p-6 shadow-card-hover">
               <h3 className="text-lg font-bold text-text-primary mb-4">{comparison.ourAssociation.name}</h3>
               <div className="space-y-2 text-left">
                 <p className="text-sm text-text-secondary">月額: {comparison.ourAssociation.monthlyFee.toLocaleString()}円</p>
                 <p className="text-sm text-baum-500 font-bold">✓ セミナー完全無料</p>
                 <p className="text-sm text-baum-500 font-bold">✓ e-learning見放題</p>
                 <p className="text-sm text-baum-500 font-bold">✓ チラシテンプレート配布</p>
                 <div className="pt-4 border-t border-baum-200">
                   <p className="text-xs text-text-tertiary mb-1">年間総額</p>
                   <p className="text-2xl font-bold text-baum-500">{comparison.ourAssociation.totalCost.toLocaleString()}円</p>
                   <p className="text-xs text-green-500 mt-1 font-bold">{comparison.ourAssociation.message}</p>
                 </div>
               </div>
             </div>
           </div>

           {/* Immediate Value Box */}
           <div className="inline-flex items-center justify-center bg-white border border-baum-200 rounded-xl p-6 shadow-card backdrop-blur-sm max-w-2xl w-full">
              <Wallet className="text-baum-500 mr-4 h-10 w-10 shrink-0" />
              <div className="text-left">
                  <p className="text-sm text-baum-600 font-bold mb-1">BREAK EVEN POINT</p>
                  <p className="text-lg md:text-xl font-medium text-text-primary">
                    {roiCalculation.description}
                    <br/>
                    <span className="text-baum-500 font-bold text-2xl">{roiCalculation.result}</span>
                  </p>
                  <p className="text-sm text-text-tertiary mt-2">
                    稟議や支払いの手間もなく、経営者の時間を有効活用できます。
                  </p>
              </div>
           </div>
        </div>

        {/* Value Stack Summary */}
        <div className="mb-12 text-center">
          <p className="text-lg text-text-tertiary mb-4">
            セミナー月2回参加するだけで元が取れる計算:
          </p>
          <div className="inline-block bg-white rounded-xl p-6 border-2 border-baum-500 shadow-card">
            <p className="text-sm text-text-tertiary mb-2">外部セミナー相場</p>
            <p className="text-2xl font-bold text-baum-500 mb-2">
              5,000円 × 2回 = 10,000円
            </p>
            <p className="text-sm text-text-secondary">
              月額10,000円の会費が、セミナー2回参加だけで回収可能
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};





