"use client";

import {
    AlignCenter,
    AlignLeft,
    AlignRight,
    Bold,
    Code,
    Code2,
    Heading1,
    Heading2,
    Heading3,
    Highlighter,
    ImagePlus,
    Italic,
    Link,
    List,
    ListOrdered,
    Minus,
    Quote,
    Redo2,
    Strikethrough,
    Underline,
    Undo2,
    Unlink,
} from "lucide-react";
import { Loader2, ImageIcon } from "lucide-react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import LinkExtension from "@tiptap/extension-link";
import UnderlineExtension from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import Highlight from "@tiptap/extension-highlight";
import Image from "@tiptap/extension-image";
import Placeholder from "@tiptap/extension-placeholder";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
interface BlogEditorProps {
    value: string;
    onChange: (value: string) => void;
}

export default function BlogEditor({
    value,
    onChange,
}: BlogEditorProps) {
    const [uploadingImage, setUploadingImage] = useState(false);
    const imageInputRef = useRef<HTMLInputElement>(null);
const handleImageUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
) => {
    const file = event.target.files?.[0];

    if (!file || !editor) {
        return;
    }

    setUploadingImage(true);

    try {
        const formData = new FormData();
        formData.append("file", file);

        const response = await fetch(
            "/api/upload/blog-content",
            {
                method: "POST",
                body: formData,
            }
        );
         const responseText = await response.text();
 
        if (!response.ok) {
            throw new Error(
                responseText || "Image upload failed"
            );
        }

        const data = JSON.parse(responseText);
         if (!data.data.url) {
            throw new Error(
                "Upload succeeded but image URL is missing"
            );
        }

        editor
            .chain()
            .focus()
            .setImage({
                src: data.data.url,
            })
            .run();
    } catch (error) {
        console.error(
            "Content image upload error:",
            error
        );

        alert(
            error instanceof Error
                ? error.message
                : "Image upload failed"
        );
    } finally {
        setUploadingImage(false);
        event.target.value = "";
    }
};
    const addImage = () => {
        imageInputRef.current?.click();
    };
    const editor = useEditor({
        immediatelyRender: false,

        extensions: [
            StarterKit,

            LinkExtension.configure({
                openOnClick: false,
                HTMLAttributes: {
                    class: "text-[#2FC2B0] underline cursor-pointer",
                },
            }),

            UnderlineExtension,

            TextAlign.configure({
                types: [
                    "heading",
                    "paragraph",
                ],
            }),

            Highlight.configure({
                multicolor: false,
            }),

            Image.configure({
                inline: false,
                allowBase64: true,
            }),

            Placeholder.configure({
                placeholder:
                    "Start writing your blog content...",
            }),
        ],

        content: value,

        onUpdate: ({ editor }) => {
            onChange(editor.getHTML());
        },
    });

    const addLink = () => {
        if (!editor) {
            return;
        }

        const previousUrl =
            editor.getAttributes("link").href;

        const url = window.prompt(
            "Enter URL",
            previousUrl || ""
        );

        if (url === null) {
            return;
        }

        if (url === "") {
            editor
                .chain()
                .focus()
                .unsetLink()
                .run();

            return;
        }

        editor
            .chain()
            .focus()
            .extendMarkRange("link")
            .setLink({
                href: url,
            })
            .run();
    };

    <Button
        type="button"
        size="icon"
        variant="ghost"
        title="Add Image"
        onClick={addImage}
        disabled={uploadingImage}
    >
        {uploadingImage ? (
            <Loader2 className="size-4 animate-spin" />
        ) : (
            <ImagePlus className="size-4" />
        )}
    </Button>


    if (!editor) {
        return (
            <div className="min-h-[450px] rounded-xl border" />
        );
    }

    const buttonClass = (
        active: boolean = false
    ) =>
        active
            ? "bg-[#2FC2B0]/15 text-[#00383B]"
            : "";

    return (
        <div className="overflow-hidden rounded-xl border bg-white">
            <input
                ref={imageInputRef}
                type="file"
                accept="image/jpeg,image/png,image/webp"
                className="hidden"
                onChange={handleImageUpload}
            />
            <div className="flex flex-wrap items-center gap-1 border-b bg-[#F8FAFA] p-2">
                {/* Text Formatting */}

                <Button
                    type="button"
                    size="icon"
                    variant="ghost"
                    title="Bold"
                    onClick={() =>
                        editor
                            .chain()
                            .focus()
                            .toggleBold()
                            .run()
                    }
                    className={buttonClass(
                        editor.isActive("bold")
                    )}
                >
                    <Bold className="size-4" />
                </Button>

                <Button
                    type="button"
                    size="icon"
                    variant="ghost"
                    title="Italic"
                    onClick={() =>
                        editor
                            .chain()
                            .focus()
                            .toggleItalic()
                            .run()
                    }
                    className={buttonClass(
                        editor.isActive("italic")
                    )}
                >
                    <Italic className="size-4" />
                </Button>

                <Button
                    type="button"
                    size="icon"
                    variant="ghost"
                    title="Underline"
                    onClick={() =>
                        editor
                            .chain()
                            .focus()
                            .toggleUnderline()
                            .run()
                    }
                    className={buttonClass(
                        editor.isActive("underline")
                    )}
                >
                    <Underline className="size-4" />
                </Button>

                <Button
                    type="button"
                    size="icon"
                    variant="ghost"
                    title="Strikethrough"
                    onClick={() =>
                        editor
                            .chain()
                            .focus()
                            .toggleStrike()
                            .run()
                    }
                    className={buttonClass(
                        editor.isActive("strike")
                    )}
                >
                    <Strikethrough className="size-4" />
                </Button>

                <Button
                    type="button"
                    size="icon"
                    variant="ghost"
                    title="Highlight"
                    onClick={() =>
                        editor
                            .chain()
                            .focus()
                            .toggleHighlight()
                            .run()
                    }
                    className={buttonClass(
                        editor.isActive("highlight")
                    )}
                >
                    <Highlighter className="size-4" />
                </Button>

                <div className="mx-1 h-6 w-px bg-border" />

                {/* Headings */}

                <Button
                    type="button"
                    size="icon"
                    variant="ghost"
                    title="Heading 1"
                    onClick={() =>
                        editor
                            .chain()
                            .focus()
                            .toggleHeading({
                                level: 1,
                            })
                            .run()
                    }
                    className={buttonClass(
                        editor.isActive(
                            "heading",
                            {
                                level: 1,
                            }
                        )
                    )}
                >
                    <Heading1 className="size-4" />
                </Button>

                <Button
                    type="button"
                    size="icon"
                    variant="ghost"
                    title="Heading 2"
                    onClick={() =>
                        editor
                            .chain()
                            .focus()
                            .toggleHeading({
                                level: 2,
                            })
                            .run()
                    }
                    className={buttonClass(
                        editor.isActive(
                            "heading",
                            {
                                level: 2,
                            }
                        )
                    )}
                >
                    <Heading2 className="size-4" />
                </Button>

                <Button
                    type="button"
                    size="icon"
                    variant="ghost"
                    title="Heading 3"
                    onClick={() =>
                        editor
                            .chain()
                            .focus()
                            .toggleHeading({
                                level: 3,
                            })
                            .run()
                    }
                    className={buttonClass(
                        editor.isActive(
                            "heading",
                            {
                                level: 3,
                            }
                        )
                    )}
                >
                    <Heading3 className="size-4" />
                </Button>

                <div className="mx-1 h-6 w-px bg-border" />

                {/* Lists */}

                <Button
                    type="button"
                    size="icon"
                    variant="ghost"
                    title="Bullet List"
                    onClick={() =>
                        editor
                            .chain()
                            .focus()
                            .toggleBulletList()
                            .run()
                    }
                    className={buttonClass(
                        editor.isActive(
                            "bulletList"
                        )
                    )}
                >
                    <List className="size-4" />
                </Button>

                <Button
                    type="button"
                    size="icon"
                    variant="ghost"
                    title="Numbered List"
                    onClick={() =>
                        editor
                            .chain()
                            .focus()
                            .toggleOrderedList()
                            .run()
                    }
                    className={buttonClass(
                        editor.isActive(
                            "orderedList"
                        )
                    )}
                >
                    <ListOrdered className="size-4" />
                </Button>

                <div className="mx-1 h-6 w-px bg-border" />

                {/* Alignment */}

                <Button
                    type="button"
                    size="icon"
                    variant="ghost"
                    title="Align Left"
                    onClick={() =>
                        editor
                            .chain()
                            .focus()
                            .setTextAlign("left")
                            .run()
                    }
                    className={buttonClass(
                        editor.isActive({
                            textAlign: "left",
                        })
                    )}
                >
                    <AlignLeft className="size-4" />
                </Button>

                <Button
                    type="button"
                    size="icon"
                    variant="ghost"
                    title="Align Center"
                    onClick={() =>
                        editor
                            .chain()
                            .focus()
                            .setTextAlign("center")
                            .run()
                    }
                    className={buttonClass(
                        editor.isActive({
                            textAlign: "center",
                        })
                    )}
                >
                    <AlignCenter className="size-4" />
                </Button>

                <Button
                    type="button"
                    size="icon"
                    variant="ghost"
                    title="Align Right"
                    onClick={() =>
                        editor
                            .chain()
                            .focus()
                            .setTextAlign("right")
                            .run()
                    }
                    className={buttonClass(
                        editor.isActive({
                            textAlign: "right",
                        })
                    )}
                >
                    <AlignRight className="size-4" />
                </Button>

                <div className="mx-1 h-6 w-px bg-border" />

                {/* Block Elements */}

                <Button
                    type="button"
                    size="icon"
                    variant="ghost"
                    title="Quote"
                    onClick={() =>
                        editor
                            .chain()
                            .focus()
                            .toggleBlockquote()
                            .run()
                    }
                    className={buttonClass(
                        editor.isActive(
                            "blockquote"
                        )
                    )}
                >
                    <Quote className="size-4" />
                </Button>

                <Button
                    type="button"
                    size="icon"
                    variant="ghost"
                    title="Code"
                    onClick={() =>
                        editor
                            .chain()
                            .focus()
                            .toggleCode()
                            .run()
                    }
                    className={buttonClass(
                        editor.isActive("code")
                    )}
                >
                    <Code className="size-4" />
                </Button>

                <Button
                    type="button"
                    size="icon"
                    variant="ghost"
                    title="Code Block"
                    onClick={() =>
                        editor
                            .chain()
                            .focus()
                            .toggleCodeBlock()
                            .run()
                    }
                    className={buttonClass(
                        editor.isActive(
                            "codeBlock"
                        )
                    )}
                >
                    <Code2 className="size-4" />
                </Button>

                <Button
                    type="button"
                    size="icon"
                    variant="ghost"
                    title="Horizontal Rule"
                    onClick={() =>
                        editor
                            .chain()
                            .focus()
                            .setHorizontalRule()
                            .run()
                    }
                >
                    <Minus className="size-4" />
                </Button>

                <div className="mx-1 h-6 w-px bg-border" />

                {/* Links & Images */}

                <Button
                    type="button"
                    size="icon"
                    variant="ghost"
                    title="Add Link"
                    onClick={addLink}
                    className={buttonClass(
                        editor.isActive("link")
                    )}
                >
                    <Link className="size-4" />
                </Button>

                <Button
                    type="button"
                    size="icon"
                    variant="ghost"
                    title="Remove Link"
                    disabled={
                        !editor.isActive("link")
                    }
                    onClick={() =>
                        editor
                            .chain()
                            .focus()
                            .unsetLink()
                            .run()
                    }
                >
                    <Unlink className="size-4" />
                </Button>

                <Button
                    type="button"
                    size="icon"
                    variant="ghost"
                    title={
                        uploadingImage
                            ? "Uploading image..."
                            : "Add Image"
                    }
                    onClick={addImage}
                    disabled={uploadingImage}
                >
                    {uploadingImage ? (
                        <Loader2 className="size-4 animate-spin" />
                    ) : (
                        <ImagePlus className="size-4" />
                    )}
                </Button>

                <div className="mx-1 h-6 w-px bg-border" />

                {/* History */}

                <Button
                    type="button"
                    size="icon"
                    variant="ghost"
                    title="Undo"
                    disabled={
                        !editor.can().undo()
                    }
                    onClick={() =>
                        editor
                            .chain()
                            .focus()
                            .undo()
                            .run()
                    }
                >
                    <Undo2 className="size-4" />
                </Button>

                <Button
                    type="button"
                    size="icon"
                    variant="ghost"
                    title="Redo"
                    disabled={
                        !editor.can().redo()
                    }
                    onClick={() =>
                        editor
                            .chain()
                            .focus()
                            .redo()
                            .run()
                    }
                >
                    <Redo2 className="size-4" />
                </Button>
            </div>

     <div className="relative">
    <div
        className="
            [&_.ProseMirror]:min-h-[400px]
            [&_.ProseMirror]:outline-none
            [&_.ProseMirror_img]:my-4
            [&_.ProseMirror_img]:block
            [&_.ProseMirror_img]:max-w-full
            [&_.ProseMirror_img]:h-auto
            [&_.ProseMirror_img]:rounded-lg
        "
    >
        <EditorContent editor={editor} />
    </div>

    {uploadingImage && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-white/70">
            <div className="flex items-center gap-3 rounded-lg bg-white px-4 py-3 shadow-md">
                <Loader2 className="size-5 animate-spin text-[#2FC2B0]" />

                <span className="text-sm font-medium text-[#00383B]">
                    Uploading image...
                </span>
            </div>
        </div>
    )}
</div>
        </div>
    );
}