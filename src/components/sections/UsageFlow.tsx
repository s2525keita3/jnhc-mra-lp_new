// React / Library imports
import { useMemo } from 'react';
import { CreditCard, MessageCircle, Zap, ChevronRight, ArrowDown } from 'lucide-react';

// Content Data
import { usageFlowData } from '@/content';

export const UsageFlow = () => {
  const { title, steps } = useMemo(() => usageFlowData, []);

  return (
    <section className="py-16 bg-bg-cream relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-baum-400 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-baum-300 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-2xl md:text-4xl font-bold text-text-primary leading-tight whitespace-pre-line">
            {title.split('3分').map((part, i) => 
              i === 0 ? part : (
                <span key={i}>
                  <span className="text-baum-500 font-bold">3分</span>
                  {part}
                </span>
              )
            )}
          </h2>
        </div>

        {/* Steps Flow */}
        <div className="flex flex-col md:flex-row items-center md:items-stretch gap-6 md:gap-4">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center w-full md:w-1/3">
              {/* Step Card */}
              <div className="bg-white rounded-xl shadow-card border border-baum-100 p-6 md:p-8 w-full hover-lift animate-fade-up relative overflow-hidden group"
                   style={{ animationDelay: `${index * 0.1}s` }}>
                {/* Step Number Background */}
                <div className="absolute top-0 right-0 text-[120px] md:text-[150px] font-black text-slate-50 leading-none opacity-30 select-none">
                  {String(index + 1).padStart(2, '0')}
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-baum-100 rounded-xl flex items-center justify-center text-baum-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {step.icon === 'CreditCard' && <CreditCard size={32} />}
                    {step.icon === 'MessageCircle' && <MessageCircle size={32} />}
                    {step.icon === 'Zap' && <Zap size={32} />}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-bold text-text-primary mb-2">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-text-tertiary leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Arrow (between steps) */}
              {index < steps.length - 1 && (
                <>
                  {/* Desktop: Horizontal Arrow */}
                  <div className="hidden md:flex items-center justify-center mx-2 text-baum-400 animate-fade-up"
                       style={{ animationDelay: `${(index + 1) * 0.1}s` }}>
                    <ChevronRight size={32} className="flex-shrink-0" />
                  </div>
                  
                  {/* Mobile: Vertical Arrow */}
                  <div className="md:hidden flex items-center justify-center my-2 text-baum-400 animate-fade-up"
                       style={{ animationDelay: `${(index + 1) * 0.1}s` }}>
                    <ArrowDown size={24} className="flex-shrink-0" />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

