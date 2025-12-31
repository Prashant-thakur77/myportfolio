export function PTMark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 512 384"
      {...props}
    >
      <path
        fill="currentColor"
        d="M32 0h192v64H32V0ZM32 64h64v64H32V64ZM160 64h64v64h-64V64ZM32 128h384v64H32V128ZM32 192h64v192H32V192ZM224 192h64v192h-64V192Z"
      />
    </svg>
  );
}

export function getMarkSVG(color: string) {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 512 384"><path fill="${color}" d="M32 0h192v64H32V0ZM32 64h64v64H32V64ZM160 64h64v64h-64V64ZM32 128h384v64H32V128ZM32 192h64v192H32V192ZM224 192h64v192h-64V192Z"/></svg>`;
}
