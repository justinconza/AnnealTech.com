import { Helmet } from "react-helmet";
import { EmbeddedWrapper } from "@/components/ui/embedded-wrapper";
import SecurityGapAnalysis from "@/components/tools/SecurityGapAnalysis";

export default function EmbeddedSecurityGapAnalysis() {
  return (
    <>
      <Helmet>
        <title>AI Security Gap Analysis | AnnealTech</title>
        <meta 
          name="description" 
          content="Get a comprehensive analysis of your organization's security gaps with AI-powered recommendations and actionable insights." 
        />
      </Helmet>
      
      <EmbeddedWrapper title="AI Security Gap Analysis">
        <SecurityGapAnalysis />
      </EmbeddedWrapper>
    </>
  );
}