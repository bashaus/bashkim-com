import MuiBackdrop, {
  BackdropProps as MuiBackdropProps,
} from "@mui/material/Backdrop";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

import * as S from "./styles";

export type BackdropProps = Readonly<MuiBackdropProps>;

export default function Backdrop({
  children,
  open,
  onTransitionStart,
  onTransitionEnd,
  style,
  ...props
}: BackdropProps) {
  const svgRef = useRef<SVGPathElement>(null);
  const { backgroundColor = "rgba(0, 0, 0, 0.5)", ...restStyle } = style ?? {};

  // wait until DOM has been rendered
  useEffect(() => {
    if (open) {
      gsap
        .timeline({
          onStart: onTransitionStart,
          onComplete: onTransitionEnd,
        })
        .set(svgRef.current, {
          attr: { d: "M 0 100 V 100 Q 50 100 100 100 V 100 z" },
        })
        .to(
          svgRef.current,
          {
            duration: 0.3,
            ease: "power4.in",
            attr: { d: "M 0 100 V 50 Q 50 0 100 50 V 100 z" },
          },
          0,
        )
        .to(svgRef.current, {
          duration: 0.5,
          ease: "expo",
          attr: { d: "M 0 100 V 0 Q 50 0 100 0 V 100 z" },
        });
    }

    if (!open) {
      gsap
        .timeline({
          onStart: onTransitionStart,
          onComplete: onTransitionEnd,
        })
        .set(svgRef.current, {
          attr: { d: "M 0 100 V 0 Q 50 0 100 0 V 100 z" },
        })
        .to(svgRef.current, {
          duration: 0.3,
          ease: "power4.in",
          attr: { d: "M 0 100 V 50 Q 50 0 100 50 V 100 z" },
        })
        .to(svgRef.current, {
          duration: 0.5,
          ease: "expo",
          attr: { d: "M 0 100 V 100 Q 50 100 100 100 V 100 z" },
        });
    }
  }, [open, onTransitionEnd, onTransitionStart]);

  return (
    <MuiBackdrop
      open={open}
      {...props}
      style={{ backgroundColor: "transparent", ...restStyle }}
    >
      <S.SvgContainer
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        sx={{
          color: backgroundColor,
        }}
      >
        <path
          ref={svgRef}
          vectorEffect="non-scaling-stroke"
          d="M 0 100 V 100 Q 50 100 100 100 V 100 z"
          fill="currentColor"
        />
      </S.SvgContainer>
      {backgroundColor}

      {children}
    </MuiBackdrop>
  );
}
