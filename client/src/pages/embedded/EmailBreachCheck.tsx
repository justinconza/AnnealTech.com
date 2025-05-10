import { Helmet } from "react-helmet";
import { EmbeddedWrapper } from "@/components/ui/embedded-wrapper";
import EmailBreachChecker from "@/components/tools/EmailBreachChecker";

export default function EmbeddedEmailBreachCheck() {
  return (
    <>
      <Helmet>
        <title>Email Breach Checker | AnnealTech</title>
        <meta 
          name="description" 
          content="Check if your email or domain has been involved in data breaches with our advanced breach detection tool." 
        />
      </Helmet>
      
      <EmbeddedWrapper title="Email & Domain Breach Checker">
        <EmailBreachChecker />
      </EmbeddedWrapper>
    </>
  );
}