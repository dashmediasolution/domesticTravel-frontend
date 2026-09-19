"use client";

import { useEffect, useState } from "react";
import {
    Cloud,
    CloudDrizzle,
    CloudFog,
    CloudLightning,
    CloudRain,
    CloudSnow,
    CloudSun,
    Loader2,
    Sun,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface WeatherDay {
    date: string;
    maxTemp: number;
    minTemp: number;
    weatherCode: number;
}

interface WeatherForecastProps {
    destination: string;
    latitude: number;
    longitude: number;
    className?: string;
}

const getWeatherInfo = (code: number) => {
    if (code === 0) return { label: "Clear", icon: Sun, color: "text-[#F7B95E]" };

    if ([1, 2].includes(code)) {
        return { label: "Partly Sunny", icon: CloudSun, color: "text-[#F7B95E]" };
    }

    if (code === 3) {
        return { label: "Cloudy", icon: Cloud, color: "text-slate-300" };
    }

    if ([45, 48].includes(code)) {
        return { label: "Foggy", icon: CloudFog, color: "text-slate-300" };
    }

    if ([51, 53, 55, 56, 57].includes(code)) {
        return { label: "Drizzle", icon: CloudDrizzle, color: "text-[#6AA8E8]" };
    }

    if ([61, 63, 65, 66, 67, 80, 81, 82].includes(code)) {
        return { label: "Rain", icon: CloudRain, color: "text-[#6AA8E8]" };
    }

    if ([71, 73, 75, 77, 85, 86].includes(code)) {
        return { label: "Snow", icon: CloudSnow, color: "text-[#8DB9E8]" };
    }

    if ([95, 96, 99].includes(code)) {
        return { label: "Thunderstorm", icon: CloudLightning, color: "text-[#8B8DEB]" };
    }

    return { label: "Cloudy", icon: Cloud, color: "text-slate-300" };
};

const formatDay = (date: string, index: number) => {
    if (index === 0) return "Today";

    return new Date(`${date}T12:00:00`).toLocaleDateString("en-US", {
        weekday: "long",
    });
};

export default function WeatherForecast({ destination, latitude, longitude, className }: WeatherForecastProps) {
    const [weather, setWeather] = useState<WeatherDay[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const controller = new AbortController();

        const fetchWeather = async () => {
            try {
                setLoading(true);
                setError(false);

                const response = await fetch(
                    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weather_code,temperature_2m_max,temperature_2m_min&temperature_unit=celsius&timezone=auto&forecast_days=7`,
                    { signal: controller.signal }
                );

                if (!response.ok) {
                    throw new Error("Weather request failed");
                }

                const data = await response.json();

                const formattedWeather: WeatherDay[] = data.daily.time.map(
                    (date: string, index: number) => ({
                        date,
                        maxTemp: Math.round(data.daily.temperature_2m_max[index]),
                        minTemp: Math.round(data.daily.temperature_2m_min[index]),
                        weatherCode: data.daily.weather_code[index],
                    })
                );

                setWeather(formattedWeather);
            } catch (err) {
                if (err instanceof Error && err.name !== "AbortError") {
                    console.error("Weather error:", err);
                    setError(true);
                }
            } finally {
                if (!controller.signal.aborted) {
                    setLoading(false);
                }
            }
        };

        fetchWeather();

        return () => controller.abort();
    }, [latitude, longitude]);

    return (
        <section className={cn("w-[94%]  rounded-[24px] border border-slate-200 bg-white p-6 shadow-[0_2px_10px_rgba(0,0,0,0.06)]", className)}>
            <h2 className="mb-6 font-heading text-2xl font-semibold">
                Weather in {destination}
            </h2>

            {loading && (
                <div className="flex h-[166px] items-center justify-center">
                    <Loader2 size={28} className="animate-spin text-primary" />
                </div>
            )}

            {error && !loading && (
                <div className="flex h-[166px] items-center justify-center text-sm text-muted-foreground">
                    Unable to load weather data.
                </div>
            )}

            {!loading && !error && (
               <div className="w-full min-w-0 overflow-x-auto thin-scrollbar">
    <div className="flex w-max gap-4 pb-1">
        {weather.map((day, index) => {
            const info = getWeatherInfo(day.weatherCode);
            const Icon = info.icon;

            return (
                <div
                    key={day.date}
                    className="relative h-[166px] w-[194px] shrink-0 overflow-hidden rounded-[24px] border border-slate-200 bg-white px-5 py-4"
                >
                    <Icon
                        size={42}
                        strokeWidth={1.8}
                        className={cn(
                            "absolute -right-1 -top-1",
                            info.color
                        )}
                    />

                    <p className="relative z-10 text-base font-medium">
                        {formatDay(day.date, index)}
                    </p>

                    <p className="mt-3 text-2xl font-semibold">
                        {day.maxTemp}° C
                    </p>

                    <p className="mt-3 text-base font-medium">
                        {info.label}
                    </p>

                    <p className="mt-2 text-sm text-slate-400">
                        {day.minTemp}° C / {day.maxTemp}° C
                    </p>

                    <Icon
                        size={34}
                        strokeWidth={1.5}
                        className={cn(
                            "absolute -bottom-3 -left-2 opacity-70",
                            info.color
                        )}
                    />
                </div>
            );
        })}
    </div>
</div>
            )}
        </section>
    );
}