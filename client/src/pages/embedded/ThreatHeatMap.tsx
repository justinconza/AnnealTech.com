import { Helmet } from "react-helmet";
import { EmbeddedWrapper } from "@/components/ui/embedded-wrapper";
import ThreatHeatMap from "@/components/tools/ThreatHeatMap";

export default function EmbeddedThreatHeatMap() {
  return (
    <>
      <Helmet>
        <title>Security Threat Heat Map | AnnealTech</title>
        <meta 
          name="description" 
          content="Visualize real-time global cyber threats with our advanced threat intelligence map powered by AlienVault OTX and other OSINT sources." 
        />
      </Helmet>
      
      <EmbeddedWrapper title="Security Threat Heat Map">
        <ThreatHeatMap />
      </EmbeddedWrapper>
    </>
  );
}