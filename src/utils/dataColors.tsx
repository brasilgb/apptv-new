export const colorProgress = ((value: any) => {
    if (value <= 90) return "#DC2626";
    if (value <= 98) return "#FB923C";
    if (value > 90) return "#A7C414";
});

export const colorKpi = ((value: any) => {
    if (value <= 90) return "text-red-600";
    if (value <= 98) return "text-orange-400";
    if (value > 90) return "text-solar-gray-light";
});