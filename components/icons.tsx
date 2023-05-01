import {
    AlertTriangle,
    ArrowRight,
    Check,
    ChevronLeft,
    ChevronRight,
    Command,
    CreditCard,
    File,
    FileText,
    HelpCircle,
    Image,
    Laptop,
    Loader2,
    LucideProps,
    Moon,
    MoreVertical,
    Download,
    Pizza,
    Plus,
    Settings,
    SunMedium,
    Trash,
    Twitter,
    FormInput,
    User,
    X,
    ImagePlus,
    Terminal,
    type Icon as LucideIcon,
    MessageSquare,
} from "lucide-react"

export type Icon = LucideIcon

export const Icons = {
    formInput: FormInput,
    logo: ({ ...props }: LucideProps) => (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path d="M0 1.96701e-07H3V3H0V1.96701e-07Z" fill="currentColor" />
            <path d="M3 1.96701e-07H6V3H3V1.96701e-07Z" fill="currentColor" />
            <path d="M0 3H3V6H0V3Z" fill="currentColor" />
            <path d="M0 6H3V9H0V6Z" fill="currentColor" />
            <path d="M3 3H6V6H3V3Z" fill="currentColor" />
            <path d="M6 1.96701e-07H9V3H6V1.96701e-07Z" fill="currentColor" />
            <path
                d="M24 3.93402e-07V3H21V2.62268e-07L24 3.93402e-07Z"
                fill="currentColor"
            />
            <path d="M24 3V6L21 6V3H24Z" fill="currentColor" />
            <path
                d="M21 2.62268e-07V3L18 3V1.31134e-07L21 2.62268e-07Z"
                fill="currentColor"
            />
            <path
                d="M18 1.31134e-07V3H15V0L18 1.31134e-07Z"
                fill="currentColor"
            />
            <path d="M21 3V6H18V3L21 3Z" fill="currentColor" />
            <path d="M24 6V9L21 9V6L24 6Z" fill="currentColor" />
            <path d="M0 24L3.57745e-08 21H3V24H0Z" fill="currentColor" />
            <path
                d="M3.57745e-08 21L7.1549e-08 18H3V21H3.57745e-08Z"
                fill="currentColor"
            />
            <path d="M3 24V21H6V24H3Z" fill="currentColor" />
            <path d="M6 24V21H9V24H6Z" fill="currentColor" />
            <path d="M3 21V18H6V21H3Z" fill="currentColor" />
            <path
                d="M7.1549e-08 18L1.07324e-07 15H3V18H7.1549e-08Z"
                fill="currentColor"
            />
            <path d="M24 24H21V21H24V24Z" fill="currentColor" />
            <path d="M21 24H18V21H21V24Z" fill="currentColor" />
            <path d="M24 21H21V18H24V21Z" fill="currentColor" />
            <path d="M24 18H21L21 15H24V18Z" fill="currentColor" />
            <path d="M21 21H18V18H21V21Z" fill="currentColor" />
            <path d="M18 24H15V21H18V24Z" fill="currentColor" />
            <path d="M9 12H12V15H9V12Z" fill="currentColor" />
            <path d="M12 9H15V12H12V9Z" fill="currentColor" />
            <path d="M9 9H12V12H9V9Z" fill="currentColor" />
            <path d="M12 12H15V15H12V12Z" fill="currentColor" />
        </svg>
    ),
    close: X,
    spinner: Loader2,
    chevronLeft: ChevronLeft,
    chevronRight: ChevronRight,
    trash: Trash,
    post: FileText,
    page: File,
    media: Image,
    settings: Settings,
    billing: CreditCard,
    ellipsis: MoreVertical,
    add: Plus,
    warning: AlertTriangle,
    user: User,
    arrowRight: ArrowRight,
    help: HelpCircle,
    pizza: Pizza,
    sun: SunMedium,
    imagePlus: ImagePlus,
    moon: Moon,
    laptop: Laptop,
    download: Download,
    gitHub: ({ ...props }: LucideProps) => (
        <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="github"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 496 512"
            {...props}
        >
            <path
                fill="currentColor"
                d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
            ></path>
        </svg>
    ),
    google: ({ ...props }: LucideProps) => (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="705.6"
            height="720"
            viewBox="0 0 186.69 190.5"
        >
            <g transform="translate(1184.583 765.171)">
                <path
                    clip-path="none"
                    mask="none"
                    d="M-1089.333-687.239v36.888h51.262c-2.251 11.863-9.006 21.908-19.137 28.662l30.913 23.986c18.011-16.625 28.402-41.044 28.402-70.052 0-6.754-.606-13.249-1.732-19.483z"
                    fill="#4285f4"
                />
                <path
                    clip-path="none"
                    mask="none"
                    d="M-1142.714-651.791l-6.972 5.337-24.679 19.223h0c15.673 31.086 47.796 52.561 85.03 52.561 25.717 0 47.278-8.486 63.038-23.033l-30.913-23.986c-8.486 5.715-19.31 9.179-32.125 9.179-24.765 0-45.806-16.712-53.34-39.226z"
                    fill="#34a853"
                />
                <path
                    clip-path="none"
                    mask="none"
                    d="M-1174.365-712.61c-6.494 12.815-10.217 27.276-10.217 42.689s3.723 29.874 10.217 42.689c0 .086 31.693-24.592 31.693-24.592-1.905-5.715-3.031-11.776-3.031-18.098s1.126-12.383 3.031-18.098z"
                    fill="#fbbc05"
                />
                <path
                    d="M-1089.333-727.244c14.028 0 26.497 4.849 36.455 14.201l27.276-27.276c-16.539-15.413-38.013-24.852-63.731-24.852-37.234 0-69.359 21.388-85.032 52.561l31.692 24.592c7.533-22.514 28.575-39.226 53.34-39.226z"
                    fill="#ea4335"
                    clip-path="none"
                    mask="none"
                />
            </g>
        </svg>
    ),
    terminal: Terminal,
    twitter: Twitter,
    check: Check,
}
