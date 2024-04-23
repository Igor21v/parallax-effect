import { memo } from "react";
import cls from "./vertical.module.scss";

interface verticalProps {}

export const vertical = memo((props: verticalProps) => {
  return <div className={cls.vertical}></div>;
});
