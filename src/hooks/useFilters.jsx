import { useState } from "react";

const useFilters = () => {
    const [filters, setFilters] = useState({});

    const updateFilter = (paramName, values) => {
        setFilters((prev) => ({
            ...prev,
            [paramName]: values.length ? values : undefined,
        }));
    };

    return { filters, updateFilter };
};

export default useFilters;
