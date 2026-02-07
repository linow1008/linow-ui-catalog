import { cn } from "@/lib/utils";

interface UserProfileProps {
  className?: string;
  children?: React.ReactNode;
}

export function UserProfile({ className, children }: UserProfileProps) {
  return <div className={cn("", className)}>{children}</div>;
}
