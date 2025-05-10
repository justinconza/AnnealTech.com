import { Helmet } from "react-helmet";
import { EmbeddedWrapper } from "@/components/ui/embedded-wrapper";
import QRCodeSecurityForm from "@/components/tools/QRCodeSecurityForm";

export default function EmbeddedQRCodeSecurity() {
  return (
    <>
      <Helmet>
        <title>QR Code Security Analyzer | AnnealTech</title>
        <meta 
          name="description" 
          content="Analyze QR code URLs for security threats, malicious patterns, and domain reputation, all in a quick, easy-to-use tool." 
        />
      </Helmet>
      
      <EmbeddedWrapper title="QR Code Security Analyzer">
        <QRCodeSecurityForm onClose={() => {}} />
      </EmbeddedWrapper>
    </>
  );
}