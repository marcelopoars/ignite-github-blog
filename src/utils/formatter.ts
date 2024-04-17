import { formatDistanceToNow as formatDistanceToNowDateFns } from "date-fns";
import { ptBR } from "date-fns/locale";

export const formatDistanceToNow = (startDate: string) => {
  if (!startDate) return;

  return formatDistanceToNowDateFns(startDate, {
    addSuffix: true,
    locale: ptBR,
  });
};
