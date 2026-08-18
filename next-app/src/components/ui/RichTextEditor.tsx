"use client";

import dynamic from "next/dynamic";
import "react-quill-new/dist/quill.snow.css";
import { useMemo } from "react";

interface RichTextEditorProps {
  value: string;
  onChange: (val: string) => void;
}

export default function RichTextEditor({ value, onChange }: RichTextEditorProps) {
  const ReactQuill = useMemo(() => dynamic(() => import("react-quill-new"), { ssr: false }), []);

  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      ['link'],
      ['clean']
    ],
  };

  return (
    <div className="dark-quill w-full rounded-lg border border-gold/20 bg-[#0d0a0b] overflow-hidden">
      <ReactQuill theme="snow" value={value || ""} onChange={onChange} modules={modules} />
    </div>
  );
}
