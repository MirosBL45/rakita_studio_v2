export default function ServiceCard({ icon, title, description }) {
  return (
    <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
      <div className="text-3xl text-accent mb-4 text-main-green">{icon}</div>
      <div className="mb-4">
        <div className="mb-2 text-lg">{title}</div>
        <p className="max-w-[350px] text-sm">{description}</p>
      </div>
    </div>
  );
}
