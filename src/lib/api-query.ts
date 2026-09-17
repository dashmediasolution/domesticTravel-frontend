"use client";

import {
    useQuery,
    useMutation,
    type QueryFunction,
    type QueryKey,
    type UseMutationOptions,
    type UseQueryOptions,
} from "@tanstack/react-query";

export const useApiQuery = <
    TData = unknown,
    TError = Error,
    TQueryKey extends QueryKey = QueryKey,
>(
    queryKey: TQueryKey,
    queryFn: QueryFunction<TData, TQueryKey>,
    options?: Omit<
        UseQueryOptions<TData, TError, TData, TQueryKey>,
        "queryKey" | "queryFn"
    >,
) => {
    return useQuery({
        queryKey,
        queryFn,
        ...options,
    });
};

export const useApiMutation = <TData = unknown, TError = Error, TVariables = void, TContext = unknown>(
    mutationFn: UseMutationOptions<TData, TError, TVariables, TContext>["mutationFn"],
    options?: Omit<
        UseMutationOptions<TData, TError, TVariables, TContext>,
        "mutationFn"
    >,
) => {
    return useMutation({
        mutationFn,
        ...options,
    });
};