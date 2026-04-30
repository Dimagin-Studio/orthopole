import { motion } from "motion/react"

type MotionButtonProps = {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    href?: string;
    target?: string;
    rel?: string;
    type?: "submit" | "reset";
    as?: "button" | "a" | "div";
}

export default function MotionButton({
    children,
    className = "",
    onClick,
    href,
    target,
    rel,
    type,
    as = "div",
}: MotionButtonProps) {
    const MotionTag = motion[as];

    return (
        <MotionTag
            href={href}
            target={target}
            rel={rel}
            type={type}
            onClick={onClick}
            className={`transition-colors duration-300 ${className}`}
            whileHover={{ scale: 1.03, originX: 0 }}
            transition={{
                duration: 0.2,
                ease: "easeOut",
                type: "spring",
                stiffness: 160,
            }}
        >
            {children}
        </MotionTag>
    )
}