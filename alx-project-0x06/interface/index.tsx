// Interface for Button props
export interface ButtonProps {
  buttonLabel: string;
  buttonSize?: string;
  buttonBackgroundColor?: "red" | "blue" | "orange" | "green";
  action?: () => void;
}

// Interface for Layout props
export interface LayoutProps {
  children: React.ReactNode;
}

// Interface for Page Route props
export interface PageRouteProps {
  pageRoute: string;
}
