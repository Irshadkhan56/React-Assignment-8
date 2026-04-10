const PricingCard = ({
  planName,
  price,
  features,
  buttonText,
  highlight,
  children,
}) => {
  return (
    <div
      className={`rounded-xl h-[500px] flex flex-col gap-6 p-8 shadow-lg transition hover:scale-105
      ${highlight ? "border-4 border-blue-500 bg-blue-50" : "bg-white"}`}
    >
      {highlight && (
        <p className="text-blue-600 font-semibold mb-2">⭐ Most Popular</p>
      )}

      <h2 className="text-2xl font-bold mb-3">{planName}</h2>

      <p className="text-3xl font-bold mb-6">
        {price}
        <span className="text-gray-500 text-lg"> /month</span>
      </p>

      <ul className="space-y-2 mb-6">
        {features.map((item, index) => (
          <li key={index} className="text-gray-600">
            ✔ {item}
          </li>
        ))}
      </ul>

      {children}

      <button
        className={`w-full py-3 rounded-lg font-semibold
        ${highlight ? "bg-blue-600 text-white" : "bg-gray-900 text-white"}`}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default PricingCard;
