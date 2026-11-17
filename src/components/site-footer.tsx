import { profile } from "@/content/profile";

export function SiteFooter() {
  return (
    <footer className="border-t border-lilac/30">
      <div className="shell flex flex-col gap-2 py-8 text-sm text-quiet sm:flex-row sm:items-center sm:justify-between">
        <p>
          {profile.name} · {profile.location}
        </p>
        <p>{profile.role}</p>
      </div>
    </footer>
  );
}
