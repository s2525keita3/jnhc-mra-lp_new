interface RoiCardProps {
  number: string;
  title: string;
  amount: string;
  desc: string;
}

export const RoiCard = ({ number, title, amount, desc }: RoiCardProps) => (
    <div className="bg-white border border-baum-100 rounded-xl p-6 shadow-card hover:border-baum-300 hover-lift transition duration-300 relative overflow-hidden group h-full">
        <div className="absolute -right-4 -top-6 text-[8rem] font-black text-baum-100 opacity-30 group-hover:opacity-50 transition select-none leading-none pointer-events-none">{number}</div>
        <div className="relative z-10">
            <h4 className="text-sm font-bold text-text-secondary mb-1">{title}</h4>
            <div className="text-3xl font-bold text-baum-500 mb-4">{amount}</div>
            <p className="text-text-tertiary text-xs font-medium leading-relaxed">{desc}</p>
        </div>
    </div>
);







