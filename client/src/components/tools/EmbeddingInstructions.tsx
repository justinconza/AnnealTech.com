import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy, ExternalLink } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface EmbeddingInstructionsProps {
  toolName: string;
  toolPath: string;
  recommendedWidth?: number;
  recommendedHeight?: number;
}

export function EmbeddingInstructions({
  toolName,
  toolPath,
  recommendedWidth = 600,
  recommendedHeight = 650,
}: EmbeddingInstructionsProps) {
  // Build the iframe URL using window.location to get the base URL
  const baseUrl = typeof window !== 'undefined' 
    ? `${window.location.protocol}//${window.location.host}`
    : 'https://your-site.com';
  
  const iframeUrl = `${baseUrl}/embedded/${toolPath}`;
  
  const iframeCode = `<iframe
  src="${iframeUrl}"
  width="${recommendedWidth}"
  height="${recommendedHeight}"
  frameborder="0"
  style="border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);"
  title="${toolName} - Powered by AnnealTech"
  allow="clipboard-write"
></iframe>`;

  const wixCode = `// Add this code to a Wix Code Element on your page
$w.onReady(function () {
  // Get reference to the HTML component where you want to embed the tool
  const htmlComponent = $w("#html1"); // Replace with your actual HTML component ID
  
  // Set the HTML content - the iframe that loads our tool
  htmlComponent.postMessage(\`${iframeCode}\`);
});`;

  return (
    <div className="space-y-6 mt-6">
      <div>
        <h3 className="text-lg font-semibold mb-2">Embed {toolName} on Your Website</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Add this security tool to your website by copying and pasting the code below.
        </p>
        
        <div className="space-y-6">
          <Card className="p-4 bg-background">
            <h4 className="text-sm font-medium mb-3">Standard HTML Iframe</h4>
            <div className="relative">
              <SyntaxHighlighter
                language="html"
                style={dracula}
                showLineNumbers={false}
                wrapLongLines
              >
                {iframeCode}
              </SyntaxHighlighter>
              <Button
                size="sm"
                variant="ghost"
                className="absolute top-2 right-2 h-8 w-8 p-0"
                onClick={() => {
                  navigator.clipboard.writeText(iframeCode);
                  toast({
                    description: "HTML iframe code copied to clipboard!",
                    duration: 2000,
                  });
                }}
              >
                <Copy className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex justify-end mt-2">
              <Button 
                variant="link" 
                size="sm" 
                className="text-xs"
                onClick={() => window.open(iframeUrl, '_blank')}
              >
                <ExternalLink className="h-3 w-3 mr-1" />
                Preview Tool
              </Button>
            </div>
          </Card>
          
          <Card className="p-4 bg-background">
            <h4 className="text-sm font-medium mb-3">Wix Website Integration</h4>
            <div className="relative">
              <SyntaxHighlighter
                language="javascript"
                style={dracula}
                showLineNumbers={false}
                wrapLongLines
              >
                {wixCode}
              </SyntaxHighlighter>
              <Button
                size="sm"
                variant="ghost"
                className="absolute top-2 right-2 h-8 w-8 p-0"
                onClick={() => {
                  navigator.clipboard.writeText(wixCode);
                  toast({
                    description: "Wix integration code copied to clipboard!",
                    duration: 2000,
                  });
                }}
              >
                <Copy className="h-4 w-4" />
              </Button>
            </div>
            <div className="mt-3">
              <ol className="text-xs space-y-1 text-muted-foreground list-decimal pl-5">
                <li>In your Wix Editor, add an HTML component to your page</li>
                <li>Click "Dev Mode" on the HTML component</li>
                <li>Paste this code into the code editor</li>
                <li>Adjust the HTML component ID (#html1) to match your component's ID</li>
                <li>Save and publish your site</li>
              </ol>
            </div>
          </Card>
        </div>
      </div>
      
      <div className="border-t pt-4 text-xs text-muted-foreground">
        <h4 className="font-medium mb-1">Advanced Configuration</h4>
        <p className="mb-2">
          You can customize the iframe dimensions by adjusting the width and height values in the code.
          The recommended size for this tool is {recommendedWidth}px × {recommendedHeight}px.
        </p>
        <p>
          Need help? <a href="/contact" className="text-accent hover:underline">Contact our support team</a>.
        </p>
      </div>
    </div>
  );
}