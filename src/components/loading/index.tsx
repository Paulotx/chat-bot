export const Loading = () => {
  return (
    <div className="flex justify-start">
      <div className="bg-gray-600 rounded-3xl px-4 py-2 max-w-[80%]">
        <div className="flex space-x-2">
          <div
            className="w-2 h-2 rounded-full bg-gray-300 animate-bounce"
            style={{ animationDelay: "0ms" }}
          />
          <div
            className="w-2 h-2 rounded-full bg-gray-300 animate-bounce"
            style={{ animationDelay: "150ms" }}
          />
          <div
            className="w-2 h-2 rounded-full bg-gray-300 animate-bounce"
            style={{ animationDelay: "300ms" }}
          />
        </div>
      </div>
    </div>
  );
};
