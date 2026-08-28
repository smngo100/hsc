import { useLanguage } from "../context/LanguageContext";

interface DonateButtonProps {
  className?: string;
  label?: string;
}

export default function DonateButton({
  className = "",
  label,
}: DonateButtonProps) {
  const { t } = useLanguage();
  return (
    <form
      action="https://www.paypal.com/ncp/payment/8X5NLXEXKQ9PQ"
      method="post"
      target="_blank"
      className="w-full"
    >
      <button
        type="submit"
        className={`hsc-btn hsc-btn-terracotta w-full ${className}`}
      >
        {label ?? t.nav.donate}
      </button>
    </form>
  );
}

// interface DonateButtonProps {
//   className?: string;
// }

// export default function DonateButton({ className = "" }: DonateButtonProps) {
//   return (
//     <form
//       action="https://www.paypal.com/ncp/payment/8X5NLXEXKQ9PQ"
//       method="post"
//       target="_blank"
//       className="w-full"
//     >
//       <button
//         type="submit"
//         className={`hsc-btn hsc-btn-terracotta w-full ${className}`}
//       >
//         donate
//       </button>
//     </form>
//   );
// }
