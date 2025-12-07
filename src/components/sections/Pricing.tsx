// React / Library imports
import { useMemo } from 'react';
import { CheckCircle, CreditCard, Lock, Mail } from 'lucide-react';

// Constants / Config
import { STRIPE_CHECKOUT_URL } from '@/shared/constants';
import { pricingData } from '@/content';

// Components
import { RichCtaButton } from '@/components/ui/RichCtaButton';
import { UsageFlow } from '@/components/sections/UsageFlow';

export const Pricing = () => {
  const features = useMemo(() => pricingData.features, []);
  const bonuses = useMemo(() => pricingData.bonuses, []);
  const specialOffers = useMemo(() => pricingData.specialOffers, []);

  return (
    <section id="apply" className="gradient-bg relative">
      {/* Usage Flow Section */}
      <UsageFlow />
      
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
        
        {/* Rich Design Card */}
        <div className="bg-white rounded-xl shadow-card-hover overflow-hidden border-4 border-baum-500 relative hover-lift animate-fade-up">
          
          {/* Badge */}
          <div className="absolute top-0 right-0 gradient-cta text-white font-bold text-xs px-6 py-2 rounded-bl-xl shadow-cta z-20 tracking-widest uppercase">
            Standard Membership
          </div>

          <div className="grid md:grid-cols-5 h-full">
            {/* Left: Info */}
            <div className="md:col-span-3 p-8 md:p-10 flex flex-col justify-center">
              <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-2">{pricingData.planName}</h2>
              <p className="text-text-tertiary text-sm mb-6">経営の悩みを解決する全ての機能へアクセス</p>
              
              {/* Value Stack Summary */}
              <div className="mb-6 p-4 bg-bg-orange-light rounded-xl border border-baum-100">
                <p className="text-xs text-text-tertiary mb-1">総額</p>
                <p className="text-2xl font-bold text-text-secondary line-through decoration-2 decoration-red-500">
                  {pricingData.valueStack.totalValue.toLocaleString()}円相当
                </p>
                <p className="text-sm text-baum-500 font-bold mt-1">
                  → 月額{pricingData.monthlyPriceWithTax.toLocaleString()}円（税込）
                </p>
              </div>
              
              <ul className="space-y-3 mb-8">
                {features.map((item, i) => (
                  <li key={i} className="flex items-center text-text-secondary text-sm font-medium">
                    <CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={18} />
                    {item}
                  </li>
                ))}
              </ul>
              
              {/* Bonuses - Updated */}
              <div className="bg-bg-orange-light p-5 rounded-xl border border-baum-100">
                <p className="text-baum-500 font-bold text-sm mb-3 flex items-center">
                  <span className="mr-1">🎁</span> 入会特典
                </p>
                <div className="space-y-2">
                  {bonuses.map((bonus, i) => (
                    <div key={i} className="flex items-center text-xs text-text-secondary">
                      <span className={`text-[10px] font-bold px-1.5 rounded mr-2 text-white ${
                        bonus.type === 'PDF' ? 'bg-baum-400' : 
                        bonus.type === 'Excel' ? 'bg-green-500' : 
                        'bg-baum-500'
                      }`}>
                        {bonus.type}
                      </span>
                      {bonus.name}
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-baum-200">
                  <div className="flex flex-wrap gap-2">
                    {specialOffers.map((offer, i) => (
                      <span key={i} className={`text-xs font-bold px-2 py-1 rounded ${i === 0 ? 'bg-baum-500 text-white' : 'bg-green-500 text-white'}`}>
                        {offer.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Price & CTA */}
            <div className="md:col-span-2 bg-bg-cream p-8 md:p-10 flex flex-col justify-center items-center border-t md:border-t-0 md:border-l border-baum-100">
              <p className="text-text-tertiary text-xs font-bold mb-2">月額会費 (税込)</p>
              <div className="flex items-end text-text-primary mb-1">
                <span className="text-5xl md:text-6xl font-bold tracking-tighter">{pricingData.monthlyPriceWithTax.toLocaleString()}</span>
                <span className="text-xl font-bold mb-3 ml-1">円</span>
              </div>
              <p className="text-xs text-text-tertiary mb-1">年払い希望の場合は、直接ご連絡ください。<br />※割引がございます。</p>
              <p className="text-xs text-text-light mb-6 line-through">通常コンサル 30万円〜</p>
              
              <RichCtaButton 
                text="今すぐ申し込む" 
                subtext="Stripe決済ページへ移動します"
                href={STRIPE_CHECKOUT_URL}
                className="w-full"
              />
              
              {/* Microcopy: Security & Receipt */}
              <div className="mt-4 space-y-2">
                <p className="flex items-center justify-center gap-1.5 text-xs text-text-tertiary">
                  <Lock size={14} className="text-baum-500 flex-shrink-0" />
                  <span>決済情報はStripeにより暗号化され、安全に処理されます</span>
                </p>
                <p className="flex items-center justify-center gap-1.5 text-xs text-text-tertiary">
                  <Mail size={14} className="text-baum-500 flex-shrink-0" />
                  <span>領収書は決済直後にメールで自動送付されます</span>
                </p>
              </div>
              
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
                    <p>※ 当協会は、データを提供するだけではなく、<strong>3-6ヶ月間あなたに伴走し、PDCAを回しながら結果を出す</strong>ことを目指しています。成果を確実に出すため、<strong>最低6ヶ月間</strong>のご継続をお願いしております。7ヶ月目以降は会員サイトよりいつでも解約可能です。</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

