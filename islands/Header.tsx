import { useState } from "preact/hooks";

interface HeaderProps {
  b2b_domain: string;
}

export default function Header(props: HeaderProps) {
  const b2b_domain = useState(props.b2b_domain);
  return (
    <div class="flex gap-2 w-full">
      test BIG TIME FAG TEST
      <p class="flex-grow-1 font-bold text-xl">{b2b_domain}</p>
    </div>
  );
}
