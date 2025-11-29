// React / Library imports
import { useMemo } from 'react';
import { CheckCircle, Clock, Zap, ShieldCheck, RefreshCw } from 'lucide-react';
import { closingData } from '@/content';
import { RichCtaButton } from '@/components/ui/RichCtaButton';
import { STRIPE_CHECKOUT_URL } from '@/shared/constants';

export const Closing = () => {
  const { headline, message, cta, urgency, benefits } = useMemo(() => closingData, []);

  return (
    <section className="py-24 bg-gradient-to-b from-bg-cream via-white to-bg-cream relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-baum-500 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-baum-400 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 relative z-10">
        {/* Headline */}
        <div className="text-center mb-8 animate-fade-up">
          <div className="inline-block px-4 py-2 bg-baum-500/10 border border-baum-500/30 rounded-full mb-4">
            <p className="text-sm font-bold text-baum-600 flex items-center gap-2">
              <Clock size={16} className="animate-pulse" />
              {urgency.text}
            </p>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-6 leading-tight">
            {headline}
          </h2>
        </div>

        {/* Main CTA Box */}
        <div className="relative group">
          {/* Glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-baum-500 via-baum-400 to-baum-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition duration-1000 animate-pulse"></div>
          
          <div className="relative bg-white rounded-2xl p-8 md:p-12 shadow-[0_20px_60px_rgba(255,107,0,0.2)] border-4 border-baum-500 transform hover:scale-[1.02] transition-all duration-300 animate-fade-up">
            {/* Decorative elements */}
            <div className="absolute top-4 right-4 w-20 h-20 bg-baum-100 rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute bottom-4 left-4 w-32 h-32 bg-baum-200 rounded-full opacity-10 blur-3xl"></div>
            
            <div className="relative z-10">
              {/* Message */}
              <div className="mb-8 space-y-4">
                <p className="text-base md:text-lg text-text-secondary leading-relaxed whitespace-pre-line">
                  {message}
                </p>
                
                {/* Benefits list */}
                <div className="grid md:grid-cols-3 gap-4 mt-6 pt-6 border-t border-baum-100">
                  {benefits.map((benefit, index) => {
                    const IconComponent = 
                      benefit.icon === 'Zap' ? Zap :
                      benefit.icon === 'ShieldCheck' ? ShieldCheck :
                      benefit.icon === 'RefreshCw' ? RefreshCw :
                      CheckCircle;
                    
                    return (
                      <div key={index} className="flex items-start gap-3 animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                        <div className="w-10 h-10 bg-baum-100 rounded-lg flex items-center justify-center shrink-0">
                          <IconComponent className="text-baum-500" size={20} />
                        </div>
                        <div className="text-left flex-1">
                          <p className="text-sm font-bold text-text-primary mb-1">{benefit.title}</p>
                          <p className="text-xs text-text-tertiary leading-relaxed">{benefit.subtitle}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* CTA Button */}
              <div className="max-w-lg mx-auto">
                <RichCtaButton 
                  text={cta.main} 
                  subtext={cta.sub}
                  href={STRIPE_CHECKOUT_URL}
                  className="w-full transform hover:scale-105 transition-transform duration-300"
                />
                
                {/* Trust indicators */}
                <div className="mt-6 flex items-center justify-center gap-6 text-xs text-text-tertiary">
                  <div className="flex items-center gap-1">
                    <CheckCircle size={14} className="text-green-500" />
                    <span>SSL暗号化</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle size={14} className="text-green-500" />
                    <span>安全な決済</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle size={14} className="text-green-500" />
                    <span>即時アクセス</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional reassurance */}
        <p className="text-center text-sm text-text-tertiary mt-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          400名以上の経営者が選んだ、実践的な経営支援プラットフォーム
        </p>
      </div>
    </section>
  );
};

