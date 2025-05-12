import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';
import { Badge } from '@/components/ui/badge';
import { Loader2, RefreshCw, Globe, Shield, AlertTriangle } from 'lucide-react';
import * as d3 from 'd3';

interface ThreatEvent {
  id: string;
  type: string;
  severity: number;
  location: {
    country: string;
    latitude: number;
    longitude: number;
  };
  timestamp: string;
  targets: string[];
  actor: string;
  description: string;
}

interface ThreatIntelligence {
  threatEvents: ThreatEvent[];
  globalThreatLevel: number;
  topTargetedSectors: string[];
  activeThreats: string[];
  trendingThreats: string[];
}

export default function ThreatHeatMap() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [threatData, setThreatData] = useState<ThreatIntelligence | null>(null);
  const [view, setView] = useState<'map' | 'list'>('map');
  const [filter, setFilter] = useState<'recent' | 'all' | 'critical'>('recent'); // Default to recent for faster loading
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const [autoRefresh, setAutoRefresh] = useState<boolean>(false);
  const mapRef = useRef<SVGSVGElement | null>(null);
  const tooltipRef = useRef<HTMLDivElement | null>(null);
  const autoRefreshTimerRef = useRef<NodeJS.Timeout | null>(null);
  const { toast } = useToast();

  // Sample data for fallback when API fails
  const getSampleThreatData = (): ThreatIntelligence => ({
    threatEvents: [
      {
        id: "t1",
        type: "Ransomware",
        severity: 9,
        location: { country: "United States", latitude: 37.7749, longitude: -122.4194 },
        timestamp: new Date(Date.now() - 1000 * 60 * 60).toISOString(),
        targets: ["Healthcare", "Finance"],
        actor: "BlackCat",
        description: "Ransomware attack targeting hospital systems in Western US"
      },
      {
        id: "t2",
        type: "DDoS",
        severity: 7,
        location: { country: "Germany", latitude: 52.5200, longitude: 13.4050 },
        timestamp: new Date(Date.now() - 1000 * 60 * 30).toISOString(),
        targets: ["Government", "Banking"],
        actor: "Anonymous",
        description: "Distributed denial-of-service attack on banking infrastructure"
      },
      {
        id: "t3",
        type: "Phishing",
        severity: 6,
        location: { country: "Brazil", latitude: -23.5505, longitude: -46.6333 },
        timestamp: new Date(Date.now() - 1000 * 60 * 120).toISOString(),
        targets: ["Retail", "E-commerce"],
        actor: "FIN7",
        description: "Large-scale credential harvesting campaign targeting online retailers"
      },
      {
        id: "t4",
        type: "SQL Injection",
        severity: 8,
        location: { country: "Japan", latitude: 35.6762, longitude: 139.6503 },
        timestamp: new Date(Date.now() - 1000 * 60 * 180).toISOString(),
        targets: ["Banking", "Finance"],
        actor: "Lazarus Group",
        description: "Database breach affecting customer financial records"
      },
      {
        id: "t5",
        type: "Zero-day Exploit",
        severity: 9,
        location: { country: "United Kingdom", latitude: 51.5074, longitude: -0.1278 },
        timestamp: new Date(Date.now() - 1000 * 60 * 45).toISOString(),
        targets: ["Defense", "Aerospace"],
        actor: "APT29",
        description: "Targeted attack exploiting previously unknown vulnerability in VPN software"
      },
    ],
    globalThreatLevel: 7,
    topTargetedSectors: ["Healthcare", "Finance", "Government", "Energy", "Retail"],
    activeThreats: ["Ransomware", "Phishing", "Zero-day Exploits", "Supply Chain Attacks", "DDoS", "Data Exfiltration"],
    trendingThreats: ["IoT Malware", "Double Extortion Ransomware", "Cloud Vulnerabilities", "API Attacks"]
  });

  const fetchThreatData = async (showToast = true) => {
    try {
      setLoading(true);
      setError(null);
      // Add a timeout to prevent indefinite loading
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 15000); // 15-second timeout
      
      try {
        const data = await apiRequest('/api/tools/threat-intelligence', { signal: controller.signal });
        clearTimeout(timeoutId);
        setThreatData(data as ThreatIntelligence);
        setLastUpdated(new Date());
        
        if (showToast) {
          toast({
            title: 'Data Updated',
            description: 'Threat intelligence data has been refreshed.',
          });
        }
      } catch (fetchError: any) {
        clearTimeout(timeoutId);
        console.error('Error fetching threat intelligence:', fetchError);
        
        // Fall back to sample data
        setThreatData(getSampleThreatData());
        setLastUpdated(new Date());
        setError("Using visualization demo mode - actual threat data unavailable");
        
        if (showToast) {
          toast({
            title: 'Using Demo Mode',
            description: 'Unable to fetch live threat data. Using demonstration mode instead.',
            variant: 'default',
          });
        }
      }
    } catch (error) {
      console.error('Error in threat data handling:', error);
      setError("Failed to display threat data");
      toast({
        title: 'Error',
        description: 'Failed to display threat intelligence data. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  // Setup auto-refresh functionality
  useEffect(() => {
    if (autoRefresh) {
      // Refresh every 5 minutes
      autoRefreshTimerRef.current = setInterval(() => {
        fetchThreatData(false);
      }, 5 * 60 * 1000);
      
      toast({
        title: 'Auto-Refresh Enabled',
        description: 'Threat data will refresh every 5 minutes.',
      });
    } else if (autoRefreshTimerRef.current) {
      clearInterval(autoRefreshTimerRef.current);
      autoRefreshTimerRef.current = null;
    }
    
    return () => {
      if (autoRefreshTimerRef.current) {
        clearInterval(autoRefreshTimerRef.current);
      }
    };
  }, [autoRefresh]);

  // Initial data fetch
  useEffect(() => {
    fetchThreatData(false);
  }, []);

  useEffect(() => {
    if (threatData && mapRef.current && view === 'map') {
      renderWorldMap();
    }
  }, [threatData, view, filter]);

  const renderWorldMap = () => {
    if (!mapRef.current || !threatData) return;

    const svg = d3.select(mapRef.current);
    svg.selectAll('*').remove();

    const width = 800;
    const height = 450;
    
    // Create a projection
    const projection = d3.geoNaturalEarth1()
      .scale(150)
      .translate([width / 2, height / 2]);
    
    // Create a path generator
    const path = d3.geoPath().projection(projection);
    
    // Create a group for the map
    const g = svg.append('g');
    
    // Define world map data - we'll use a simplified placeholder
    g.append('path')
      .attr('d', path({ type: 'Sphere' } as d3.GeoSphere) as string)
      .attr('fill', '#f0f0f0')
      .attr('stroke', '#ccc')
      .attr('stroke-width', 1);
    
    // Add grid lines
    const graticule = d3.geoGraticule();
    g.append('path')
      .datum(graticule() as d3.GeoPermissibleObjects)
      .attr('d', path as unknown as string)
      .attr('fill', 'none')
      .attr('stroke', '#ddd')
      .attr('stroke-width', 0.5);
    
    // Filter threat events based on the current filter
    let filteredEvents = threatData.threatEvents;
    if (filter === 'critical') {
      filteredEvents = threatData.threatEvents.filter(event => event.severity >= 7);
    } else if (filter === 'recent') {
      // Get events from the last 6 hours
      const sixHoursAgo = new Date(Date.now() - 6 * 60 * 60 * 1000);
      filteredEvents = threatData.threatEvents.filter(event => new Date(event.timestamp) > sixHoursAgo);
    }
    
    // Add threat points
    g.selectAll('circle')
      .data(filteredEvents)
      .enter()
      .append('circle')
      .attr('cx', (d: ThreatEvent) => {
        const coords = projection([d.location.longitude, d.location.latitude]);
        return coords ? coords[0] : 0;
      })
      .attr('cy', (d: ThreatEvent) => {
        const coords = projection([d.location.longitude, d.location.latitude]);
        return coords ? coords[1] : 0;
      })
      .attr('r', (d: ThreatEvent) => Math.min(Math.max(d.severity * 1.2, 3), 10))
      .attr('fill', (d: ThreatEvent) => {
        // Color based on severity
        if (d.severity >= 8) return 'rgba(220, 38, 38, 0.7)'; // High severity
        if (d.severity >= 5) return 'rgba(234, 179, 8, 0.7)';  // Medium severity
        return 'rgba(34, 197, 94, 0.7)';  // Low severity
      })
      .attr('stroke', (d: ThreatEvent) => {
        if (d.severity >= 8) return '#dc2626'; // High severity
        if (d.severity >= 5) return '#eab308';  // Medium severity
        return '#22c55e';  // Low severity
      })
      .attr('stroke-width', 1)
      .attr('class', 'threat-point')
      .on('mouseover', function(event: MouseEvent, d: ThreatEvent) {
        if (!tooltipRef.current) return;
        
        const tooltip = d3.select(tooltipRef.current);
        tooltip.style('display', 'block')
          .style('left', `${event.pageX + 15}px`)
          .style('top', `${event.pageY - 30}px`);
        
        tooltip.html(`
          <div>
            <div class="font-bold">${d.type} Attack</div>
            <div>Severity: ${d.severity}/10</div>
            <div>Location: ${d.location.country}</div>
            <div>Actor: ${d.actor}</div>
            <div class="text-xs mt-1">${d.description}</div>
          </div>
        `);
      })
      .on('mouseout', function() {
        if (!tooltipRef.current) return;
        d3.select(tooltipRef.current).style('display', 'none');
      });
    
    // Add zoom functionality
    const zoom = d3.zoom<SVGSVGElement, unknown>()
      .scaleExtent([1, 8])
      .on('zoom', (event: d3.D3ZoomEvent<SVGSVGElement, unknown>) => {
        g.attr('transform', event.transform.toString());
      });
    
    svg.call(zoom);
  };

  const filteredEvents = () => {
    if (!threatData) return [];
    
    let events = threatData.threatEvents;
    
    if (filter === 'critical') {
      events = events.filter(event => event.severity >= 7);
    } else if (filter === 'recent') {
      // Get events from the last 6 hours
      const sixHoursAgo = new Date(Date.now() - 6 * 60 * 60 * 1000);
      events = events.filter(event => new Date(event.timestamp) > sixHoursAgo);
    }
    
    // Sort by severity (highest first)
    return events.sort((a, b) => b.severity - a.severity);
  };

  const getSeverityColor = (severity: number) => {
    if (severity >= 8) return 'bg-red-500';
    if (severity >= 5) return 'bg-amber-500';
    return 'bg-green-500';
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString();
  };

  return (
    <div className="space-y-6">
      <Card className="border-accent/20">
        <CardHeader className="pb-4">
          <div className="flex justify-between items-center">
            <div>
              <CardTitle className="text-xl font-heading text-[#073660]">Real-time Security Threat Heat Map</CardTitle>
              <CardDescription className="text-slate-900">
                Live cybersecurity threat intelligence from OSINT sources
              </CardDescription>
              {lastUpdated && (
                <p className="text-xs text-slate-800 mt-1">
                  Last updated: {lastUpdated.toLocaleTimeString()} ({
                    Math.floor((new Date().getTime() - lastUpdated.getTime()) / 60000) === 0 
                      ? 'just now' 
                      : `${Math.floor((new Date().getTime() - lastUpdated.getTime()) / 60000)} min ago`
                  })
                </p>
              )}
            </div>
            <div className="flex gap-2">
              <div className="flex items-center mr-2">
                <label className="text-xs flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    className="mr-1.5 h-3 w-3 rounded"
                    checked={autoRefresh}
                    onChange={(e) => setAutoRefresh(e.target.checked)}
                  />
                  <span>Auto-refresh</span>
                </label>
              </div>
              <Button 
                variant="outline" 
                size="sm" 
                className="border-accent/20 hover-lift"
                onClick={(e) => {
                  e.preventDefault();
                  fetchThreatData(true);
                }}
                disabled={loading}
              >
                {loading ? <Loader2 className="h-4 w-4 mr-1 animate-spin" /> : <RefreshCw className="h-4 w-4 mr-1" />}
                Refresh
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pb-2">
          {threatData ? (
            <div className="space-y-6">
              <div className="flex flex-wrap justify-between items-center gap-4">
                <div className="flex items-center">
                  <div className="text-sm font-medium mr-3">Global Threat Level:</div>
                  <div className="flex items-center">
                    <div className={`h-3 w-16 rounded-full ${
                      threatData.globalThreatLevel >= 7 ? 'bg-red-500' :
                      threatData.globalThreatLevel >= 4 ? 'bg-amber-500' : 'bg-green-500'
                    }`}></div>
                    <span className="ml-2 font-bold">{threatData.globalThreatLevel}/10</span>
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <Select value={filter} onValueChange={(value) => setFilter(value as any)}>
                    <SelectTrigger className="w-[160px] bg-slate border-accent/20">
                      <SelectValue placeholder="Filter Threats" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Threats</SelectItem>
                      <SelectItem value="critical">Critical Only</SelectItem>
                      <SelectItem value="recent">Recent (6h)</SelectItem>
                    </SelectContent>
                  </Select>
                  
                  <Tabs value={view} onValueChange={(value) => setView(value as any)}>
                    <TabsList>
                      <TabsTrigger value="map">Map View</TabsTrigger>
                      <TabsTrigger value="list">List View</TabsTrigger>
                    </TabsList>
                  </Tabs>
                </div>
              </div>
              
              {error && (
                <div className="mb-4 p-2 bg-yellow-500/10 border border-yellow-500/30 rounded-md text-sm text-yellow-200 flex items-center">
                  <AlertTriangle className="h-4 w-4 mr-2 text-yellow-500" />
                  {error}
                </div>
              )}
              
              <div>
                {view === 'map' ? (
                  <div className="relative">
                    <svg
                      ref={mapRef}
                      width="100%"
                      height="450"
                      className="rounded-lg border border-border bg-slate"
                    ></svg>
                    <div
                      ref={tooltipRef}
                      className="absolute hidden bg-slate-darkest text-white p-2 rounded shadow-lg text-sm z-10 max-w-xs pointer-events-none"
                      style={{ display: 'none' }}
                    ></div>
                  </div>
                ) : (
                  <div className="bg-slate rounded-lg border border-border h-[450px] overflow-auto p-4">
                    <div className="space-y-4">
                      {filteredEvents().map(event => (
                        <div key={event.id} className="border-b border-border pb-3 last:border-0">
                          <div className="flex justify-between items-start">
                            <div className="flex items-center">
                              <div className={`w-2 h-full mr-2 ${getSeverityColor(event.severity)}`}></div>
                              <div>
                                <div className="font-semibold">{event.type} Attack</div>
                                <div className="text-sm text-slate-800">
                                  <span className="font-medium">{event.location.country}</span> • {formatDate(event.timestamp)}
                                </div>
                              </div>
                            </div>
                            <Badge variant={event.severity >= 7 ? 'destructive' : 'outline'}>
                              Severity: {event.severity}/10
                            </Badge>
                          </div>
                          <div className="mt-2 text-sm">{event.description}</div>
                          <div className="mt-2 text-xs">
                            <span className="text-slate-800 font-medium">Targets:</span>{' '}
                            {event.targets.map((target, idx) => (
                              <span 
                                key={idx} 
                                className="inline-block bg-accent/10 text-accent px-2 py-0.5 rounded-full text-xs mr-1 mb-1"
                              >
                                {target}
                              </span>
                            ))}
                          </div>
                          <div className="mt-1 text-xs text-slate-800">
                            <span>Actor: {event.actor}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-slate rounded-lg p-3 border border-border">
                  <h4 className="text-sm font-medium mb-2 flex items-center">
                    <AlertTriangle className="h-4 w-4 mr-2 text-accent" />
                    Active Threats
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {threatData.activeThreats.map((threat, idx) => (
                      <span 
                        key={idx} 
                        className="inline-block bg-accent/10 text-accent px-2 py-1 rounded-full text-xs"
                      >
                        {threat}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="bg-slate rounded-lg p-3 border border-border">
                  <h4 className="text-sm font-medium mb-2 flex items-center">
                    <Shield className="h-4 w-4 mr-2 text-amber-500" />
                    Trending Threats
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {threatData.trendingThreats.map((threat, idx) => (
                      <span 
                        key={idx} 
                        className="inline-block bg-amber-500/10 text-amber-500 px-2 py-1 rounded-full text-xs"
                      >
                        {threat}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="bg-slate rounded-lg p-3 border border-border">
                  <h4 className="text-sm font-medium mb-2 flex items-center">
                    <Globe className="h-4 w-4 mr-2 text-red-500" />
                    Top Targeted Sectors
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {threatData.topTargetedSectors.map((sector, idx) => (
                      <span 
                        key={idx} 
                        className="inline-block bg-red-500/10 text-red-500 px-2 py-1 rounded-full text-xs"
                      >
                        {sector}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="h-[450px] flex items-center justify-center">
              <div className="text-center">
                <Loader2 className="h-10 w-10 animate-spin mx-auto text-accent" />
                <p className="mt-4 text-slate-800">
                  Loading real-time threat intelligence data...
                </p>
              </div>
            </div>
          )}
        </CardContent>
        <CardFooter className="pt-2">
          <p className="text-xs text-slate-800">
            Data refreshed: {threatData ? new Date().toLocaleString() : '-'} • Data sources include AlienVault OTX, URLhaus, and AbuseIPDB
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}