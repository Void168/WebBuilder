import { FileIcon, X } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { UploadDropzone } from "@/libs/uploadthing";

type Props = {
  apiEndpoint: "agencyLogo" | "avatar" | "subaccountLogo";
  onChange: (url?: string) => void;
  value?: string;
};

const FileUpload = ({ apiEndpoint, onChange, value }: Props) => {
  const type = value?.split(".").pop();

  if (value) {
    return (
      <div className="flex flex-col justify-center items-center">
        {type !== "pdf" ? (
          <div className="relative w-40 h-40">
            <Image
              src={value}
              alt="uploaded image"
              className="object-container"
              fill
            />
          </div>
        ) : (
          <div>
            <FileIcon />
            <a
              href={value}
              target="_blank"
              rel="noopener_noreferrer"
              className="ml-2 text-sm text-emerald-500 dark:text-emerald-400 hover:underline"
            >
              View PDF
            </a>
          </div>
        )}
        <Button onClick={() => onChange("")} variant="ghost" type="button">
          <X className="w-4 h-4" />
          Remove Logo
        </Button>
      </div>
    );
  }

  return (
    <div className="w-full bg-muted/30">
      <UploadDropzone
        endpoint={apiEndpoint}
        onClientUploadComplete={(res) => {
          onChange(res?.[0].url);
        }}
        onUploadError={(error: Error) => {
          console.log(error);
        }}
      />
    </div>
  );
};

export default FileUpload;
