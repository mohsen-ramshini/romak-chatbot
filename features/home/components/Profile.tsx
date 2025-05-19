import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "../../../components/ui/dropdown-menu"
  import { Avatar, AvatarFallback, AvatarImage } from "../../../components/ui/avatar"
  import { LogOut, Settings, User } from "lucide-react"
import { useRouter } from "next/navigation"
  
  interface ProfileProps {
    name: string
    email: string
    avatarUrl?: string
    isCollapsed: boolean
  }
  
  export const Profile = ({ name, email, avatarUrl, isCollapsed }: ProfileProps) => {
    const router = useRouter()

    const handleLogout = () => {
      // Handle logout logic here
      router.push("/")
    }
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="flex items-center gap-2 cursor-pointer">
            <Avatar className="w-9 h-9">
              <AvatarImage src={avatarUrl || "/avatars/user.png"} alt={name} />
              <AvatarFallback>{name.charAt(0)}</AvatarFallback>
            </Avatar>
            {!isCollapsed && (
              <div className="hidden sm:flex flex-col leading-tight">
                <span className="text-sm font-medium text-primary">{name}</span>
                <span className="text-xs text-muted-foreground truncate max-w-[140px]">{email}</span>
              </div>
            )}
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuLabel>
            <div className="flex flex-col">
              <span className="text-sm font-semibold">{name}</span>
              <span className="text-xs text-muted-foreground">{email}</span>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <User className="w-4 h-4 mr-2" />
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings className="w-4 h-4 mr-2" />
            Settings
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="text-red-500 hover:bg-red-50" onClick={handleLogout}>
            <LogOut className="w-4 h-4 mr-2" />
            Log out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }
  
  export default Profile
  