// src/components/Features.jsx

const features = [
  {
    title: "Task Scheduling",
    description: "Plan your day with ease and meet deadlines.",
  },
  {
    title: "Reminders & Alerts",
    description: "Never miss important tasks with timely notifications.",
  },
  {
    title: "Progress Tracking",
    description: "Track your progress and stay motivated.",
  },
];

export const Features = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-lg shadow hover:shadow-lg transition duration-300"
            >
              <h3 className="text-xl font-semibold text-blue-600 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
