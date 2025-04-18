import Image from "next/image"

// https://tabler.io/icons
type IconProps = React.HTMLAttributes<SVGElement>

export const Icons = {
  Logo: () => <Image src="/favicon.png" width={25} height={25} alt="Logo" />,
  Settings: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0,0,24,24"
      fill="currentColor"
      {...props}
    >
      <g>
        <path d="M11.42383,2c-0.244,0 -0.45414,0.17697 -0.49414,0.41797l-0.2832,1.70508c-0.48675,0.08367 -0.95731,0.21303 -1.41016,0.38086l-1.10156,-1.33594c-0.155,-0.189 -0.42472,-0.23823 -0.63672,-0.11523l-0.99609,0.57617c-0.212,0.122 -0.30475,0.37942 -0.21875,0.60742l0.60547,1.61719c-0.37543,0.31288 -0.72228,0.65972 -1.03516,1.03516l-1.61719,-0.60547c-0.228,-0.086 -0.48542,0.00675 -0.60742,0.21875l-0.57617,0.99609c-0.123,0.212 -0.07377,0.48172 0.11523,0.63672l1.33594,1.10156c-0.16783,0.45285 -0.29719,0.92341 -0.38086,1.41016l-1.70508,0.2832c-0.241,0.041 -0.41797,0.24914 -0.41797,0.49414v1.15234c0,0.244 0.17697,0.45414 0.41797,0.49414l1.70508,0.2832c0.08367,0.48675 0.21303,0.95731 0.38086,1.41016l-1.33594,1.10156c-0.189,0.155 -0.23723,0.42472 -0.11523,0.63672l0.57617,0.99609c0.122,0.212 0.37942,0.30475 0.60742,0.21875l1.61719,-0.60547c0.31288,0.37543 0.65972,0.72228 1.03516,1.03516l-0.60547,1.61719c-0.086,0.229 0.00775,0.48542 0.21875,0.60742l0.99609,0.57617c0.212,0.122 0.48172,0.07277 0.63672,-0.11523l1.09961,-1.33594c0.45337,0.16814 0.92474,0.29708 1.41211,0.38086l0.2832,1.70508c0.041,0.241 0.24914,0.41797 0.49414,0.41797h1.15234c0.244,0 0.45414,-0.17697 0.49414,-0.41797l0.2832,-1.70508c0.48675,-0.08367 0.95731,-0.21303 1.41016,-0.38086l1.10156,1.33594c0.155,0.189 0.42472,0.23723 0.63672,0.11523l0.99609,-0.57617c0.212,-0.122 0.30475,-0.37942 0.21875,-0.60742l-0.60547,-1.61719c0.37543,-0.31288 0.72228,-0.65972 1.03516,-1.03516l1.61719,0.60547c0.229,0.086 0.48542,-0.00775 0.60742,-0.21875l0.57617,-0.99609c0.122,-0.212 0.07277,-0.48172 -0.11523,-0.63672l-1.33594,-1.09961c0.16814,-0.45337 0.29708,-0.92474 0.38086,-1.41211l1.70508,-0.2832c0.241,-0.041 0.41797,-0.24914 0.41797,-0.49414v-1.15234c0,-0.244 -0.17697,-0.45414 -0.41797,-0.49414l-1.70508,-0.2832c-0.08367,-0.48675 -0.21303,-0.95731 -0.38086,-1.41016l1.33594,-1.10156c0.189,-0.155 0.23723,-0.42472 0.11523,-0.63672l-0.57617,-0.99609c-0.122,-0.212 -0.37942,-0.30475 -0.60742,-0.21875l-1.61719,0.60547c-0.31288,-0.37543 -0.65972,-0.72228 -1.03516,-1.03516l0.60547,-1.61719c0.086,-0.229 -0.00775,-0.48542 -0.21875,-0.60742l-0.99609,-0.57617c-0.212,-0.122 -0.48172,-0.07277 -0.63672,0.11523l-1.09961,1.33594c-0.45337,-0.16814 -0.92474,-0.29708 -1.41211,-0.38086l-0.2832,-1.70508c-0.041,-0.241 -0.24914,-0.41797 -0.49414,-0.41797zM11,6.08984v3.08398c-1.19786,0.42351 -1.99904,1.55565 -2,2.82617c0.00005,0.18411 0.01705,0.36783 0.05078,0.54883l-2.67187,1.54102c-0.24068,-0.65101 -0.37891,-1.35286 -0.37891,-2.08984c0,-2.98386 2.15536,-5.4362 5,-5.91016zM13,6.08984c2.84464,0.47396 5,2.9263 5,5.91016c0,0.73788 -0.13963,1.44013 -0.38086,2.0918l-2.67187,-1.54492c0.03427,-0.18029 0.05192,-0.36335 0.05273,-0.54687c-0.00178,-1.2698 -0.80282,-2.40095 -2,-2.82422zM13.94727,14.27734l2.68164,1.54883c-1.09852,1.32985 -2.76028,2.17383 -4.62891,2.17383c-1.86862,0 -3.53039,-0.84398 -4.62891,-2.17383l2.67969,-1.54687c0.54312,0.4648 1.23436,0.72038 1.94922,0.7207c0.71443,-0.00134 1.40493,-0.25759 1.94727,-0.72266z" />
      </g>
    </svg>
  ),
  LinkedIn: (props: IconProps) => (
    <svg
      viewBox="0 0 15 15"
      fill="none"
      height={24}
      width={24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2 1C1.44772 1 1 1.44772 1 2V13C1 13.5523 1.44772 14 2 14H13C13.5523 14 14 13.5523 14 13V2C14 1.44772 13.5523 1 13 1H2ZM3.05 6H4.95V12H3.05V6ZM5.075 4.005C5.075 4.59871 4.59371 5.08 4 5.08C3.4063 5.08 2.925 4.59871 2.925 4.005C2.925 3.41129 3.4063 2.93 4 2.93C4.59371 2.93 5.075 3.41129 5.075 4.005ZM12 8.35713C12 6.55208 10.8334 5.85033 9.67449 5.85033C9.29502 5.83163 8.91721 5.91119 8.57874 6.08107C8.32172 6.21007 8.05265 6.50523 7.84516 7.01853H7.79179V6.00044H6V12.0047H7.90616V8.8112C7.8786 8.48413 7.98327 8.06142 8.19741 7.80987C8.41156 7.55832 8.71789 7.49825 8.95015 7.46774H9.02258C9.62874 7.46774 10.0786 7.84301 10.0786 8.78868V12.0047H11.9847L12 8.35713Z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      ></path>
    </svg>
  ),
}
