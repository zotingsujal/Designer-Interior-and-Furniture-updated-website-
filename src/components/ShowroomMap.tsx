import React, { useState } from 'react';
import { APIProvider, Map, AdvancedMarker, Pin, InfoWindow } from '@vis.gl/react-google-maps';
import { MapPin, Navigation, Phone, MessageSquare, Clock, ExternalLink } from 'lucide-react';
import { businessInfo } from '../data/business';

// Exact coordinates for Swami Vivekanand Rd, next to BUS DEPOT, Santacruz West, Mumbai 400054
const SHOWROOM_COORDINATES = {
  lat: 19.0823377,
  lng: 72.8368545,
};

const GOOGLE_MAPS_API_KEY =
  (import.meta.env.VITE_GOOGLE_MAPS_API_KEY as string) ||
  'AIzaSyB4Ts0suRY7d5KbLp6UM5QapBvGMFF-Poc';

export const ShowroomMap: React.FC = () => {
  const [infoWindowOpen, setInfoWindowOpen] = useState(true);
  const [mapError, setMapError] = useState(false);

  return (
    <div className="w-full h-full flex flex-col bg-[#F4EFEA] border border-[#E0D7CC] overflow-hidden shadow-xs">
      {/* Top Header Card */}
      <div className="p-4 sm:p-5 bg-[#FAF9F5] border-b border-[#EAE3D9] flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#18181B] text-[#FAF9F5] flex items-center justify-center shrink-0 shadow-xs">
            <MapPin className="w-4 h-4 text-[#C5A880]" />
          </div>
          <div>
            <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#87786B] block">
              Google Maps Verified Location
            </span>
            <h4 className="font-serif text-base sm:text-lg text-[#18181B] font-medium leading-tight">
              {businessInfo.name} — Santacruz West Showroom
            </h4>
          </div>
        </div>

        <a
          href={businessInfo.googleMapsDirectionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#18181B] hover:bg-[#38332E] text-[#FAF9F5] text-xs font-semibold uppercase tracking-wider rounded-xs transition-colors shrink-0 shadow-2xs"
        >
          <Navigation className="w-3.5 h-3.5 text-[#C5A880]" />
          <span>Get Directions</span>
          <ExternalLink className="w-3 h-3 text-[#A1A1AA]" />
        </a>
      </div>

      {/* Map View Area */}
      <div className="relative w-full h-[360px] sm:h-[420px] bg-[#E8E1D7]">
        {!mapError && GOOGLE_MAPS_API_KEY ? (
          <APIProvider
            apiKey={GOOGLE_MAPS_API_KEY}
            libraries={['marker']}
            onError={() => setMapError(true)}
          >
            <Map
              mapId="DEMO_MAP_ID"
              defaultCenter={SHOWROOM_COORDINATES}
              defaultZoom={16}
              gestureHandling="cooperative"
              disableDefaultUI={false}
              internalUsageAttributionIds={['gmp_git_agentskills_v1']}
              className="w-full h-full"
            >
              <AdvancedMarker
                position={SHOWROOM_COORDINATES}
                onClick={() => setInfoWindowOpen(!infoWindowOpen)}
                title={businessInfo.name}
              >
                <Pin
                  background="#18181B"
                  borderColor="#C5A880"
                  glyphColor="#C5A880"
                  scale={1.2}
                />
              </AdvancedMarker>

              {infoWindowOpen && (
                <InfoWindow
                  position={SHOWROOM_COORDINATES}
                  onCloseClick={() => setInfoWindowOpen(false)}
                  headerContent={
                    <span className="font-serif font-bold text-sm text-[#18181B]">
                      {businessInfo.name}
                    </span>
                  }
                >
                  <div className="p-1 max-w-[240px] text-xs text-[#38332E] space-y-1.5">
                    <p className="font-medium text-[#18181B] leading-snug">
                      F-004, 1st Floor, Swami Vivekanand Rd, next to BUS DEPOT, BEST Colony, Santacruz (West), Mumbai 400054
                    </p>
                    <div className="text-[11px] text-[#71717A] flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#87786B]" />
                      <span>Mon - Sun: 10:30 AM - 8:30 PM</span>
                    </div>
                    <div className="pt-1 flex items-center gap-2">
                      <a
                        href={businessInfo.googleMapsDirectionsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[11px] font-bold text-[#18181B] hover:text-[#C5A880] underline"
                      >
                        <Navigation className="w-3 h-3" />
                        <span>Navigate in Maps</span>
                      </a>
                    </div>
                  </div>
                </InfoWindow>
              )}
            </Map>
          </APIProvider>
        ) : (
          /* Fallback Embed when API key is loading or offline */
          <iframe
            src={businessInfo.mapsEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Designer Furniture & Interior Exact Showroom Google Maps Location"
            className="w-full h-full"
          />
        )}
      </div>

      {/* Showroom Landmark & Address Footer */}
      <div className="p-4 sm:p-5 bg-[#FAF9F5] border-t border-[#EAE3D9] grid grid-cols-1 md:grid-cols-3 gap-3 text-xs text-[#5C554E]">
        <div className="flex items-start gap-2.5">
          <MapPin className="w-4 h-4 text-[#87786B] shrink-0 mt-0.5" />
          <div>
            <strong className="text-[#18181B] block font-semibold">Address:</strong>
            <span>F-004, 1st Floor, Swami Vivekanand Rd, next to BUS DEPOT, BEST Colony, Santacruz (West), Mumbai 400054</span>
          </div>
        </div>

        <div className="flex items-start gap-2.5">
          <Clock className="w-4 h-4 text-[#87786B] shrink-0 mt-0.5" />
          <div>
            <strong className="text-[#18181B] block font-semibold">Hours:</strong>
            <span>Open All 7 Days: 10:30 AM – 8:30 PM. Studio consultations by appointment.</span>
          </div>
        </div>

        <div className="flex items-center gap-3 md:justify-end pt-1 md:pt-0">
          <a
            href={businessInfo.telHref}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#FAF9F5] hover:bg-[#EAE3D9] text-[#18181B] border border-[#D9D1C5] rounded-xs font-semibold text-xs transition-colors"
          >
            <Phone className="w-3 h-3" />
            <span>Call Showroom</span>
          </a>
          <a
            href={businessInfo.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-xs font-semibold text-xs transition-colors"
          >
            <MessageSquare className="w-3 h-3 fill-current" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};
