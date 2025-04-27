import { cn } from "@/helpers/cn";

interface MessageProps {
  message: string;
  isMine: boolean;
}

export const Message = ({ message, isMine }: MessageProps) => {
  return (
    <div
      className={cn(
        "w-full flex items-center r",
        isMine ? "justify-end" : "justify-start"
      )}
    >
      <div
        className={cn(
          "relative max-w-[90%] rounded-2xl p-4",
          isMine ? "bg-blue-500" : "bg-gray-600"
        )}
      >
        <p className="text-sm md:text-md">{message}</p>
      </div>
    </div>
  );
};
