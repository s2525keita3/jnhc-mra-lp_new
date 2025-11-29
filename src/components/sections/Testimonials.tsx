// React / Library imports
import { useMemo } from 'react';
import { Star } from 'lucide-react';

const testimonialsDataStatic = [
  {
    name: "T.K. 様",
    phase: "開業前 6ヶ月",
    borderColorClass: "border-baum-500",
    phaseColorClass: "text-baum-600",
    text: "「初めての開業で何から手をつければいいか不安でしたが、<strong>『開業ロードマップ』と『融資資料テンプレ』</strong>のおかげで、スムーズに資金調達できました。最初から正しい型を知れたのは大きいです。」"
  },
  {
    name: "S.M. 様",
    phase: "開業 4ヶ月目",
    borderColorClass: "border-baum-400",
    phaseColorClass: "text-baum-500",
    delay: "0.2s",
    text: "「現場が忙しくなり事務作業が崩壊しかけていました。動画で学んだ<strong>『生成AIによる記録業務効率化』</strong>を導入し、スタッフの残業が激減。もっと早く知りたかったです。」"
  },
  {
    name: "K.S. 様",
    phase: "開業 2年目",
    borderColorClass: "border-baum-600",
    phaseColorClass: "text-baum-600",
    delay: "0.3s",
    text: "「売上は上がっても人が定着せず悩んでいました。コミュニティで<strong>『評価制度の運用』</strong>について相談し、納得感のある給与体系に変更。離職が止まり、組織として強くなりました。」"
  }
];

export const Testimonials = () => {
  const testimonialsData = useMemo(() => testimonialsDataStatic, []);

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
          {testimonialsData.map((testimonial, i) => (
            <div 
              key={i} 
              className={`bg-white rounded-xl p-6 shadow-card border-t-4 ${testimonial.borderColorClass} hover-lift animate-fade-up`}
              style={testimonial.delay ? { animationDelay: testimonial.delay } : undefined}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="font-bold text-lg text-text-primary">{testimonial.name}</p>
                  <p className={`text-xs font-bold ${testimonial.phaseColorClass} bg-bg-orange-light inline-block px-2 py-1 rounded mt-1`}>
                    {testimonial.phase}
                  </p>
                </div>
                <div className="flex text-baum-400">
                  {[...Array(5)].map((_, j) => <Star key={j} size={14} fill="currentColor" />)}
                </div>
              </div>
              <p className="text-sm text-text-secondary leading-relaxed" dangerouslySetInnerHTML={{ __html: testimonial.text }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
