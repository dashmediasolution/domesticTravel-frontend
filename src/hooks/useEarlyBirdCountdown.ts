"use client";

import { useEffect, useState } from "react";

const END_TIME = new Date(
    "2026-10-10T23:59:59+05:30"
).getTime();

const getTimeLeft = () => {
    const difference = END_TIME - Date.now();

    if (difference <= 0) {
        return {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        };
    }

    return {
        days: Math.floor(
            difference / (1000 * 60 * 60 * 24)
        ),
        hours: Math.floor(
            (difference / (1000 * 60 * 60)) % 24
        ),
        minutes: Math.floor(
            (difference / (1000 * 60)) % 60
        ),
        seconds: Math.floor(
            (difference / 1000) % 60
        ),
    };
};

export function useEarlyBirdCountdown() {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const updateCountdown = () => {
            setTimeLeft(getTimeLeft());
        };

        updateCountdown();

        const interval = setInterval(
            updateCountdown,
            1000
        );

        return () => clearInterval(interval);
    }, []);

    return timeLeft;
}