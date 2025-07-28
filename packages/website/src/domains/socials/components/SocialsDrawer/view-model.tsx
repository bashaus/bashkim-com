import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export const useSocialsDrawerViewModel = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  const handleExited = useCallback(() => {
    router.back();
  }, [router]);

  return {
    open,
    handleClose,
    handleExited,
  };
};
