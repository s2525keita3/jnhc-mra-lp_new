import { CheckCircle } from 'lucide-react';
import { pricingData } from '@/content';

export const ValueStack = () => {
  const { valueStack } = pricingData;

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
                Value Stack
            </div>
           <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
             こんなに入ってこの価格!?
           </h2>
           <p className="text-lg md:text-xl text-text-tertiary leading-relaxed mb-8">
             総額<span className="text-text-primary font-bold text-2xl mx-2 line-through decoration-2 decoration-red-500">{valueStack.totalValue.toLocaleString()}</span>円相当
             <br className="md:hidden"/>
             <span className="text-baum-500 font-bold text-3xl mx-2">→ 月額{valueStack.monthlyPrice.toLocaleString()}円</span>
           </p>
        </div>

        {/* Value Stack List */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {valueStack.items.map((item, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 border border-baum-100 shadow-card hover:border-baum-300 hover-lift transition duration-300 relative overflow-hidden group"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4 flex-1">
                  <div className="w-10 h-10 bg-baum-100 rounded-full flex items-center justify-center text-baum-600 font-bold text-sm shrink-0">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-text-primary mb-2">{item.name}</h4>
                    {item.period && (
                      <p className="text-xs text-text-tertiary">/{item.period}</p>
                    )}
                  </div>
                </div>
                <div className="text-right">
                  {item.value > 0 ? (
                    <>
                      <p className="text-2xl font-bold text-baum-500">
                        {item.value.toLocaleString()}<span className="text-sm">円</span>
                      </p>
                      {item.period && (
                        <p className="text-xs text-text-tertiary">{item.period}</p>
                      )}
                    </>
                  ) : (
                    <p className="text-lg font-bold text-baum-500">{item.period}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Total Value Box */}
        <div className="text-center relative z-20">
          <div className="inline-block relative group cursor-default">
            <div className="absolute -inset-1 gradient-cta rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-white rounded-xl px-8 md:px-16 py-8 border border-baum-200 shadow-card-hover">
              <p className="text-text-tertiary text-xs md:text-sm mb-2 font-bold uppercase tracking-[0.2em]">総額</p>
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="text-4xl md:text-5xl font-bold text-text-secondary line-through decoration-2 decoration-red-500">
                  {valueStack.totalValue.toLocaleString()}<span className="text-2xl">円</span>
                </div>
                <div className="text-3xl text-text-tertiary">→</div>
                <div className="text-4xl md:text-5xl font-bold gradient-text">
                  {valueStack.monthlyPrice.toLocaleString()}<span className="text-2xl text-text-primary ml-2">円</span>
                </div>
              </div>
              <div className="w-full h-px bg-gradient-to-r from-transparent via-baum-200 to-transparent mb-5"></div>
              <p className="text-text-primary font-bold text-lg md:text-xl mb-2">
                セミナー月2回参加するだけで元が取れる！
              </p>
              <p className="text-text-tertiary text-sm">
                稟議や支払いの手間もなく、経営者の時間を有効活用できます
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};



