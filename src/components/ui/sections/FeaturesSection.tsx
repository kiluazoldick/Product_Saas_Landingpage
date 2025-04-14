export default function FeaturesSection() {
  const features = [
    {
      icon: "👥",
      title: "User Information",
      description:
        "Borem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu.",
    },
    {
      icon: "🫱🏾‍🫲🏾",
      title: "Deal Tracking",
      description:
        "Worem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu.",
    },
    {
      icon: "📊",
      title: "Pipeline Management",
      description:
        "Dorem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu.",
    },
    {
      icon: "📄",
      title: "Reporting Dashboard",
      description:
        "Yarem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu.",
    },
    {
      icon: "🎯",
      title: "Meeting Scheduling",
      description:
        "Bem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu.",
    },
    {
      icon: "📧",
      title: "Email Tracking",
      description:
        "Keem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu.",
    },
  ];

  return (
    <section className="py-20 bg-[#0E1330]">
      <div className="max-w-[920px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[120px]">
          <h2 className="text-3xl font-bold  mb-12 text-left text-linear-gradient bg-gradient-to-b from-[#F6F6F7] to-[#7E808F] bg-clip-text text-transparent">
            Powerful features to help you manage all your leads
          </h2>
          <p className="text-[#8F9BB7]">
            Apsum dolor sit amet consectetur. Aliquam elementum elementum in
            ultrices. Dui maecenas ut eros turpis ultrices metus morbi aliquet
            vel.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#0E1330] p-6 rounded-[4px] border border-[#282D45] shadow hover:shadow-lg transition"
            >
              <h2 className="text-[45px]">{feature.icon}</h2>
              <h3 className="text-xl text-[#F6F6F7] font-semibold mb-2">
                {feature.title}
              </h3>
              <p className="text-[#8F9BB7] text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
