import { SignUp } from "@clerk/nextjs";
 
export default function Page() {
  return <SignUp  afterSignOutUrl={'/'}  fallbackRedirectUrl={'/dashboard'}/>;
}