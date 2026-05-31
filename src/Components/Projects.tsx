import { useState } from "react";
import { PROJECTS } from "../constants";
import { styles } from "../styles";

const PROJECT_IMAGE_PATHS: Record<string, string> = {
  "Noor Time App": "/project-images/noor-time.png",
  "Project Management Dashboard": "/project-images/project-management-dashboard.png",
  "Black Box Barbershop": "/project-images/black-box-barbershop.png",
};

function ProjectManagementDashboardPreview() {
  const stats = [
    { label: "Totaal", value: 2, tone: "blue", icon: "L" },
    { label: "Actief", value: 0, tone: "green", icon: "v" },
    { label: "Afgerond", value: 0, tone: "slate", icon: "o" },
    { label: "On-hold", value: 0, tone: "orange", icon: "!" },
    { label: "Verlopen", value: 2, tone: "red", icon: "!" },
  ];

  return (
    <div className="dashboard-preview" aria-label="Project Management Dashboard preview">
      <div className="dashboard-preview__nav">
        <div className="dashboard-preview__brand">
          <span className="dashboard-preview__folder" />
          <span>Projectbeheer</span>
        </div>
        <div className="dashboard-preview__user">
          <span>AD</span>
          <div>
            <strong>Admin</strong>
            <small>Beheerder</small>
          </div>
        </div>
      </div>

      <div className="dashboard-preview__panel">
        <div>
          <h4>Dashboard</h4>
          <p>Welkom op je dashboard!</p>
        </div>
        <div className="dashboard-preview__actions">
          <span>Nieuw project maken</span>
          <span>Alle projecten</span>
          <span>Nieuwe klant maken</span>
          <span>Alle klanten</span>
        </div>
      </div>

      <div className="dashboard-preview__stats">
        {stats.map((stat) => (
          <div className="dashboard-preview__stat" key={stat.label}>
            <div className="dashboard-preview__stat-head">
              <span className={`dashboard-preview__stat-icon dashboard-preview__stat-icon--${stat.tone}`}>
                {stat.icon}
              </span>
              <strong>{stat.label}</strong>
            </div>
            <b>{stat.value}</b>
          </div>
        ))}
      </div>
    </div>
  );
}

function BlackBoxBarbershopPreview() {
  return (
    <div className="barbershop-preview" aria-label="Black Box Barbershop preview">
      <div className="barbershop-preview__shade" />
      <div className="barbershop-preview__nav">
        <div className="barbershop-preview__brand">
          <span className="barbershop-preview__logo">BB</span>
          <div>
            <strong>BLACK BOX</strong>
            <small>BARBERSHOP</small>
          </div>
        </div>
        <div className="barbershop-preview__links">
          <span>THE COLLECTIVE</span>
          <span>SERVICES</span>
          <span>ARSENAL</span>
        </div>
        <span className="barbershop-preview__contact">CONTACT</span>
      </div>
      <div className="barbershop-preview__hero">
        <span className="barbershop-preview__mark" />
        <h4>
          WELCOME TO
          <strong>BLACK BOX</strong>
        </h4>
        <span className="barbershop-preview__rule" />
        <p>MORE THAN A HAIRCUT. A BROTHERHOOD IN KOBLENZ.</p>
        <button type="button">BOOK APPOINTMENT</button>
      </div>
    </div>
  );
}

function NoorClock({ variant }: { variant: "minimal" | "ring" | "retro" | "geo" }) {
  return (
    <div className={`noor-preview__clock noor-preview__clock--${variant}`}>
      <span className="noor-preview__hand noor-preview__hand--minute" />
      <span className="noor-preview__hand noor-preview__hand--hour" />
      <span className="noor-preview__hand noor-preview__hand--second" />
      <span className="noor-preview__pin" />
      {variant === "geo" ? <span className="noor-preview__web" /> : null}
    </div>
  );
}

function NoorTimePreview() {
  const filters = ["All", "Analog", "Digital", "Quran", "Dots"];
  const clocks = [
    { label: "Minimalist", variant: "minimal" as const },
    { label: "Gradient Ring", variant: "ring" as const },
    { label: "Retro Neon", variant: "retro" as const },
    { label: "Geometric", variant: "geo" as const },
  ];

  return (
    <div className="noor-preview" aria-label="Noor Time App preview">
      <div className="noor-preview__status">
        <span>00:58</span>
        <div>
          <span className="noor-preview__bars" />
          <span className="noor-preview__wifi" />
          <span className="noor-preview__battery">15</span>
        </div>
      </div>

      <div className="noor-preview__topbar">
        <span className="noor-preview__icon noor-preview__icon--crown">W</span>
        <strong>Noor Time</strong>
        <span className="noor-preview__icon noor-preview__icon--gear">O</span>
      </div>

      <div className="noor-preview__filters">
        {filters.map((filter, index) => (
          <span className={index === 0 ? "noor-preview__filter--active" : ""} key={filter}>
            {filter}
          </span>
        ))}
      </div>

      <span className="noor-preview__arabic">bismillah</span>
      <h4>Analog</h4>

      <div className="noor-preview__grid">
        {clocks.map((clock) => (
          <div className="noor-preview__card" key={clock.label}>
            <NoorClock variant={clock.variant} />
            <small>{clock.label}</small>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProjectPreview({ title }: { title: string }) {
  if (title === "Project Management Dashboard") {
    return <ProjectManagementDashboardPreview />;
  }

  if (title === "Black Box Barbershop") {
    return <BlackBoxBarbershopPreview />;
  }

  if (title === "Noor Time App") {
    return <NoorTimePreview />;
  }

  return <span style={styles.thumbIcon}>[]</span>;
}

function ProjectThumbnail({ title }: { title: string }) {
  const [imageFailed, setImageFailed] = useState(false);
  const imagePath = PROJECT_IMAGE_PATHS[title];

  if (imagePath && !imageFailed) {
    return (
      <img
        alt={`${title} screenshot`}
        className="project-thumb__image"
        loading="lazy"
        onError={() => setImageFailed(true)}
        src={imagePath}
      />
    );
  }

  return <ProjectPreview title={title} />;
}

export function Projects() {
  return (
    <section id="projects" className="page-section" style={styles.section}>
      <div className="section-header" style={styles.sectionHeader}>
        <div>
          <h2 style={styles.sectionTitle}>Featured Projects</h2>
          <p style={styles.sectionSub}>Selected engineering achievements.</p>
        </div>
        <a href="#" style={styles.viewAll}>
          VIEW_ALL_REPOS -&gt;
        </a>
      </div>

      <div className="projects-grid" style={styles.projectsGrid}>
        {PROJECTS.map((p) => (
          <div key={p.title} style={styles.projectCard}>
            <div className="project-thumb" style={styles.projectThumb}>
              <ProjectThumbnail title={p.title} />
            </div>
            <div style={styles.projectBody}>
              <div style={styles.tagsRow}>
                {p.tags.map((tag, i) => (
                  <span
                    key={tag}
                    style={{
                      ...styles.tag,
                      borderColor: p.tagColors[i],
                      color: p.tagColors[i],
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3
                style={{
                  ...styles.projectTitle,
                  color: p.titleColor || "#E2E8F0",
                }}
              >
                {p.title}
              </h3>
              <p style={styles.projectDesc}>{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
