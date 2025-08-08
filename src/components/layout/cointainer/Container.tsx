import React from "react";

interface ContainerProps {
  children: React.ReactNode; // The content that will be wrapped by the container
  className?: string; // Optional: Allows passing additional Tailwind CSS classes
}

/**
 * A reusable Container component to apply consistent max-width and horizontal padding
 * for content sections, ensuring responsiveness and readability.
 *
 * It uses Tailwind CSS classes for styling:
 * - max-w-7xl: Sets a maximum width for the content (adjust as needed, common values are lg, xl, 2xl, 7xl).
 * - mx-auto: Centers the container horizontally within its parent.
 * - px-4: Applies horizontal padding (padding-left and padding-right) for smaller screens.
 * You might adjust this to px-6 or px-8 depending on your desired spacing.
 *
 * @param {React.ReactNode} children - The content to be rendered inside the container.
 * @param {string} [className] - Optional additional Tailwind CSS classes to apply.
 */
const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div
      className={`
        max-w-7xl   /* Sets a maximum width for the content */
        mx-auto      /* Centers the container horizontally */
        px-4         /* Horizontal padding for smaller screens */
        sm:px-6      /* Increased padding on small screens and up */
        lg:px-8      /* Further increased padding on large screens and up */
        ${className || ""} /* Merges any additional classes passed in */
      `}
    >
      {children}
    </div>
  );
};

export default Container;
