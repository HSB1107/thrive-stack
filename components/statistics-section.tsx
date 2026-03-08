import { stats } from "@/data/stats";

const StatisticsSection = () => {
  return (
    <section className="w-full py-12 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {stats.map((stat, index) => (
                <div key={index} className="flex flex-col items-center justify-center space-y-2">
                    <h3 className="text-4xl font-bold">{stat.value}</h3>
                    <p className="text-muted-foreground">{stat.description}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
