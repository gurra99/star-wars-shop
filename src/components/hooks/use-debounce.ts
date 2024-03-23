import {useEffect, useState} from "react";

export const useDebounce = <T>(value: T, delay = 2000) => {
    const [debouncedValue, setDebouncedValue] = useState<T | null>(value);

    useEffect(() => {
        const id = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(id);
            setDebouncedValue(null);
        }
    }, [value, delay]);

    return debouncedValue;
};