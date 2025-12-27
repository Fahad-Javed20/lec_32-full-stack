import React from "react";
import { CheckCircle, Users, Award, Headphones } from "lucide-react";

type Stat = {
  icon: React.ElementType;
  title: string;
  description: string;
};

const stats: Stat[] = [
  { icon: CheckCircle, title: "2.7K", description: "Downloads" },
  { icon: Users, title: "1.3K", description: "Active Users" },
  { icon: Award, title: "64", description: "Awards" },
  { icon: Headphones, title: "46", description: "Support Tickets" },
];

interface StatisticsItemProps {
  Icon: React.ElementType;
  statNumber: string;
  label: string;
}

const StatisticsItem = ({ Icon, statNumber, label }: StatisticsItemProps) => {
  return (
    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
      <div className="border-2 border-gray-200 px-6 py-8 rounded-lg hover:shadow-lg transition-shadow duration-300">
        <Icon className="text-indigo-500 w-12 h-12 mb-4 mx-auto" />
        <h2 className="text-3xl font-semibold text-gray-900 mb-2 text-center">{statNumber}</h2>
        <p className="text-gray-600 text-center">{label}</p>
      </div>
    </div>
  );
};

interface StatisticsComponentProps {
  children: React.ReactNode;
}

const StatisticsComponent = ({ children }: StatisticsComponentProps) => {
  const childrenArray = React.Children.toArray(children);
  const title = childrenArray[0]; 
  const desc = childrenArray[1];  

  return (
    <section className="text-gray-600 body-font bg-gray-50 py-24">
      <div className="container mx-auto px-5">
        <div className="flex flex-col text-center w-full mb-20">
          <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </div>
          <div className="lg:w-2/3 mx-auto text-gray-600 text-base leading-relaxed">
            {desc}
          </div>
        </div>

        <div className="flex flex-wrap -m-4 text-center">
          {stats.map((stat) => (
            <StatisticsItem
              key={stat.title}
              Icon={stat.icon}
              statNumber={stat.title}
              label={stat.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsComponent;
