// React / Library imports
import { TrendingUp } from 'lucide-react';

interface TimelineItemProps {
  step: string;
  label: string;
  amount: string;
  total: string;
  isLeft: boolean;
}

export const TimelineItem = ({ step, label, amount, total, isLeft }: TimelineItemProps) => (
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

