import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

const Input = ({ label, icon: Icon, className, error, id, ...props }) => {
    return (
        <div className="w-full">
            {label && (
                <label htmlFor={id} className="block text-sm font-medium text-[#5A4A3A] dark:text-[#5A4A3A] mb-2">
                    {label}
                </label>
            )}
            <div className="relative">
                {Icon && (
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Icon className="h-5 w-5 text-[#5A4A3A]" />
                    </div>
                )}
                <input
                    id={id}
                    className={twMerge(
                        "block w-full rounded-xl border-[#E8DCC6] dark:border-[#E8DCC6] bg-[#FAF8F5] dark:bg-[#F5F1EB] text-accent dark:text-accent shadow-sm focus:border-primary focus:ring-primary focus:ring-2 focus:ring-opacity-20 sm:text-sm py-3 transition-colors",
                        Icon ? "pl-11" : "pl-4",
                        error ? "border-red-500 focus:border-red-500 focus:ring-red-500" : "",
                        className
                    )}
                    {...props}
                />
            </div>
            {error && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{error}</p>}
        </div>
    );
};

export default Input;
