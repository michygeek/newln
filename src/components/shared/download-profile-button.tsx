import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export function DownloadProfileButton({
  className,
  variant = "outline",
}: {
  className?: string;
  variant?: "outline" | "default";
}) {
  return (
    <Button
      variant={variant}
      nativeButton={false}
      className={className}
      render={
        <a href="/downloads/Newline-West-Africa-Company-Profile.pdf" download>
          <Download className="size-4" />
          Download Company Profile
        </a>
      }
    />
  );
}
