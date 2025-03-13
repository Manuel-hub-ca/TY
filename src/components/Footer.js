// import Link from "next/link";


// export default function Footer(){
//   return(
//     <footer className="text-center  text-sm text-gray-500 py-6 bg-gray-900">
//       <div className="text-">
//       &copy; 2025 All Rights Reserved | T&Y Electrique |
//     <Link href="/privacy" className="text-yellow-400 ml-2 hover:text-white transition">
//       Privacy Policy
//     </Link>
//       </div>

//   </footer>
//   )
// }
import Link from "next/link";
import { useIntl } from "react-intl";
export default function Footer() {
  const intl = useIntl()
  return (
    <footer className="w-full text-center text-xs sm:text-sm text-gray-500 py-6 bg-gray-900 flex flex-col items-center justify-center px-2">
      <div className="w-full text-center whitespace-normal break-words leading-tight">
        &copy; 2025 {intl.formatMessage({id:"allRightsReserved"})} | T&Y Electrique |  
        <Link href="/privacy_policy" className="text-yellow-400 ml-2 hover:text-white transition">
          {intl.formatMessage({id:"privacyPolicy"})}
        </Link>
      </div>
    </footer>
  );
}
