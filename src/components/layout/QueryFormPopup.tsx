"use client";

import { useEffect, useState } from "react";

import ContactInquiryForm from "@/app/(site)/ContactInquiryForm";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

const popupStorageKey = "query-form-popup-shown-v1";

export default function QueryFormPopup() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const handleOpenQueryForm = () => {
            window.localStorage.setItem(popupStorageKey, "true");
            setOpen(true);
        };

        window.addEventListener("open-query-form", handleOpenQueryForm);

        const timeoutId = window.localStorage.getItem(popupStorageKey)
            ? undefined
            : window.setTimeout(() => {
                if (window.localStorage.getItem(popupStorageKey)) {
                    return;
                }

                window.localStorage.setItem(popupStorageKey, "true");
                setOpen(true);
            }, 15000);

        return () => {
            if (timeoutId !== undefined) {
                window.clearTimeout(timeoutId);
            }
            window.removeEventListener("open-query-form", handleOpenQueryForm);
        };
    }, []);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent
                className="w-[75vw]! max-w-[75vw]! max-h-[90dvh] overflow-y-auto overflow-x-hidden rounded-2xl border-0 bg-white p-0 shadow-2xl sm:rounded-3xl lg:h-140 lg:max-h-140"
            >
                <DialogHeader className="sr-only">
                    <DialogTitle>Quick Inquiry</DialogTitle>
                    <DialogDescription>
                        Share your details and our travel team will contact you.
                    </DialogDescription>
                </DialogHeader>
                 <ContactInquiryForm />
             </DialogContent>
        </Dialog>
    );
}