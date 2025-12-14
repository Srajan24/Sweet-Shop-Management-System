import { Loader2 } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    isLoading = false,
    icon: Icon,
    className,
    disabled,
    ...props
}) => {

    const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transform active:scale-[0.98]";

    const variants = {
        primary: "bg-primary text-white hover:bg-[#D99A6A] focus:ring-primary shadow-lg hover:shadow-xl dark:focus:ring-offset-white border border-transparent",
        secondary: "bg-secondary text-primary hover:bg-[#E8DCC6] focus:ring-primary shadow-sm hover:shadow-md dark:bg-[#F5F1EB] dark:text-primary dark:hover:bg-[#E8DCC6] border border-transparent",
        outline: "bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary dark:border-primary dark:text-primary dark:hover:bg-primary dark:hover:text-white",
        ghost: "bg-transparent text-[#5A4A3A] hover:bg-[#F5F1EB] dark:text-[#5A4A3A] dark:hover:bg-[#F5F1EB] focus:ring-gray-500",
        danger: "bg-red-500 text-white hover:bg-red-600 focus:ring-red-500 shadow-md hover:shadow-lg",
    };

    const sizes = {
        sm: "px-4 py-1.5 text-xs rounded-full",
        md: "px-6 py-2.5 text-sm rounded-full",
        lg: "px-8 py-4 text-base rounded-full",
        icon: "p-2 rounded-full",
    };

    return (
        <button
            className={twMerge(baseStyles, variants[variant], sizes[size], className)}
            disabled={disabled || isLoading}
            {...props}
        >
            {isLoading ? (
                <Loader2 className="w-5 h-5 animate-spin mr-2" />
            ) : Icon ? (
                <Icon className={clsx("w-5 h-5", children ? "mr-2" : "")} />
            ) : null}
            {children}
        </button>
    );
};

export default Button;
