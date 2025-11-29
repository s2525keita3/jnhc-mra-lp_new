// React / Library imports
import { Star } from 'lucide-react';

export const Testimonials = () => {
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

