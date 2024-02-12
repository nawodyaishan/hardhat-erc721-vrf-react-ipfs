import { useToast } from '@/components/ui/use-toast.ts';
import { ToastAction } from '@/components/ui/toast.tsx';

export interface ToastParams {
  variant: 'default' | 'destructive' | null | undefined;
  title: string;
  description: string;
  actionText?: string;
  onClickAction?: () => void;
  altTextAction?: string;
}

export const useToastHelper = () => {
  const { toast } = useToast();

  return ({
    variant,
    title,
    description,
    actionText,
    onClickAction,
    altTextAction,
  }: ToastParams) => {
    toast({
      variant,
      title,
      description,
      action:
        actionText && altTextAction && onClickAction ? (
          <ToastAction onClick={onClickAction} altText={altTextAction}>
            {actionText}
          </ToastAction>
        ) : undefined,
    });
  };
};
