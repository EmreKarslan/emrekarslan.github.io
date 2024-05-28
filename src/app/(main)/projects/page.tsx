import ContributionCard from "@/components/contribution-card";
import { contributions } from "@/constants/contributions";

const ContributionsPage = () => {
  return (
    <div className="min-h-full flex items-center justify-center flex-col m-auto">
      <h1 className="text-2xl font-bold mb-8">Contributions</h1>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {contributions.map((contribution, index) => (
          <ContributionCard key={index} {...contribution} />
        ))}
      </div>
    </div>
  );
};

export default ContributionsPage;
