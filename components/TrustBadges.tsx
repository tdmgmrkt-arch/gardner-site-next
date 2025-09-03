import { Star, Clock, Shield, Award } from "lucide-react";

export function TrustBadges() {
  const badges = [
    {
      icon: Award,
      value: "30+",
      label: "Years Experience",
      color: "bg-red-600"
    },
    {
      icon: Star,
      value: "4.9★",
      label: "Google Rating", 
      color: "bg-red-600"
    },
    {
      icon: Clock,
      value: "24/7",
      label: "Emergency Service",
      color: "bg-gray-700"
    },
    {
      icon: Shield,
      value: "100%",
      label: "Licensed & Insured",
      color: "bg-gray-700"
    }
  ];

  return (
    <section className="py-12 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {badges.map((badge, index) => {
            const IconComponent = badge.icon;
            return (
              <div key={index} className="text-center group">
                <div className={`w-16 h-16 ${badge.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {badge.icon === Star ? (
                    <div className="flex items-center gap-1">
                      <span className="text-white text-lg font-bold">4.9</span>
                      <Star className="h-4 w-4 text-yellow-300 fill-current" />
                    </div>
                  ) : (
                    <IconComponent className="h-8 w-8 text-white" />
                  )}
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{badge.value}</div>
                <p className="text-gray-600 text-sm font-medium">{badge.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}