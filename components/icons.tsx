import {
  AlertTriangle,
  ArrowRight,
  ChevronLeft,
  Command,
  File,
  FileText,
  HelpCircle,
  Image,
  Loader2,
  MoreVertical,
  Pizza,
  Plus,
  Settings,
  Trash,
  User,
} from "lucide-react"
import type { Icon as LucideIcon } from "lucide-react"

export type Icon = LucideIcon

export const Icons = {
  logo: Command,
  spinner: Loader2,
  chevronLeft: ChevronLeft,
  trash: Trash,
  post: FileText,
  page: File,
  media: Image,
  settings: Settings,
  ellipsis: MoreVertical,
  add: Plus,
  warning: AlertTriangle,
  user: User,
  arrowRight: ArrowRight,
  help: HelpCircle,
  pizza: Pizza,
}
