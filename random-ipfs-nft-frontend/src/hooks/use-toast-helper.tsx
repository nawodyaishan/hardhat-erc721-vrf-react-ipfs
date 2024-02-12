import { useToast } from '@/components/ui/use-toast.ts';
import { ToastAction } from '@/components/ui/toast.tsx';

// Interface describing the parameters that can be passed to the toast helper function.
export interface ToastParams {
  variant: 'default' | 'destructive' | null | undefined; // The visual variant of the toast.
  title?: string; // Optional: The title of the toast.
  description: string; // The main message or description of the toast.
  actionText?: string; // Optional: Text for an action button within the toast.
  onClickAction?: () => void; // Optional: onClick handler for the action button.
  altTextAction?: string; // Optional: Alternative text for the action button for accessibility.
}

/**
 * Custom hook to show toasts with optional actions.
 * This hook abstracts the common functionality for triggering toasts,
 * allowing for easier reuse and a consistent interface for showing toasts throughout the application.
 *
 * @returns A function that can be called to show a toast with the provided parameters.
 */
export const useToastHelper = () => {
  // Utilizes the useToast hook from the UI components library to get the toast function.
  const { toast } = useToast();

  // Returns a function that accepts ToastParams and shows a toast accordingly.
  return ({
    variant,
    title,
    description,
    actionText,
    onClickAction,
    altTextAction,
  }: ToastParams) => {
    // Calls the toast function with the specified parameters.
    // If actionText, altTextAction, and onClickAction are provided, it renders a ToastAction component as the action.
    toast({
      variant,
      title: title ? title : undefined, // Uses the title if provided, otherwise undefined.
      description, // The main content of the toast.
      action:
        actionText && altTextAction && onClickAction ? (
          <ToastAction onClick={onClickAction} altText={altTextAction}>
            {actionText}
          </ToastAction>
        ) : undefined, // Conditionally renders the action if all action-related parameters are provided.
    });
  };
};
