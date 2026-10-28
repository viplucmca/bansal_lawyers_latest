const OFFICE_MAP_EMBED_SRC =
  "https://maps.google.com/maps?q=Level%208,%20278%20Collins%20Street,%20Melbourne%20VIC%203000&t=&z=15&ie=UTF8&iwloc=&output=embed";

export function OfficeMapEmbed() {
  return (
    <div className="office-map-frame" aria-label="Map of the Bansal Lawyers Collins Street office">
      <iframe
        title="Bansal Lawyers Melbourne Office Location"
        src={OFFICE_MAP_EMBED_SRC}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
