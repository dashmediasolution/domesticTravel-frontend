"use client";

import {
    useQuery,
    useMutation,
} from "@tanstack/react-query";

export const useApiQuery = (queryKey:any, queryFn:any, options = {}) => {
    return useQuery({
        queryKey,
        queryFn,
        ...options,
    });
};

export const useApiMutation = (mutationFn:any, options = {}) => {
    return useMutation({
        mutationFn,
        ...options,
    });
};